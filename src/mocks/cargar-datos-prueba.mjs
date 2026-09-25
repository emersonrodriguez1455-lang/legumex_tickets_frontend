// Carga datos de prueba en la base de datos real usando la API (no toca la base directamente).
// Uso:
//   ADMIN_EMAIL=admin@legumex.com ADMIN_PASSWORD=secret123 npm run datos-prueba
// En Windows (PowerShell):
//   $env:ADMIN_EMAIL="admin@legumex.com"; $env:ADMIN_PASSWORD="secret123"; npm run datos-prueba
// Opcional: API_URL (por defecto http://192.168.10.209:8001/api)
//
// Crea: 4 categorías, 2 admins y 3 usuarios de prueba (contraseña Prueba1234), 8 tickets con
// asignaciones, comentarios e historial, y cierra 2. Se puede correr más de una vez: lo que ya existe
// (mismo correo o mismo nombre de categoría) no se duplica.

const API = (process.env.API_URL || 'http://192.168.10.209:8001/api').replace(/\/$/, '');
const ADMIN_EMAIL = process.env.ADMIN_EMAIL, ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const PWD = 'Prueba1234';
if (!ADMIN_EMAIL || !ADMIN_PASSWORD) { console.error('Falta ADMIN_EMAIL y ADMIN_PASSWORD (un admin que ya exista).'); process.exit(1); }

async function call(token, method, path, body) {
  const res = await fetch(API + path, { method, headers: { Accept: 'application/json', 'Content-Type': 'application/json', ...(token ? { Authorization: 'Bearer ' + token } : {}) }, body: body ? JSON.stringify(body) : undefined });
  let json = null; try { json = await res.json(); } catch (e) {}
  if (!res.ok) { const e = json && json.errors ? Object.values(json.errors)[0][0] : (json && json.message); throw new Error(method + ' ' + path + ' → ' + res.status + ' ' + (e || '')); }
  return json ? json.data : null;
}
const login = async (email, password) => (await call(null, 'POST', '/login', { email, password })).token;

const CATS = [
  { name: 'Hardware', description: 'Equipos, periféricos e impresoras' },
  { name: 'Software y licencias', description: 'Instalaciones y altas de licencia' },
  { name: 'Redes y conectividad', description: 'Wi-Fi, cableado y VPN' },
  { name: 'Accesos y credenciales', description: 'Usuarios de dominio y sistemas' }
];
const USERS = [
  { name: 'Diego Ferrer (prueba)', email: 'prueba.diego@legumex.com', role: 'admin' },
  { name: 'Ana Morales (prueba)', email: 'prueba.ana@legumex.com', role: 'admin' },
  { name: 'Lucía Ovando (prueba)', email: 'prueba.lucia@legumex.com', role: 'user' },
  { name: 'Pablo Arce (prueba)', email: 'prueba.pablo@legumex.com', role: 'user' },
  { name: 'Renata Ibáñez (prueba)', email: 'prueba.renata@legumex.com', role: 'user' }
];
// autor, categoría, asignado (índices), comentarios [autor, texto], cerrar
const TICKETS = [
  ['prueba.lucia', 'Hardware', 'La notebook de Mesa de Partes no enciende', 'No da señal de video ni carga. Probamos con otro cargador y otro tomacorriente.', 'prueba.diego', [['prueba.diego', 'Paso a retirarla a la tarde para revisar la placa.'], ['prueba.lucia', 'Gracias, queda en recepción.']], false],
  ['prueba.pablo', 'Software y licencias', 'Licencia de Office para nuevo ingreso', 'Ingresa personal nuevo el lunes y necesita Office con la cuenta institucional.', 'prueba.ana', [['prueba.ana', 'Licencia reservada. Instalo el lunes a las 8.']], false],
  ['prueba.renata', 'Redes y conectividad', 'El Wi-Fi del galpón 3 se corta cada hora', 'Se desconectan las tablets de despacho y hay que volver a iniciar sesión.', 'prueba.diego', [['prueba.diego', '¿Pasa en todo el galpón o solo cerca del portón?']], false],
  ['prueba.lucia', 'Accesos y credenciales', 'Alta de usuario en el sistema de expedientes', 'Necesito acceso de consulta para el área de Legales.', null, [], false],
  ['prueba.pablo', 'Hardware', 'La impresora de Contabilidad imprime con franjas', 'Salen líneas blancas horizontales en todas las hojas. Ya limpiamos los cabezales.', 'prueba.ana', [['prueba.ana', 'Cambié el tambor. Probá ahora.'], ['prueba.pablo', 'Quedó perfecto.']], true],
  ['prueba.renata', 'Software y licencias', 'El sistema de nómina no abre', 'Aparece un error de conexión a la base de datos al iniciar.', null, [], false],
  ['prueba.lucia', 'Redes y conectividad', 'No tengo acceso a la carpeta compartida de Calidad', 'Me aparece "acceso denegado" desde ayer.', 'prueba.diego', [['prueba.diego', 'Te agregué al grupo. Cerrá sesión y volvé a entrar.']], true],
  ['prueba.pablo', 'Accesos y credenciales', 'Se me bloqueó el usuario de dominio', 'Puse mal la contraseña varias veces.', null, [], false]
];

