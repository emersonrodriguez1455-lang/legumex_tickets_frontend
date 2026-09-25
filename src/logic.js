import React from 'react';
import { DCLogic } from './dc-logic.js';
import * as api from './api.js';
import * as sync from './sync.js';

export class Component extends DCLogic {
  state = {
    authed: false, email: '', password: '', loginErr: '',
    role: this.props.rolInicial || 'admin',
    screen: 'tickets',
    view: (this.props.vistaInicial === 'tabla' || this.props.vistaInicial === 'table') ? 'table' : this.props.vistaInicial === 'kanban' ? 'kanban' : 'cards',
    tap: '', undo: null,
    q: '', searchOpen: false, statusFilter: 'all', prioFilter: 'all', dStatus: 'all', dPrio: 'all',
    chatOpen: false, chatId: null, chatQ: '', chatStatus: 'all', chatMsg: '', chatErr: '', fabSmall: false,
    booting: true, bootFading: false, navHover: '', detailId: null, cursor: -1,
    form: { titulo: '', desc: '', cat: '', status: 'open', prio: 'medium' },
    editId: null, dir: 'none', celebrate: null,
    formErr: null, comment: '', commentErr: '',
    entity: null, modal: null, toast: '', seq: 1042, sort: this.props.ordenInicial === 'recientes' ? 'recientes' : 'urgencia',
    err500: this.props.estadoError === '500',
    forced: this.props.estadoError || 'ninguno',
    page: { tickets: 0, cats: 0, users: 0 },
    loading: true, swap: 0, busy: '', modalClosing: false, toastOut: false,
    heavyMsg: '', moment: null, qa: null, staged: [], lightbox: null, viewOpen: false, periodOpen: false, period: '30',
    uploads: [], saving: '', err500Line: 'HTTP 500 · GET /api/tickets', draftFound: false, sessionOk: true, sessionMsg: '',
    dragId: null, dragOver: null, landed: null, asigOpen: false,
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

  ST = {
    open: { label: 'Abierto', bg: '#fef3c7', dot: '#ea580c' },
    in_progress: { label: 'En progreso', bg: '#dbeaff', dot: '#2563eb' },
    closed: { label: 'Cerrado', bg: '#dcfce7', dot: '#16a34a' }
  };
  PR = {
    low: { label: 'Baja', dot: '#16a34a' },
    medium: { label: 'Media', dot: '#7c3aed' },
    high: { label: 'Alta', dot: '#ea580c' }
  };

  RING = ['#2563eb', '#7c3aed', '#16a34a', '#ea580c'];
  ring(id) { return id ? this.RING[(id - 1) % this.RING.length] : '#d4d4d4'; }

  // ── tiempo: todo se deriva de `h` (horas desde ahora), que representa created_at/updated_at de la API
  ago(h) {
    if (typeof h !== 'number') return '—';
    if (h < 1) return 'hace unos minutos';
    if (h < 24) return 'hace ' + Math.round(h) + ' h';
    if (h < 48) return 'ayer';
    if (h < 168) return 'hace ' + Math.round(h / 24) + ' d';
    return 'hace ' + Math.round(h / 168) + ' sem';
  }
  dur(h) {
    if (typeof h !== 'number') return '—';
    if (h < 1) return 'menos de 1 h';
    if (h < 48) return Math.round(h) + ' h';
    return Math.round(h / 24) + ' d';
  }
  events(t) {
    return [t.h].concat(
      (t.comentarios || []).map(c => c.h),
      (t.historial || []).map(x => x.h),
      (t.adjuntos || []).map(a => a.h)
    ).filter(x => typeof x === 'number');
  }
  idle(t) { return Math.min.apply(null, this.events(t)); }

  // El área ya respondió y el turno es del solicitante: el tiempo que pasa no es deuda del equipo.
  // (El comentario no manda correo, así que este es el caso más frecuente del sistema.)
  waitingOnRequester(t) {
    if (!t || t.status === 'closed') return false;
    const c = t.comentarios || [];
    if (!c.length) return false;
    return c[c.length - 1].autor !== t.autor;
  }

  // Umbral de atención inventado para el prototipo (la API no lo expone): se mide sobre el
  // tiempo SIN MOVIMIENTO, no sobre la edad del ticket.
  SLA = { high: 8, medium: 48, low: 120 };
  targets() {
    const h = Number(this.props.metaAltaHoras) || this.SLA.high;
    return { high: h, medium: h * 6, low: h * 15 };
  }
  sla(t) {
    const target = this.targets()[t.prio], idle = this.idle(t);
    if (t.status === 'closed') {
      const closed = (t.historial || []).find(x => x.kind === 'close');
      const resolved = closed ? t.h - closed.h : null;
      return { level: 'done', late: false, watch: false, ok: false, done: true, target, idle, resolved, label: resolved != null ? 'Resuelto en ' + this.dur(resolved) : 'Resuelto' };
    }
    if (this.waitingOnRequester(t)) {
      return {
        level: 'waiting', target, idle, ratio: 0, resolved: null,
        waiting: true, late: false, watch: false, ok: false, done: false,
        label: 'Esperando al solicitante',
        full: 'El área respondió hace ' + this.dur(idle) + ' · el turno es del solicitante, así que no cuenta como tiempo sin mover'
      };
    }
    const r = idle / target;
    const level = r >= 1 ? 'late' : r >= 0.6 ? 'watch' : 'ok';
    return {
      level, target, idle, ratio: r, resolved: null,
      waiting: false, late: level === 'late', watch: level === 'watch', ok: level === 'ok', done: false,
      label: level === 'late' ? this.dur(idle) + ' sin mover' : level === 'watch' ? 'Vence pronto' : 'En tiempo',
      full: level === 'late'
        ? 'Sin movimiento hace ' + this.dur(idle) + ' · la meta para prioridad ' + this.PR[t.prio].label.toLowerCase() + ' es ' + this.dur(target)
        : level === 'watch'
        ? 'Sin movimiento hace ' + this.dur(idle) + ' de un margen de ' + this.dur(target)
        : 'Movido hace ' + this.dur(idle) + ' · dentro del margen de ' + this.dur(target)
    };
  }
  // Carga por persona: una sola definición para las tres pantallas que la usan
  // (Usuarios, Pulso y el menú de asignación). Antes cada una la recalculaba con su propio nombre local.
  loadOf(userId, pool) {
    const act = (pool || this.visible()).filter(t => t.status !== 'closed' && t.asig === userId);
    return { n: act.length, late: act.filter(t => this.sla(t).late).length };
  }
  maxLoad(pool) {
    return Math.max(1, ...this.state.users.map(u => this.loadOf(u.id, pool).n));
  }
  // POST /api/ticket_histories con action 'nudge' — el reclamo del solicitante como dato, no como comentario
  nudges(t) { return ((t || {}).historial || []).filter(x => x.kind === 'nudge'); }
  nudgedRecently(t, userName) {
    return this.nudges(t).some(x => x.autor === userName && (t.h - x.h) < 24);
  }
  firstResponse(t) {
    const c = (t.comentarios || []).filter(x => x.autor !== t.autor);
    if (!c.length) return null;
    return t.h - Math.max.apply(null, c.map(x => x.h));
  }
  resolution(t) {
    const closed = (t.historial || []).find(x => x.kind === 'close');
    return closed ? t.h - closed.h : null;
  }
  EV = {
    create: { label: 'Creado', color: '#737373' },
    assign: { label: 'Asignación', color: '#2563eb' },
    status: { label: 'Estado', color: '#7c3aed' },
    close: { label: 'Cierre', color: '#16a34a' },
    reopen: { label: 'Reapertura', color: '#ea580c' },
    nudge: { label: 'Marcado como bloqueante', color: '#ea580c' },
    call: { label: 'Llamada', color: '#7c3aed' },
    edit: { label: 'Edición', color: '#737373' }
  };
  activity(t) {
    const out = [];
    (t.comentarios || []).forEach((c, i) => {
      const u = this.user(c.autor) || {};
      out.push({ key: 'c' + i + '-' + c.h, isComment: true, isEvent: false, isFile: false, autor: u.nombre || '—', ini: this.ini(u.nombre), ring: this.ring(c.autor), blobRef: el => { if (el) el.src = this.blobUrl(c.autor, 64); }, hasBlob: true, noBlob: false, texto: c.texto, meta: '', when: this.ago(c.h), h: c.h, at: c.at || 0, node: '#e5e5e5' });
    });
    (t.historial || []).forEach((x, i) => {
      const ev = this.EV[x.kind] || this.EV.edit;
      out.push({ key: 'h' + i + '-' + x.h, isComment: false, isEvent: true, isFile: false, autor: x.autor, ini: '', ring: ev.color, texto: x.texto, meta: ev.label, when: this.ago(x.h), h: x.h, at: x.at || 0, node: ev.color });
    });
    (t.adjuntos || []).forEach((a, i) => {
      const u = this.user(a.autor) || {};
      out.push({ key: 'f' + i + '-' + a.h, isComment: false, isEvent: false, isFile: true, autor: u.nombre || '—', ini: '', ring: '#a3a3a3', texto: a.nombre, meta: a.tipo + ' · ' + a.peso, when: this.ago(a.h), h: a.h, at: a.at || 0, node: '#a3a3a3' });
    });
    out.sort((a, b) => (b.h - a.h) || (a.at - b.at));
    return out.map((x, i) => Object.assign(x, { showLine: i < out.length - 1 }));
  }

  // ── 1. Borradores: nada de lo tipeado se pierde por un 401 o un recargado
  DK = 'mesatic.draft.';
  readDraft(k) { try { return localStorage.getItem(this.DK + k) || ''; } catch (e) { return ''; } }
  saveDraft(k, txt) {
    try { txt ? localStorage.setItem(this.DK + k, txt) : localStorage.removeItem(this.DK + k); } catch (e) {}
  }
  openTicket(id, dir) {
    this.setState({ screen: 'detail', detailId: id, comment: this.readDraft('t' + id), commentErr: '', dir: dir || 'fwd', formErr: null });
    this.load(500);
  }
  newForm() {
    let d = null;
    try { d = JSON.parse(this.readDraft('nuevo') || 'null'); } catch (e) { d = null; }
    const form = d && (d.titulo || d.desc || d.cat) ? d : { titulo: '', desc: '', cat: '', status: 'open', prio: 'medium' };
    this.setState({ screen: 'create', formErr: null, dir: 'fwd', form, draftFound: !!(d && (d.titulo || d.desc)) });
  }
  formChanged(patch) {
    this.setState(st => {
      const form = Object.assign({}, st.form, patch);
      if (st.screen === 'create') this.saveDraft('nuevo', JSON.stringify({ titulo: form.titulo, desc: form.desc, cat: form.cat }));
      return { form };
    });
  }

  // ── 2. Guardado optimista: se aplica ya, y si el servidor falla se revierte
  optimistic(key, apply, revert, okMsg, failLine) {
    apply();
    this.setState({ saving: key, err500: false });
    clearTimeout(this._save);
    this._save = setTimeout(() => {
      if (this.props.fallaGuardado) {
        revert();
        this.setState({ saving: '', err500: true, err500Line: failLine });
        this.say('No se guardó. Volvimos el ticket a como estaba.');
      } else {
        this.setState({ saving: '' });
        if (okMsg) this.say(okMsg);
      }
      // 1400ms = un ciclo completo de logoLoop. A 900 el logo se cortaba a media carga
      // y la píldora desaparecía antes de que alguien la registrara.
    }, 1400);
  }
  // ── Espera con marca: acciones que pegan al backend y no tienen skeleton
  // (cerrar, reabrir, dar de baja, crear categoría/usuario). El logo se llena
  // mientras la llamada viaja; sin esto el click no devolvía nada por 900ms.
  heavy(label, ms, done) {
    if (this.state.heavyMsg) return;
    this.setState({ heavyMsg: label });
    clearTimeout(this._heavy);
    this._heavy = setTimeout(() => { this.setState({ heavyMsg: '' }); if (done) done(); }, ms || 900);
  }
  // La píldora GUARDANDO era exclusiva del guardado optimista; crear y cerrar
  // también viajan al servidor, así que ahora la comparten.
  pill(ms) {
    this.setState({ saving: 'sync' });
    clearTimeout(this._save);
    this._save = setTimeout(() => this.setState({ saving: '' }), ms || 1400);
  }
  showMoment(m, ms) {
    this.setState({ moment: m });
    clearTimeout(this._moment);
    this._moment = setTimeout(() => { if (this.state.moment === m) this.endMoment(true); }, ms || 3200);
  }
  // Cierre del momento: si no se deshizo, sigue el aviso negro flotante (último eslabón)
  endMoment(runAfter) {
    const m = this.state.moment;
    clearTimeout(this._moment);
    if (!m) return;
    this.setState({ moment: null });
    if (runAfter && m.after) m.after();
  }
  // El cierre es el final del trabajo: merece el mismo peso que la creación
  cierre(id, undoFn, btn, go) {
    if (api.USE_API) undoFn = null; // sin endpoint para deshacer: no se ofrece
    this.pill();
    const t = this.ticket(id) || {};
    const sol = (this.state.users.find(u => u.id === t.autor) || {}).nombre || 'el solicitante';
    const yo = this.me().nombre;
    const hoy = this.state.tickets.filter(x => x.id !== id && (x.historial || []).some(h => h.kind === 'close' && h.h < 24 && h.autor === yo)).length + 1;
    // Persona "enfocada": despacha en serie; el siguiente sin asignar más viejo queda a un click
    this.showMoment({
      kind: 'close', code: 'TIC-' + id, titulo: t.titulo || '',
      sub: 'Resuelto en ' + this.dur(t.h) + ' · le avisamos a ' + sol + ' por correo. ' + (hoy === 1 ? 'Es tu primer cierre de hoy.' : 'Es tu ' + hoy + '.º cierre de hoy.'),
      undo: undoFn || null,
      after: () => this.say('TIC-' + id + ' cerrado. Le avisamos a ' + sol + ' por correo.', undoFn || undefined),
      btn: 'Cerrar',
      go: go || null
    }, 3200);
  }
  reapertura(id) {
    const t = this.ticket(id) || {};
    this.showMoment({
      kind: 'reopen', code: 'TIC-' + id, titulo: t.titulo || '',
      sub: 'Volvió a la bandeja del área y quedó registrado en la actividad.',
      btn: 'Entendido', undo: null, go: null
    }, 2800);
  }
  bloqueante(id) {
    this.showMoment({
      kind: 'nudge', code: 'TIC-' + id, titulo: 'Quedó marcado como bloqueante',
      sub: 'TI lo ve arriba en su bandeja. Si mañana te sigue frenando, podés volver a marcarlo.',
      btn: 'Entendido', undo: null, go: null
    }, 2800);
  }
  snapshot(id) {
    const t = this.ticket(id) || {};
    return { status: t.status, asig: t.asig, historial: t.historial, comentarios: t.comentarios, adjuntos: t.adjuntos };
  }
  restore(id, snap) {
    this.setState(st => ({ tickets: st.tickets.map(t => t.id === id ? Object.assign({}, t, snap) : t) }));
  }

  // ── 3. La vista vive en la dirección: filtros compartibles por enlace
  URLKEYS = ['estado', 'prioridad', 'orden', 'vista', 'q', 'ticket'];
  viewUrl() {
    const s = this.state, p = [];
    if (s.statusFilter !== 'all') p.push('estado=' + s.statusFilter);
    if (s.prioFilter !== 'all') p.push('prioridad=' + s.prioFilter);
    if (s.sort !== 'urgencia') p.push('orden=' + s.sort);
    if (s.view !== 'cards') p.push('vista=' + s.view);
    if (s.q.trim()) p.push('q=' + encodeURIComponent(s.q.trim()));
    if (s.screen === 'detail' && s.detailId) p.push('ticket=' + s.detailId);
    const scr = s.screen === 'pulso' ? 'pulso' : s.screen === 'cats' ? 'categorias' : s.screen === 'users' ? 'usuarios' : 'tickets';
    return '#/' + scr + (p.length ? '?' + p.join('&') : '');
  }
  writeUrl() {
    if (!this.state.authed) return;
    const next = this.viewUrl();
    if (location.hash !== next) { try { history.replaceState(null, '', next); } catch (e) {} }
  }
  applyUrl() {
    const raw = (location.hash || '').replace(/^#\/?/, '');
    if (!raw) return;
    const parts = raw.split('?'), scr = parts[0] || 'tickets', qs = parts[1] || '';
    const p = {};
    qs.split('&').filter(Boolean).forEach(kv => { const i = kv.indexOf('='); p[kv.slice(0, i)] = decodeURIComponent(kv.slice(i + 1)); });
    const screen = p.ticket ? 'detail' : scr === 'pulso' ? 'pulso' : scr === 'categorias' ? 'cats' : scr === 'usuarios' ? 'users' : 'tickets';
    const view = p.vista === 'table' || p.vista === 'kanban' ? p.vista : 'cards';
    this.setState({
      screen, detailId: p.ticket ? Number(p.ticket) : null,
      statusFilter: ['open', 'in_progress', 'closed'].indexOf(p.estado) >= 0 ? p.estado : 'all',
      prioFilter: ['high', 'medium', 'low'].indexOf(p.prioridad) >= 0 ? p.prioridad : 'all',
      sort: p.orden === 'recientes' ? 'recientes' : 'urgencia',
      view, q: p.q || '', comment: p.ticket ? this.readDraft('t' + p.ticket) : ''
    });
  }
  copyView() {
    const url = location.href.split('#')[0] + this.viewUrl();
    const done = () => this.say('Enlace copiado. Quien lo abra ve esta misma vista.');
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(url).then(done, done); return; }
    } catch (e) {}
    done();
  }

  // ── 4. Adjuntos: se valida antes de subir, no después de la respuesta
  MIME = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  MAXMB = 5;
  kb(bytes) { return bytes >= 1048576 ? (bytes / 1048576).toFixed(1) + ' MB' : Math.round(bytes / 1024) + ' KB'; }
  pickFiles(list, tid) {
    const files = Array.prototype.slice.call(list || []);
    if (!files.length) return;
    const id = tid != null ? tid : this.state.detailId;
    files.forEach(f => {
      const uid = 'u' + Date.now() + Math.round(Math.random() * 999);
      const badType = this.MIME.indexOf(f.type) < 0;
      const badSize = f.size > this.MAXMB * 1048576;
      if (badType || badSize) {
        this.setState(st => ({
          uploads: st.uploads.concat([{ id: uid, nombre: f.name, peso: this.kb(f.size), pct: 0, failed: true, msg: badType ? 'Formato no soportado — solo JPG, PNG o WEBP' : 'Pesa ' + this.kb(f.size) + ' y el máximo es 5 MB' }])
        }));
        return;
      }
      let url = '';
      try { url = URL.createObjectURL(f); } catch (e) {}
      this.setState(st => ({ staged: st.staged.concat([{ id: uid, tid: id, file: f, nombre: f.name, peso: this.kb(f.size), url }]) }));
    });
  }
  // Vista previa antes de enviar: nada viaja hasta que la persona confirma
  sendStaged(tid) {
    const id = tid != null ? tid : this.state.detailId, list = this.state.staged.filter(x => x.tid === id);
    if (!list.length) return;
    const lk = this.replyLock(this.ticket(id));
    if (lk) { this.say(lk.msg + ' Las imágenes siguen sin enviar.'); return; }
    this.setState(st => ({ staged: st.staged.filter(x => x.tid !== id) }));
    list.forEach(s => this.uploadOne(s.file, s.url, s.id, id));
  }
  openLb(list, i) { this.setState({ lightbox: { list, i: i || 0 }, lbZ: { z: 1, x: 0, y: 0 } }); }
  // Zoom del visor: translate(x,y) scale(z) con origen al centro; p = punto relativo al centro del marco
  lbZoomAt(z2, px, py) {
    const c = this.state.lbZ || { z: 1, x: 0, y: 0 };
    const z = Math.min(6, Math.max(1, z2));
    if (z === 1) { this.setState({ lbZ: { z: 1, x: 0, y: 0 } }); return; }
    const qx = (px - c.x) / c.z, qy = (py - c.y) / c.z;
    this.setState({ lbZ: this.lbClamp({ z, x: px - z * qx, y: py - z * qy }) });
  }
  lbClamp(v) {
    const el = this._lbFrame; if (!el) return v;
    const w = el.clientWidth, hh = el.clientHeight, mx = w * (v.z - 1) / 2, my = hh * (v.z - 1) / 2;
    return { z: v.z, x: Math.max(-mx, Math.min(mx, v.x)), y: Math.max(-my, Math.min(my, v.y)) };
  }
  lbStep(d) {
    this.setState({ lbZ: { z: 1, x: 0, y: 0 } });
    this.setState(st => st.lightbox ? { lightbox: Object.assign({}, st.lightbox, { i: (st.lightbox.i + d + st.lightbox.list.length) % st.lightbox.list.length }) } : null);
  }
  uploadOne(f, url, uid, id) {
      sync.rememberFile(url, f); // el archivo real viaja al servidor cuando el adjunto queda en el ticket
      this.setState(st => ({ uploads: st.uploads.concat([{ id: uid, tid: id, nombre: f.name, peso: this.kb(f.size), pct: 8, failed: false, msg: '' }]) }));
      const step = () => {
        this.setState(st => {
          const u = st.uploads.map(x => x.id === uid ? Object.assign({}, x, { pct: Math.min(100, x.pct + 18 + Math.random() * 14) }) : x);
          return { uploads: u };
        }, () => {
          const me2 = (this.state.uploads.find(x => x.id === uid) || {});
          if (me2.pct >= 100) {
            setTimeout(() => {
              this.setState(st => ({
                uploads: st.uploads.filter(x => x.id !== uid),
                tickets: st.tickets.map(t => t.id === id ? Object.assign({}, t, {
                  adjuntos: t.adjuntos.concat([{ nombre: f.name, tipo: (f.type.split('/')[1] || 'img').toUpperCase(), peso: this.kb(f.size), url, autor: this.me().id, h: 0, at: Date.now() }])
                }) : t)
              }));
              this.say('"' + f.name + '" adjuntada al ticket.');
            }, 260);
          } else setTimeout(step, 180);
        });
      };
      setTimeout(step, 200);
  }

