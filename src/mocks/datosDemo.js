// Datos de ejemplo del modo demostración (VITE_DEMO=true): la app arranca con esto en
// memoria y no llama a la API. Mismo formato que usa la lógica (nombre, rol, cat, asig...).
// Solo para pruebas: se borra junto con src/mocks al pasar a producción.
export const DATOS_DEMO = {
  // Botón "Usar datos de prueba" de la pantalla de ingreso
  credencial: { email: 'm.sandoval@tic.gob', password: 'demo1234' },
  users: [
    { id: 1, nombre: 'María Sandoval', email: 'm.sandoval@tic.gob', rol: 'admin', activo: true },
    { id: 2, nombre: 'Diego Ferrer', email: 'd.ferrer@tic.gob', rol: 'admin', activo: true },
    { id: 3, nombre: 'Lucía Ovando', email: 'l.ovando@tic.gob', rol: 'usuario', activo: true },
    { id: 4, nombre: 'Pablo Arce', email: 'p.arce@tic.gob', rol: 'usuario', activo: true },
    { id: 5, nombre: 'Renata Ibáñez', email: 'r.ibanez@tic.gob', rol: 'usuario', activo: false }
  ],
  cats: [
    { id: 1, nombre: 'Hardware', descripcion: 'Equipos, periféricos e impresoras', activo: true },
    { id: 2, nombre: 'Software y licencias', descripcion: 'Instalaciones y altas de licencia', activo: true },
    { id: 3, nombre: 'Redes y conectividad', descripcion: 'Wi-Fi, cableado y VPN', activo: true },
    { id: 4, nombre: 'Accesos y credenciales', descripcion: 'Usuarios de dominio y sistemas', activo: true },
    { id: 5, nombre: 'Telefonía IP', descripcion: 'Anexos y centralita', activo: false }
  ],
  tickets: [
    { id: 1042, titulo: 'La notebook de Mesa de Partes no enciende', desc: 'El equipo no da señal de video ni carga. Ya probamos con otro cargador y otro tomacorriente. Mesa de Partes está atendiendo con un equipo prestado.', cat: 1, status: 'open', prio: 'high', autor: 3, asig: 2, creado: '16 sep, 08:20', h: 26,
      comentarios: [{ autor: 2, texto: 'Paso a retirar el equipo en la primera hora de la tarde para revisar la placa.', h: 18 }],
      historial: [{ autor: 'María Sandoval', texto: 'Asignado a Diego Ferrer', h: 20, kind: 'assign' }, { autor: 'Lucía Ovando', texto: 'Ticket creado con prioridad Alta', h: 26, kind: 'create' }],
      adjuntos: [{ nombre: 'pantalla-negra.png', tipo: 'PNG · 1280×720', peso: '412 KB', autor: 3, h: 25 }, { nombre: 'etiqueta-inventario.jpg', tipo: 'JPG · 900×600', peso: '188 KB', autor: 3, h: 24 }] },
    { id: 1041, titulo: 'Solicitud de licencia de Office para nuevo ingreso', desc: 'Ingresa personal nuevo el lunes y necesita Office instalado con la cuenta institucional.', cat: 2, status: 'in_progress', prio: 'medium', autor: 4, asig: 1, creado: '16 sep, 04:05', h: 30,
      comentarios: [{ autor: 1, texto: 'Licencia reservada. Coordino la instalación para el lunes a las 8.', h: 6 }],
      historial: [{ autor: 'María Sandoval', texto: 'Estado cambiado a En progreso', h: 6, kind: 'status' }, { autor: 'Pablo Arce', texto: 'Ticket creado con prioridad Media', h: 30, kind: 'create' }],
      adjuntos: [] },
    { id: 1040, titulo: 'Wi-Fi intermitente en el piso 3', desc: 'Las conexiones se cortan cada 10 minutos en el ala oeste. Afecta a unas 12 personas.', cat: 3, status: 'in_progress', prio: 'high', autor: 3, asig: 2, creado: '15 sep, 06:30', h: 52,
      comentarios: [{ autor: 2, texto: 'El AP del ala oeste está saturado. Pedí un equipo de reemplazo a Infraestructura.', h: 5 }],
      historial: [{ autor: 'Diego Ferrer', texto: 'Estado cambiado a En progreso', h: 30, kind: 'status' }, { autor: 'Lucía Ovando', texto: 'Ticket creado con prioridad Alta', h: 52, kind: 'create' }],
      adjuntos: [{ nombre: 'test-velocidad.png', tipo: 'PNG · 1024×640', peso: '96 KB', autor: 3, h: 51 }] },
    { id: 1039, titulo: 'Reset de contraseña de dominio', desc: 'No puedo ingresar al equipo desde la vuelta de licencia.', cat: 4, status: 'closed', prio: 'low', autor: 4, asig: 1, creado: '14 sep, 10:20', h: 72,
      comentarios: [{ autor: 1, texto: 'Contraseña restablecida. Te pide cambiarla en el primer ingreso.', h: 60 }],
      historial: [{ autor: 'María Sandoval', texto: 'Ticket cerrado', h: 58, kind: 'close' }, { autor: 'Pablo Arce', texto: 'Ticket creado con prioridad Baja', h: 72, kind: 'create' }],
      adjuntos: [] },
    { id: 1038, titulo: 'La impresora de Contabilidad imprime con franjas', desc: 'Salen líneas blancas horizontales en todas las hojas. Ya limpiamos los cabezales.', cat: 1, status: 'open', prio: 'medium', autor: 5, asig: null, creado: '15 sep, 14:35', h: 44,
      comentarios: [], historial: [{ autor: 'Renata Ibáñez', texto: 'Ticket creado con prioridad Media', h: 44, kind: 'create' }], adjuntos: [] },
    { id: 1037, titulo: 'Alta de usuario en el sistema de expedientes', desc: 'Necesito acceso de consulta para el área de Legales.', cat: 4, status: 'open', prio: 'low', autor: 3, asig: null, creado: '13 sep, 10:05', h: 96,
      comentarios: [], historial: [{ autor: 'Lucía Ovando', texto: 'Ticket creado con prioridad Baja', h: 96, kind: 'create' }], adjuntos: [] },
    { id: 1036, titulo: 'El anexo 214 no tiene tono', desc: 'El teléfono enciende pero no da tono de línea.', cat: 5, status: 'closed', prio: 'medium', autor: 4, asig: 2, creado: '10 sep, 09:48', h: 168,
      comentarios: [{ autor: 2, texto: 'Se reemplazó el patch cord del rack. Anexo operativo.', h: 150 }],
      historial: [{ autor: 'Diego Ferrer', texto: 'Ticket cerrado', h: 148, kind: 'close' }, { autor: 'Pablo Arce', texto: 'Ticket creado con prioridad Media', h: 168, kind: 'create' }], adjuntos: [] }
  ]
};
