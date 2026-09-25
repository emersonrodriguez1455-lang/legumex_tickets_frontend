// Textos de ayuda editables: guías del formulario por categoría y respuestas rápidas.

export const ANDAMIOS = {
  'Hardware': ['Qué equipo y dónde está', 'Desde cuándo pasa', 'Qué dice el error, si aparece', 'Qué ya probé'],
  'Redes y conectividad': ['Dónde estás', 'Desde cuándo', 'Si es con cable o wifi', 'Qué ya probé'],
  'Software y licencias': ['Qué programa', 'Para quién es', 'Para cuándo lo necesitás'],
  'Accesos y cuentas': ['Qué sistema', 'Con qué usuario entrás', 'Qué mensaje te da'],
  '_': ['Qué pasa', 'Desde cuándo', 'Qué ya probé']
};

// Respuestas rápidas del solicitante: lo que suele contestar alguien de un área a TIC
export const MACROS_USER = [
  { label: 'Sigue igual', text: 'Lo probé de nuevo y sigue igual. ¿Qué más puedo revisar de mi lado?' },
  { label: 'Ya funciona', text: 'Ya funciona, gracias. Pueden cerrarlo.' },
  { label: 'Te paso captura', text: 'Te adjunto una captura de cómo se ve ahora.' },
  { label: 'Estoy en mi puesto', text: 'Estoy en mi puesto hasta las 17 h; pueden pasar cuando les quede bien.' },
  { label: '¿Novedades?', text: '¿Hay novedades? Esto me está frenando el trabajo.' }
];

export const MACROS = [
  { label: 'Pedir más datos', text: 'Para avanzar necesito dos datos: desde cuándo pasa y si le ocurre a alguien más del área.' },
  { label: 'Voy en camino', text: 'Voy en camino a revisarlo en sitio. Si no llego en la próxima hora, escribime por acá.' },
  { label: 'Esperando repuesto', text: 'Ya se pidió el repuesto. Te aviso en cuanto llegue para coordinar el cambio.' },
  { label: 'Quedó resuelto', text: 'Quedó resuelto de nuestro lado. Si vuelve a pasar, comentá acá mismo y lo reabrimos.' }
];
