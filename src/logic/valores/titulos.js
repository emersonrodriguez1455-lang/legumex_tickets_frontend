// Valores para la plantilla — títulos de página que pisan a los de cada pantalla (chat, 403, 404).
// Parte de Logica.renderVals(); "v" se comparte entre secciones y "ctx" lleva lo común.

export const valoresTitulos = {
  valoresTitulos(v, ctx) {
    if (v.showChatPage) { v.pageTitle = 'Chat'; v.pageSub = 'Todas las conversaciones de tickets en una sola pantalla'; v.crumb = 'CHAT'; }
    if (v.showForbidden) { v.pageTitle = 'Acceso restringido'; v.pageSub = 'Tu rol actual no alcanza para esta sección'; v.crumb = 'LEGUMEX'; }
    else if (v.showNotFound) { v.pageTitle = 'Ticket no encontrado'; v.pageSub = 'Revisá el código o volvé al listado'; v.crumb = 'TICKETS'; }
  }
};