  STOP = ['para', 'desde', 'como', 'esta', 'este', 'tiene', 'todo', 'pero', 'cuando', 'solicitud', 'problema'];
  toks(str) {
    return String(str || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .split(/[^a-z0-9]+/).filter(x => x.length > 3 && this.STOP.indexOf(x) < 0);
  }
  dupes(titulo) {
    const a = this.toks(titulo);
    if (a.length < 2) return [];
    return this.visible().map(t => {
      const b = this.toks(t.titulo);
      const shared = a.filter(x => b.indexOf(x) >= 0).length;
      return { t, shared, score: shared / Math.max(2, Math.min(a.length, b.length)) };
    }).filter(x => x.shared >= 2 || x.score >= 0.6).sort((x, y) => y.score - x.score).slice(0, 3).map(x => x.t);
  }
  pulse() {
    const list = this.visible();
    const act = list.filter(t => t.status !== 'closed');
    const avg = a => a.length ? a.reduce((x, y) => x + y, 0) / a.length : null;
    const fr = list.map(t => this.firstResponse(t)).filter(x => x != null);
    const rs = list.map(t => this.resolution(t)).filter(x => x != null);
    const late = act.filter(t => this.sla(t).late);
    return { list, act, late, firstResp: avg(fr), frCount: fr.length, resolution: avg(rs), rsCount: rs.length, sinAsignar: act.filter(t => !t.asig).length };
  }

  // Andamio de descripción por categoría — editar acá, no en los componentes.
  // Clave: nombre de la categoría tal como está en ticket_categories.
  // blobatar.dev — cara determinista por persona. El hue se fija a uno de los cuatro acentos
  // del sistema para no abrir la paleta; la forma sigue saliendo del nombre.
  // Solo en el chat y en Actividad: en tablas y asignación las iniciales se leen mejor.
  BLOB_HUE = [260, 150, 300, 45];
  blobUrl(userId, size) {
    const u = this.user(userId);
    const seed = u ? (u.email || u.nombre) : 'tic-' + userId;
    const hue = this.BLOB_HUE[Math.abs(Number(userId) || 0) % this.BLOB_HUE.length];
    return 'https://blobatar.dev/avatar/' + encodeURIComponent(seed.toLowerCase()) +
      '?size=' + (size || 64) + '&background=circle&hue=' + hue + '&gen=2';
  }
  NAV_INK = { tickets: '#2563eb', pulso: '#16a34a', cats: '#7c3aed', users: '#ea580c', chat: '#0891b2' };
  MOSTRAR_SIN_ABRIR = true;
  ANDAMIOS = {
    'Hardware': ['Qué equipo y dónde está', 'Desde cuándo pasa', 'Qué dice el error, si aparece', 'Qué ya probé'],
    'Redes y conectividad': ['Dónde estás', 'Desde cuándo', 'Si es con cable o wifi', 'Qué ya probé'],
    'Software y licencias': ['Qué programa', 'Para quién es', 'Para cuándo lo necesitás'],
    'Accesos y cuentas': ['Qué sistema', 'Con qué usuario entrás', 'Qué mensaje te da'],
    '_': ['Qué pasa', 'Desde cuándo', 'Qué ya probé']
  };
  andamio(catId) {
    const c = this.state.cats.find(x => x.id === Number(catId));
    const campos = (c && this.ANDAMIOS[c.nombre]) || this.ANDAMIOS._;
    return campos.map(l => l + ': ').join('\n');
  }
  // Al enviar, las líneas del andamio que quedaron sin contestar no viajan:
  // un "Qué dice el error:" vacío parece contestado y es peor que no haber preguntado.
  limpiarAndamio(txt) {
    const lineas = String(txt || '').split('\n').filter(l => {
      const i = l.indexOf(':');
      if (i < 0) return l.trim().length > 0;
      return l.slice(i + 1).trim().length > 0;
    });
    return lineas.join('\n').trim();
  }
  // Respuestas rápidas del solicitante: lo que suele contestar alguien de un área a TIC
  MACROS_USER = [
    { label: 'Sigue igual', text: 'Lo probé de nuevo y sigue igual. ¿Qué más puedo revisar de mi lado?' },
    { label: 'Ya funciona', text: 'Ya funciona, gracias. Pueden cerrarlo.' },
    { label: 'Te paso captura', text: 'Te adjunto una captura de cómo se ve ahora.' },
    { label: 'Estoy en mi puesto', text: 'Estoy en mi puesto hasta las 17 h; pueden pasar cuando les quede bien.' },
    { label: '¿Novedades?', text: '¿Hay novedades? Esto me está frenando el trabajo.' }
  ];
  MACROS = [
    { label: 'Pedir más datos', text: 'Para avanzar necesito dos datos: desde cuándo pasa y si le ocurre a alguien más del área.' },
    { label: 'Voy en camino', text: 'Voy en camino a revisarlo en sitio. Si no llego en la próxima hora, escribime por acá.' },
    { label: 'Esperando repuesto', text: 'Ya se pidió el repuesto. Te aviso en cuanto llegue para coordinar el cambio.' },
    { label: 'Quedó resuelto', text: 'Quedó resuelto de nuestro lado. Si vuelve a pasar, comentá acá mismo y lo reabrimos.' }
  ];
  componentDidMount() {
    if (api.USE_API) sync.silent(() => this.setState({ tickets: [], cats: [] }));
    api.onUnauthorized(() => { if (this.state.authed) { clearInterval(this._pollIv); this.setState({ session: null, authed: false, screen: 'tickets', detailId: null, loginPhase: '', loginErr: 'Tu sesión expiró. Volvé a entrar.' }); } });
    if (api.USE_API && api.getToken()) api.checkStatus().then(d => this.applySession(d)).catch(() => {});
    this._boot = setTimeout(() => {
      this.setState({ bootFading: true });
      this._bootOut = setTimeout(() => this.setState({ booting: false }), 280);
    }, 1250);

    this._onScroll = () => {
      if (!this.state.fabSmall) this.setState({ fabSmall: true });
      clearTimeout(this._fabT);
      this._fabT = setTimeout(() => this.setState({ fabSmall: false }), 400);
    };
    window.addEventListener('scroll', this._onScroll, true);
    this.load(650);
    this._vis = () => {
      if (document.visibilityState !== 'visible' || !this.state.authed) return;
      this.setState({ sessionMsg: 'Verificando sesión…' });
      clearTimeout(this._sess);
      this._sess = setTimeout(() => {
        if (this.props.estadoError === '401') {
          this.setState({ sessionOk: false, sessionMsg: 'Sesión caducada', forced: '401' });
          return;
        }
        this.setState({ sessionOk: true, sessionMsg: 'Sesión verificada al volver' });
      }, 600);
    };
    document.addEventListener('visibilitychange', this._vis);
    this._hash = () => { if (this.state.authed) this.applyUrl(); };
    window.addEventListener('hashchange', this._hash);
    this._keys = e => {
      const s = this.state;
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test((e.target.tagName || ''));
      if (s.lightbox) {
        if (e.key === 'Escape') this.setState({ lightbox: null });
        else if (e.key === '+' || e.key === '=') this.lbZoomAt(((s.lbZ || {}).z || 1) * 1.5, 0, 0);
        else if (e.key === '-') this.lbZoomAt(((s.lbZ || {}).z || 1) / 1.5, 0, 0);
        else if (e.key === '0') this.setState({ lbZ: { z: 1, x: 0, y: 0 } });
        else if (e.key === 'ArrowRight') this.lbStep(1);
        else if (e.key === 'ArrowLeft') this.lbStep(-1);
        return;
      }
      if (e.key === 'Escape' && s.qa) { this.setState({ qa: null }); return; }
      if (e.key === 'Escape' && (s.viewOpen || s.periodOpen)) { this.setState({ viewOpen: false, periodOpen: false }); return; }
      if (e.key === 'Escape') {
        if (s.asigOpen) { this.setState({ asigOpen: false }); return; }
        if (s.filterOpen) { this.setState({ filterOpen: false }); return; }
        if (typing && (s.searchOpen || s.q) && (e.target.id === 'tic-search')) { e.target.blur(); this.setState(st => ({ q: '', searchOpen: false, swap: st.swap + 1, page: Object.assign({}, st.page, { tickets: 0 }) })); return; }
        if (s.moment) { this.endMoment(true); return; }
        if (s.modal) { this.closeModal(); return; }
        if (s.celebrate) { this.goToNew(); return; }
        if (s.screen === 'entity') { this.closeEntity(); return; }
        if (s.screen === 'detail' || s.screen === 'create' || s.screen === 'edit') { this.setState({ screen: 'tickets', detailId: null, editId: null, dir: 'back' }); return; }
        return;
      }
      if (typing || !s.authed || s.modal || s.celebrate || s.moment || s.heavyMsg) return;
      if (e.key === '/') { e.preventDefault(); this.setState({ searchOpen: true }); setTimeout(() => { const el = document.getElementById('tic-search'); if (el) el.focus(); }, 30); return; }
      if (e.key === 'c' || e.key === 'C') { e.preventDefault(); this.newForm(); return; }
      if (e.key === 'v' || e.key === 'V') {
        const order = ['cards', 'table', 'kanban'];
        this.setState(st => ({ view: order[(order.indexOf(st.view) + 1) % 3], swap: st.swap + 1 }));
        return;
      }
      const ids = this._rowIds || [];
      if (s.screen === 'tickets' && ids.length) {
        if (e.key === 'j' || e.key === 'ArrowDown') { e.preventDefault(); this.setState(st => ({ cursor: Math.min(ids.length - 1, st.cursor + 1) })); return; }
        if (e.key === 'k' || e.key === 'ArrowUp') { e.preventDefault(); this.setState(st => ({ cursor: Math.max(0, (st.cursor < 0 ? 1 : st.cursor) - 1) })); return; }
        if (e.key === 'Enter' && s.cursor >= 0 && ids[s.cursor]) { e.preventDefault(); this.openTicket(ids[s.cursor]); return; }
      }
    };
    document.addEventListener('keydown', this._keys);
    this.applyUrl();
  }
  tapped(key, name, ms) {
    return this.state.tap === key ? (name || 'iconBurst') + ' ' + (ms || 460) + 'ms var(--ease-standard) both' : 'none';
  }
  tap(key, fn) {
    clearTimeout(this._tap);
    this.setState({ tap: key });
    this._tap = setTimeout(() => this.setState({ tap: '' }), 520);
    if (fn) fn();
  }
  load(ms) {
    clearTimeout(this._load);
    this.setState({ loading: true });
    this._load = setTimeout(() => this.setState({ loading: false }), ms);
  }
  run(key, ms, done) {
    if (this.state.busy) return;
    this.setState({ busy: key });
    clearTimeout(this._busy);
    this._busy = setTimeout(() => { this.setState({ busy: '' }); done(); }, ms);
  }
  componentWillUnmount() {
    clearInterval(this._clk);
    clearTimeout(this._load); clearTimeout(this._busy); clearTimeout(this._t); clearTimeout(this._toast);
    clearTimeout(this._modal); clearTimeout(this._celeb); clearTimeout(this._heavy); clearTimeout(this._moment); clearTimeout(this._tap); clearTimeout(this._save); clearTimeout(this._sess); clearTimeout(this._land);
    if (this._keys) document.removeEventListener('keydown', this._keys);
    if (this._vis) document.removeEventListener('visibilitychange', this._vis);
    if (this._hash) window.removeEventListener('hashchange', this._hash);
    if (this._onScroll) window.removeEventListener('scroll', this._onScroll, true);
    clearTimeout(this._boot); clearTimeout(this._bootOut);
    cancelAnimationFrame(this._fillRaf);
    clearTimeout(this._fabT);
  }
  componentDidUpdate(prev) {
    if (prev.estadoError !== this.props.estadoError) {
      const v = this.props.estadoError || 'ninguno';
      this.setState({ forced: v, err500: v === '500', err500Line: 'HTTP 500 · GET /api/tickets' });
    }
    this.writeUrl();
  }
  lastAt(t) {
    const ev = this.events(t).filter(h => typeof h === 'number');
    return ev.length ? Math.min.apply(null, ev) : (t.h || 0);
  }
  // Siempre la ventana flotante, para los dos roles. A la sección se llega desde el menú o con Expandir.
  openChat(id) {
    if (this.state.screen === 'chat') { this.setState({ chatId: id == null ? null : id, chatMsg: '', chatErr: '' }); return; }
    this.setState({ chatOpen: true, chatId: id == null ? null : id, chatMsg: '', chatErr: '', chatQ: '' });
  }
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
        this.say('Deshecho. El ticket volvió a ' + this.ST[prevStatus].label + ' y recuperamos tu texto.');
      });
    } else this.say('Respuesta enviada a TIC-' + id + '.');
  }
  PAGE_SIZE = 20;
  pager(key, total) {
    const size = this.PAGE_SIZE;
    const pages = Math.max(1, Math.ceil(total / size));
    const p = Math.min(this.state.page[key] || 0, pages - 1);
    const from = total === 0 ? 0 : p * size + 1;
    const to = Math.min(total, (p + 1) * size);
    const go = d => this.setState(s => ({ page: Object.assign({}, s.page, { [key]: Math.min(pages - 1, Math.max(0, p + d)) }) }));
    return {
      show: total > 0, offset: p * size, limit: size,
      range: 'MOSTRANDO ' + from + '–' + to + ' DE ' + total,
      atStart: p === 0, atEnd: p >= pages - 1,
      prevCursor: p === 0 ? 'default' : 'pointer', nextCursor: p >= pages - 1 ? 'default' : 'pointer',
      prevOpacity: p === 0 ? '0.45' : '1', nextOpacity: p >= pages - 1 ? '0.45' : '1',
      prev: () => go(-1), next: () => go(1)
    };
  }
  ini(n) { return (n || '').split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase(); }
  // Con sesión real, "yo" es el usuario que inició sesión (se busca por correo)
  me() {
    const st = this.state, u = st.users || [];
    if (st.session) { const mine = u.find(x => x.email === st.session.email); if (mine) return mine; }
    return (st.role === 'admin' ? u[0] : u[3]) || u[0] || { id: 0, nombre: st.session ? st.session.name : '', email: '', rol: st.role, activo: true };
  }
  async applySession(data) {
    const rol = data.role === 'admin' ? 'admin' : 'usuario';
    sync.silent(() => this.setState({ session: { email: data.email, name: data.name, rol }, role: rol }));
    try { await sync.refresh(this, true); }
    catch (e) { api.logout(); clearTimeout(this._lg2); this.setState({ session: null, loginPhase: '', loginErr: e.message || 'No pudimos cargar los datos.' }); return; }
    this.setState({ email: data.email });
    this.finishLogin();
  }
  user(id) { return this.state.users.find(u => u.id === id) || null; }
  cat(id) { const c = this.state.cats.find(c => c.id === id); return c ? c.nombre : '—'; }
  ticket(id) { return this.state.tickets.find(t => t.id === id) || null; }
  say(msg, undo) {
    clearTimeout(this._t); clearTimeout(this._toast);
    this.setState({ toast: msg, toastOut: false, undo: api.USE_API ? null : (undo || null) });
    this._t = setTimeout(() => {
      this.setState({ toastOut: true });
      this._toast = setTimeout(() => this.setState({ toast: '', toastOut: false, undo: null }), 150);
    }, 2800);
  }

  visible() {
    const me = this.me();
    const all = this.state.tickets;
    return this.state.role === 'admin' ? all : all.filter(t => t.autor === me.id || t.asig === me.id);
  }

  patch(id, changes, hist, kind) {
    this.setState(s => ({
      tickets: s.tickets.map(t => {
        if (t.id !== id) return t;
        const n = Object.assign({}, t, changes);
        if (hist) n.historial = [{ autor: this.me().nombre, texto: hist, h: 0, at: Date.now(), kind: kind || 'edit' }].concat(t.historial);
        return n;
      })
    }));
  }
  take(t, sure) {
    if (!sure) { this.confirmOr('take', { title: '¿Tomar TIC-' + t.id + '?', sub: 'Queda asignado a vos' + (t.status === 'open' ? ' y pasa a En progreso.' : '.'), ok: 'Tomar ticket' }, () => this.take(t, true)); return; }
    const me = this.me(), snap = this.snapshot(t.id);
    this.optimistic('take-' + t.id,
      () => this.patch(t.id, { asig: me.id, status: t.status === 'open' ? 'in_progress' : t.status }, 'Asignado a ' + me.nombre + ' (se lo tomó)', 'assign'),
      () => this.restore(t.id, snap),
      'Tomaste TIC-' + t.id + '. Ya podés cerrarlo cuando termines.',
      'HTTP 500 · PATCH /api/tickets/' + t.id + '/assign');
  }
  reopen(t) {
    const snap = this.snapshot(t.id);
    this.optimistic('reopen-' + t.id,
      () => this.patch(t.id, { status: 'open' }, 'Ticket reabierto', 'reopen'),
      () => this.restore(t.id, snap),
      'TIC-' + t.id + ' vuelve a estar abierto.',
      'HTTP 500 · PUT /api/tickets/' + t.id);
  }

  // ── Arrastre del kanban: el gesto que el layout ya prometía
  canMove(t, to) {
    if (t.status === to) return false;
    const me = this.me(), isAdmin = this.state.role === 'admin';
    if (this.othersTicket(t)) return false;                    // lo tiene otro admin: solo lectura
    if (to === 'closed') return t.asig === me.id;              // PATCH /{ticket}/closed: el dueño
    return isAdmin;                                            // PUT con status: solo admin
  }
  moveTo(t, to, sure) {
    if (!this.canMove(t, to)) return;
    if (!sure) {
      this.confirmOr('move', { title: '¿Pasar TIC-' + t.id + ' a ' + this.ST[to].label + '?', sub: 'Hoy está en ' + this.ST[t.status].label + '. El cambio queda en la actividad y el solicitante lo ve.', ok: 'Cambiar estado', danger: to === 'closed' }, () => this.moveTo(t, to, true));
      return;
    }
    const snap = this.snapshot(t.id), was = this.ST[t.status].label, now = this.ST[to].label;
    const reopening = t.status === 'closed';
    const kind = to === 'closed' ? 'close' : reopening ? 'reopen' : 'status';
    const nota = to === 'closed' ? 'Ticket cerrado' : reopening ? 'Ticket reabierto' : 'Estado: ' + was + ' → ' + now;
    const call = to === 'closed'
      ? 'HTTP 500 · PATCH /api/tickets/' + t.id + '/closed'
      : 'HTTP 500 · PUT /api/tickets/' + t.id;
    this.setState({ landed: t.id });
    clearTimeout(this._land);
    this._land = setTimeout(() => this.setState({ landed: null }), 420);
    this.optimistic('move-' + t.id,
      () => this.patch(t.id, { status: to }, nota, kind),
      () => this.restore(t.id, snap),
      'TIC-' + t.id + ' → ' + now + '.', call);
  }

  // ── Resaltado de coincidencias: la búsqueda muestra por qué algo salió
  hl(txt, q) {
    const s = String(txt || '');
    if (!q) return [{ t: s, on: false, bg: 'transparent', k: '0' }];
    const low = s.toLowerCase(), needle = q.toLowerCase();
    const out = []; let i = 0, n = 0;
    while (true) {
      const at = low.indexOf(needle, i);
      if (at < 0) { if (i < s.length) out.push({ t: s.slice(i), on: false, bg: 'transparent', k: 'p' + (n++) }); break; }
      if (at > i) out.push({ t: s.slice(i, at), on: false, bg: 'transparent', k: 'p' + (n++) });
      out.push({ t: s.slice(at, at + needle.length), on: true, bg: '#dbeaff', k: 'm' + (n++) });
      i = at + needle.length;
    }
    return out;
  }

  PCODE = { high: 'P1', medium: 'P2', low: 'P3' };
  excerpt(txt, n) {
    const s = String(txt || '').trim();
    return s.length > (n || 116) ? s.slice(0, n || 116).replace(/\s+\S*$/, '') + '…' : s;
  }
  // B2 · una línea, y solo una, que contesta lo que el solicitante realmente pregunta.
  situacion(t) {
    const c = (t.comentarios || []).slice();
    const ultimo = c[c.length - 1];
    const equipo = c.filter(x => x.autor !== t.autor);
    if (t.status === 'closed') {
      const cierre = (t.historial || []).filter(h => h.kind === 'close')[0];
      return { texto: 'Resuelto · se cerró ' + this.ago(cierre ? cierre.h : this.idle(t)), dot: '#16a34a' };
    }
    if (ultimo && ultimo.autor !== t.autor) {
      return { texto: 'Te están esperando a vos · te preguntaron algo ' + this.ago(ultimo.h), dot: '#2563eb' };
    }
    if (t.asig || equipo.length) {
      const who = this.user(t.asig);
      const resp = equipo[equipo.length - 1];
      return {
        texto: (who ? who.nombre + ' lo está viendo' : 'El área lo está viendo') + (resp ? ' · te respondió ' + this.ago(resp.h) : ''),
        dot: '#16a34a'
      };
    }
    if (!this.MOSTRAR_SIN_ABRIR) return null;
    const n = this.state.users.filter(u => u.rol === 'admin').length;
    return { texto: 'Aún no lo abren · lo recibieron ' + n + ' personas del área', dot: '#ea580c' };
  }
  subSolicitante(list) {
    const act = list.filter(t => t.status !== 'closed');
    if (!act.length) return 'Nada pendiente por ahora';
    const esperan = act.filter(t => this.waitingOnRequester(t));
    if (esperan.length) return esperan.length === 1 ? 'Uno de tus tickets espera algo de vos' : esperan.length + ' de tus tickets esperan algo de vos';
    const viendo = act.filter(t => t.asig);
    if (viendo.length) return viendo.length === 1 ? 'Uno está en manos del área' : viendo.length + ' están en manos del área';
    return act.length === 1 ? 'Aún no lo abren en el área' : 'Aún no los abren en el área';
  }
  // B3 · el servidor solo le entrega sus propios tickets, así que toda métrica que vea
  // se calcula sobre su historia personal. Nada del área: no tiene esos datos.
  metricasPropias() {
    const me = this.me();
    const mios = this.state.tickets.filter(t => t.autor === me.id);
    const resp = [], res = [];
    mios.forEach(t => {
      const eq = (t.comentarios || []).filter(x => x.autor !== t.autor).map(x => x.h);
      if (eq.length) resp.push(t.h - Math.max.apply(null, eq));
      const cierre = (t.historial || []).filter(h => h.kind === 'close')[0];
      if (t.status === 'closed' && cierre) res.push(t.h - cierre.h);
    });
    const prom = a => a.reduce((x, y) => x + y, 0) / a.length;
    // Muestra mínima: con un solo ticket, "promedio" es una palabra vacía.
    const out = [];
    if (resp.length >= 2) out.push({ label: 'Te respondieron en', valor: this.dur(prom(resp)) });
    if (res.length >= 2) out.push({ label: 'Se resolvieron en', valor: this.dur(prom(res)) });
    const media = resp.length >= 2 ? prom(resp) : null;
    const overdue = media != null && mios.some(t => t.status !== 'closed' && !(t.comentarios || []).some(x => x.autor !== t.autor) && t.h > media);
    return { lineas: out, overdue };
  }
  // F2 · CSV a mano: 20 líneas de texto separado por comas abren en Excel.
  descargarCsv(nombre, filas) {
    const esc = v => {
      const t = String(v == null ? '' : v);
      return /[",\n]/.test(t) ? '"' + t.split('"').join('""') + '"' : t;
    };
    const txt = filas.map(f => f.map(esc).join(',')).join('\r\n');
    const url = URL.createObjectURL(new Blob(['\ufeff' + txt], { type: 'text/csv;charset=utf-8' }));
    const a = document.createElement('a');
    a.href = url; a.download = nombre;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  csvDe(pantalla) {
    const st = this.state;
    if (pantalla === 'users') {
      return ['usuarios-legumex.csv', [['Usuario', 'Correo', 'Rol', 'Carga activa']].concat(
        st.users.map(u => [u.nombre, u.email, u.rol, this.loadOf(u.id)])
      )];
    }
    if (pantalla === 'cats') {
      return ['categorias-legumex.csv', [['Categoría', 'Descripción', 'Tickets', 'Activa']].concat(
        st.cats.map(c => [c.nombre, c.descripcion || '', st.tickets.filter(t => t.cat === c.id).length, c.activo ? 'sí' : 'no'])
      )];
    }
    const base = pantalla === 'tickets' ? (this._shown || this.visible()) : this.visible();
    return [pantalla === 'tickets' ? 'tickets-legumex.csv' : 'pulso-legumex.csv', [['Código', 'Título', 'Categoría', 'Estado', 'Prioridad', 'Asignado', 'Sin mover (h)', 'Espera al solicitante']].concat(
      base.map(t => [
        'TIC-' + t.id, t.titulo, this.cat(t.cat), this.ST[t.status].label, this.PR[t.prio].label,
        (this.user(t.asig) || {}).nombre || 'sin asignar', Math.round(this.idle(t)),
        this.waitingOnRequester(t) ? 'sí' : 'no'
      ])
    )];
  }
  // F1 · la llamada queda como evento propio del historial (POST /api/ticket_histories)
  registrarLlamada(t, nombre) {
    const me = this.me();
    this.setState(st => ({
      tickets: st.tickets.map(x => x.id === t.id ? Object.assign({}, x, {
        historial: [{ autor: me.nombre, texto: 'Llamó por Teams a ' + nombre, h: 0, at: Date.now(), kind: 'call' }].concat(x.historial || [])
      }) : x)
    }));
  }
  nudge(t) {
    if (!t || this.nudgedRecently(t, this.me().nombre)) return;
    const me = this.me();
    this.setState(st => ({
      tickets: st.tickets.map(x => x.id === t.id ? Object.assign({}, x, {
        historial: [{ autor: me.nombre, texto: 'El solicitante marcó que esto lo está frenando', h: 0, at: Date.now(), kind: 'nudge' }].concat(x.historial || [])
      }) : x)
    }));
  
  }
  rowFor(t) {
    const st = this.ST[t.status], pr = this.PR[t.prio], a = this.user(t.asig), au = this.user(t.autor);
    const sla = this.sla(t), idleTxt = this.ago(this.idle(t));
    const sit = this.state.role === 'admin' ? null : this.situacion(t);
    return {
      sitShow: !!sit, sitText: sit ? sit.texto : '', sitDot: sit ? sit.dot : '#a3a3a3',
      excerpt: this.excerpt(t.desc),
      tituloParts: this.hl(t.titulo, this.state.q.trim()),
      excerptParts: this.hl(this.excerpt(t.desc), this.state.q.trim()),
      dragging: this.state.dragId === t.id,
      dragOp: this.state.dragId === t.id ? '0.45' : '1',
      dragTilt: this.state.dragId === t.id ? 'rotate(1.4deg) scale(0.99)' : 'none',
      landAnim: this.state.landed === t.id ? 'landIn 400ms var(--ease-standard) both' : 'none',
      canDrag: (this.state.role === 'admin' && !this.othersTicket(t)) || t.asig === (this.me() || {}).id,
      grab: ((this.state.role === 'admin' && !this.othersTicket(t)) || t.asig === (this.me() || {}).id) ? 'grab' : 'pointer',
      onDragStart: e => {
        if (e && e.dataTransfer) { e.dataTransfer.effectAllowed = 'move'; try { e.dataTransfer.setData('text/plain', String(t.id)); } catch (err) {} }
        this.setState({ dragId: t.id });
      },
      onDragEnd: () => this.setState({ dragId: null, dragOver: null }),
      autorIni: au ? this.ini(au.nombre) : '—', autorRing: this.ring(t.autor),
      prioCode: this.PCODE[t.prio],
      lastNote: (t.comentarios && t.comentarios.length) ? 'Última respuesta ' + this.ago(t.comentarios[t.comentarios.length - 1].h) : 'Sin respuestas todavía',
      id: t.id, code: 'TIC-' + t.id, titulo: t.titulo, cat: this.cat(t.cat),
      statusLabel: st.label, statusBg: st.bg, statusDot: st.dot,
      prioLabel: pr.label, prioDot: pr.dot,
      glyph: this.cat(t.cat).slice(0, 1).toUpperCase(),
      hasAsig: !!a, ini: a ? this.ini(a.nombre) : '', ring: this.ring(t.asig), asig: a ? a.nombre : 'Sin asignar',
      autor: (this.user(t.autor) || {}).nombre || '—', updated: idleTxt,
      slaShow: this.state.role === 'admin' ? (sla.late || sla.watch || sla.waiting) : !!sla.waiting, slaLate: sla.late, slaWatch: sla.watch, slaWaiting: !!sla.waiting,
      slaLabel: sla.label, slaTitle: sla.full || sla.label,
      slaBg: sla.late ? '#ffffff' : 'transparent', slaBorder: sla.late ? '1px solid #ea580c' : sla.waiting ? '1px solid #d4d4d4' : '1px solid transparent',
      slaInk: sla.late ? '#171717' : sla.waiting ? '#404040' : '#525252',
      canTake: this.state.role === 'admin' && !t.asig && t.status !== 'closed',
      takeLabel: 'Tomar TIC-' + t.id,
      take: e => { if (e && e.stopPropagation) { e.stopPropagation(); e.preventDefault(); } this.tap('take-' + t.id, () => this.take(t)); },
      tapTake: this.tapped('take-' + t.id),
      createdTitle: 'Creado ' + t.creado + ' · última actividad ' + idleTxt,
      statusOpen: t.status === 'open', statusProg: t.status === 'in_progress', statusClosed: t.status === 'closed',
      hasFiles: t.adjuntos.length > 0, fileCount: String(t.adjuntos.length),
      hasComments: t.comentarios.length > 0, commentCount: String(t.comentarios.length),
      open: () => this.openTicket(t.id),
      key: e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.openTicket(t.id); } },
      canEdit: (this.state.role === 'admin' && !this.othersTicket(t)) || (this.state.role !== 'admin' && t.autor === this.me().id && t.status !== 'closed'),
      editLabel: 'Editar TIC-' + t.id,
      canAssign: this.state.role === 'admin' && t.status !== 'closed',
      chatLabel: 'Abrir la conversación de TIC-' + t.id,
      chatGo: e => {
        if (e && e.stopPropagation) { e.stopPropagation(); e.preventDefault(); }
        this.setState({ chatOpen: true, chatId: t.id, chatMsg: '', chatErr: '', chatQ: '' });
      },
      asigHas: !!t.asig, asigNone: !t.asig,
      asigIni: t.asig ? this.ini((this.user(t.asig) || {}).nombre || '') : '',
      asigFirst: t.asig ? ((this.user(t.asig) || {}).nombre || '').split(' ')[0] : '',
      asigTitle: t.asig ? 'Asignado a ' + ((this.user(t.asig) || {}).nombre || '') + ' · cambiar' : 'Asignar sin abrir el ticket',
      asigBorder: t.asig ? 'solid #e5e5e5' : 'dashed #a3a3a3',
      qaOpen: this.state.qa === t.id,
      qaBg: this.state.qa === t.id ? '#f5f5f5' : '#ffffff',
      stop: e => { if (e && e.stopPropagation) e.stopPropagation(); },
      qaToggle: e => { if (e && e.stopPropagation) e.stopPropagation(); this.setState(st => ({ qa: st.qa === t.id ? null : t.id })); },
      qaClear: e => { if (e && e.stopPropagation) e.stopPropagation(); this.quickAssign(t, null); },
      qaClosed: this.state.qa !== t.id,
      asigTip: t.asig ? ((this.user(t.asig) || {}).nombre || 'Otra persona') + (t.asig === this.me().id ? ' (yo)' : '') : 'Sin asignar',
      asigTipSub: !t.asig ? 'Click para asignar o tomarlo' : t.asig === this.me().id ? 'Lo tenés vos · click para reasignar' : 'Lo tiene · click para reasignar o tomarlo',
      // Orden: quien lo tiene hoy, después yo ("Tomarlo yo"), después el resto por carga
      qaOpts: this.state.users.filter(u => u.rol === 'admin' && u.activo).sort((a, b) => (b.id === t.asig) - (a.id === t.asig) || (b.id === this.me().id) - (a.id === this.me().id) || this.loadOf(a.id).n - this.loadOf(b.id).n).map(u => Object.assign(this.asigOptLabel(u, t.asig), {
        ini: this.ini(u.nombre), carga: this.loadOf(u.id).n + (this.loadOf(u.id).n === 1 ? ' activo' : ' activos'),
        bg: t.asig === u.id ? '#f5f5f5' : 'transparent',
        go: e => { if (e && e.stopPropagation) e.stopPropagation(); this.quickAssign(t, u.id); }
      })),
      edit: e => { if (e && e.stopPropagation) { e.stopPropagation(); e.preventDefault(); } this.openEdit(t); }
    };
  }

  // Bordes del área de scroll: arriba solo si bajaste, abajo solo si queda contenido
  sheetEdges(el) {
    const on = el.scrollTop > 4 ? '1' : '0';
    const fb = el.scrollTop + el.clientHeight >= el.scrollHeight - 4 ? '1' : '0.12';
    if (el.style.getPropertyValue('--fadeOn') !== on) el.style.setProperty('--fadeOn', on);
    if (el.style.getPropertyValue('--fb') !== fb) el.style.setProperty('--fb', fb);
  }
  // Admin: su ticket (asignado a él) o, para editar/cambiar estado, uno sin dueño. Si lo tiene otro admin, solo lectura.
  othersTicket(t) { return this.state.role === 'admin' && !!t && !!t.asig && t.asig !== this.me().id; }
  // Responder: el solicitante siempre; un admin solo si el ticket es suyo (asignado o tomado). Ver, siempre.
  replyLock(t) {
    if (!t) return null;
    const me = this.me(), isAdmin = this.state.role === 'admin';
    if (t.status === 'closed') {
      if (!isAdmin) return t.autor === me.id ? { msg: 'Este ticket está cerrado. Si el problema volvió, abrí uno nuevo que lo menciona.', take: false, follow: true } : { msg: 'Este ticket está cerrado.', take: false };
      if (this.othersTicket(t)) return { msg: 'Ticket cerrado de ' + ((this.user(t.asig) || {}).nombre || 'otra persona') + '. Solo lectura.', take: false };
      return { msg: 'Ticket cerrado. Para seguir la conversación o subir imágenes, reabrilo.', take: false, reopen: true };
    }
    if (!isAdmin) return null;
    if (t.asig === me.id) return null;
    if (!t.asig) return { msg: 'Nadie lo tiene todavía. Tomalo para responder; así el solicitante sabe quién lo atiende.', take: true };
    return { msg: 'Lo tiene ' + ((this.user(t.asig) || {}).nombre || 'otra persona') + '. Podés leerlo; para escribir, editar o cerrarlo tiene que pasar a vos.', take: true, steal: true };
  }
  // D2/D4 · desactivar o reactivar usuarios. Un admin con tickets activos los pasa al de menor carga.
  toggleUser(u) {
    const me = this.me();
    if (u.id === me.id) return;
    if (u.activo === false) {
      this.confirmOr('activate', { title: '¿Activar a ' + u.nombre + '?', sub: 'Vuelve a poder iniciar sesión' + (u.rol === 'admin' ? ' y a aparecer para asignar.' : '.'), ok: 'Activar' }, () => {
        this.setState(st => ({ users: st.users.map(x => x.id === u.id ? Object.assign({}, x, { activo: true }) : x) }));
        this.say(u.nombre + ' puede volver a iniciar sesión.');
      });
      return;
    }
    const act = this.state.tickets.filter(t => t.asig === u.id && t.status !== 'closed');
    const alt = u.rol === 'admin' && act.length ? this.state.users.filter(x => x.rol === 'admin' && x.activo !== false && x.id !== u.id).sort((a, b) => this.loadOf(a.id).n - this.loadOf(b.id).n)[0] : null;
    this.openModal({ type: 'confirm', kind: 'fn', danger: true, title: '¿Desactivar a ' + u.nombre + '?',
      sub: 'Ya no va a poder iniciar sesión. Sus tickets y comentarios quedan como están.' + (act.length ? ' Tiene ' + act.length + (act.length === 1 ? ' ticket activo' : ' tickets activos') + (alt ? ': pasan a ' + alt.nombre + ', que tiene la menor carga.' : ': quedan sin asignar.') : ''),
      ok: 'Desactivar usuario',
      run: () => {
        const ids = act.map(t => t.id);
        this.setState(st => ({
          users: st.users.map(x => x.id === u.id ? Object.assign({}, x, { activo: false }) : x),
          tickets: st.tickets.map(t => ids.indexOf(t.id) >= 0 ? Object.assign({}, t, { asig: alt ? alt.id : null,
            historial: [{ autor: me.nombre, texto: alt ? 'Asignado a ' + alt.nombre + ' (' + u.nombre + ' quedó inactivo)' : 'Sin asignar (' + u.nombre + ' quedó inactivo)', h: 0, at: Date.now(), kind: 'assign' }].concat(t.historial || []) }) : t)
        }));
        this.say(u.nombre + ' ya no puede iniciar sesión.' + (act.length ? (alt ? ' Sus tickets pasaron a ' + alt.nombre + '.' : (api.USE_API ? ' Sus tickets siguen a su nombre: reasignalos.' : ' Sus tickets quedaron sin asignar.')) : ''));
      } });
  }
  // Admin que pasa a usuario: sus tickets activos no pueden quedar a nombre de alguien que ya no atiende
  demoteMove(u) {
    const act = this.state.tickets.filter(t => t.asig === u.id && t.status !== 'closed');
    const alt = act.length ? this.state.users.filter(x => x.rol === 'admin' && x.activo !== false && x.id !== u.id).sort((a, b) => this.loadOf(a.id).n - this.loadOf(b.id).n)[0] : null;
    return { act, alt, note: act.length ? ' Tiene ' + act.length + (act.length === 1 ? ' ticket activo' : ' tickets activos') + (alt ? ': pasan a ' + alt.nombre + ', que tiene la menor carga.' : ': quedan sin asignar.') : '' };
  }
  demoteApply(u, dm) {
    if (!dm.act.length) return;
    if (api.USE_API && !dm.alt) return; // la API no deja tickets sin asignar: siguen a su nombre
    const ids = dm.act.map(t => t.id), me = this.me();
    this.setState(st => ({ tickets: st.tickets.map(t => ids.indexOf(t.id) >= 0 ? Object.assign({}, t, { asig: dm.alt ? dm.alt.id : null,
      historial: [{ autor: me.nombre, texto: dm.alt ? 'Asignado a ' + dm.alt.nombre + ' (' + u.nombre + ' pasó a usuario)' : 'Sin asignar (' + u.nombre + ' pasó a usuario)', h: 0, at: Date.now(), kind: 'assign' }].concat(t.historial || []) }) : t) }));
  }
  followUp(t) {
    this.newForm();
    this.setState({ chatOpen: false, form: { titulo: 'Sigue pasando: ' + t.titulo, desc: 'Vuelve a pasar lo de TIC-' + t.id + '.\n\nQué pasa ahora: ', cat: t.cat, status: 'open', prio: t.prio }, draftFound: false });
  }
  resolvedSent(t) { return ((t || {}).historial || []).some(x => x.texto === 'El solicitante confirmó que se resolvió'); }
  markResolved(t) {
    if (!t || this.resolvedSent(t)) return;
    const me = this.me();
    this.confirmOr('resolved', { title: '¿Avisar que TIC-' + t.id + ' ya se resolvió?', sub: 'Se publica "Ya funciona, pueden cerrarlo" y el área lo cierra. Si vuelve a pasar, podés abrir uno nuevo desde el ticket.', ok: 'Avisar al área' }, () => {
      if (this.resolvedSent(this.ticket(t.id))) return;
      this.setState(st => ({ tickets: st.tickets.map(x => x.id === t.id ? Object.assign({}, x, {
        comentarios: (x.comentarios || []).concat([{ autor: me.id, texto: 'Ya funciona, gracias. Pueden cerrarlo.', h: 0, at: Date.now() }]),
        historial: [{ autor: me.nombre, texto: 'El solicitante confirmó que se resolvió', h: 0, at: Date.now(), kind: 'status' }].concat(x.historial || [])
      }) : x) }));
      this.pill();
      this.say('Listo. El área ve que ya funciona y lo cierra.');
    });
  }
  // Confirmación con "no volver a preguntar en esta sesión" (sessionStorage mt-skip-{key})
  confirmOr(key, opts, run) {
    let skip = false; try { skip = sessionStorage.getItem('mt-skip-' + key) === '1'; } catch (e) {}
    if (skip) { run(); return; }
    this.openModal(Object.assign({ type: 'confirm', kind: 'fn', skipKey: key, run }, opts));
  }
  // Etiqueta de cada persona en los selectores de asignación (menú rápido y detalle)
  asigOptLabel(u, cur) {
    const mine = u.id === this.me().id, isCur = cur === u.id, take = mine && !isCur;
    return { nombre: take ? 'Tomarlo yo' : u.nombre, full: mine ? u.nombre + ' (yo)' : u.nombre, weight: take ? '600' : '400',
      hasTag: isCur || mine, tag: isCur ? (mine ? 'YO · ACTUAL' : 'ACTUAL') : 'YO', tagBg: isCur ? '#dcfce7' : '#f5f5f5' };
  }
  // Asignar desde afuera: mismo PATCH que el detalle, sin abrir el ticket
  quickAssign(t, id, sure) {
    if (!sure && !t.asig && id) {
      this.setState({ qa: null });
      const to = (this.user(id) || {}).nombre;
      this.confirmOr('assign', { title: '¿Asignar TIC-' + t.id + ' a ' + (id === this.me().id ? 'vos' : to) + '?', sub: t.status === 'open' ? 'Pasa a En progreso y aparece en su bandeja.' : 'Aparece en su bandeja.', ok: 'Asignar' }, () => this.quickAssign(t, id, true));
      return;
    }
    if (!sure && t.asig && t.asig !== id) {
      this.setState({ qa: null });
      const prev = (this.user(t.asig) || {}).nombre || 'otra persona';
      const to = id ? (this.user(id) || {}).nombre : null;
      this.confirmOr(id ? 'reassign' : 'unassign', id
        ? (id === this.me().id
          ? { title: '¿Tomar TIC-' + t.id + '?', sub: 'Hoy lo tiene ' + prev + '. Pasa a vos y a ' + prev.split(' ')[0] + ' le deja de aparecer en su bandeja.', ok: 'Tomar ticket' }
          : { title: '¿Reasignar TIC-' + t.id + ' a ' + to + '?', sub: 'Hoy lo tiene ' + prev + '. Le deja de aparecer en su bandeja.', ok: 'Reasignar' })
        : { title: '¿Quitar la asignación de TIC-' + t.id + '?', sub: prev + ' deja de tenerlo y vuelve a la cola sin asignar.', ok: 'Quitar asignación', danger: true },
        () => this.quickAssign(t, id, true));
      return;
    }
    this.setState({ qa: null });
    if (t.asig === id) return;
    const nombre = id ? this.user(id).nombre : 'nadie';
    const snap = this.snapshot(t.id);
    this.optimistic('assign-' + t.id,
      () => this.patch(t.id, { asig: id, status: id && t.status === 'open' ? 'in_progress' : t.status }, id ? 'Asignado a ' + nombre + (id === this.me().id ? ' (se lo tomó)' : '') : 'Asignación quitada', 'assign'),
      () => this.restore(t.id, snap),
      id ? (id === this.me().id ? 'Tomaste TIC-' + t.id + '.' : 'TIC-' + t.id + ' asignado a ' + nombre.split(' ')[0] + '.') : 'TIC-' + t.id + ' quedó sin asignar.',
      'HTTP 500 · PATCH /api/tickets/' + t.id + '/assign');
    this.pill(900);
  }
  // Saludo según la hora local
  saludo() {
    const h = new Date().getHours();
    const n = (this.me().nombre || '').split(' ')[0];
    return (h < 6 ? 'Buenas noches' : h < 13 ? 'Buenos días' : h < 20 ? 'Buenas tardes' : 'Buenas noches') + ', ' + n;
  }
  seg(active) { return active ? { bg: '#ffffff', border: '1px solid #e5e5e5' } : { bg: 'transparent', border: '1px solid transparent' }; }

  // Editar: admin en lo suyo o sin dueño; usuario en lo suyo sin cerrar. Misma regla que los botones.
  canEditT(t) {
    if (!t) return false;
    return this.state.role === 'admin' ? !this.othersTicket(t) : (t.autor === this.me().id && t.status !== 'closed');
  }
  openEdit(t) {
    if (!this.canEditT(t)) { this.say(this.othersTicket(t) ? 'Lo tiene ' + ((this.user(t.asig) || {}).nombre || 'otra persona') + '. Para editarlo tiene que pasar a vos.' : 'Este ticket ya no se puede editar.'); return; }
    this.setState({
      screen: 'edit', editId: t.id, dir: 'fwd', formErr: null,
      form: { titulo: t.titulo, desc: t.desc, cat: String(t.cat), status: t.status, prio: t.prio }
    });
  }
  saveEdit() {
    const s = this.state, f = s.form, id = s.editId, prev = this.ticket(id) || {};
    if (!this.canEditT(prev)) {
      this.setState({ screen: s.detailId === id ? 'detail' : 'tickets', editId: null, dir: 'back', formErr: null });
      this.say(this.othersTicket(prev) ? 'Mientras editabas, TIC-' + id + ' pasó a ' + ((this.user(prev.asig) || {}).nombre || 'otra persona') + '. No se guardó nada.' : 'TIC-' + id + ' ya no se puede editar. No se guardó nada.');
      return;
    }
    const changes = { titulo: f.titulo.trim(), desc: f.desc.trim(), cat: Number(f.cat) };
    const notes = [];
    if (s.role === 'admin') {
      if (f.status !== prev.status && f.status !== 'closed' && prev.status !== 'closed') { changes.status = f.status; notes.push('Estado cambiado a ' + this.ST[f.status].label); }
      if (f.prio !== prev.prio) { changes.prio = f.prio; notes.push('Prioridad cambiada a ' + this.PR[f.prio].label); }
    }
    if (changes.titulo !== prev.titulo || changes.desc !== prev.desc || changes.cat !== prev.cat) notes.push('Ticket editado');
    this.patch(id, changes, notes.length ? notes.join(' · ') : null, changes.status ? 'status' : 'edit');
    this.setState({
      screen: s.detailId === id ? 'detail' : 'tickets', editId: null, dir: 'back', formErr: null,
      form: { titulo: '', desc: '', cat: '', status: 'open', prio: 'medium' }
    });
    this.say(notes.length ? 'TIC-' + id + ' actualizado.' : 'Sin cambios para guardar.');
  }
  openEntity(cfg) { this.setState({ entity: Object.assign({ err: '' }, cfg), screen: 'entity', dir: 'fwd' }); }
  closeEntity() { this.setState(st => ({ screen: st.entity && st.entity.type === 'user' ? 'users' : 'cats', entity: null, dir: 'back' })); }
  saveEntity(sure) {
    const e = this.state.entity;
    if (!e) return;
    const name = String(e.name || '').trim();
    if (!name) { this.setState({ entity: Object.assign({}, e, { err: 'El nombre no puede quedar vacío.' }) }); return; }
    if (e.type === 'user' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(e.email || '').trim())) {
      this.setState({ entity: Object.assign({}, e, { err: 'Ingresá un correo válido, por ejemplo nombre@tic.gob.' }) }); return;
    }
    // La API pide contraseña para crear y también para guardar cambios de un usuario
    if (api.USE_API && e.type === 'user' && String(e.pwd || '').length < 8) {
      this.setState({ entity: Object.assign({}, e, { err: 'Escribí una contraseña de al menos 8 caracteres.' }) }); return;
    }
    if (api.USE_API && e.type === 'user') sync.rememberPassword(String(e.email || '').trim(), e.pwd);
    if (e.id && !sure) {
      const run = () => this.heavy('Guardando los cambios', 900, () => this.saveEntity(true));
      if (e.type === 'cat') {
        const pc = this.state.cats.find(c => c.id === e.id) || {};
        if (pc.nombre === name && (pc.descripcion || '') === (e.desc || '')) { this.closeEntity(); return; }
        this.confirmOr('edit-cat', { title: '¿Guardar los cambios en "' + pc.nombre + '"?', sub: 'El nombre nuevo se ve en todos los tickets de esta categoría, también en los viejos.', ok: 'Guardar cambios' }, run);
      } else {
        const pu = this.state.users.find(u => u.id === e.id) || {};
        const rol = e.rol || pu.rol;
        if (pu.nombre === name && pu.email === String(e.email).trim() && pu.rol === rol && !(api.USE_API && e.pwd)) { this.closeEntity(); return; }
        const rolCambia = pu.rol !== rol;
        const dmN = rolCambia && rol === 'usuario' ? this.demoteMove(pu).note : '';
        this.confirmOr('edit-user', { title: '¿Guardar los cambios de ' + pu.nombre + '?', sub: rolCambia ? 'Cambia su rol a ' + (rol === 'admin' ? 'Administrador' : 'Usuario') + ': ' + (rol === 'admin' ? 'va a ver y gestionar todos los tickets.' : 'deja de ver los tickets de los demás.' + dmN) : 'Los datos nuevos se usan desde su próximo inicio de sesión.', ok: 'Guardar cambios', danger: rolCambia }, run);
      }
      return;
    }
    if (e.type === 'cat') {
      if (e.id) {
        this.setState(st => ({ cats: st.cats.map(c => c.id === e.id ? Object.assign({}, c, { nombre: name, descripcion: e.desc }) : c) }));
        this.say('Categoría actualizada.');
      } else {
        const id = Math.max.apply(null, this.state.cats.map(c => c.id)) + 1;
        this.setState(st => ({ cats: st.cats.concat([{ id, nombre: name, descripcion: e.desc || '', activo: true }]) }));
        this.say('Categoría creada y disponible.');
      }
    } else {
      if (e.id) {
        const pu0 = this.state.users.find(u => u.id === e.id) || {};
        const dm = pu0.rol === 'admin' && e.rol === 'usuario' ? this.demoteMove(pu0) : null;
        if (dm) this.demoteApply(pu0, dm);
        this.setState(st => ({ users: st.users.map(u => u.id === e.id ? Object.assign({}, u, { nombre: name, email: String(e.email).trim(), rol: e.rol }) : u) }));
        this.say('Usuario actualizado.' + (dm && dm.act.length ? (dm.alt ? ' Sus tickets pasaron a ' + dm.alt.nombre + '.' : (api.USE_API ? ' Sus tickets siguen a su nombre: reasignalos.' : ' Sus tickets quedaron sin asignar.')) : ''));
      } else {
        const id = Math.max.apply(null, this.state.users.map(u => u.id)) + 1;
        this.setState(st => ({ users: st.users.concat([{ id, nombre: name, email: String(e.email).trim(), rol: e.rol || 'usuario', activo: true }]) }));
        this.say('Usuario creado.');
      }
    }
    this.closeEntity();
  }
  openModal(m) { clearTimeout(this._modal); this.setState({ modal: m, modalClosing: false }); }
  closeModal(after) {
    this.setState({ modalClosing: true });
    clearTimeout(this._modal);
    this._modal = setTimeout(() => { this.setState({ modal: null, modalClosing: false }); if (after) after(); }, 150);
  }

  validateTicket() {
    const f = this.state.form;
    const err = {
      titulo: f.titulo.trim().length < 6 ? 'Contanos qué pasa — con una frase alcanza.' : '',
      desc: f.desc.trim().length < 15 ? 'Agregá algo más de detalle: qué pasa y desde cuándo.' : '',
      cat: !f.cat ? true : false
    };
    return (err.titulo || err.desc || err.cat) ? err : null;
  }
  // A3 · el número lo arma el cliente, así que se deriva del máximo de la lista cargada
  // y se salta cualquiera que ya exista (la colisión real la contesta el 422 del servidor).
  nextNumber() {
    const ids = this.state.tickets.map(t => t.id);
    let n = (ids.length ? Math.max.apply(null, ids) : 1041) + 1;
    while (ids.indexOf(n) >= 0) n++;
    return n;
  }
  submitTicket() {
    if (this.state.form && this.state.form.status === 'closed') this.setState(st => ({ form: Object.assign({}, st.form, { status: 'open' }) }));
    const f = Object.assign({}, this.state.form, { status: this.state.form.status === 'closed' ? 'open' : this.state.form.status });
    const err = this.validateTicket();
    if (err) { this.setState({ formErr: err }); return; }
    const id = this.nextNumber();
    const me = this.me();
    const desc = this.limpiarAndamio(f.desc);
    const nuevo = {
      id, titulo: f.titulo.trim(), desc, cat: Number(f.cat), status: 'open', prio: 'medium',
      autor: me.id, asig: null, creado: 'hoy', h: 0, comentarios: [],
      historial: [{ autor: me.nombre, texto: 'Ticket creado · prioridad Media asignada por el sistema', h: 0, at: Date.now(), kind: 'create' }], adjuntos: []
    };
    // A2 · POST /api/tickets manda el correo dentro de la misma operación: si el correo falla
    // devuelve 500 con el ticket ya creado. Antes de dar error, se re-pide GET /api/tickets
    // y se busca el número enviado. Reintentar a ciegas deja dos tickets que nadie puede borrar.
    const correoFallo = this.state.forced === '500 al crear';
    const lista = [nuevo].concat(this.state.tickets);
    const confirmado = lista.some(t => t.id === id);
    if (correoFallo && !confirmado) { this.setState({ formErr: { banner: 'servidor' } }); return; }
    this.saveDraft('nuevo', '');
    this.setState(st => ({
      tickets: lista, seq: id, formErr: null, draftFound: false,
      form: { titulo: '', desc: '', cat: '', status: 'open', prio: 'medium' },
      celebrate: { id, titulo: nuevo.titulo, cat: this.cat(nuevo.cat), correoFallo }
    }));
    this.pill();
    clearTimeout(this._celeb);
    this._celeb = setTimeout(() => this.goToNew(), correoFallo ? 4200 : 2000);
  }
  goToNew() {
    const c = this.state.celebrate;
    if (!c) return;
    clearTimeout(this._celeb);
    this.setState({ celebrate: null, screen: 'detail', detailId: c.id, dir: 'fwd', comment: '', commentErr: '' });
    this.say(c.correoFallo
      ? 'TIC-' + c.id + ' creado. El aviso por correo puede no haber salido.'
      : 'TIC-' + c.id + ' creado. Te avisamos cuando lo asignen.');
  }

  addComment(alsoClose) {
    if (this.replyLock(this.ticket(this.state.detailId))) return;
    if (alsoClose && (this.ticket(this.state.detailId) || {}).asig !== this.me().id) { this.setState({ commentErr: 'Solo quien tiene asignado el ticket puede cerrarlo.' }); return; }
    const txt = this.state.comment.trim();
    if (!txt) { this.setState({ commentErr: 'Escribí un comentario antes de publicar.' }); return; }
    const me = this.me(), id = this.state.detailId;
    this.saveDraft('t' + id, '');
    const prev = this.ticket(id) || {}, prevStatus = prev.status, prevHist = prev.historial, prevComments = prev.comentarios;
    this.setState(s => ({
      comment: '', commentErr: '',
      tickets: s.tickets.map(t => t.id === id ? Object.assign({}, t, { comentarios: t.comentarios.concat([{ autor: me.id, texto: txt, h: 0, at: Date.now() }]) }) : t)
    }));
    if (!alsoClose) { this.say('Comentario publicado.'); return; }
    this.patch(id, { status: 'closed' }, 'Ticket cerrado con una última respuesta', 'close');
    this.cierre(id, () => {
      clearTimeout(this._moment);
      this.setState(st => ({
        tickets: st.tickets.map(t => t.id === id ? Object.assign({}, t, { status: prevStatus, historial: prevHist, comentarios: prevComments }) : t),
        moment: null, comment: txt
      }));
      this.say('Deshecho. El ticket volvió a ' + this.ST[prevStatus].label + ' y recuperamos tu texto.');
    });
  }

  // Notificaciones derivadas en cliente: GET /api/tickets cada 45 s + comparación. Sin endpoint propio.
  notifList(me, isAdmin) {
    const K = { create: ['NUEVO', '#15803d'], assign: ['ASIGNACIÓN', '#525252'], status: ['ESTADO', '#525252'], close: ['CERRADO', '#525252'], reopen: ['REABIERTO', '#c2410c'], prio: ['PRIORIDAD', '#c2410c'], comment: ['RESPUESTA', '#2563eb'] };
    const read = this.readSet(me), out = [];
    this.state.tickets.forEach(t => {
      if (!isAdmin && t.autor !== me.id && t.asig !== me.id) return;
      // Admin: lo nuevo, lo sin dueño y lo suyo. De los tickets de otro admin, solo si lo nombran (le asignaron o le sacaron uno).
      const adminMine = !isAdmin || !t.asig || t.asig === me.id;
      (t.historial || []).forEach(e => {
        if (!K[e.kind] || e.autor === me.nombre || e.h > 72) return;
        if (e.kind === 'create' && !isAdmin) return;
        if (!adminMine && e.kind !== 'create' && !(e.kind === 'assign' && (e.texto || '').indexOf(me.nombre) >= 0)) return;
        const toMe = e.kind === 'assign' && (e.texto || '').indexOf(me.nombre) >= 0;
        out.push({ tid: t.id, h: e.h, key: t.id + '|' + e.kind + '|' + e.h + '|' + (e.texto || '').slice(0, 24),
          kind: toMe ? 'TE ASIGNARON' : K[e.kind][0], kindColor: toMe ? '#2563eb' : K[e.kind][1],
          title: e.kind === 'create' ? t.titulo : e.texto, sub: e.kind === 'create' ? 'Abierto por ' + e.autor : e.autor + ' · ' + t.titulo });
      });
      (t.comentarios || []).forEach(c => {
        if (c.autor === me.id || c.h > 72) return;
        if (isAdmin && (!adminMine || c.autor !== t.autor)) return; // admin: solo respuestas del solicitante en lo suyo o sin dueño
        const u = this.user(c.autor) || {};
        out.push({ tid: t.id, h: c.h, chat: true, key: t.id + '|comment|' + c.h + '|' + (c.texto || '').slice(0, 24),
          kind: K.comment[0], kindColor: K.comment[1], title: (u.nombre || 'Alguien') + ' respondió', sub: '“' + (c.texto || 'Adjuntó una imagen') + '”' });
      });
    });
    out.forEach(n => { n.read = !!read[n.key]; });
    return out.sort((a, b) => a.h - b.h).slice(0, 30);
  }
  readSet(me) {
    if (!this._read || this._readFor !== me.id) {
      this._readFor = me.id;
      try { this._read = JSON.parse(localStorage.getItem('mt-notif-read-' + me.id) || '{}'); } catch (e) { this._read = {}; }
    }
    return this._read;
  }
  markRead(me, keys) {
    const r = this.readSet(me); keys.forEach(k => { r[k] = 1; });
    try { localStorage.setItem('mt-notif-read-' + me.id, JSON.stringify(r)); } catch (e) {}
    this.forceUpdate();
  }
  // Solo prototipo: simula que el próximo sondeo trae una respuesta nueva
  // Sondeo: GET /api/tickets cada 45 s. Mientras viaja, el isotipo reemplaza a la campana.
  poll(then) {
    if (!this.state.authed) return;
    this.setState({ notifPolling: true });
    if (api.USE_API) { sync.refresh(this).catch(() => {}).finally(() => this.setState({ notifPolling: false })); return; }
    clearTimeout(this._pl); this._pl = setTimeout(() => { this.setState({ notifPolling: false }); if (then) then(); }, 900);
  }
  liveEvent(sure) {
    if (!this.state.authed) return;
    if (api.USE_API) { this.poll(); return; } // con API, lo nuevo llega del servidor
    if (!sure) { this.poll(() => this.liveEvent(true)); return; }
    const me = this.me(), isAdmin = this.state.role === 'admin';
    const t = this.state.tickets.find(x => x.status !== 'closed' && (isAdmin || x.autor === me.id || x.asig === me.id) && ((x.autor && x.autor !== me.id) || (x.asig && x.asig !== me.id)));
    if (!t) return;
    const who = t.autor !== me.id ? t.autor : t.asig;
    this.setState(st => ({ notifPing: true, tickets: st.tickets.map(x => x.id === t.id ? Object.assign({}, x, { comentarios: (x.comentarios || []).concat([{ autor: who, texto: 'Te paso más detalles: volvió a pasar recién, a las ' + new Date().toTimeString().slice(0, 5) + '.', h: 0, at: Date.now() }]) }) : x) }));
    clearTimeout(this._ping); this._ping = setTimeout(() => this.setState({ notifPing: false }), 700);
  }
  renderVals() {
    const s = this.state, me = this.me(), isAdmin = s.role === 'admin';
    const v = {};

    v.showLogin = !s.authed;
    v.onLoginMove = this._onLoginMove || (this._onLoginMove = e => {
      const el = e.currentTarget, r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (((e.clientX - r.left) / r.width) - 0.5).toFixed(3));
      el.style.setProperty('--my', (((e.clientY - r.top) / r.height) - 0.5).toFixed(3));
    });
    v.onLoginLeave = this._onLoginLeave || (this._onLoginLeave = e => { e.currentTarget.style.setProperty('--mx', '0'); e.currentTarget.style.setProperty('--my', '0'); });
    if (!s.authed) {
      const gt = new Date(Date.now() + (new Date().getTimezoneOffset() - 360) * 60000);
      const hh = gt.getHours(), mm = gt.getMinutes(), wd = gt.getDay();
      v.gtClock = String(hh).padStart(2, '0') + ':' + String(mm).padStart(2, '0');
      const open = wd >= 1 && wd <= 5 && hh >= 7 && hh < 17;
      v.deskState = open ? 'Atendiendo' : 'Cerrada';
      v.deskDot = open ? '#16a34a' : '#a3a3a3';
      v.deskPulse = open ? 'deskPing 2.4s ease-out infinite' : 'none';
      v.loginHello = hh < 12 ? 'Buenos días' : hh < 19 ? 'Buenas tardes' : 'Buenas noches';
      const tk = s.tickets || [];
      const wk = Date.now() - 7 * 864e5;
      v.loginClosedWeek = String(tk.filter(t => t.status === 'closed' && new Date(t.closedAt || t.updatedAt || 0).getTime() >= wk).length || tk.filter(t => t.status === 'closed').length);
      try { const p = this.pulse(); v.loginFirstResp = p && p.firstResp != null ? this.dur(p.firstResp) : '—'; } catch (e) { v.loginFirstResp = '—'; }
    }
    const bare = true;
    const shortVh = typeof window !== 'undefined' && window.innerHeight < 652;
    const noPageScroll = (s.screen === 'chat' && !shortVh) || s.screen === 'users';
    v.sheetOverflow = noPageScroll ? 'hidden' : 'auto';
    v.onSheetScroll = this._onSheetScroll || (this._onSheetScroll = e => this.sheetEdges(e.currentTarget));
    if (typeof requestAnimationFrame !== 'undefined') requestAnimationFrame(() => { const el = document.querySelector('[data-sheet]'); if (el) this.sheetEdges(el); });
    v.padBottom = noPageScroll ? '16px' : '96px';
    v.sheetMask = s.screen === 'tickets' ? 'linear-gradient(to bottom, #000 0, #000 calc(100% - 72px), rgba(0,0,0,var(--fb,0.12)) 100%)' : 'none';
    v.sheetBg = bare ? 'transparent' : 'rgba(255,255,255,0.86)';
    v.sheetBlur = bare ? 'none' : 'blur(10px) saturate(1.1)';
    v.sheetShadow = bare ? 'none' : '0 1px 2px rgba(0,0,0,0.06),0 0 0 1px #e5e5e5,0 24px 48px -24px rgba(11,42,30,0.18)';
    v.showApp = s.authed;
    v.email = s.email; v.password = s.password;
    v.hasLoginError = !!s.loginErr; v.loginError = s.loginErr;
    v.onEmail = e => this.setState({ email: e.target.value, loginErr: '' });
    v.onPassword = e => this.setState({ password: e.target.value, loginErr: '' });
    const lp = s.loginPhase || '';
    v.loginIdle = lp === '' || lp === 'err'; v.loginChecking = lp === 'checking'; v.loginOk = lp === 'ok'; v.loginTitleIdle = lp !== 'ok'; v.loginBusy = lp === 'checking' ? 'true' : 'false';
    v.loginBtnBg = lp === 'ok' ? '#15803d' : '#000000';
    v.loginBtnPe = lp === 'checking' || lp === 'ok' ? 'none' : 'auto';
    v.loginBtnAnim = lp === 'ok' ? 'okPop 420ms cubic-bezier(0.22,1,0.36,1) both' : 'none';
    v.loginShake = lp === 'err' ? 'loginShake 420ms cubic-bezier(0.36,0.07,0.19,0.97) both' : 'none';
    v.fieldBorder = lp === 'ok' ? '#15803d' : '#000000';
    v.fieldRing = lp === 'ok' ? '0 0 0 3px rgba(21,128,61,0.15)' : 'none';
    const hop = (str, d0, green) => Array.from(str).map((ch, i) => ({ ch: ch === ' ' ? '\u00a0' : ch,
      anim: 'letterHop 560ms cubic-bezier(0.34,1.56,0.64,1) ' + (d0 + i * 28) + 'ms both' + (green ? ', letterGreen 560ms ease ' + (d0 + i * 28) + 'ms both' : '') }));
    const okFound = s.users.find(u => u.email.toLowerCase() === (s.email || '').trim().toLowerCase());
    const okName = okFound ? okFound.nombre.split(' ')[0] : '';
    v.okTitle = hop(okName ? '¡Hola, ' + okName + '!' : '¡Bienvenido!', 120, true);
    v.okBtn = hop('Credenciales correctas', 60, false);
    v.pwdShown = !!s.showPwd; v.pwdHidden = !s.showPwd; v.pwdType = s.showPwd ? 'text' : 'password';
    v.pwdLabel = s.showPwd ? 'Ocultar contraseña' : 'Mostrar contraseña';
    v.onTogglePwd = () => this.setState(st => ({ showPwd: !st.showPwd }));
    v.onPwdKey = e => { if (e.key === 'Enter') { e.preventDefault(); v.onLogin(); } };
    v.demoMode = !api.USE_API;
    v.loginPh = api.USE_API ? 'nombre@legumex.com' : 'nombre@tic.gob';
    v.canUnassign = !api.USE_API;
    v.canToggleUser = !api.USE_API; // los usuarios no tienen campo "activo" en la API // la API no tiene cómo dejar un ticket sin asignar
    v.canSwitchRole = false; // sin "Ver como": cada persona ve el sistema con su propio rol
    v.onFillDemo = () => this.setState({ email: 'm.sandoval@tic.gob', password: 'demo1234', loginErr: '' });
    v.tapLogin = this.tapped('login');
    v.onLogin = () => {
      if (s.loginPhase === 'checking' || s.loginPhase === 'ok') return;
      this.tap('login');
      const fail = msg => { clearTimeout(this._lgE); this.setState({ loginErr: msg, loginPhase: 'err' }); this._lgE = setTimeout(() => this.setState({ loginPhase: '' }), 450); };
      if (!s.email.trim() || !s.password.trim()) { fail('Completá tu correo y tu contraseña para continuar.'); return; }
      if (!/@/.test(s.email)) { fail('El correo debe tener el formato nombre@tic.gob.'); return; }
      this.setState({ loginPhase: 'checking', loginErr: '' });
      clearTimeout(this._lg); clearTimeout(this._lg2);
      if (api.USE_API) {
        api.login(s.email.trim(), s.password)
          .then(data => { this.setState({ loginPhase: 'ok' }); this._lg2 = setTimeout(() => this.applySession(data), 1250); })
          .catch(err => fail(err.message || 'No pudimos iniciar sesión.'));
        return;
      }
      this._lg = setTimeout(() => {
        this.setState({ loginPhase: 'ok' });
        this._lg2 = setTimeout(() => this.finishLogin(), 1250);
      }, 700);
    };
    this.finishLogin = this.finishLogin || (() => {
      const s = this.state;
      const found = s.users.find(u => u.email.toLowerCase() === s.email.trim().toLowerCase());
      this.setState({ authed: true, loginErr: '', loginPhase: '', showPwd: false, screen: 'tickets', role: found ? found.rol : s.role, password: '', greet: true, greetOut: false });
      clearTimeout(this._greet); clearTimeout(this._greet2);
      this._greet = setTimeout(() => this.setState({ greetOut: true }), 6500);
      this._greet2 = setTimeout(() => this.setState({ greet: false, greetOut: false }), 6800);
      this.load(650);
      clearTimeout(this._live); this._live = setTimeout(() => this.liveEvent(), 18000);
      clearInterval(this._pollIv); this._pollIv = setInterval(() => this.poll(), 45000);
    });
    const nf = this.notifList(me, isAdmin);
    const nUnread = nf.filter(n => !n.read).length;
    v.notifOpen = !!s.notifOpen; v.hasUnread = nUnread > 0; v.unreadLabel = nUnread > 9 ? '9+' : String(nUnread);
    v.unreadNote = nUnread ? nUnread + ' SIN LEER' : 'AL DÍA';
    v.bellAria = nUnread ? 'Notificaciones, ' + nUnread + ' sin leer' : 'Notificaciones';
    v.bellBg = s.notifOpen ? '#ffffff' : 'transparent';
    v.bellShadow = s.notifOpen ? '0 1px 2px rgba(0,0,0,0.06),0 0 0 1px #e5e5e5' : 'none';
    v.bellPolling = !!s.notifPolling; v.bellSvgDisplay = s.notifPolling ? 'none' : 'block';
    v.bellAnim = s.notifPing ? 'iconBurst 640ms cubic-bezier(0.34,1.56,0.64,1) both' : 'none';
    v.onBell = () => this.setState(st => ({ notifOpen: !st.notifOpen }));
    v.onBellClose = () => this.setState({ notifOpen: false });
    v.onReadAll = () => this.markRead(me, nf.map(n => n.key));
    v.notifs = nf.map(n => ({ kind: n.kind, kindColor: n.kindColor, code: 'TIC-' + n.tid, when: this.ago(n.h), title: n.title, sub: n.sub,
      dot: n.read ? 'transparent' : '#2563eb', weight: n.read ? '400' : '600', bg: n.read ? '#ffffff' : '#f8faf5',
      go: () => { this.markRead(me, [n.key]); this.setState({ notifOpen: false }); if (n.chat) this.openChat(n.tid); else this.openTicket(n.tid); } }));
    v.noNotifs = nf.length === 0;
    this._nUnread = nUnread;
    v.onLogout = () => { api.logout(); clearInterval(this._pollIv); this.setState({ session: null, authed: false, notifOpen: false, email: '', password: '', loginPhase: '', showPwd: false, screen: 'tickets', detailId: null }); };

    v.meNombre = me.nombre; v.meIni = this.ini(me.nombre); v.meRing = this.ring(me.id); v.meRol = isAdmin ? 'Administrador' : 'Usuario';
    const ra = this.seg(isAdmin), ru = this.seg(!isAdmin);
    v.adminBg = ra.bg; v.adminBorder = ra.border; v.userBg = ru.bg; v.userBorder = ru.border;
    const roleReset = { detailId: null, screen: 'tickets', chatId: null, chatOpen: false, chatMsg: '', chatErr: '', scope: 'all', chatScope: 'all', chatStatus: 'all', nudgedOnly: false, notifOpen: false, statusFilter: 'all', prioFilter: 'all', qa: null, asigOpen: false };
    v.onRoleAdmin = () => {};
    v.onRoleUser = () => {};

    const mine = this.visible();
    const navDefs = [{ key: 'tickets', label: 'Tickets', count: String(mine.length) }];
    if (isAdmin) {
      navDefs.push({ key: 'pulso', label: 'Pulso', count: String(mine.filter(t => t.status !== 'closed' && this.sla(t).late).length) });
      navDefs.push({ key: 'cats', label: 'Categorías', count: String(s.cats.length) });
      navDefs.push({ key: 'users', label: 'Usuarios', count: String(s.users.length) });
    }
    const waitsNav = t => { if (t.status === 'closed' || !(t.comentarios || []).length) return false; const l = t.comentarios[t.comentarios.length - 1]; return isAdmin ? (l.autor === t.autor && t.asig === me.id) : l.autor !== me.id; };
    navDefs.push({ key: 'chat', label: 'Chat', count: String(mine.filter(waitsNav).length) });
    const activeKey = (s.screen === 'detail' || s.screen === 'create' || s.screen === 'edit') ? 'tickets' : s.screen;
    const activeIdx = navDefs.findIndex(n => n.key === activeKey);
    v.navPillOn = activeIdx >= 0;
    v.navPillY = (activeIdx < 0 ? 0 : activeIdx * 48) + 'px';
    v.booting = s.booting;
    v.bootAnim = s.bootFading ? 'bootOut var(--duration-page) var(--ease-standard) both' : 'none';
    v.onHome = () => { this.setState({ screen: 'tickets', detailId: null, dir: 'down', chatOpen: false }); this.load(500); };
    v.navItems = navDefs.map(n => ({
      label: n.label, count: n.count,
      weight: n.key === activeKey ? '500' : '400',
      hoverBg: n.key === activeKey ? 'transparent' : 'rgba(255,255,255,0.7)',
      pressBg: n.key === activeKey ? 'rgba(10,10,10,0.06)' : '#ebede7',
      // Un acento por sección: aparece solo cuando está activa o señalada, nunca en reposo.
      ink: '#171717',
      iconColor: n.key === activeKey ? '#171717' : s.navHover === n.key ? this.NAV_INK[n.key] : '#525252',
      countColor: n.key === activeKey ? '#525252' : '#737373',
      isTickets: n.key === 'tickets', isCats: n.key === 'cats', isUsers: n.key === 'users', isPulso: n.key === 'pulso', isChat: n.key === 'chat',
      // El trazo se redibuja cada vez que el puntero entra: navTick reinicia la animación.
      // Al salir vuelve a 'none', así que al re-entrar la animación arranca de cero sola.
      anim: s.navHover === n.key
        ? (n.key === 'pulso' ? 'navEcg 1000ms' : 'navDraw 620ms') + ' var(--ease-standard) both'
        : 'none',
      pulseColor: n.key === activeKey ? '#171717' : s.navHover === 'pulso' ? this.NAV_INK.pulso : '#525252',
      onEnter: () => this.setState({ navHover: n.key }),
      onLeave: () => this.setState({ navHover: '' }),
      go: () => {
        if (this.state.nudgedOnly) this.setState({ nudgedOnly: false });
        if (n.key === 'chat') { this.setState({ chatOpen: false, chatQ: '' }); }
        const from = navDefs.findIndex(x => x.key === activeKey), to = navDefs.findIndex(x => x.key === n.key);
        this.setState({ screen: n.key, detailId: null, dir: to === from ? 'none' : to > from ? 'up' : 'down' });
        this.load(500);
      }
    }));

    const forced = s.forced;
    const natural403 = (s.screen === 'cats' || s.screen === 'users' || s.screen === 'pulso' || s.screen === 'entity') && !isAdmin;
    v.showForbidden = forced === '401' || natural403;
    v.forbiddenCode = forced === '401' ? 'HTTP 401' : 'HTTP 403';
    v.forbiddenMsg = forced === '401'
      ? 'Tu sesión caducó o el token ya no es válido. Iniciá sesión otra vez para seguir.'
      : 'Esta sección es solo para administradores. Si necesitás acceso, pedíselo a un admin del área.';
    const canSee = id => this.visible().some(t => t.id === id);
    v.showNotFound = forced === '404' || (s.screen === 'detail' && !canSee(s.detailId)) || (s.screen === 'edit' && !canSee(s.editId));
    v.notFoundMsg = 'El ticket que buscás no existe o fue eliminado. Puede que el enlace esté viejo o que el código tenga un dígito de más.';
    v.show500 = s.err500;
    v.err500Line = s.err500Line || 'HTTP 500 · GET /api/tickets';
    v.saving = !!s.saving;
    v.hasSessionMsg = !!s.sessionMsg; v.sessionMsg = s.sessionMsg;
    v.tapRetry = this.tapped('retry', 'iconSpinTap', 620);
    v.onRetry = () => this.tap('retry', () => { this.setState({ err500: false }); this.say('Datos actualizados.'); });
    v.onDismiss500 = () => this.setState({ err500: false });
    v.onBackToTickets = () => this.setState({ screen: 'tickets', detailId: null, forced: 'ninguno', dir: 'back' });

    const blocked = v.showForbidden || v.showNotFound;
    v.showList = s.screen === 'tickets' && !blocked;
    v.showForm = (s.screen === 'create' || (s.screen === 'edit' && !!this.ticket(s.editId))) && !blocked;
    v.showDetail = s.screen === 'detail' && canSee(s.detailId) && !blocked;
    v.showEntity = s.screen === 'entity' && !!s.entity && isAdmin && !blocked;
    v.showCats = s.screen === 'cats' && isAdmin && !blocked;
    v.showUsers = s.screen === 'users' && isAdmin && !blocked;
    v.showChatPage = s.screen === 'chat' && !blocked;
    v.showPulso = s.screen === 'pulso' && isAdmin && !blocked;
    v.onHeaderBack = () => {
      if (this.state.screen === 'entity') { this.closeEntity(); return; }
      this.setState({ screen: 'tickets', detailId: null, dir: 'back' });
      this.load(420);
    };
    if (v.showPulso) {
      const p = this.pulse();
      const maxLoad = this.maxLoad();
      v.pFirstResp = p.firstResp != null ? this.dur(p.firstResp) : '—';
      v.pFirstRespNote = p.frCount + (p.frCount === 1 ? ' ticket con respuesta del área' : ' tickets con respuesta del área');
      v.pResolution = p.resolution != null ? this.dur(p.resolution) : '—';
      v.pResolutionNote = p.rsCount + (p.rsCount === 1 ? ' ticket cerrado medido' : ' tickets cerrados medidos');
      v.pLate = String(p.late.length);
      // Gráficos: series reales derivadas de los tickets (sin librería; SVG + grid)
      const dias = 14, W = 640, H = 200, top = 16, bot = 12;
      const ins = new Array(dias).fill(0), outs = new Array(dias).fill(0);
      p.list.forEach(t => {
        const d = Math.floor(t.h / 24); if (d < dias) ins[dias - 1 - d]++;
        (t.historial || []).forEach(x => { if (x.kind === 'close') { const dc = Math.floor(x.h / 24); if (dc < dias) outs[dias - 1 - dc]++; } });
      });
      const yMax = Math.max(2, Math.max.apply(null, ins.concat(outs)));
      const X = i => (i + 0.5) * (W / dias), Y = v => H - bot - (v / yMax) * (H - top - bot);
      const line = arr => arr.map((v, i) => (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(v).toFixed(1)).join(' ');
      v.pInPath = line(ins); v.pOutPath = line(outs);
      v.pOutArea = line(outs) + ' L' + X(dias - 1).toFixed(1) + ' ' + (H - bot) + ' L' + X(0).toFixed(1) + ' ' + (H - bot) + ' Z';
      v.pGrid = [0, 0.5, 1].map(r => ({ y: (H - bot - r * (H - top - bot)).toFixed(1) }));
      v.pDays = ins.map((n, i) => {
        const ago = dias - 1 - i;
        return { yIn: (Y(n) / H * 100).toFixed(1) + '%', yOut: (Y(outs[i]) / H * 100).toFixed(1) + '%',
          tip: (ago === 0 ? 'Hoy' : ago === 1 ? 'Ayer' : 'Hace ' + ago + ' días') + ' · ' + n + ' entraron · ' + outs[i] + ' cerraron' };
      });
      const tin = ins.reduce((a, b) => a + b, 0), tout = outs.reduce((a, b) => a + b, 0), net = tout - tin;
      v.pInTotal = String(tin); v.pOutTotal = String(tout);
      v.pNet = (net > 0 ? '−' : net < 0 ? '+' : '±') + Math.abs(net) + ' en cola';
      v.pNetInk = net >= 0 ? '#16a34a' : '#ea580c';
      const grp = { late: 0, watch: 0, ok: 0, waiting: 0 };
      p.act.forEach(t => { const sl = this.sla(t); grp[sl.waiting ? 'waiting' : sl.late ? 'late' : sl.watch ? 'watch' : 'ok']++; });
      const tot = p.act.length || 1;
      let acc = 0;
      v.pDonut = [['late', 'Pasaron su margen', '#ea580c'], ['watch', 'Cerca del margen', '#ca8a04'], ['ok', 'Dentro del margen', '#16a34a'], ['waiting', 'Esperan al solicitante', '#2563eb']].map(g => {
        const len = grp[g[0]] / tot * 100, seg = { label: g[1], color: g[2], n: String(grp[g[0]]), pct: Math.round(len) + '%',
          dash: Math.max(0, len - (len > 0 ? 0.8 : 0)).toFixed(2) + ' ' + (100 - Math.max(0, len - (len > 0 ? 0.8 : 0))).toFixed(2),
          off: (25 - acc).toFixed(2), title: g[1] + ': ' + grp[g[0]] };
        acc += len; return seg;
      });
      v.pActTotal = String(p.act.length);
      v.pLateNote = p.late.length === 0 ? 'Todo dentro del margen' : 'Pasaron su margen de atención';
      // A1 · lo que espera al solicitante no es deuda del área, pero sí hay que mirarlo
      const esperando = this.visible().filter(t => this.waitingOnRequester(t));
      const semana = esperando.filter(t => this.idle(t) >= 168);
      v.pWaitNote = esperando.length === 0
        ? 'Nadie está esperando respuesta del solicitante'
        : esperando.length + (esperando.length === 1 ? ' espera respuesta del solicitante' : ' esperan respuesta del solicitante');
      v.pWaitWeek = semana.length > 0;
      v.pWaitWeekNote = semana.length + (semana.length === 1 ? ' hace más de una semana' : ' hace más de una semana');
      v.pLateBg = '#ffffff';
      v.pLateBorder = p.late.length > 0 ? '1px solid #ea580c' : '1px solid #e5e5e5';
      v.pUnassigned = String(p.sinAsignar);
      v.pUnassignedNote = p.sinAsignar === 0 ? 'Nadie esperando triage' : 'Activos sin dueño';
      v.pLoad = s.users.map(u => {
        const ld = this.loadOf(u.id), n = ld.n, lateN = ld.late;
        return {
          nombre: u.nombre, ini: this.ini(u.nombre), ring: this.ring(u.id), count: String(n),
          width: Math.round((n / maxLoad) * 100) + '%', bar: lateN > 0 ? '#ea580c' : '#171717',
          note: lateN > 0 ? lateN + ' atrasado' + (lateN === 1 ? '' : 's') : n === 0 ? 'Libre' : 'Al día',
          noteInk: lateN > 0 ? '#171717' : '#737373'
        };
      }).sort((a, b) => Number(b.count) - Number(a.count));
      const maxCat = Math.max(1, ...s.cats.map(c => p.list.filter(t => t.cat === c.id).length));
      v.pCats = s.cats.map(c => {
        const total = p.list.filter(t => t.cat === c.id).length;
        const abiertos = p.act.filter(t => t.cat === c.id).length;
        return {
          nombre: c.nombre, count: String(total), abiertos: String(abiertos),
          width: Math.round((total / maxCat) * 100) + '%',
          bar: c.activo ? '#171717' : '#a3a3a3',
          note: abiertos > 0 ? abiertos + ' sin cerrar' : 'Sin pendientes'
        };
      }).sort((a, b) => Number(b.count) - Number(a.count));
      v.pLateRows = p.late.slice(0, 4).map(t => this.rowFor(t));
      v.pHasLate = p.late.length > 0;
      v.pNote = (p.late.length === 0 && p.rsCount === 0 && this.visible().length === 0)
        ? 'Sin datos todavía — los números aparecen cuando se cierre el primer ticket.'
        : 'Todo en esta pantalla se calcula en el navegador con los tickets, usuarios y categorías ya cargados — la API no expone métricas.';
    }

    const det = this.ticket(s.detailId);
    v.crumb = s.screen === 'entity' && s.entity ? (s.entity.type === 'cat' ? 'CATEGORÍAS / ' : 'USUARIOS / ') + (s.entity.id ? 'EDITAR' : 'NUEVO')
      : s.screen === 'detail' && det ? 'TICKETS / TIC-' + det.id : s.screen === 'create' ? 'TICKETS / NUEVO'
      : s.screen === 'edit' && s.editId ? 'TICKETS / TIC-' + s.editId + ' / EDITAR' : 'LEGUMEX';
    v.pageTitle = s.screen === 'entity' && s.entity ? (s.entity.type === 'cat' ? (s.entity.id ? 'Editar categoría' : 'Nueva categoría') : (s.entity.id ? 'Editar usuario' : 'Nuevo usuario'))
      : s.screen === 'create' ? 'Crear ticket' : s.screen === 'edit' ? 'Editar ticket' : s.screen === 'cats' ? 'Categorías' : s.screen === 'users' ? 'Usuarios' : s.screen === 'pulso' ? 'Pulso del área'
      : s.screen === 'detail' ? 'Detalle del ticket' : isAdmin ? 'Todos los tickets' : 'Mis tickets';

    // listado
    v.q = s.q;
    v.hasQuery = !!s.q; v.noQuery = !s.q;
    v.notList = !v.showList;
    v.searchOpen = !!s.searchOpen || !!s.q; v.searchClosed = !v.searchOpen;
    v.onOpenSearch = () => { this.setState({ searchOpen: true }); setTimeout(() => { const el = document.getElementById('tic-search'); if (el) el.focus(); }, 30); };
    v.onBlurSearch = () => { if (!this.state.q) this.setState({ searchOpen: false }); };
    v.onClearQuery = () => this.setState(st => ({ q: '', searchOpen: false, swap: st.swap + 1, page: Object.assign({}, st.page, { tickets: 0 }) }));
    v.onQuery = e => this.setState(st => ({ q: e.target.value, swap: st.swap + 1, page: Object.assign({}, st.page, { tickets: 0 }) }));
    v.onClearFilters = () => this.setState(st => ({ q: '', searchOpen: false, statusFilter: 'all', prioFilter: 'all', dStatus: 'all', dPrio: 'all', filterOpen: false, cursor: -1, swap: st.swap + 1, page: Object.assign({}, st.page, { tickets: 0 }) }));
    const filters = [['all', 'Todos'], ['open', 'Abiertos'], ['in_progress', 'En progreso'], ['closed', 'Cerrados']];
    v.statusFilters = filters.map(f => {
      const sg = this.seg(s.dStatus === f[0]);
      return {
        label: f[1], bg: s.dStatus === f[0] ? '#f5f5f5' : 'transparent', border: sg.border, on: s.dStatus === f[0], off: s.dStatus !== f[0],
        hasDot: f[0] !== 'all', dot: f[0] === 'all' ? '#737373' : this.ST[f[0]].dot,
        count: String(f[0] === 'all' ? mine.length : mine.filter(t => t.status === f[0]).length),
        go: () => this.setState({ dStatus: f[0] })
      };
    });
    const prios = [['all', 'Toda prioridad', null], ['high', 'Alta', this.PR.high.dot], ['medium', 'Media', this.PR.medium.dot], ['low', 'Baja', this.PR.low.dot]];
    v.prioFilters = prios.map(p => {
      const sg = this.seg(s.dPrio === p[0]);
      return {
        label: p[1], bg: s.dPrio === p[0] ? '#f5f5f5' : 'transparent', border: sg.border, hasDot: !!p[2], dot: p[2] || '#737373',
        on: s.dPrio === p[0], off: s.dPrio !== p[0],
        count: String(p[0] === 'all' ? mine.length : mine.filter(t => t.prio === p[0]).length),
        go: () => this.setState({ dPrio: p[0] })
      };
    });
    const q = s.q.trim().toLowerCase();
    const rank = t => {
      if (t.status === 'closed') return -1;
      const sl = this.sla(t);
      return (sl.waiting ? 0 : sl.ratio) + (t.asig ? 0 : 0.25) + (this.nudges(t).length ? 1.5 : 0);
    };
    const limH = isAdmin ? ({ hoy: 24, '7': 168, '30': 720 }[s.period || '30'] || 0) : 0;
    const filtered0 = mine.filter(t => {
      const okS = s.statusFilter === 'all' || t.status === s.statusFilter;
      const okP = s.prioFilter === 'all' || t.prio === s.prioFilter;
      const okQ = !q || t.titulo.toLowerCase().includes(q) || String(t.id).includes(q) || ('tic-' + t.id).includes(q);
      if (isAdmin && s.scope === 'mine' && t.asig !== me.id) return false; // para el usuario, 'mine' se ignora
      if (s.nudgedOnly) return t.status !== 'closed' && this.nudges(t).length > 0 && okQ;
      return okS && okP && okQ && (!limH || t.h <= limH);
    });
    this._shown = filtered0;
    const byUrgency = isAdmin && s.sort !== 'recientes';
    const filtered = byUrgency ? filtered0.slice().sort((a, b) => rank(b) - rank(a)) : filtered0.slice().sort((a, b) => a.h - b.h);
    v.sortFilters = [['urgencia', 'Urgencia'], ['recientes', 'Recientes']].map(f => {
      const sg = this.seg((s.sort || 'urgencia') === f[0]);
      return { label: f[1], bg: sg.bg, border: sg.border, go: () => this.setState(st => ({ sort: f[0], cursor: -1, swap: st.swap + 1 })) };
    });
    v.sortNote = byUrgency ? 'Lo que lleva más tiempo sin moverse va primero' : 'Los más nuevos van primero';
    const pgT = this.pager('tickets', filtered.length);
    v.pgTickets = pgT;
    const pageRows = filtered.slice(pgT.offset, pgT.offset + pgT.limit);
    this._rowIds = pageRows.map(t => t.id);
    const cur = Math.min(s.cursor, pageRows.length - 1);
    v.rows = pageRows.map((t, i) => {
      const r = this.rowFor(t);
      r.focusBorder = i === cur ? '#171717' : '#e5e5e5';
      r.focusShadow = i === cur ? 'rgba(0,0,0,0.05) 0px 1px 2px 0px' : 'none';
      return r;
    });
    v.isEmpty = filtered.length === 0 && !s.loading;
    // E7 · la lista vacía de verdad es la primera impresión del cliente, no un "sin resultados"
    const diaUno = mine.length === 0 && !s.q && s.statusFilter === 'all' && s.prioFilter === 'all';
    v.emptyDayOne = diaUno;
    v.emptyTitle = diaUno ? 'Todavía no hay tickets' : 'Ningún ticket coincide con tu búsqueda';
    v.emptyHelp = diaUno
      ? 'Cuando alguien reporte algo, va a aparecer acá.'
      : 'Probá con otro texto o quitá los filtros de estado y prioridad.';
    const scoped = isAdmin && s.scope === 'mine' ? mine.filter(t => t.asig === me.id) : mine;
    v.lateCount = String(scoped.filter(t => t.status !== 'closed' && this.sla(t).late).length);
    v.hasLate = scoped.some(t => t.status !== 'closed' && this.sla(t).late);
    v.onlyLate = () => this.setState(st => ({ screen: 'tickets', detailId: null, dir: 'none', statusFilter: 'all', prioFilter: 'all', q: '', sort: 'urgencia', cursor: -1, swap: st.swap + 1, page: Object.assign({}, st.page, { tickets: 0 }) }));

    const tally = list => ({
      open: list.filter(t => t.status === 'open').length,
      prog: list.filter(t => t.status === 'in_progress').length,
      closed: list.filter(t => t.status === 'closed').length
    });
    const bd = (c, labels) => [
      { dot: this.ST.open.dot, count: String(c.open), label: labels[0] },
      { dot: this.ST.in_progress.dot, count: String(c.prog), label: labels[1] },
      { dot: this.ST.closed.dot, count: String(c.closed), label: labels[2] }
    ];
    const shown = tally(filtered), inbox = tally(scoped);
    v.statTotal = String(filtered.length);
    v.statTotalLabel = filtered.length === 1 ? 'ticket en vista' : 'tickets en vista';
    v.statBreakdown = bd(shown, ['abiertos', 'en progreso', 'cerrados']);
    v.inboxTotal = String(scoped.length);
    const inboxKeys = [['open', 'Abiertos', inbox.open], ['in_progress', 'En progreso', inbox.prog], ['closed', 'Cerrados', inbox.closed]];
    v.inboxBreakdown = inboxKeys.map(k => {
      const on = s.screen === 'tickets' && s.statusFilter === k[0];
      return {
        label: k[1], count: String(k[2]), dot: this.ST[k[0]].dot,
        bg: on ? '#f4f5f1' : 'transparent', border: on ? '1px solid #dcdfd6' : '1px solid transparent',
        weight: on ? '500' : '400', countColor: on ? '#171717' : '#525252',
        aria: on ? 'Quitar el filtro ' + k[1] : 'Ver solo ' + k[1].toLowerCase(),
        go: () => this.setState(st => ({
          screen: 'tickets', detailId: null, dir: 'none', swap: st.swap + 1, nudgedOnly: false,
          statusFilter: (st.screen === 'tickets' && st.statusFilter === k[0]) ? 'all' : k[0],
          page: Object.assign({}, st.page, { tickets: 0 })
        }))
      };
    });
    const mm = isAdmin ? { lineas: [], overdue: false } : this.metricasPropias();
    v.misMetricas = mm.lineas;
    v.showMisMetricas = !isAdmin && mm.lineas.length > 0;
    v.mmOverdue = !isAdmin && mm.overdue;
    const marcados = scoped.filter(t => t.status !== 'closed' && this.nudges(t).length);
    v.hasNudged = isAdmin && marcados.length > 0;
    v.nudgedCount = String(marcados.length);
    v.nudgedOnlyOn = !!s.nudgedOnly && s.screen === 'tickets';
    v.ctlRow = isAdmin || v.nudgedOnlyOn;
    v.onClearNudged = () => this.setState({ nudgedOnly: false });
    const nMine = mine.filter(t => t.asig === me.id).length;
    v.scopeOpts = [['all', 'Todos', String(mine.length)], ['mine', 'Míos', String(nMine)]].map(o => ({
      label: o[1], count: o[2], bg: (s.scope || 'all') === o[0] ? '#ffffff' : 'transparent', barBg: (s.scope || 'all') === o[0] ? '#ebede7' : 'transparent', weight: (s.scope || 'all') === o[0] ? '600' : '500',
      shadow: (s.scope || 'all') === o[0] ? 'rgba(0,0,0,0.06) 0px 1px 2px 0px' : 'none', pressed: (s.scope || 'all') === o[0] ? 'true' : 'false',
      go: () => this.setState(st => ({ scope: o[0], swap: st.swap + 1, page: Object.assign({}, st.page, { tickets: 0 }) }))
    }));
    v.onlyNudged = () => this.setState(st => ({ nudgedOnly: true, screen: 'tickets', detailId: null, dir: 'none', statusFilter: 'all', prioFilter: 'all', dStatus: 'all', dPrio: 'all', q: '', sort: 'urgencia', cursor: -1, swap: st.swap + 1, page: Object.assign({}, st.page, { tickets: 0 }) }));
    const per = s.period || '30';
    v.saludo = this.saludo();
    v.showGreet = !!s.greet && s.screen === 'tickets';
    v.greetAnim = s.greetOut ? 'toastOut 300ms var(--ease-standard) both' : 'dropIn 420ms var(--ease-standard) both';
    v.periodLabel = { hoy: 'hoy', '7': '7 días', '30': '30 días', todo: 'todo el historial' }[per];
    v.periodOpts = [['hoy', 'Hoy'], ['7', 'Últimos 7 días'], ['30', 'Últimos 30 días'], ['todo', 'Todo el historial']].map(o => ({
      label: o[1], on: per === o[0], bg: per === o[0] ? '#f5f5f5' : 'transparent',
      go: () => this.setState(st => ({ period: o[0], periodOpen: false, swap: st.swap + 1 }))
    }));
    v.periodOpen = !!s.periodOpen; v.viewOpen = !!s.viewOpen;
    v.viewBtnBg = s.viewOpen ? '#f5f5f5' : 'transparent';
    v.onTogglePeriod = () => this.setState(st => ({ periodOpen: !st.periodOpen, viewOpen: false, filterOpen: false }));
    v.onToggleView = () => this.setState(st => ({ viewOpen: !st.viewOpen, periodOpen: false, filterOpen: false }));
    v.onDismissPop = () => this.setState({ viewOpen: false, periodOpen: false });
    v.onExportList = () => { const [n, filas] = this.csvDe('tickets'); this.descargarCsv(n, filas); this.say('Descargando ' + n); };
    v.showCsv = isAdmin && (s.screen === 'pulso' || s.screen === 'cats' || s.screen === 'users');
    v.onExportCsv = () => {
      const [nombre, filas] = this.csvDe(s.screen);
      this.descargarCsv(nombre, filas);
      this.say('Descargando ' + nombre);
    };
    v.inboxHint = s.screen === 'tickets' && s.statusFilter !== 'all' ? 'Tocá de nuevo para ver todos' : 'Tocá un estado para filtrar';

    // filtro colapsado: un botón, un panel, y chips de lo que está puesto
    const chips = [];
    if (s.statusFilter !== 'all') chips.push({
      label: this.ST[s.statusFilter].label, dot: this.ST[s.statusFilter].dot, hasDot: true,
      clear: () => this.setState(st => ({ statusFilter: 'all', cursor: -1, swap: st.swap + 1, page: Object.assign({}, st.page, { tickets: 0 }) }))
    });
    if (s.prioFilter !== 'all') chips.push({
      label: 'Prioridad ' + this.PR[s.prioFilter].label, dot: this.PR[s.prioFilter].dot, hasDot: true,
      clear: () => this.setState(st => ({ prioFilter: 'all', cursor: -1, swap: st.swap + 1, page: Object.assign({}, st.page, { tickets: 0 }) }))
    });
    if (s.q.trim()) chips.push({
      label: '"' + s.q.trim() + '"', dot: '#737373', hasDot: false,
      clear: () => this.setState(st => ({ q: '', cursor: -1, swap: st.swap + 1, page: Object.assign({}, st.page, { tickets: 0 }) }))
    });
    v.chips = chips;
    v.hasChips = chips.length > 0;
    const fcount = (s.statusFilter !== 'all' ? 1 : 0) + (s.prioFilter !== 'all' ? 1 : 0);
    v.filterCount = String(fcount);
    v.hasFilterCount = fcount > 0;
    v.filterOpen = !!s.filterOpen;
    v.filterBg = s.filterOpen || fcount > 0 ? '#f5f5f5' : '#ffffff';
    v.onToggleFilter = () => this.setState(st => st.filterOpen ? { filterOpen: false } : { filterOpen: true, dStatus: st.statusFilter, dPrio: st.prioFilter });
    v.onDismissFilter = () => this.setState({ filterOpen: false });
    v.onClearDraft = () => this.setState({ dStatus: 'all', dPrio: 'all' });
    v.draftDirty = s.dStatus !== s.statusFilter || s.dPrio !== s.prioFilter;
    v.applyLabel = v.draftDirty ? 'Aplicar' : 'Listo';
    v.onCloseFilter = () => this.setState(st => ({ statusFilter: st.dStatus, prioFilter: st.dPrio, filterOpen: false, cursor: -1, swap: st.swap + 1, page: Object.assign({}, st.page, { tickets: 0 }) }));

    const sinAsignar = mine.filter(t => t.status === 'open' && !t.asig).length;
    const activos = inbox.open + inbox.prog;
    v.pageSub = s.screen === 'entity' && s.entity ? (s.entity.type === 'cat' ? (s.entity.id ? 'Renombrarla no cambia los tickets que ya la usan.' : 'Aparecerá en el formulario de creación de tickets.') : (s.entity.id ? 'El correo es con el que inicia sesión.' : 'Podrá iniciar sesión en cuanto se cree.'))
      : s.screen === 'edit' ? 'Los campos vienen cargados — cambiá solo lo que haga falta.'
      : s.screen === 'create' ? 'Cuanto más contexto, menos ida y vuelta después.'
      : s.screen === 'cats' ? s.cats.filter(c => c.activo).length + ' de ' + s.cats.length + ' activas se ofrecen al crear un ticket'
      : s.screen === 'users' ? s.users.filter(u => u.rol === 'admin').length + ' de ' + s.users.length + ' con rol admin · la carga se calcula sobre los tickets activos'
      : s.screen === 'pulso' ? 'Calculado sobre los ' + mine.length + ' tickets cargados — sin endpoints de métricas'
      : s.screen === 'detail' && det ? (det.status === 'closed' ? 'Cerrado · sin acciones pendientes' : det.asig ? 'En manos de ' + (this.user(det.asig) || {}).nombre : 'Todavía sin asignar')
      : !isAdmin ? this.subSolicitante(mine)
      : inbox.open === 0 && inbox.prog === 0 ? 'Nada pendiente por ahora'
      : sinAsignar > 0 ? sinAsignar + (sinAsignar === 1 ? ' abierto sin asignar requiere atención' : ' abiertos sin asignar requieren atención')
      : activos + (activos === 1 ? ' ticket activo en seguimiento' : ' tickets activos en seguimiento');
    // B1 · el solicitante no recibe la cabina de admin: una sola vista, un solo orden.
    v.vistaAdmin = isAdmin;
    v.isCards = isAdmin ? s.view === 'cards' : true;
    v.isTable = isAdmin && s.view === 'table'; v.isKanban = isAdmin && s.view === 'kanban';
    const cb = this.seg(v.isCards), tb = this.seg(v.isTable), kb = this.seg(v.isKanban);
    v.cardsBg = cb.bg; v.cardsBorder = cb.border;
    v.tableBg = tb.bg; v.tableBorder = tb.border; v.kanbanBg = kb.bg; v.kanbanBorder = kb.border;
    const subSh = 'rgba(0,0,0,0.05) 0px 1px 2px 0px';
    v.cardsShadow = v.isCards ? subSh : 'none';
    v.tableShadow = v.isTable ? subSh : 'none'; v.kanbanShadow = v.isKanban ? subSh : 'none';
    v.cardsIcon = v.isCards ? '#171717' : '#525252';
    v.tableIcon = v.isTable ? '#171717' : '#525252'; v.kanbanIcon = v.isKanban ? '#171717' : '#525252';
    v.tapCards = this.tapped('vcards'); v.tapTable = this.tapped('vtable'); v.tapKanban = this.tapped('vkanban');
    v.onCards = () => this.tap('vcards', () => this.setState(st => ({ view: 'cards', swap: st.swap + 1 })));
    v.onTable = () => this.tap('vtable', () => this.setState(st => ({ view: 'table', swap: st.swap + 1 })));
    v.onKanban = () => this.tap('vkanban', () => this.setState(st => ({ view: 'kanban', swap: st.swap + 1 })));
    v.onNewTicket = () => this.newForm();
    v.onCopyView = () => this.tap('copy', () => this.copyView());
    v.tapCopy = this.tapped('copy');
    const colKeys = s.statusFilter === 'all' ? ['open', 'in_progress', 'closed'] : [s.statusFilter];
    v.columnCount = String(colKeys.length);
    const dragT = s.dragId ? this.ticket(s.dragId) : null;
    v.dragHint = s.dragId ? 'Soltá en otra columna para cambiar el estado' : (isAdmin ? 'Arrastrá una tarjeta de columna a columna para cambiar el estado' : 'Podés arrastrar a Cerrados los tickets que tengas asignados');
    v.isDragging = !!s.dragId;
    v.columns = colKeys.map(k => {
      const items = filtered.filter(t => t.status === k);
      const target = !!(dragT && this.canMove(dragT, k));
      const over = target && s.dragOver === k;
      const blocked = !!(dragT && dragT.status !== k && !target);
      return {
        isTarget: target, isOver: over, isBlocked: blocked,
        colBg: over ? '#dbeaff' : '#f5f5f5',
        colRing: over ? '1px dashed #2563eb' : target ? '1px dashed #d4d4d4' : '1px solid transparent',
        colOp: blocked ? '0.55' : '1',
        dropLabel: over ? 'Soltar en ' + this.ST[k].label : '',
        countKey: k + '-' + items.length,
        onDragOver: e => {
          if (!target) return;
          e.preventDefault();
          if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
          if (s.dragOver !== k) this.setState({ dragOver: k });
        },
        onDragLeave: () => { if (this.state.dragOver === k) this.setState({ dragOver: null }); },
        onDrop: e => {
          e.preventDefault();
          const t = this.ticket(this.state.dragId);
          this.setState({ dragId: null, dragOver: null });
          if (t) this.moveTo(t, k);
        },
        label: this.ST[k].label, dot: this.ST[k].dot, count: String(items.length),
        items: items.map(t => this.rowFor(t)), empty: items.length === 0,
        emptyMsg: k === 'open' ? 'Nada esperando triage.' : k === 'in_progress' ? 'Nadie trabajando ahora.' : 'Sin cierres en este filtro.'
      };
    });

    // formulario: crear + editar comparten campos
    const editing = s.screen === 'edit';
    const et = editing ? this.ticket(s.editId) : null;
    v.formIsEdit = editing && !!et;
    v.formIsCreate = s.screen === 'create';
    v.formCode = et ? 'TIC-' + et.id : '';
    v.formAutor = et ? ((this.user(et.autor) || {}).nombre || '—') : '';
    v.formCreado = et ? et.creado : '';
    v.formCanManage = editing && isAdmin;
    v.formRoleNote = editing && !isAdmin;
    v.formOkLabel = editing ? 'Guardar cambios' : 'Crear ticket';
    const feBanner = (s.formErr || {}).banner;
    const vacio = !s.form.titulo.trim() && !s.form.desc.trim();
    v.formBannerTitle = feBanner === 'servidor' ? 'No pudimos crear el ticket'
      : vacio ? 'Faltan los datos del ticket'
      : editing ? 'No pudimos guardar los cambios' : 'No pudimos crear el ticket';
    v.formBannerNote = feBanner === 'servidor'
      ? 'El servidor falló y el ticket no quedó registrado. Tu texto sigue acá: probá de nuevo.'
      : vacio ? 'Completá título y descripción para poder enviarlo.'
      : 'Revisá los campos marcados abajo. Nada se perdió: tu texto sigue acá.';
    v.fTitulo = s.form.titulo; v.fDesc = s.form.desc; v.fCat = s.form.cat;
    v.fStatus = s.form.status; v.fPrio = s.form.prio;
    // B1 · el formulario nunca cierra: cerrar sale solo de Cerrar / Comentar y cerrar / kanban (PATCH /closed + correo)
    const editPrev = editing ? (this.ticket(s.editId) || {}) : {};
    v.fStatusLocked = editing && editPrev.status === 'closed';
    v.fClosedOptOff = !v.fStatusLocked;
    v.fStatusOp = v.fStatusLocked ? '0.6' : '1';
    v.fStatusTitle = v.fStatusLocked ? 'Está cerrado. Para cambiarlo, reabrilo desde el ticket.' : 'Para cerrar, usá "Cerrar ticket" en el detalle: así le llega el aviso al solicitante.';
    v.onFTitulo = e => this.formChanged({ titulo: e.target.value });
    v.onFDesc = e => this.formChanged({ desc: e.target.value });
    v.hasDesc = !!s.form.desc.trim() && !editing;
    v.onBlankDesc = () => this.formChanged({ desc: '' });
    v.onFCat = e => {
      const cat = e.target.value;
      // El borrador guardado gana: si la persona ya venía escribiendo, no se le toca el texto.
      if (!cat || s.form.desc.trim() || s.draftFound || editing) { this.formChanged({ cat }); return; }
      const txt = this.andamio(cat);
      this.formChanged({ cat, desc: txt });
      const nl = txt.indexOf('\n');
      const pos = nl >= 0 ? nl : txt.length;
      setTimeout(() => {
        const el = document.getElementById('tic-desc');
        if (el) { el.focus(); el.setSelectionRange(pos, pos); }
      }, 30);
    };
    v.draftFound = s.screen === 'create' && s.draftFound;
    v.onDropDraft = () => { this.saveDraft('nuevo', ''); this.setState({ draftFound: false, form: { titulo: '', desc: '', cat: '', status: 'open', prio: 'medium' } }); };
    v.onFStatus = e => this.setState(st => ({ form: Object.assign({}, st.form, { status: e.target.value }) }));
    v.onFPrio = e => this.setState(st => ({ form: Object.assign({}, st.form, { prio: e.target.value }) }));
    v.activeCats = s.cats.filter(c => c.activo || (editing && String(c.id) === String(editPrev.cat))).map(c => ({ value: String(c.id), nombre: c.activo ? c.nombre : c.nombre + ' (inactiva)' }));
    const dups = v.formIsCreate ? this.dupes(s.form.titulo) : [];
    v.hasDupes = dups.length > 0;
    v.dupesTitle = dups.length === 1 ? 'Hay un ticket parecido ya cargado' : 'Hay ' + dups.length + ' tickets parecidos ya cargados';
    v.dupes = dups.map(t => {
      const st2 = this.ST[t.status];
      return {
        code: 'TIC-' + t.id, titulo: t.titulo, statusLabel: st2.label, statusBg: st2.bg,
        when: this.ago(this.idle(t)), asig: t.asig ? (this.user(t.asig) || {}).nombre : 'Sin asignar',
        open: () => { this.setState({ screen: 'detail', detailId: t.id, comment: '', commentErr: '', dir: 'fwd', formErr: null }); this.load(500); }
      };
    });
    const fe = s.formErr || {};
    v.errTituloBorder = fe.titulo ? '#ea580c' : '#000000';
    v.errDescBorder = fe.desc ? '#ea580c' : '#000000';
    v.errCatBorder = fe.cat ? '#ea580c' : '#000000';
    v.hasFormBanner = !!s.formErr;
    v.errTitulo = !!fe.titulo; v.errTituloMsg = fe.titulo || '';
    v.errDesc = !!fe.desc; v.errDescMsg = fe.desc || '';
    v.errCat = !!fe.cat;
    v.tapForm = this.tapped('form');
    v.rippleForm = s.tap === 'form';
    v.onSubmitForm = () => {
      const fe2 = this.validateTicket();
      if (fe2) { this.setState({ formErr: fe2 }); return; }
      this.tap('form');
      const go = () => this.heavy(editing ? 'Guardando los cambios' : 'Creando el ticket', 900, () => editing ? this.saveEdit() : this.submitTicket());
      if (editing) this.confirmOr('edit', { title: '¿Guardar los cambios en TIC-' + s.editId + '?', sub: 'Reemplaza lo que había y queda registrado en la actividad del ticket.', ok: 'Guardar cambios' }, go);
      else go();
    };
    v.onCancelForm = () => this.setState({ screen: (editing && s.detailId) ? 'detail' : 'tickets', formErr: null, editId: null, dir: 'back' });

    // detalle
    if (det) {
      const st = this.ST[det.status], pr = this.PR[det.prio], asig = this.user(det.asig);
      v.dTitulo = det.titulo; v.dCode = 'TIC-' + det.id; v.dDesc = det.desc;
      v.dStatusLabel = st.label; v.dStatusBg = st.bg; v.dStatusDot = st.dot;
      v.dStatusOpen = det.status === 'open'; v.dStatusProg = det.status === 'in_progress'; v.dStatusClosed = det.status === 'closed';
      v.dPrioLabel = pr.label; v.dPrioDot = pr.dot;
      v.dCat = this.cat(det.cat); v.dAutor = (this.user(det.autor) || {}).nombre || '—';
      v.dAsig = asig ? asig.nombre : 'Sin asignar'; v.dAsigId = det.asig ? String(det.asig) : '';
      v.dCreado = det.creado; v.dUpdated = this.ago(this.idle(det));
      const dsla = this.sla(det);
      v.dSlaLabel = dsla.label; v.dSlaFull = dsla.full || dsla.label;
      v.dSlaLate = dsla.late; v.dSlaWatch = dsla.watch; v.dSlaOk = dsla.ok && !dsla.waiting; v.dSlaDone = dsla.done; v.dSlaWaiting = !!dsla.waiting;
      v.dSlaBg = '#ffffff';
      v.dSlaBorder = dsla.late ? '1px solid #ea580c' : dsla.done ? '1px solid #16a34a' : dsla.waiting ? '1px solid #d4d4d4' : '1px solid #e5e5e5';
      // "En tiempo" sin decir en tiempo para qué no significa nada, y la meta es jerga interna
      // que nadie se compromete a cumplir: el solicitante ve la línea de situación en su lugar.
      v.dShowMeta = isAdmin;
      v.dSlaBlock = isAdmin || !!dsla.waiting;
      v.dFirstLabel = isAdmin ? 'Primera respuesta' : 'Te respondieron';
      const autorU = this.user(det.autor), asigU = this.user(det.asig);
      v.dAutorCall = !!(autorU && autorU.email && autorU.id !== me.id) && !this.othersTicket(det);
      v.dAutorTeams = autorU ? 'https://teams.microsoft.com/l/call/0/0?users=' + autorU.email : '';
      v.onCallAutor = () => this.registrarLlamada(det, autorU ? autorU.nombre : '');
      v.dAsigCall = !!(asigU && asigU.email && asigU.id !== me.id);
      v.dAsigTeams = asigU ? 'https://teams.microsoft.com/l/call/0/0?users=' + asigU.email : '';
      v.onCallAsig = () => this.registrarLlamada(det, asigU ? asigU.nombre : '');
      v.dSlaTarget = 'Meta para prioridad ' + this.PR[det.prio].label.toLowerCase() + ': ' + this.dur(dsla.target);
      v.dActivity = this.activity(det);
      v.dActivityCount = String(det.comentarios.length + det.historial.length + det.adjuntos.length);
      v.dNoComments = det.comentarios.length === 0;
      v.dCommentCount = String(det.comentarios.length);
      const puedeCerrar = det.status !== 'closed' && det.asig === me.id;
      // D1 · un cierre enlatado hace sentir procesado: la macro deja un hueco obligatorio.
      const HUECO = 'Se resolvió: ______. Si vuelve a pasar, respondé este correo y lo reabrimos.';
      const macroList = (isAdmin ? this.MACROS : this.MACROS_USER).map(m => ({ label: m.label, text: m.text }));
      const rl = this.replyLock(det);
      v.dCanReply = !rl; v.dReplyLocked = !!rl; v.dReplyLockMsg = rl ? rl.msg : ''; v.dReplyLockTake = !!(rl && rl.take);
      v.dReplyLockTake = !!(rl && (rl.take || rl.reopen || rl.follow));
      v.dReplyTakeLabel = rl && rl.follow ? 'Sigue pasando' : rl && rl.reopen ? 'Reabrir ticket' : rl && rl.steal ? 'Tomar yo' : 'Tomar para responder';
      v.dReplyOnTake = () => rl && rl.follow ? this.followUp(det) : rl && rl.reopen ? v.onReopen() : rl && rl.steal ? this.quickAssign(det, me.id) : this.take(det);
      v.commentPh = isAdmin ? 'Escribí una actualización para el solicitante' : 'Escribile al área: qué probaste, qué cambió, cuándo estás';
      const tieneResp = (det.comentarios || []).some(c => c.autor !== det.autor);
      v.dResolvedShow = !isAdmin && det.autor === me.id && det.status !== 'closed';
      const yaAviso = this.resolvedSent(det);
      v.dResolvedDis = yaAviso; v.dResolvedOp = yaAviso ? '0.5' : '1'; v.dResolvedCur = yaAviso ? 'default' : 'pointer';
      v.dResolvedLabel = yaAviso ? 'Avisaste que se resolvió' : 'Ya se resolvió';
      v.onResolved = () => this.markResolved(det);
      v.dFollowShow = !isAdmin && det.autor === me.id && det.status === 'closed';
      v.onFollowUp = () => this.followUp(det);
      if (puedeCerrar) macroList.push({ label: 'Cerrar con resumen', text: HUECO });
      v.macros = macroList.map(m => ({
        label: m.label,
        use: () => {
          this.setState({ comment: m.text, commentErr: '' });
          if (m.text !== HUECO) return;
          const i = m.text.indexOf('______');
          setTimeout(() => {
            const el = document.getElementById('tic-comment');
            if (el) { el.focus(); el.setSelectionRange(i, i + 6); }
          }, 30);
        }
      }));
      // D3 · el comentario no manda correo: solo la creación y el cierre lo hacen.
      const otro = det.autor === me.id ? (this.user(det.asig) || null) : (this.user(det.autor) || null);
      v.dMailNote = 'Esto no envía correo — ' + (otro ? otro.nombre.split(' ')[0] : 'la otra parte') + ' lo verá al entrar al sistema.';
      // B4 · el reclamo del solicitante, como evento de historial y no como comentario
      const esAutor = det.autor === me.id;
      const esperandoloEl = this.waitingOnRequester(det);
      v.dNudgeAsk = esAutor && esperandoloEl;
      v.dNudgeShow = esAutor && det.status !== 'closed' && !esperandoloEl;
      const yaMarco = this.nudgedRecently(det, me.nombre);
      const ultimoNudge = this.nudges(det).filter(x => x.autor === me.nombre)[0];
      v.dNudgeOp = yaMarco ? '0.45' : '1';
      v.dNudgeCursor = yaMarco ? 'default' : 'pointer';
      v.dNudgeTitle = yaMarco ? 'Ya lo marcaste ' + this.ago(ultimoNudge ? ultimoNudge.h : 0) : 'Sube el ticket en la cola del área';
      v.dNudgeNote = yaMarco
        ? 'Ya quedó marcado. El área lo ve en su bandeja.'
        : 'Esto lo sube en la cola de TI. Usalo si de verdad te está frenando.';
      v.onNudge = () => { if (yaMarco) return; this.confirmOr('nudge', { title: '¿Marcar TIC-' + det.id + ' como bloqueante?', sub: 'Sube en la cola del área y lo ven marcado. Se puede usar una vez por día.', ok: 'Sí, me está frenando', danger: true }, () => { this.nudge(det); this.bloqueante(det.id); }); };
      v.onFocusComment = () => { const el = document.getElementById('tic-comment'); if (el) el.focus(); };
      v.dFirstResp = this.firstResponse(det) != null ? (isAdmin ? this.dur(this.firstResponse(det)) : 'a las ' + this.dur(this.firstResponse(det))) : 'Sin respuesta aún';
      const lbList = det.adjuntos.map(f => ({ url: f.url || '', nombre: f.nombre, tipo: (f.tipo || 'IMG').split(' ')[0], meta: [f.tipo, f.peso, 'SUBIDA POR ' + ((this.user(f.autor) || {}).nombre || '—').toUpperCase()].filter(Boolean).join(' · ') }));
      v.dFiles = det.adjuntos.map((f, i) => ({ nombre: f.nombre, tipo: f.tipo, peso: f.peso, url: f.url || '', hasUrl: !!f.url, noUrl: !f.url,
        open: () => this.openLb(lbList, i),
        key: e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.openLb(lbList, i); } } }));
      v.dNoFiles = det.adjuntos.length === 0;
      v.canTakeDetail = isAdmin && !det.asig && det.status !== 'closed';
      v.tapTakeDetail = this.tapped('taked');
      v.onTakeDetail = () => this.tap('taked', () => this.take(det));
      v.canReopen = det.status === 'closed' && isAdmin && !this.othersTicket(det);
      v.tapReopen = this.tapped('reopen', 'iconSpinTap', 620);
      v.onReopen = () => this.tap('reopen', () => this.confirmOr('reopen', { title: '¿Reabrir TIC-' + det.id + '?', sub: 'Vuelve a Abierto y reaparece en la bandeja. El solicitante recibe el aviso.', ok: 'Reabrir' }, () => this.heavy('Reabriendo el ticket', 900, () => { this.reopen(det); this.reapertura(det.id); })));
      v.canAssign = isAdmin && det.status !== 'closed';
      v.canUpload = det.status !== 'closed' && !this.replyLock(det) && (isAdmin || det.autor === me.id || det.asig === me.id);
      v.tapUpload = this.tapped('upload', 'iconDrop', 520);
      v.onUpload = () => {
        this.tap('upload');
        const el = document.getElementById('tic-file');
        if (el) el.click();
      };
      v.onFileChange = e => { this.pickFiles(e.target.files); e.target.value = ''; };
      v.uploads = s.uploads.map(u => ({
        id: u.id, nombre: u.nombre, peso: u.peso, failed: u.failed, ok: !u.failed, msg: u.msg,
        pct: Math.round(u.pct) + '%', pctLabel: Math.round(u.pct) + '%', rest: (100 - Math.round(u.pct)) + '%',
        dismiss: () => this.setState(st => ({ uploads: st.uploads.filter(x => x.id !== u.id) }))
      }));
      v.hasUploads = s.uploads.length > 0;
    const stg = s.staged.filter(x => x.tid === s.detailId);
    const stgLb = stg.map(y => ({ url: y.url, nombre: y.nombre, tipo: 'IMG', meta: 'SIN ENVIAR · ' + y.peso }));
    v.staged = stg.map((x, i) => ({ nombre: x.nombre, peso: x.peso, url: x.url,
      open: () => this.openLb(stgLb, i),
      remove: () => this.setState(st => ({ staged: st.staged.filter(y => y.id !== x.id) })) }));
    v.hasStaged = stg.length > 0;
    v.stagedCount = String(stg.length);
    v.stagedLabel = stg.length === 1 ? 'Enviar 1 imagen' : 'Enviar ' + stg.length + ' imágenes';
    v.tapStage = this.tapped('stage');
    v.onSendStaged = () => this.tap('stage', () => this.sendStaged());
    v.onDropStaged = () => this.setState(st => ({ staged: st.staged.filter(y => y.tid !== s.detailId) }));
      v.uploadRule = 'JPG, PNG o WEBP, hasta 5 MB — se revisa antes de subir';
      v.canClose = det.status !== 'closed' && det.asig === me.id;
      v.canEdit = (isAdmin && !this.othersTicket(det)) || (!isAdmin && det.autor === me.id && det.status !== 'closed');
      const act = this.visible().filter(t => t.status !== 'closed');
      const setAsig = (id, sure) => {
        if (id && det.asig === id) { this.setState({ asigOpen: false }); return; } // elegir a quien ya lo tiene no escribe historial
        if (!sure && id && !det.asig) {
          this.setState({ asigOpen: false });
          this.confirmOr('assign', { title: '¿Asignar TIC-' + det.id + ' a ' + (id === me.id ? 'vos' : this.user(id).nombre) + '?', sub: det.status === 'open' ? 'Pasa a En progreso y aparece en su bandeja.' : 'Aparece en su bandeja.', ok: 'Asignar' }, () => setAsig(id, true));
          return;
        }
        if (!sure && id && det.asig && det.asig !== id) {
          this.setState({ asigOpen: false });
          const prevN = (this.user(det.asig) || {}).nombre || 'otra persona';
          this.confirmOr('reassign', id === me.id
            ? { title: '¿Tomar TIC-' + det.id + '?', sub: 'Hoy lo tiene ' + prevN + '. Pasa a vos y a ' + prevN.split(' ')[0] + ' le deja de aparecer en su bandeja.', ok: 'Tomar ticket' }
            : { title: '¿Reasignar TIC-' + det.id + ' a ' + this.user(id).nombre + '?', sub: 'Hoy lo tiene ' + prevN + '. Le deja de aparecer en su bandeja.', ok: 'Reasignar' }, () => setAsig(id, true));
          return;
        }
        const nombre = id ? this.user(id).nombre : 'nadie';
        const snap = this.snapshot(det.id);
        this.setState({ asigOpen: false });
        this.optimistic('assign-' + det.id,
          () => this.patch(det.id, { asig: id, status: id && det.status === 'open' ? 'in_progress' : det.status }, id ? 'Asignado a ' + nombre + (id === this.me().id ? ' (se lo tomó)' : '') : 'Asignación quitada', 'assign'),
          () => this.restore(det.id, snap),
          id ? (id === me.id ? 'Tomaste el ticket.' : 'Ticket asignado a ' + nombre + '.') : 'Ticket sin asignar.',
          'HTTP 500 · PATCH /api/tickets/' + det.id + '/assign');
      };
      // Persona "olgazán" (solicitante): el sistema insiste por el técnico y cierra solo si nadie contesta
      const W_REM = 48, W_CLOSE = 168;
      const dsl = this.sla(det);
      v.fuOn = !!dsl.waiting && !api.USE_API; // sin recordatorio ni cierre automático en el backend
      if (v.fuOn) {
        const idle = dsl.idle, manual = det.recordado != null;
        const remSent = manual || idle >= W_REM;
        const remAgo = manual ? det.recordado : idle - W_REM;
        const sol = (this.user(det.autor) || {}).nombre || 'el solicitante';
        const dot = done => ({ dotBg: done ? '#2563eb' : '#ffffff', dotBorder: done ? '#2563eb' : '#d4d4d4' });
        v.fuSteps = [
          Object.assign({ label: 'El área respondió', sub: 'hace ' + this.dur(idle), done: true }, dot(true)),
          Object.assign({ label: 'Recordatorio a ' + sol, sub: remSent ? (manual ? 'Enviado a mano ' : 'Salió solo ') + (remAgo < 1 ? 'recién' : 'hace ' + this.dur(remAgo)) + ' por correo' : 'Sale solo en ' + this.dur(W_REM - idle) + ' por correo', done: remSent }, dot(remSent)),
          Object.assign({ label: 'Cierre automático', sub: (isAdmin ? 'Si no contesta, se cierra solo' : 'Si no respondés, lo cerramos') + ' · se puede reabrir', done: false }, dot(false))
        ];
        v.fuLeft = 'CIERRA EN ' + this.dur(Math.max(0, W_CLOSE - idle)).toUpperCase();
        v.fuPct = Math.min(100, Math.round(idle / W_CLOSE * 100)) + '%';
        v.fuCanRemind = isAdmin && !this.othersTicket(det) && !(manual && det.recordado < 24);
        v.tapRemind = this.tapped('remind');
        v.onRemindNow = () => this.tap('remind', () => this.confirmOr('remind', { title: '¿Recordarle a ' + sol + '?', sub: 'Le llega un correo ahora. El cierre automático sigue su curso.', ok: 'Enviar recordatorio' }, () => this.heavy('Enviando el recordatorio', 800, () => {
          this.patch(det.id, { recordado: 0 });
          this.pill();
          this.say('Le recordamos a ' + sol + ' por correo. El cierre automático sigue su curso.');
        })));
      }
      // Persona "olgazán" (técnico): tomado, pasado de margen y sin movimiento → sugerir a quien tiene menos carga
      const alt = isAdmin && det.asig && det.status !== 'closed' && dsl.late
        ? this.state.users.filter(u => u.rol === 'admin' && u.activo && u.id !== det.asig).sort((a, b) => this.loadOf(a.id).n - this.loadOf(b.id).n)[0] : null;
      v.stuckOn = !!alt;
      if (alt) {
        const quien = (this.user(det.asig) || {}).nombre || 'Quien lo tomó';
        v.stuckTitle = quien.split(' ')[0] + ' lo tiene hace ' + this.dur(dsl.idle) + ' sin movimiento';
        v.stuckSub = 'Pasó su margen de ' + this.dur(dsl.target) + '. ' + alt.nombre.split(' ')[0] + ' tiene la carga más baja del área (' + this.loadOf(alt.id).n + ' activos).';
        v.stuckBtn = 'Pasárselo a ' + alt.nombre.split(' ')[0];
        v.onStuckReassign = () => this.confirmOr('reassign', { title: '¿Pasar TIC-' + det.id + ' a ' + alt.nombre + '?', sub: 'Hoy lo tiene ' + quien + '. Le deja de aparecer en su bandeja.', ok: 'Reasignar' }, () => this.heavy('Reasignando', 800, () => { setAsig(alt.id, true); this.pill(); }));
      }
      v.asigOpen = !!s.asigOpen;
      v.onToggleAsig = () => this.setState(st => ({ asigOpen: !st.asigOpen }));
      v.asigBtnLabel = det.asig ? ((this.user(det.asig) || {}).nombre || '') + (det.asig === me.id ? ' (yo)' : '') : 'Sin asignar';
      v.asigBtnIni = det.asig ? this.ini((this.user(det.asig) || {}).nombre) : '';
      v.asigBtnRing = this.ring(det.asig);
      v.asigHasPerson = !!det.asig;
      v.asigNone = !det.asig;
      v.asigClear = () => { const prev = (this.user(det.asig) || {}).nombre || 'otra persona'; this.confirmOr('unassign', { title: '¿Quitar la asignación de TIC-' + det.id + '?', sub: prev + ' deja de tenerlo y vuelve a la cola sin asignar.', ok: 'Quitar asignación', danger: true }, () => setAsig(null, true)); };
      v.assignables = s.users.filter(u => u.rol === 'admin' && u.activo !== false).map(u => {
        const ld = this.loadOf(u.id), n = ld.n, lateN = ld.late;
        return Object.assign(this.asigOptLabel(u, det.asig), {
          id: u.id, ini: this.ini(u.nombre), ring: this.ring(u.id),
          isAdmin: u.rol === 'admin', on: det.asig === u.id, isMe: u.id === me.id,
          load: n === 0 ? 'Libre' : n + (n === 1 ? ' activo' : ' activos'),
          loadInk: lateN > 0 ? '#171717' : '#737373',
          hasLate: lateN > 0, lateLabel: lateN + ' sin mover',
          pick: () => setAsig(u.id)
        });
      }).sort((a, b) => (b.on - a.on) || (b.isMe - a.isMe) || (a.hasLate === b.hasLate ? 0 : a.hasLate ? 1 : -1));

      v.tapClose = this.tapped('close');
      v.onAskClose = () => this.tap('close', () => this.openModal({ type: 'confirm', kind: 'ticket', danger: true, title: 'Cerrar TIC-' + det.id + '?', sub: 'El solicitante recibe un aviso y el ticket deja de aparecer entre los activos. Podés reabrirlo desde el historial.', ok: 'Cerrar ticket' }));
      v.onEditTicket = () => this.openEdit(det);
    }
    v.onBack = () => { this.setState({ screen: 'tickets', detailId: null, dir: 'back' }); this.load(450); };
    v.comment = s.comment; v.commentErr = s.commentErr;
    v.onComment = e => {
      const txt = e.target.value;
      if (s.detailId) this.saveDraft('t' + s.detailId, txt);
      this.setState({ comment: txt, commentErr: '' });
    };
    v.hasDraft = !!(s.screen === 'detail' && s.comment.trim());
    v.draftLine = 'Borrador guardado en este equipo — si se cae la sesión, sigue acá';
    v.tapComment = this.tapped('comment', 'iconSend', 620);
    v.onAddComment = () => {
      if (!s.comment.trim()) { this.setState({ commentErr: 'Escribí un comentario antes de publicar.' }); return; }
      this.tap('comment');
      this.run('comment', 500, () => this.addComment(false));
    };
    v.tapCommentClose = this.tapped('commentclose');
    v.onCommentAndClose = () => {
      if (!s.comment.trim()) { this.setState({ commentErr: 'Escribí la respuesta con la que querés cerrar el ticket.' }); return; }
      this.tap('commentclose');
      this.confirmOr('close', { title: '¿Publicar y cerrar TIC-' + det.id + '?', sub: 'La respuesta se publica y el ticket pasa a Cerrado.', ok: 'Publicar y cerrar', danger: true }, () => this.heavy('Publicando y cerrando', 900, () => this.addComment(true)));
    };
    v.busyCommentClose = s.busy === 'commentclose'; v.busyCommentCloseOp = s.busy === 'commentclose' ? '0' : '1';

    // categorías
    const pgC = this.pager('cats', s.cats.length);
    v.pgCats = pgC;
    v.catRows = s.cats.slice(pgC.offset, pgC.offset + pgC.limit).map(c => ({
      nombre: c.nombre, descripcion: c.descripcion,
      tickets: String(s.tickets.filter(t => t.cat === c.id).length),
      track: c.activo ? '#0a0a0a' : '#ffffff',
      trackBorder: c.activo ? '#0a0a0a' : '#d4d4d4',
      toggleLabel: (c.activo ? 'Desactivar' : 'Activar') + ' ' + c.nombre,
      knob: c.activo ? '18px' : '0px',
      toggle: () => {
        if (c.activo) {
          this.openModal({
            type: 'confirm', kind: 'cat', id: c.id, danger: true, title: 'Desactivar "' + c.nombre + '"?',
            sub: 'Deja de ofrecerse al crear tickets. Los ' + s.tickets.filter(t => t.cat === c.id).length + ' tickets que ya la usan no cambian y siguen visibles.',
            ok: 'Desactivar categoría'
          });
          return;
        }
        this.confirmOr('activate', { title: '¿Activar "' + c.nombre + '"?', sub: 'Vuelve a ofrecerse al crear un ticket.', ok: 'Activar' }, () => {
          this.setState(st => ({ cats: st.cats.map(x => x.id === c.id ? Object.assign({}, x, { activo: true }) : x) }));
          this.say('"' + c.nombre + '" vuelve a estar disponible.');
        });
      },
      edit: () => this.openEntity({ type: 'cat', id: c.id, name: c.nombre, desc: c.descripcion })
    }));
    v.onNewCat = () => this.openEntity({ type: 'cat', name: '', desc: '' });

    // usuarios
    const pgU = this.pager('users', s.users.length);
    v.pgUsers = pgU;
    const maxCarga = this.maxLoad();
    v.userRows = s.users.slice(pgU.offset, pgU.offset + pgU.limit).map(u => {
      const ld = this.loadOf(u.id);
      return {
      nombre: u.nombre, email: u.email, ini: this.ini(u.nombre), ring: this.ring(u.id),
      rol: u.rol === 'admin' ? 'Admin' : 'Usuario',
      rolDot: u.rol === 'admin' ? '#7c3aed' : '#737373',
      rolNote: u.rol === 'admin' ? 'Ve todos y asigna; responde, edita y cierra los suyos' : 'Ve, edita y responde lo propio',
      inactive: u.activo === false, nameInk: u.activo === false ? '#737373' : '#171717',
      track: u.activo !== false ? '#0a0a0a' : '#ffffff', trackBorder: u.activo !== false ? '#0a0a0a' : '#d4d4d4', knob: u.activo !== false ? '18px' : '0px',
      toggleOff: u.id === me.id || api.USE_API, toggleOp: u.id === me.id || api.USE_API ? '0.4' : '1', toggleCur: u.id === me.id || api.USE_API ? 'default' : 'pointer',
      toggleLabel: api.USE_API ? 'La API todavía no permite activar o desactivar usuarios' : u.id === me.id ? 'No podés desactivarte a vos' : (u.activo !== false ? 'Desactivar a ' : 'Activar a ') + u.nombre,
      toggle: () => this.toggleUser(u),
      carga: String(ld.n),
      cargaNote: ld.n === 0 ? 'Sin tickets activos' : ld.late > 0 ? ld.late + ' sin mover' : 'Al día',
      cargaNoteInk: ld.late > 0 ? '#171717' : '#737373',
      cargaWidth: Math.round((ld.n / maxCarga) * 100) + '%',
      cargaBar: ld.late > 0 ? '#ea580c' : '#171717',
      hasLate: ld.late > 0,
      edit: () => this.openEntity({ type: 'user', id: u.id, name: u.nombre, email: u.email, rol: u.rol })
      };
    });
    v.onNewUser = () => this.openEntity({ type: 'user', name: '', email: '', rol: 'usuario' });

    // modal
    const m = s.modal;
    v.modalOpen = !!m;
    if (m) {
      v.modalTitle = m.title; v.modalSub = m.sub; v.modalOkLabel = m.ok; v.modalErr = m.err || '';
      v.modalIsDanger = !!m.danger; v.modalIsSafe = !m.danger;
      v.modalHasName = m.type !== 'confirm';
      v.modalNameLabel = m.type === 'user' ? 'Nombre y apellido' : 'Nombre';
      v.modalName = m.name || '';
      v.modalHasDesc = m.type === 'cat';
      v.modalDescLabel = 'Descripción corta';
      v.modalDesc = m.desc || '';
      v.modalHasEmail = m.type === 'user'; v.modalEmail = m.email || '';
      v.modalHasRol = m.type === 'user'; v.modalRol = m.rol || 'usuario';
      const up = k => e => this.setState(st => ({ modal: Object.assign({}, st.modal, { [k]: e.target.value, err: '' }) }));
      v.onModalName = up('name'); v.onModalDesc = up('desc'); v.onModalEmail = up('email');
      v.onModalRol = up('rol');
      v.modalPwdOn = api.USE_API && m.type === 'user'; v.modalPwd = m.pwd || ''; v.onModalPwd = up('pwd');
      v.modalPwdLabel = m.id ? 'Contraseña nueva' : 'Contraseña';
      v.modalPwdHelp = m.id ? 'La API la pide también para guardar cambios: la que escribas pasa a ser su contraseña.' : 'Con esta inicia sesión. Pasásela por un canal seguro.';
      v.modalPwdBorder = m.err && m.err.indexOf('contraseña') >= 0 ? '#ea580c' : '#000000';
      v.onModalCancel = () => m.back ? this.openModal(m.back) : this.closeModal();
      v.modalCanSkip = !!m.skipKey; v.modalSkip = !!m.skip;
      v.onModalSkip = e => { const c = e.target.checked; this.setState(st => ({ modal: Object.assign({}, st.modal, { skip: c }) })); };
      const doModalOk = () => {
        const mm = this.state.modal;
        if (mm.skip && mm.skipKey) { try { sessionStorage.setItem('mt-skip-' + mm.skipKey, '1'); } catch (e) {} }
        if (mm.kind === 'fn') { this.setState({ modal: null }); mm.run(); return; }
        if (mm.type === 'confirm') {
          if (mm.kind === 'cat') {
            const nombre = (this.state.cats.find(c => c.id === mm.id) || {}).nombre;
            this.setState(st => ({ cats: st.cats.map(c => c.id === mm.id ? Object.assign({}, c, { activo: false }) : c), modal: null }));
            this.say('"' + nombre + '" ya no se ofrece en tickets nuevos.');
            return;
          }
          if (mm.kind === 'user') {
            const nombre = (this.state.users.find(u => u.id === mm.id) || {}).nombre;
            this.setState(st => ({ users: st.users.map(u => u.id === mm.id ? Object.assign({}, u, { activo: false }) : u), modal: null }));
            this.say(nombre + ' ya no puede iniciar sesión.');
            return;
          }
          const id = s.detailId, prevT = this.ticket(id) || {}, prevStatus = prevT.status, prevHist = prevT.historial;
          if (prevT.status === 'closed' || prevT.asig !== this.me().id) { this.setState({ modal: null }); this.say('Solo quien tiene asignado TIC-' + id + ' puede cerrarlo.'); return; }
          this.patch(id, { status: 'closed' }, 'Ticket cerrado', 'close');
          this.setState({ modal: null });
          this.cierre(id, () => {
            clearTimeout(this._moment);
            this.setState(st => ({
              tickets: st.tickets.map(t => t.id === id ? Object.assign({}, t, { status: prevStatus, historial: prevHist }) : t),
              moment: null
            }));
            this.say('Cierre deshecho. El ticket volvió a ' + this.ST[prevStatus].label + '.');
          });
          return;
        }
        if (!String(mm.name || '').trim()) { this.setState({ modal: Object.assign({}, mm, { err: 'El nombre no puede quedar vacío.' }) }); return; }
        if (mm.type === 'user' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(mm.email || '').trim())) {
          this.setState({ modal: Object.assign({}, mm, { err: 'Ingresá un correo válido, por ejemplo nombre@tic.gob.' }) }); return;
        }
        if (api.USE_API && mm.type === 'user' && String(mm.pwd || '').length < 8) {
          this.setState({ modal: Object.assign({}, mm, { err: 'Escribí una contraseña de al menos 8 caracteres.' }) }); return;
        }
        if (api.USE_API && mm.type === 'user') sync.rememberPassword(String(mm.email || '').trim(), mm.pwd);
        if (mm.type === 'cat') {
          if (mm.id) {
            const apply = () => { this.setState(st => ({ cats: st.cats.map(c => c.id === mm.id ? Object.assign({}, c, { nombre: mm.name.trim(), descripcion: mm.desc }) : c), modal: null })); this.say('Categoría actualizada.'); };
            const pc = this.state.cats.find(c => c.id === mm.id) || {};
            if (pc.nombre === mm.name.trim() && (pc.descripcion || '') === (mm.desc || '')) { this.setState({ modal: null }); return; }
            this.confirmOr('edit-cat', { title: '¿Guardar los cambios en "' + pc.nombre + '"?', sub: 'El nombre nuevo se ve en todos los tickets de esta categoría, también en los viejos.', ok: 'Guardar cambios', back: mm }, apply);
          } else {
            const id = Math.max.apply(null, s.cats.map(c => c.id)) + 1;
            this.setState(st => ({ cats: st.cats.concat([{ id, nombre: mm.name.trim(), descripcion: mm.desc, activo: true }]), modal: null }));
            this.say('Categoría creada y disponible.');
          }
          return;
        }
        if (mm.type === 'user') {
          if (mm.id) {
            const pu = this.state.users.find(u => u.id === mm.id) || {};
            const dm = pu.rol === 'admin' && mm.rol === 'usuario' ? this.demoteMove(pu) : null;
            const apply = () => { if (dm) this.demoteApply(pu, dm); this.setState(st => ({ users: st.users.map(u => u.id === mm.id ? Object.assign({}, u, { nombre: mm.name.trim(), email: mm.email.trim(), rol: mm.rol }) : u), modal: null })); this.say('Usuario actualizado.' + (dm && dm.act.length ? (dm.alt ? ' Sus tickets pasaron a ' + dm.alt.nombre + '.' : (api.USE_API ? ' Sus tickets siguen a su nombre: reasignalos.' : ' Sus tickets quedaron sin asignar.')) : '')); };
            if (pu.nombre === mm.name.trim() && pu.email === mm.email.trim() && pu.rol === mm.rol && !(api.USE_API && mm.pwd)) { this.setState({ modal: null }); return; }
            const rolCambia = pu.rol !== mm.rol;
            this.confirmOr('edit-user', { title: '¿Guardar los cambios de ' + pu.nombre + '?', sub: rolCambia ? 'Cambia su rol a ' + (mm.rol === 'admin' ? 'Administrador' : 'Usuario') + ': ' + (mm.rol === 'admin' ? 'va a ver y gestionar todos los tickets.' : 'deja de ver los tickets de los demás.' + (dm ? dm.note : '')) : 'Los datos nuevos se usan desde su próximo inicio de sesión.', ok: 'Guardar cambios', danger: rolCambia, back: mm }, apply);
          } else {
            const id = Math.max.apply(null, s.users.map(u => u.id)) + 1;
            this.setState(st => ({ users: st.users.concat([{ id, nombre: mm.name.trim(), email: mm.email.trim(), rol: mm.rol, activo: true }]), modal: null }));
            this.say('Usuario creado.');
          }
          return;
        }
      };
      const mBusy = m.type === 'confirm'
        ? (m.kind === 'cat' ? 'Desactivando la categoría' : m.kind === 'user' ? 'Dando de baja al usuario' : 'Cerrando el ticket')
        : m.id ? 'Guardando los cambios' : m.type === 'cat' ? 'Creando la categoría' : 'Creando el usuario';
      v.tapModalOk = this.tapped('modalok');
      v.onModalOk = m.kind === 'fn' ? () => this.tap('modalok', doModalOk) : () => this.tap('modalok', () => this.heavy(mBusy, 900, doModalOk));
    }

    v.loading = s.loading; v.loaded = !s.loading;
    v.screenKey = 'screen-' + s.screen + '-' + (s.detailId || s.editId || (s.entity ? s.entity.type + (s.entity.id || 'new') : 0));
    v.pageAnim = s.dir === 'fwd' ? 'pageInFwd' : s.dir === 'back' ? 'pageInBack'
      : s.dir === 'up' ? 'pageInUp' : s.dir === 'down' ? 'pageInDown' : 'pageIn';
    v.ghostRows = ['62%', '78%', '54%', '70%', '66%'].map((w, i) => ({ w, id: i }));
    v.ghostCards = ['72%', '58%'].map((w, i) => ({ w, id: i }));
    v.ghostCards6 = ['72%', '58%', '66%', '80%', '62%', '74%'].map((w, i) => ({ w, id: i }));
    const cel = s.celebrate;
    v.celebrating = !!cel;
    v.celebCode = cel ? 'TIC-' + cel.id : '';
    v.celebTitulo = cel ? cel.titulo : '';
    v.celebWarn = !!(cel && cel.correoFallo);
    v.celebSub = cel ? cel.cat + ' · ya está en la bandeja del área. Te llevamos al ticket…' : '';
    const mo = s.moment;
    v.momentClose = !!mo && mo.kind === 'close';
    v.momentNudge = !!mo && mo.kind === 'nudge';
    v.momentReopen = !!mo && mo.kind === 'reopen';
    const lb = s.lightbox, lbc = lb ? lb.list[lb.i] : null;
    v.lbOn = !!lbc; v.lbNombre = lbc ? lbc.nombre : ''; v.lbMeta = lbc ? lbc.meta : ''; v.lbUrl = lbc ? lbc.url : '';
    v.lbHasUrl = !!(lbc && lbc.url); v.lbNoUrl = !!lbc && !lbc.url; v.lbTipo = lbc ? lbc.tipo : '';
    v.lbPos = lb ? (lb.i + 1) + ' / ' + lb.list.length : ''; v.lbMulti = !!lb && lb.list.length > 1; v.lbKey = lb ? 'lb' + lb.i : 'lb';
    const lz = s.lbZ || { z: 1, x: 0, y: 0 };
    v.lbTransform = 'translate(' + lz.x + 'px,' + lz.y + 'px) scale(' + lz.z + ')';
    v.lbTrans = s.lbDrag ? 'none' : 'transform 220ms cubic-bezier(0.22,1,0.36,1)';
    v.lbCursor = s.lbDrag ? 'grabbing' : lz.z > 1 ? 'grab' : 'zoom-in';
    v.lbZoomLabel = Math.round(lz.z * 100) + '%';
    v.lbHint = lz.z > 1 ? 'ARRASTRÁ PARA MOVERTE · DOBLE CLICK O 0 PARA AJUSTAR' : 'CLICK O RUEDA PARA ACERCAR · + / −';
    const rel = (e, el) => { const r = el.getBoundingClientRect(); return [e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2)]; };
    v.onLbWheel = e => { const fr = e.currentTarget; this._lbFrame = fr; const p = rel(e, fr); this.lbZoomAt(lz.z * (e.deltaY < 0 ? 1.25 : 0.8), p[0], p[1]); };
    v.onLbIn = () => this.lbZoomAt(lz.z * 1.5, 0, 0);
    v.onLbOut = () => this.lbZoomAt(lz.z / 1.5, 0, 0);
    v.onLbFit = () => this.setState({ lbZ: { z: 1, x: 0, y: 0 } });
    v.onLbDbl = () => this.setState({ lbZ: { z: 1, x: 0, y: 0 } });
    v.onLbDown = e => { const fr = e.currentTarget.parentElement; this._lbFrame = fr; this._lbP = { sx: e.clientX, sy: e.clientY, x: lz.x, y: lz.y, moved: false, p: rel(e, fr) }; try { e.currentTarget.setPointerCapture(e.pointerId); } catch (x) {} };
    v.onLbMove = e => {
      const d = this._lbP; if (!d) return;
      const dx = e.clientX - d.sx, dy = e.clientY - d.sy;
      if (!d.moved && Math.abs(dx) + Math.abs(dy) < 5) return;
      d.moved = true;
      if ((this.state.lbZ || {}).z > 1) this.setState({ lbDrag: true, lbZ: this.lbClamp({ z: this.state.lbZ.z, x: d.x + dx, y: d.y + dy }) });
    };
    v.onLbUp = () => {
      const d = this._lbP; this._lbP = null;
      if (this.state.lbDrag) this.setState({ lbDrag: false });
      if (d && !d.moved && (this.state.lbZ || {}).z === 1) this.lbZoomAt(2.5, d.p[0], d.p[1]);
    };
    v.onLbClose = () => this.setState({ lightbox: null }); v.onLbPrev = () => this.lbStep(-1); v.onLbNext = () => this.lbStep(1);
    v.momentCode = mo ? mo.code : '';
    v.momentTitulo = mo ? mo.titulo : '';
    v.momentSub = mo ? mo.sub : '';
    v.momentBtn = mo ? mo.btn : '';
    v.momentHasUndo = !!(mo && mo.undo);
    v.onMomentUndo = () => { const fn = mo && mo.undo; if (fn) fn(); };
    v.onMomentGo = () => {
      const go = mo && mo.go;
      this.endMoment(true);
      if (go) go();
    };
    v.heavyOn = !!s.heavyMsg; v.heavyMsg = s.heavyMsg;
    const chatVisible = s.chatId && (s.chatOpen || s.screen === 'chat');
    const upAct = (s.uploads || []).filter(y => !y.failed && !(chatVisible && y.tid === s.chatId));
    const upP = upAct.length ? upAct.reduce((a, y) => a + (y.pct || 0), 0) / upAct.length : 0;
    v.upOn = upAct.length > 0 && !s.heavyMsg;
    v.upPct = Math.max(4, Math.round(upP)) + '%'; v.upPctLabel = Math.round(upP) + '%';
    v.upLabel = upAct.length === 1 ? 'SUBIENDO ' + String(upAct[0].nombre || '').toUpperCase() : 'SUBIENDO ' + upAct.length + ' IMÁGENES';
    v.heavyLogoRef = el => {
      if (this._hFillEl === el) return;
      this._hFillEl = el;
      cancelAnimationFrame(this._hFillRaf);
      if (!el) return;
      const t0 = performance.now();
      const step = now => {
        if (this._hFillEl !== el || !el.isConnected) return;
        const p = ((now - t0) % 900) / 900;
        const top = p < 0.55 ? (1 - p / 0.55) * 100 : 0;
        const bottom = p > 0.85 ? ((p - 0.85) / 0.15) * 100 : 0;
        el.style.clipPath = 'inset(' + top.toFixed(1) + '% 0 ' + bottom.toFixed(1) + '% 0)';
        this._hFillRaf = requestAnimationFrame(step);
      };
      this._hFillRaf = requestAnimationFrame(step);
    };
    v.sparks = [0, 45, 90, 135, 180, 225, 270, 315].map((d, i) => ({
      deg: d + 'deg', color: this.RING[i % this.RING.length], delay: (120 + i * 45) + 'ms', id: i
    }));
    v.onCelebNow = () => this.goToNew();
    v.swapKey = 'swap-' + s.swap + '-' + s.statusFilter + '-' + s.view;

    v.busyForm = s.busy === 'form'; v.busyFormOp = s.busy === 'form' ? '0' : '1';
    v.busyComment = s.busy === 'comment'; v.busyCommentOp = s.busy === 'comment' ? '0' : '1';
    v.busyModal = s.busy === 'modal'; v.busyModalOp = s.busy === 'modal' ? '0' : '1';

    v.modalAnim = s.modalClosing
      ? 'modalOut var(--duration-fast) var(--ease-standard)'
      : 'modalIn var(--duration-base) var(--ease-standard)';
    v.overlayAnim = s.modalClosing
      ? 'overlayOut var(--duration-fast) var(--ease-standard)'
      : 'overlayIn var(--duration-base) var(--ease-standard)';
    v.toastAnim = s.toastOut
      ? 'toastOut var(--duration-fast) var(--ease-standard) both'
      : 'none';

    // El ciclo de llenado se arranca con la Web Animations API al montar el nodo:
    // declararlo como 'animation:' en el template lo reiniciaba en cada re-render.
    // Ni CSS ni WAAPI: en este nodo el reloj de la animación nunca arranca
    // (currentTime clavado en 0). El llenado se pinta a mano por cuadro.
    v.saveLogoRef = el => {
      if (this._fillEl === el) return;
      this._fillEl = el;
      cancelAnimationFrame(this._fillRaf);
      if (!el) return;
      const t0 = performance.now();
      const step = now => {
        if (this._fillEl !== el || !el.isConnected) return;
        const p = ((now - t0) % 900) / 900;
        const top = p < 0.55 ? (1 - p / 0.55) * 100 : 0;
        const bottom = p > 0.85 ? ((p - 0.85) / 0.15) * 100 : 0;
        el.style.clipPath = 'inset(' + top.toFixed(1) + '% 0 ' + bottom.toFixed(1) + '% 0)';
        this._fillRaf = requestAnimationFrame(step);
      };
      this._fillRaf = requestAnimationFrame(step);
    };
    v.hasToast = !!s.toast; v.toast = s.toast;
    v.hasUndo = !!s.undo;
    v.onUndo = () => { const fn = s.undo; if (fn) fn(); };
    if (v.showChatPage) { v.pageTitle = 'Chat'; v.pageSub = 'Todas las conversaciones de tickets en una sola pantalla'; v.crumb = 'CHAT'; }
    if (v.showForbidden) { v.pageTitle = 'Acceso restringido'; v.pageSub = 'Tu rol actual no alcanza para esta sección'; v.crumb = 'LEGUMEX'; }
    else if (v.showNotFound) { v.pageTitle = 'Ticket no encontrado'; v.pageSub = 'Revisá el código o volvé al listado'; v.crumb = 'TICKETS'; }
    // --- página crear/editar (categorías y usuarios) ---
    const ent = s.entity;
    if (ent) {
      const isCat = ent.type === 'cat', editingEnt = !!ent.id;
      v.entIsCat = isCat; v.entIsUser = !isCat;
      v.entName = ent.name || ''; v.entDesc = ent.desc || ''; v.entEmail = ent.email || '';
      v.entErr = ent.err || '';
      v.entNameLabel = isCat ? 'Nombre de la categoría' : 'Nombre y apellido';
      v.entNamePh = isCat ? 'Ej.: Redes y conectividad' : 'Ej.: Renata Ibáñez';
      v.entNameHelp = isCat ? 'Es lo que ve quien reporta al elegir categoría.' : 'Aparece como autor y responsable en los tickets.';
      v.entNameBorder = ent.err && !String(ent.name || '').trim() ? '#ea580c' : '#e5e5e5';
      v.entEmailBorder = ent.err && ent.err.indexOf('correo') >= 0 ? '#ea580c' : '#e5e5e5';
      v.entOkLabel = editingEnt ? 'Guardar cambios' : (isCat ? 'Crear categoría' : 'Crear usuario');
      v.entMeta = editingEnt;
      v.entCode = isCat ? 'CAT-' + ent.id : 'USR-' + ent.id;
      if (editingEnt) {
        if (isCat) {
          const n = s.tickets.filter(t => t.cat === ent.id).length;
          v.entMetaNote = n === 0 ? 'Ningún ticket la usa todavía' : n + (n === 1 ? ' ticket la usa' : ' tickets la usan') + ' — renombrarla no los cambia de categoría';
        } else {
          const n = s.tickets.filter(t => t.asig === ent.id && t.status !== 'closed').length;
          v.entMetaNote = n === 0 ? 'Sin tickets activos asignados' : n + (n === 1 ? ' ticket activo asignado' : ' tickets activos asignados');
        }
      } else v.entMetaNote = '';
      v.entRoles = [
        { k: 'usuario', label: 'Usuario', note: 'Ve, edita y responde solo sus propios tickets' },
        { k: 'admin', label: 'Administrador', note: 'Ve todos los tickets y asigna; responde, edita y cierra los suyos' }
      ].map(r => ({
        label: r.label, note: r.note, on: (ent.rol || 'usuario') === r.k,
        border: (ent.rol || 'usuario') === r.k ? '#0a0a0a' : '#e5e5e5',
        dotBorder: (ent.rol || 'usuario') === r.k ? '#0a0a0a' : '#d4d4d4',
        dotBg: (ent.rol || 'usuario') === r.k ? '#0a0a0a' : '#ffffff',
        go: () => { if (ent.id === me.id && r.k !== (ent.rol || 'usuario')) { this.setState(st => ({ entity: Object.assign({}, st.entity, { err: 'No podés cambiar tu propio rol: perderías el acceso de admin. Pedíselo a otro admin.' }) })); return; } this.setState(st => ({ entity: Object.assign({}, st.entity, { rol: r.k, err: '' }) })); }
      }));
      const upe = k => e2 => this.setState(st => ({ entity: Object.assign({}, st.entity, { [k]: e2.target.value, err: '' }) }));
      v.onEntName = upe('name'); v.onEntDesc = upe('desc'); v.onEntEmail = upe('email');
      v.entPwdOn = api.USE_API && !isCat; v.entPwd = ent.pwd || ''; v.onEntPwd = upe('pwd');
      v.entPwdLabel = ent.id ? 'Contraseña nueva' : 'Contraseña';
      v.entPwdHelp = ent.id ? 'La API la pide también para guardar cambios: la que escribas pasa a ser su contraseña.' : 'Con esta inicia sesión. Pasásela por un canal seguro.';
      v.entPwdBorder = ent.err && ent.err.indexOf('contraseña') >= 0 ? '#ea580c' : '#e5e5e5';
      v.onEntSave = () => ent.id ? this.saveEntity() : this.heavy('Creando el registro', 900, () => this.saveEntity());
      v.onEntCancel = () => this.closeEntity();
    }

    // --- conversaciones (dock, solo admin) ---
    // Admin: espera si el último comentario es del solicitante. Usuario: si el último es de alguien del área.
    const waits = t => {
      if (t.status === 'closed' || !(t.comentarios || []).length) return false;
      const last = t.comentarios[t.comentarios.length - 1];
      return isAdmin ? last.autor === t.autor : last.autor !== me.id;
    };
    const nWait = mine.filter(waits).length;
    const formScreen = s.screen === 'create' || s.screen === 'edit' || s.screen === 'entity';
    v.chatFab = s.authed && !s.chatOpen && !formScreen && s.screen !== 'chat';
    v.fabSize = s.fabSmall ? '40px' : '52px';
    v.gridGutter = s.authed ? '92px' : '24px';
    v.fabIcon = s.fabSmall ? '17' : '21';
    // E6 · el sistema vive en una pestaña fija todo el día
    const nTab = this._nUnread > 0 ? this._nUnread : 0;
    const tituloPestana = nTab > 0 ? '(' + nTab + ') Legumex' : 'Legumex';
    if (typeof document !== 'undefined' && document.title !== tituloPestana) document.title = tituloPestana;
    v.chatWaiting = String(nWait); v.hasChatWaiting = nWait > 0;
    v.chatOpen = !!s.chatOpen;
    v.onOpenChat = () => this.setState({ chatOpen: true, chatId: null, chatMsg: '', chatErr: '', chatQ: '' });
    v.onCloseChat = () => this.setState({ chatOpen: false });
    v.onChatExpand = () => { const already = s.screen === 'chat'; this.setState({ chatOpen: false, screen: 'chat', detailId: null, dir: already ? 'none' : 'up' }); if (!already) this.load(420); };
    v.onChatBack = () => this.setState({ chatId: null, chatMsg: '', chatErr: '' });
    v.canChatDetail = !!det;
    v.onChatFromDetail = () => this.openChat(det.id);
    const ct = s.chatId && this.visible().some(t => t.id === s.chatId) ? this.ticket(s.chatId) : null;
    v.chatConvPane = !!ct; v.chatListPane = !ct;
    v.chatPageConv = !!ct; v.chatPageEmpty = !ct;
    // Llamar desde el chat: a la otra parte del ticket (mismo registro que en el detalle)
    const otro = ct ? this.user(ct.autor === me.id ? ct.asig : ct.autor) : null;
    v.chatCallOn = !!(otro && otro.email && otro.id !== me.id) && !this.othersTicket(ct);
    v.chatCallUrl = otro ? 'https://teams.microsoft.com/l/call/0/0?users=' + otro.email : '';
    v.chatCallLabel = otro ? 'Llamar por Teams a ' + otro.nombre : '';
    v.onChatCall = () => { if (ct && otro) this.registrarLlamada(ct, otro.nombre); };
    // Dos paneles solo si entran; si no, lista o conversación (la flecha vuelve a la lista)
    const wide = s.chatWide !== false;
    v.chatCols = wide ? 'minmax(260px,340px) minmax(0,1fr)' : 'minmax(0,1fr)';
    v.chatShowList = wide || !ct; v.chatShowRight = wide || !!ct;
    v.chatListBorder = wide ? '1px solid #e5e5e5' : 'none';
    // Ref estable: si cambiara en cada render, React desconectaría el observer antes de su primer aviso
    this._chatPageRef = this._chatPageRef || (el => {
      if (this._chatEl === el) return;
      if (this._chatRO) { this._chatRO.disconnect(); this._chatRO = null; }
      this._chatEl = el;
      if (!el) return;
      const check = w => { const wide = w >= 760; if (wide !== (this.state.chatWide !== false)) this.setState({ chatWide: wide }); };
      check(el.getBoundingClientRect().width);
      if (typeof ResizeObserver === 'undefined') return;
      this._chatRO = new ResizeObserver(en => check(en[0].contentRect.width));
      this._chatRO.observe(el);
    });
    v.chatPageRef = this._chatPageRef;
    v.chatPageHint = nWait > 0 ? 'Arriba de la lista están las ' + nWait + ' que esperan tu respuesta. Enter envía, Shift+Enter salta línea.' : 'Nadie espera respuesta ahora. Lo que escribas acá se publica como comentario del ticket.';
    v.chatSub = !isAdmin
      ? (nWait > 0 ? 'El área te escribió en ' + nWait + (nWait === 1 ? ' ticket' : ' tickets') : 'Tus conversaciones con el área')
      : (nWait > 0 ? (() => { const nm = mine.filter(t => waits(t) && t.asig === me.id).length; return 'Esperan respuesta: ' + nm + (nm === 1 ? ' tuyo' : ' tuyos') + ' · ' + (nWait - nm) + ' del equipo'; })() : 'Nadie espera respuesta');
    v.chatQ = s.chatQ;
    v.onChatQ = e => this.setState({ chatQ: e.target.value });
    const chatF = [['all', 'Cualquiera'], ['open', 'Abiertos'], ['in_progress', 'En progreso'], ['closed', 'Cerrados']];
    const chatSt = (!s.chatStatus || s.chatStatus === 'mine') ? 'all' : s.chatStatus;
    const cMine = mine.filter(t => t.asig === me.id).length, cScope = s.chatScope || 'all';
    v.chatScopeOpts = [['all', 'Todos', String(mine.length)], ['mine', 'Míos', String(cMine)]].map(o => ({
      label: o[1], count: o[2], bg: cScope === o[0] ? '#ffffff' : 'transparent', weight: cScope === o[0] ? '600' : '500',
      shadow: cScope === o[0] ? 'rgba(0,0,0,0.06) 0px 1px 2px 0px' : 'none', pressed: cScope === o[0] ? 'true' : 'false',
      go: () => this.setState({ chatScope: o[0] })
    }));
    v.chatFilters = chatF.map(f => ({
      label: f[1], bg: chatSt === f[0] ? '#ffffff' : 'transparent',
      go: () => this.setState({ chatStatus: f[0] })
    }));
    const cq = (s.chatQ || '').trim().toLowerCase();
    const clist = mine
      .filter(t => !(isAdmin && s.chatScope === 'mine') || t.asig === me.id)
      .filter(t => chatSt === 'all' || t.status === chatSt)
      .filter(t => !cq || t.titulo.toLowerCase().indexOf(cq) >= 0 || ('tic-' + t.id).indexOf(cq) >= 0)
      .slice()
      .sort((a, b) => (waits(b) ? 1 : 0) - (waits(a) ? 1 : 0) || this.lastAt(a) - this.lastAt(b));
    v.chatList = clist.map(t => {
      const last = (t.comentarios || [])[t.comentarios.length - 1];
      const otherId = isAdmin || t.autor !== me.id ? t.autor : t.asig;
      const au = this.user(otherId) || { nombre: 'Tickets TIC' };
      return {
        code: 'TIC-' + t.id, titulo: t.titulo, ini: this.ini(au.nombre), ring: this.ring(otherId),
        dot: this.ST[t.status].dot, bg: s.chatId === t.id ? '#f5f5f5' : 'transparent',
        blobRef: el => { if (el) el.src = this.blobUrl(otherId, 60); }, hasBlob: !!otherId, noBlob: !otherId,
        last: last ? ((last.autor === me.id ? 'Vos: ' : '') + last.texto) : 'Sin respuestas todavía',
        lastInk: last ? '#525252' : '#a3a3a3',
        when: this.ago(this.lastAt(t)).replace('hace ', ''),
        waiting: waits(t), asigId: t.asig || null,
        waitLabel: !isAdmin || t.asig === me.id ? 'Espera tu respuesta' : t.asig ? 'Espera a ' + ((this.user(t.asig) || {}).nombre || 'el equipo').split(' ')[0] : 'Espera que alguien lo tome',
        waitDot: !isAdmin || t.asig === me.id ? '#2563eb' : '#737373',
        waitBg: !isAdmin || t.asig === me.id ? '#dbeaff' : '#f5f5f5',
        go: () => this.setState({ chatId: t.id, chatMsg: '', chatErr: '' })
      };
    });
    v.chatEmpty = clist.length === 0;
    const wl0 = v.chatList.filter(x => x.waiting);
    const wMine = wl0.filter(x => x.asigId === me.id), wTeam = wl0.filter(x => x.asigId !== me.id);
    const wl = isAdmin ? wMine.concat(wTeam) : wl0;
    v.chatWaitList = wl.slice(0, 4).map((x, i) => {
      const mineW = x.asigId === me.id, ow = this.user(x.asigId);
      return Object.assign({}, x, { delay: (i * 60) + 'ms', ownOn: isAdmin,
        own: mineW ? 'TUYO' : ow ? 'EQUIPO · ' + ow.nombre.split(' ')[0].toUpperCase() : 'SIN ASIGNAR',
        ownInk: mineW ? '#2563eb' : '#525252', ownBorder: mineW ? '#2563eb' : '#d4d4d4' });
    });
    v.chatHasWait = wl.length > 0;
    const pl = (n, a, b) => n + ' ' + (n === 1 ? a : b);
    v.chatEmptyTitle = isAdmin && wl.length
      ? (wMine.length && wTeam.length ? pl(wMine.length, 'tuyo', 'tuyos') + ' y ' + wTeam.length + ' del equipo esperan respuesta'
        : wMine.length ? pl(wMine.length, 'ticket tuyo espera', 'tickets tuyos esperan') + ' respuesta'
        : pl(wTeam.length, 'ticket del equipo espera', 'tickets del equipo esperan') + ' respuesta')
      : !isAdmin
      ? (wl.length ? 'El área te escribió en ' + (wl.length === 1 ? '1 ticket' : wl.length + ' tickets') : 'Estás al día con el área')
      : (wl.length ? (wl.length === 1 ? '1 persona espera tu respuesta' : wl.length + ' personas esperan tu respuesta') : 'Nadie espera respuesta');
    v.chatPageHint = wl.length ? 'Empezá por la más vieja. Enter envía, Shift+Enter salta línea.' : 'Elegí cualquier conversación de la lista; lo que escribas se publica como comentario del ticket.';
    v.chatFabOn = !!v.chatFab && s.screen !== 'chat';
    this._chatEls = this._chatEls || new Set();
    v.chatRef = this._chatRefFn || (this._chatRefFn = el => { if (el) { this._chatEls.add(el); el.scrollTop = el.scrollHeight; } });
    const chatKey = ct ? ct.id + '|' + (ct.comentarios || []).length + '|' + (ct.adjuntos || []).length : '';
    if (chatKey !== this._chatKey) {
      this._chatKey = chatKey;
      requestAnimationFrame(() => this._chatEls.forEach(el => { if (!el.isConnected) { this._chatEls.delete(el); return; } el.scrollTop = el.scrollHeight; }));
    }
    if (ct) {
      const cau = this.user(ct.autor) || {};
      const cst = this.ST[ct.status];
      v.chatCode = 'TIC-' + ct.id; v.chatTitulo = ct.titulo; v.chatDesc = ct.desc;
      v.chatAutor = cau.nombre || '—';
      v.chatStatusLabel = cst.label; v.chatStatusDot = cst.dot;
      const cImgs = (ct.adjuntos || []);
      const cLb = cImgs.map(a => ({ url: a.url || '', nombre: a.nombre, tipo: (a.tipo || 'IMG').split(' ')[0], meta: [a.tipo, a.peso, 'SUBIDA POR ' + ((this.user(a.autor) || {}).nombre || '—').toUpperCase()].filter(Boolean).join(' · ') }));
      const tl = (ct.comentarios || []).map((c, i) => ({ c, i, h: c.h || 0, file: false }))
        .concat(cImgs.map((a, i) => ({ c: a, i, h: a.h || 0, file: true })))
        .map((x, k) => Object.assign(x, { k, at: x.c.at || 0 })).sort((a, b) => (b.h - a.h) || (a.at - b.at) || (a.k - b.k));
      v.chatMsgs = tl.map(x => {
        const c = x.c, i = x.i;
        const u = this.user(c.autor) || {}, isMine = c.autor === me.id;
        return {
          isText: !x.file, isFile: x.file,
          fileName: x.file ? c.nombre : '', fileMeta: x.file ? [c.tipo, c.peso].filter(Boolean).join(' · ') : '',
          fileUrl: x.file ? (c.url || '') : '', fileHasUrl: x.file && !!c.url, fileNoUrl: x.file && !c.url,
          open: x.file ? () => this.openLb(cLb, i) : null,
          key: (x.file ? 'f' : 'm') + i + '-' + c.h, texto: x.file ? '' : c.texto,
          theirs: !isMine, just: isMine ? 'flex-end' : 'flex-start', align: isMine ? 'flex-end' : 'flex-start',
          bg: isMine ? '#0a0a0a' : '#ffffff', ink: isMine ? '#ffffff' : '#171717',
          border: isMine ? 'none' : '1px solid #e5e5e5',
          ini: this.ini(u.nombre), ring: this.ring(c.autor), blobRef: el => { if (el) el.src = this.blobUrl(c.autor, 52); }, hasBlob: true, noBlob: false,
          head: (isMine ? 'Vos' : (u.nombre || '—')) + ' · ' + this.ago(c.h)
        };
      });
      v.chatNoMsgs = tl.length === 0;
      const cst2 = s.staged.filter(y => y.tid === ct.id);
      const cstLb = cst2.map(y => ({ url: y.url, nombre: y.nombre, tipo: 'IMG', meta: 'SIN ENVIAR · ' + y.peso }));
      v.chatStaged = cst2.map((y, i) => ({ key: y.id, nombre: y.nombre, url: y.url, open: () => this.openLb(cstLb, i), remove: () => this.setState(st => ({ staged: st.staged.filter(z => z.id !== y.id) })) }));
      v.chatHasStaged = cst2.length > 0;
      v.chatStagedNote = cst2.length === 1 ? '1 imagen lista · se envía con tu respuesta' : cst2.length + ' imágenes listas · se envían con tu respuesta';
      const cup = s.uploads.filter(y => y.tid === ct.id && !y.failed);
      v.chatUploading = cup.length > 0;
      v.chatUpTiles = cup.map(y => ({ key: y.id, nombre: y.nombre, rest: (100 - Math.round(y.pct || 0)) + '%', pctLabel: Math.round(y.pct || 0) + '%' }));
      v.chatUpNote = cup.length === 1 ? 'Subiendo ' + cup[0].nombre + ' · ' + Math.round(cup[0].pct) + '%' : 'Subiendo ' + cup.length + ' imágenes';
      const cfail = s.uploads.filter(y => y.tid === ct.id && y.failed);
      v.chatUpFail = cfail.length > 0; v.chatUpFailMsg = cfail.length ? cfail[cfail.length - 1].nombre + ' · ' + cfail[cfail.length - 1].msg : '';
      v.onChatUpFailX = () => this.setState(st => ({ uploads: st.uploads.filter(y => !(y.tid === ct.id && y.failed)) }));
      v.onChatPick = e => { this.pickFiles(e.target.files, ct.id); e.target.value = ''; };
      v.chatMsg = s.chatMsg;
      v.onChatMsg = e => this.setState({ chatMsg: e.target.value, chatErr: '' });
      v.chatHasErr = !!s.chatErr; v.chatErr = s.chatErr || '';
      v.chatSending = !!s.chatSending; v.chatIdle = !s.chatSending;
      v.onChatSend = () => {
        if (s.chatSending) return;
        if (!(s.chatMsg || '').trim() && !s.staged.some(x => x.tid === ct.id)) { this.setState({ chatErr: 'Escribí una respuesta o adjuntá una imagen antes de enviar.' }); return; }
        this.setState({ chatSending: true });
        clearTimeout(this._cs); this._cs = setTimeout(() => { this.chatSend(false); this.setState({ chatSending: false }); }, 450);
      };
      v.onChatSendClose = () => (s.chatMsg || '').indexOf('______') >= 0 ? this.setState({ chatErr: 'Completá el resumen donde dice ______ antes de cerrar.' }) : !(s.chatMsg || '').trim() ? this.setState({ chatErr: 'Escribí la respuesta con la que querés cerrar el ticket.' }) : this.confirmOr('close', { title: '¿Enviar y cerrar TIC-' + ct.id + '?', sub: 'La respuesta se envía y el ticket pasa a Cerrado.', ok: 'Enviar y cerrar', danger: true }, () => this.heavy('Publicando y cerrando', 900, () => this.chatSend(true)));
      v.onChatKey = e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); v.onChatSend(); } };
      v.chatCanClose = ct.status !== 'closed' && ct.asig === me.id;
      const cHueco = 'Se resolvió: ______. Si vuelve a pasar, respondé este correo y lo reabrimos.';
      const cMacros = (isAdmin ? this.MACROS : this.MACROS_USER).concat(v.chatCanClose ? [{ label: 'Cerrar con resumen', text: cHueco }] : []);
      v.chatMacros = cMacros.map(m => ({ label: m.label, text: m.text, use: () => this.setState({ chatMsg: m.text, chatErr: '' }) }));
      v.onChatOpenTicket = () => { this.setState({ chatOpen: false }); this.openTicket(ct.id); };
      v.chatCanEdit = (isAdmin && !this.othersTicket(ct)) || (!isAdmin && ct.autor === me.id && ct.status !== 'closed');
      v.onChatEdit = () => { this.setState({ chatOpen: false }); this.openEdit(ct); };
      v.chatCanReopen = ct.status === 'closed' && isAdmin && !this.othersTicket(ct);
      const crl = this.replyLock(ct);
      v.chatCanReply = !crl; v.chatReplyLocked = !!crl; v.chatReplyLockMsg = crl ? crl.msg : ''; v.chatReplyLockTake = !!(crl && crl.take);
      v.chatReplyLockTake = !!(crl && (crl.take || crl.reopen || crl.follow));
      v.chatReplyTakeLabel = crl && crl.follow ? 'Sigue pasando' : crl && crl.reopen ? 'Reabrir ticket' : crl && crl.steal ? 'Tomar yo' : 'Tomar para responder';
      v.chatReplyOnTake = () => crl && crl.follow ? this.followUp(ct) : crl && crl.reopen ? v.onChatReopen() : crl && crl.steal ? this.quickAssign(ct, me.id) : this.take(ct);
      const cSent = this.resolvedSent(ct);
      v.chatResolvedShow = !isAdmin && ct.autor === me.id && ct.status !== 'closed';
      v.chatResolvedDis = cSent; v.chatResolvedOp = cSent ? '0.5' : '1'; v.chatResolvedCur = cSent ? 'default' : 'pointer';
      v.chatResolvedShort = cSent ? 'Avisado' : 'Ya se resolvió';
      v.chatResolvedLabel = cSent ? 'Ya avisaste que se resolvió' : 'Avisar al área que ya se resolvió';
      v.onChatResolved = () => this.markResolved(ct);
      const cYa = this.nudgedRecently(ct, me.nombre);
      v.chatNudgeShow = !isAdmin && ct.autor === me.id && ct.status !== 'closed' && !this.waitingOnRequester(ct);
      v.chatNudgeDis = cYa; v.chatNudgeOp = cYa ? '0.45' : '1'; v.chatNudgeCur = cYa ? 'default' : 'pointer';
      v.chatNudgeLabel = cYa ? 'Ya lo marcaste como bloqueante hoy' : 'Esto me está frenando: subirlo en la cola';
      v.onChatNudge = () => { if (cYa) return; this.confirmOr('nudge', { title: '¿Marcar TIC-' + ct.id + ' como bloqueante?', sub: 'Sube en la cola del área y lo ven marcado. Se puede usar una vez por día.', ok: 'Sí, me está frenando', danger: true }, () => { this.nudge(ct); this.bloqueante(ct.id); }); };
      v.onChatReopen = () => this.confirmOr('reopen', { title: '¿Reabrir TIC-' + ct.id + '?', sub: 'Vuelve a Abierto y reaparece en la bandeja. El solicitante recibe el aviso.', ok: 'Reabrir' }, () => this.heavy('Reabriendo el ticket', 900, () => { this.reopen(ct); this.reapertura(ct.id); }));
    }
    return v;
  }
}
