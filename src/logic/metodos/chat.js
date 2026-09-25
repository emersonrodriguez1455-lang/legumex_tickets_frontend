// Chat: abrir una conversación y enviar respuestas.
// Se mezclan en Logica.prototype: "this" es la instancia de Logica.
import { ST } from '../../config/constantes.js';

export const metodosChat = {
  // Siempre la ventana flotante, para los dos roles. A la sección se llega desde el menú o con Expandir.
  openChat(id) {
    if (this.state.screen === 'chat') { this.setState({ chatId: id == null ? null : id, chatMsg: '', chatErr: '' }); return; }
    this.setState({ chatOpen: true, chatId: id == null ? null : id, chatMsg: '', chatErr: '', chatQ: '' });
  },

  chatSend(alsoClose) {
    if (this.replyLock(this.ticket(this.state.chatId))) return;
    if (alsoClose && (this.ticket(this.state.chatId) || {}).asig !== this.me().id) { this.setState({ chatErr: 'Solo quien tiene asignado el ticket puede cerrarlo.' }); return; }
    const txt = (this.state.chatMsg || '').trim(), id = this.state.chatId;
    const nImg = this.state.staged.filter(x => x.tid === id).length;
    if ((!txt && !nImg) || !id) return;
    const me = this.me();
    if (nImg) this.sendStaged(id);
    if (!txt) { if (!alsoClose) this.say(nImg === 1 ? 'Imagen enviada a TIC-' + id + '.' : nImg + ' imágenes enviadas a TIC-' + id + '.'); if (!alsoClose) return; }
    const prevT = this.ticket(id) || {}, prevStatus = prevT.status, prevHist = prevT.historial, prevComments = prevT.comentarios;
    if (txt) this.setState(st => ({
      chatMsg: '', chatErr: '',
      tickets: st.tickets.map(t => t.id === id ? Object.assign({}, t, { comentarios: t.comentarios.concat([{ autor: me.id, texto: txt, h: 0, at: Date.now() }]) }) : t)
    }));
    if (alsoClose) {
      this.patch(id, { status: 'closed' }, 'Ticket cerrado con una última respuesta', 'close');
      this.cierre(id, () => {
        clearTimeout(this._moment);
        this.setState(st => ({
          tickets: st.tickets.map(t => t.id === id ? Object.assign({}, t, { status: prevStatus, historial: prevHist, comentarios: prevComments }) : t),
          moment: null, chatMsg: txt, chatId: id
        }));
        this.say('Deshecho. El ticket volvió a ' + ST[prevStatus].label + ' y recuperamos tu texto.');
      });
    } else this.say('Respuesta enviada a TIC-' + id + '.');
  }
};
