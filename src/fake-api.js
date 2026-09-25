// Servidor simulado: responde como la API real (8001) con datos de ejemplo, sin backend.
// Se activa con `npm run dev:simulado`. Los datos viven en memoria: se reinician al recargar.
export function install() {
  const H = h => new Date(Date.now() - h * 3600000).toISOString();
  const db = {
    users: [
      { id: 1, name: 'María Sandoval', email: 'admin@legumex.com', role: 'admin' },
      { id: 2, name: 'Diego Ferrer', email: 'd.ferrer@legumex.com', role: 'admin' },
      { id: 3, name: 'Lucía Ovando', email: 'l.ovando@legumex.com', role: 'user' },
      { id: 4, name: 'Pablo Arce', email: 'usuario@legumex.com', role: 'user' }
    ],
    cats: [
      { id: 1, name: 'Hardware', description: 'Equipos, periféricos e impresoras', active: true },
      { id: 2, name: 'Software y licencias', description: 'Instalaciones y altas de licencia', active: true },
      { id: 3, name: 'Redes y conectividad', description: 'Wi-Fi, cableado y VPN', active: true },
      { id: 4, name: 'Accesos y credenciales', description: 'Usuarios de dominio y sistemas', active: true }
    ],
    tickets: [
      { id: 1, ticket_number: 1042, title: 'La notebook de Mesa de Partes no enciende', description: 'No da señal de video ni carga. Ya probamos con otro cargador.', status: 'open', priority: 'high', category_id: 1, user_id: 3, assigned_to: 2, closed_at: null, closed_by: null, created_at: H(26) },
      { id: 2, ticket_number: 1041, title: 'Licencia de Office para nuevo ingreso', description: 'Ingresa personal nuevo el lunes.', status: 'in_progress', priority: 'medium', category_id: 2, user_id: 4, assigned_to: 1, closed_at: null, closed_by: null, created_at: H(30) },
      { id: 3, ticket_number: 1040, title: 'El Wi-Fi del galpón 3 se corta cada hora', description: 'Se desconectan las tablets de despacho.', status: 'pending', priority: 'critical', category_id: 3, user_id: 4, assigned_to: 1, closed_at: null, closed_by: null, created_at: H(50) },
      { id: 4, ticket_number: 1039, title: 'Alta de usuario en el sistema de expedientes', description: 'Acceso de consulta para Legales.', status: 'open', priority: 'low', category_id: 4, user_id: 3, assigned_to: null, closed_at: null, closed_by: null, created_at: H(8) },
      { id: 5, ticket_number: 1038, title: 'La impresora de Contabilidad imprime con franjas', description: 'Líneas blancas en todas las hojas.', status: 'closed', priority: 'medium', category_id: 1, user_id: 4, assigned_to: 2, closed_at: H(20), closed_by: 2, created_at: H(70) }
    ],
    comments: [
      { id: 1, ticket_id: 1, user_id: 2, description: 'Paso a retirar el equipo a la tarde para revisar la placa.' },
      { id: 2, ticket_id: 2, user_id: 1, description: 'Licencia reservada. Coordino la instalación para el lunes.' },
      { id: 3, ticket_id: 3, user_id: 1, description: '¿Pasa en todo el galpón o solo cerca del portón?' }
    ],
    histories: [{ id: 1, ticket_id: 1, user_id: 1, action: 'assign', old_value: '', new_value: 'Asignado a Diego Ferrer' }],
    atts: []
  };
  let me = null, seq = 100;
  const ok = (data, code) => new Response(JSON.stringify({ statusCode: code || 200, message: 'Operación realizada correctamente', data }), { status: code || 200, headers: { 'Content-Type': 'application/json' } });
  const fail = (code, message) => new Response(JSON.stringify({ statusCode: code, message, data: null }), { status: code, headers: { 'Content-Type': 'application/json' } });
  const tok = u => 'demo.' + u.id;
  const real = window.fetch.bind(window);
  window.fetch = async (url, opt = {}) => {
    const u = String(url); if (!u.startsWith('/api')) return real(url, opt);
    await new Promise(r => setTimeout(r, 250));
    const path = u.slice(4).split('?')[0], m = (opt.method || 'GET').toUpperCase();
    const body = opt.body && !(opt.body instanceof FormData) ? JSON.parse(opt.body) : opt.body;
    const auth = (opt.headers || {}).Authorization || '';
    if (!me && auth.startsWith('Bearer demo.')) me = db.users.find(x => 'demo.' + x.id === auth.slice(7)) || null;
    if (path === '/login') { const x = db.users.find(y => y.email === String(body.email).toLowerCase()); if (!x) return fail(400, 'Credenciales inválidas'); me = x; return ok({ name: x.name, email: x.email, role: x.role, token: tok(x) }); }
    if (!me) return new Response(JSON.stringify({ message: 'Token not provided' }), { status: 401 });
    const adm = me.role === 'admin', mine = t => adm || t.user_id === me.id || t.assigned_to === me.id;
    let r;
    if (path === '/check-status') return ok({ name: me.name, email: me.email, role: me.role, token: tok(me) });
    if (path === '/users' && m === 'GET') return ok(db.users);
    if (path === '/users' && m === 'POST') { r = Object.assign({ id: ++seq }, body); delete r.password; db.users.push(r); return ok(r, 201); }
    if ((r = path.match(/^\/users\/(\d+)$/)) && m === 'PUT') { const x = db.users.find(y => y.id === +r[1]); Object.assign(x, body); delete x.password; return ok(x); }
    if (path === '/ticket_categories' && m === 'GET') return ok(db.cats);
    if (path === '/ticket_categories' && m === 'POST') { r = Object.assign({ id: ++seq, active: true }, body); db.cats.push(r); return ok(r, 201); }
    if ((r = path.match(/^\/ticket_categories\/(\d+)$/)) && m === 'PUT') { const c = db.cats.find(y => y.id === +r[1]); Object.assign(c, body); return ok(c); }
    if (path === '/tickets' && m === 'GET') return ok(db.tickets.filter(mine));
    if (path === '/tickets' && m === 'POST') { if (db.tickets.some(t => t.ticket_number === body.ticket_number)) return new Response(JSON.stringify({ message: 'Número repetido', errors: { ticket_number: ['El número ya existe'] } }), { status: 422 }); r = Object.assign({ id: ++seq, status: 'open', priority: 'medium', user_id: me.id, assigned_to: null, closed_at: null, closed_by: null, created_at: new Date().toISOString() }, body); db.tickets.push(r); return ok(r, 201); }
    if ((r = path.match(/^\/tickets\/(\d+)$/)) && m === 'PUT') { const t = db.tickets.find(y => y.id === +r[1]); if (!adm && (body.status || body.priority)) return fail(422, 'No permitido'); Object.assign(t, body); return ok(t); }
    if ((r = path.match(/^\/tickets\/(\d+)\/assign$/)) && m === 'PATCH') { if (!adm) return new Response(JSON.stringify({ message: 'This action is unauthorized.' }), { status: 403 }); const t = db.tickets.find(y => y.id === +r[1]); t.assigned_to = body.assigned_to; return ok(t); }
    if ((r = path.match(/^\/tickets\/(\d+)\/closed$/)) && m === 'PATCH') { const t = db.tickets.find(y => y.id === +r[1]); if (!adm && t.assigned_to !== me.id) return fail(500, 'No tiene permiso para cerrar este ticket'); Object.assign(t, { status: 'closed', closed_at: new Date().toISOString(), closed_by: me.id }); return ok(t); }
    if (path === '/ticket_comments' && m === 'GET') return ok(db.comments);
    if (path === '/ticket_comments' && m === 'POST') { r = { id: ++seq, ticket_id: body.ticket_id, user_id: me.id, description: body.description, created_at: new Date().toISOString() }; db.comments.push(r); return ok(r, 201); }
    if (path === '/ticket_histories' && m === 'GET') return ok(db.histories);
    if (path === '/ticket_histories' && m === 'POST') { r = Object.assign({ id: ++seq, user_id: me.id }, body); db.histories.push(r); return ok(r, 201); }
    if (path === '/ticket_attachments' && m === 'GET') return ok(db.atts);
    if (path === '/ticket_attachments' && m === 'POST') { const f = body.get('file'); r = { id: ++seq, ticket_id: +body.get('ticket_id'), user_id: me.id, file_name: f.name, file_path: URL.createObjectURL(f), file_size: f.size, mime_type: f.type }; db.atts.push(r); return ok(r, 201); }
    return fail(404, 'Recurso no encontrado');
  };
}