(async () => {
  console.log('API:', API);
  const admin = await login(ADMIN_EMAIL, ADMIN_PASSWORD);
  console.log('✓ Sesión de admin');

  const cats = await call(admin, 'GET', '/ticket_categories');
  const catId = {};
  for (const c of CATS) {
    const ya = cats.find(x => x.name === c.name);
    catId[c.name] = ya ? ya.id : (await call(admin, 'POST', '/ticket_categories', { ...c, active: true })).id;
    console.log((ya ? '· ya existe ' : '✓ categoría ') + c.name);
  }

  const users = await call(admin, 'GET', '/users');
  const uid = {};
  for (const u of USERS) {
    const ya = users.find(x => x.email === u.email);
    uid[u.email.split('@')[0]] = ya ? ya.id : (await call(admin, 'POST', '/users', { ...u, password: PWD })).id;
    console.log((ya ? '· ya existe ' : '✓ usuario ') + u.email);
  }
  const tok = {};
  for (const u of USERS) tok[u.email.split('@')[0]] = await login(u.email, PWD);

  const existing = await call(admin, 'GET', '/tickets');
  let num = existing.reduce((m, t) => Math.max(m, t.ticket_number || 0), 1000);
  for (const [autor, cat, title, description, asig, comments, cerrar] of TICKETS) {
    const t = await call(tok[autor], 'POST', '/tickets', { ticket_number: ++num, title, description, category_id: catId[cat] });
    await call(tok[autor], 'POST', '/ticket_histories', { ticket_id: t.id, action: 'create', old_value: '', new_value: 'Ticket creado · prioridad Media asignada por el sistema' });
    if (asig) {
      await call(admin, 'PATCH', '/tickets/' + t.id + '/assign', { assigned_to: uid[asig] });
      await call(admin, 'PUT', '/tickets/' + t.id, { title, description, category_id: catId[cat], status: 'in_progress', priority: 'medium' });
      await call(admin, 'POST', '/ticket_histories', { ticket_id: t.id, action: 'assign', old_value: '', new_value: 'Asignado a ' + USERS.find(u => u.email.startsWith(asig)).name });
    }
    for (const [who, text] of comments) await call(tok[who], 'POST', '/ticket_comments', { ticket_id: t.id, description: text });
    if (cerrar) await call(tok[asig], 'PATCH', '/tickets/' + t.id + '/closed');
    console.log('✓ TIC-' + num + ' ' + title + (cerrar ? ' (cerrado)' : ''));
  }
  console.log('\nListo. Entrá con cualquiera de estos correos y la contraseña ' + PWD + ':');
  USERS.forEach(u => console.log('  ' + u.email + '  (' + u.role + ')'));
})().catch(e => { console.error('✗', e.message); process.exit(1); });
