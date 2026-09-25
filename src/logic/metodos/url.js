// Estado de la vista en la URL (filtros, orden, ticket abierto) y copiar enlace.
// Se mezclan en Logica.prototype: "this" es la instancia de Logica.

export const metodosUrl = {
  viewUrl() {
    const s = this.state, p = [];
    if (s.statusFilter !== 'all') p.push('estado=' + s.statusFilter);
    if (s.prioFilter !== 'all') p.push('prioridad=' + s.prioFilter);
    if (s.sort !== 'urgencia') p.push('orden=' + s.sort);
    if (s.view !== 'cards') p.push('vista=' + s.view);
    if (s.q.trim()) p.push('q=' + encodeURIComponent(s.q.trim()));
    if (s.screen === 'detail' && s.detailId) p.push('ticket=' + s.detailId);
    const scr = s.screen === 'pulso' ? 'metricas' : s.screen === 'cats' ? 'categorias' : s.screen === 'users' ? 'usuarios' : 'tickets';
    return '#/' + scr + (p.length ? '?' + p.join('&') : '');
  },

  writeUrl() {
    if (!this.state.authed) return;
    const next = this.viewUrl();
    if (location.hash !== next) { try { history.replaceState(null, '', next); } catch (e) {} }
  },

  applyUrl() {
    const raw = (location.hash || '').replace(/^#\/?/, '');
    if (!raw) return;
    const parts = raw.split('?'), scr = parts[0] || 'tickets', qs = parts[1] || '';
    const p = {};
    qs.split('&').filter(Boolean).forEach(kv => { const i = kv.indexOf('='); p[kv.slice(0, i)] = decodeURIComponent(kv.slice(i + 1)); });
    const screen = p.ticket ? 'detail' : (scr === 'metricas' || scr === 'pulso') ? 'pulso' : scr === 'categorias' ? 'cats' : scr === 'usuarios' ? 'users' : 'tickets';
    const view = p.vista === 'table' || p.vista === 'kanban' ? p.vista : 'cards';
    this.setState({
      screen, detailId: p.ticket ? Number(p.ticket) : null,
      statusFilter: ['open', 'in_progress', 'closed'].indexOf(p.estado) >= 0 ? p.estado : 'all',
      prioFilter: ['high', 'medium', 'low'].indexOf(p.prioridad) >= 0 ? p.prioridad : 'all',
      sort: p.orden === 'recientes' ? 'recientes' : 'urgencia',
      view, q: p.q || '', comment: p.ticket ? this.readDraft('t' + p.ticket) : ''
    });
  },

  copyView() {
    const url = location.href.split('#')[0] + this.viewUrl();
    const done = () => this.say('Enlace copiado. Quien lo abra ve esta misma vista.');
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(url).then(done, done); return; }
    } catch (e) {}
    done();
  }
};
