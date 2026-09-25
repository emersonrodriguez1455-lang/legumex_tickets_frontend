// Constantes del sistema: estados, prioridades, SLA, colores y límites.
// Solo lectura. La lógica las importa directo (antes eran campos de la clase).

export const ST = {
  open: { label: 'Abierto', bg: '#fef3c7', dot: '#ea580c' },
  in_progress: { label: 'En progreso', bg: '#dbeaff', dot: '#2563eb' },
  closed: { label: 'Cerrado', bg: '#dcfce7', dot: '#16a34a' }
};

export const PR = {
  low: { label: 'Baja', dot: '#16a34a' },
  medium: { label: 'Media', dot: '#7c3aed' },
  high: { label: 'Alta', dot: '#ea580c' }
};

export const RING = ['#2563eb', '#7c3aed', '#16a34a', '#ea580c'];

// Umbral de atención inventado para el prototipo (la API no lo expone): se mide sobre el
// tiempo SIN MOVIMIENTO, no sobre la edad del ticket.
export const SLA = { high: 8, medium: 48, low: 120 };

export const EV = {
  create: { label: 'Creado', color: '#737373' },
  assign: { label: 'Asignación', color: '#2563eb' },
  status: { label: 'Estado', color: '#7c3aed' },
  close: { label: 'Cierre', color: '#16a34a' },
  reopen: { label: 'Reapertura', color: '#ea580c' },
  nudge: { label: 'Marcado como bloqueante', color: '#ea580c' },
  call: { label: 'Llamada', color: '#7c3aed' },
  edit: { label: 'Edición', color: '#737373' }
};

// ── 1. Borradores: nada de lo tipeado se pierde por un 401 o un recargado
export const DK = 'mesatic.draft.';

// ── 3. La vista vive en la dirección: filtros compartibles por enlace
export const URLKEYS = ['estado', 'prioridad', 'orden', 'vista', 'q', 'ticket'];

// ── 4. Adjuntos: se valida antes de subir, no después de la respuesta
export const MIME = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

export const MAXMB = 5;

export const STOP = ['para', 'desde', 'como', 'esta', 'este', 'tiene', 'todo', 'pero', 'cuando', 'solicitud', 'problema'];

// Andamio de descripción por categoría — editar acá, no en los componentes.
// Clave: nombre de la categoría tal como está en ticket_categories.
// blobatar.dev — cara determinista por persona. El hue se fija a uno de los cuatro acentos
// del sistema para no abrir la paleta; la forma sigue saliendo del nombre.
// Solo en el chat y en Actividad: en tablas y asignación las iniciales se leen mejor.
export const BLOB_HUE = [260, 150, 300, 45];

export const NAV_INK = { tickets: '#2563eb', pulso: '#16a34a', cats: '#7c3aed', users: '#ea580c', chat: '#0891b2' };

export const MOSTRAR_SIN_ABRIR = true;

export const PAGE_SIZE = 20;

export const PCODE = { high: 'P1', medium: 'P2', low: 'P3' };

// Diseño responsivo: teléfonos (hasta 767 px de ancho, o pantalla táctil de poca altura =
// teléfono en horizontal) usan el diseño móvil: barra superior, menú deslizable y una sola
// vista en tarjetas. Debe coincidir con la media query de index.css.
// Tablets todavía usan el diseño de escritorio: pendiente, ver CONTEXTO.
export const MQ_MOVIL = '(max-width: 767px), (max-height: 500px) and (pointer: coarse)';

// Único dominio de correo que se acepta al crear o editar usuarios
export const DOMINIO_CORREO = '@legumex.net';
