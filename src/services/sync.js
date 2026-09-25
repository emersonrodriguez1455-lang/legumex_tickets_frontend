// Puente entre el estado de la interfaz y la API.
// La lógica (src/logic) sigue trabajando igual que el prototipo: cambia su estado al instante.
// Este módulo compara el estado anterior con el nuevo y manda al servidor solo lo que cambió.
// Si el servidor rechaza algo, avisa y vuelve a cargar los datos reales.
import * as api from './api.js';

let silentN = 0;
export function silent(fn) { silentN++; try { fn(); } finally { silentN--; } }

const files = {};
export function rememberFile(url, file) { if (url && file) files[url] = file; }

// Cola por recurso: los cambios de un mismo ticket viajan en orden
const queues = new Map();
let pending = 0;
function enqueue(key, task, logic) {
  pending++;
  const prev = queues.get(key) || Promise.resolve();
  const next = prev.then(task).catch(err => onError(err, logic)).finally(() => { pending--; if (queues.get(key) === next) queues.delete(key); });
  queues.set(key, next);
}
function onError(err, logic) {
  if (err && err.status === 401 && !(err.body && err.body.statusCode === 401)) return; // la sesión venció: api.js ya volvió al login
  logic.say('No se pudo guardar en el servidor: ' + ((err && err.message) || 'error desconocido') + '. Recargamos los datos.');
  refresh(logic, true).catch(() => {});
}

// ── de la API al formato de la interfaz
const hoursAgo = iso => { const t = Date.parse(iso || ''); return isNaN(t) ? 0 : Math.max(0, (Date.now() - t) / 3600000); };
const MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
function fecha(iso) {
  const d = new Date(iso || ''); if (isNaN(d)) return '—';
  return d.getDate() + ' ' + MESES[d.getMonth()] + ', ' + String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
}
const rolDe = r => (r === 'admin' ? 'admin' : 'usuario');
// API: open, in_progress, pending, resolved, closed, cancelled · low, medium, high, critical
const ST_IN = { open: 'open', in_progress: 'in_progress', pending: 'in_progress', resolved: 'closed', closed: 'closed', cancelled: 'closed' };
const PR_IN = { low: 'low', medium: 'medium', high: 'high', critical: 'high' };
// Si la persona no tocó el estado/prioridad, se devuelve el valor original (p. ej. "pending" no pasa a "in_progress")
const stOut = (pt, nt) => (nt.status === pt.status && nt.apiStatus ? nt.apiStatus : nt.status);
const prOut = (pt, nt) => (nt.prio === pt.prio && nt.apiPrio ? nt.apiPrio : nt.prio);
const cut = (x, n) => String(x == null ? '' : x).slice(0, n);
// Los listados de comentarios, historial y adjuntos no traen fecha: se recuerda cuándo se vio cada uno
const seenAt = new Map();
function whenOf(kind, item, fallbackMs, i) {
  if (item.created_at) return Date.parse(item.created_at);
  const k = kind + item.id;
  if (!seenAt.has(k)) seenAt.set(k, firstLoad ? fallbackMs + (i + 1) * 60000 : Date.now());
  return seenAt.get(k);
}
let firstLoad = true;
const hoursFrom = ms => Math.max(0, (Date.now() - ms) / 3600000);
const kb = b => (b >= 1048576 ? (b / 1048576).toFixed(1) + ' MB' : Math.round((b || 0) / 1024) + ' KB');

export async function refresh(logic, force) {
  if (!api.USE_API) return;
  if (!force && pending > 0) return; // hay cambios viajando: se espera al próximo sondeo
  const [users, cats, tickets, comments, histories, atts] = await Promise.all([
    api.listUsers().catch(() => null),
    api.listCategories(),
    api.listTickets(),
    api.listComments().catch(() => []),
    api.listHistories().catch(() => []),
    api.listAttachments().catch(() => [])
  ]);
  const st = logic.state, ses = st.session || {};
  let us = (users || []).map(u => ({ id: u.id, nombre: u.name, email: u.email, rol: rolDe(u.role), activo: u.active !== false }));
  if (ses.email && !us.some(u => u.email === ses.email)) {
    const prevMe = (st.users || []).find(u => u.email === ses.email);
    us.push({ id: prevMe ? prevMe.id : -1, nombre: ses.name, email: ses.email, rol: ses.rol, activo: true });
  }
  const name = id => { const u = us.find(x => x.id === id); return u ? u.nombre : 'Usuario ' + id; };
  const byT = (list, id) => (list || []).filter(x => x.ticket_id === id);
  const tk = (tickets || []).map(t => {
    const h = hoursAgo(t.created_at), c0 = Date.parse(t.created_at || '') || Date.now();
    const historial = byT(histories, t.id).sort((a, b) => a.id - b.id).map((x, i) => ({ autor: name(x.user_id), texto: x.new_value || x.action, h: hoursFrom(whenOf('h', x, c0, i)), kind: x.action || 'edit', apiId: x.id }));
    if (t.closed_at && !historial.some(x => x.kind === 'close')) historial.push({ autor: name(t.closed_by), texto: 'Ticket cerrado', h: hoursAgo(t.closed_at), kind: 'close' });
    if (!historial.some(x => x.kind === 'create')) historial.push({ autor: name(t.user_id), texto: 'Ticket creado', h, kind: 'create' });
    historial.sort((a, b) => a.h - b.h);
    return {
      id: t.ticket_number || t.id, apiId: t.id,
      titulo: t.title || '', desc: t.description || '', cat: t.category_id,
      status: ST_IN[t.status] || 'open', prio: PR_IN[t.priority] || 'medium', apiStatus: t.status, apiPrio: t.priority,
      autor: t.user_id, asig: t.assigned_to || null,
      creado: fecha(t.created_at), h,
      comentarios: byT(comments, t.id).sort((a, b) => a.id - b.id).map((c, i) => ({ autor: c.user_id, texto: c.description || '', h: hoursFrom(whenOf('c', c, c0, i)), apiId: c.id })),
      historial,
      adjuntos: byT(atts, t.id).sort((a, b) => a.id - b.id).map((a, i) => ({ nombre: a.file_name, tipo: String(a.mime_type || a.file_name.split('.').pop() || 'img').split('/').pop().toUpperCase(), peso: kb(a.file_size), url: api.fileUrl(a.file_path), autor: a.user_id, h: hoursFrom(whenOf('a', a, c0, i)), apiId: a.id }))
    };
  });
  // Quien aparece en un ticket y no está en la lista de usuarios igual necesita nombre
  tk.forEach(t => [t.autor, t.asig].forEach(id => { if (id && !us.some(u => u.id === id)) us.push({ id, nombre: 'Usuario ' + id, email: '', rol: 'usuario', activo: true }); }));
  const cs = (cats || []).map(c => ({ id: c.id, nombre: c.name, descripcion: c.description || '', activo: c.active !== false }));
  const seq = tk.reduce((m, t) => Math.max(m, t.id), 1000);
  firstLoad = false;
  silent(() => logic.setState({ users: us, cats: cs, tickets: tk, seq }));
}

// ── de la interfaz a la API
export function diff(prev, next, logic) {
  if (!api.USE_API || silentN > 0 || !next.session || !next.authed) return;
  if (prev.tickets !== next.tickets) diffTickets(prev.tickets || [], next.tickets || [], logic);
  if (prev.cats !== next.cats) diffCats(prev.cats || [], next.cats || [], logic);
  if (prev.users !== next.users) diffUsers(prev.users || [], next.users || [], logic);
}
const renamed = new Map(); // número local → número que asignó el servidor
const apiIdOf = (logic, id) => { const real = renamed.get(id) || id; const t = logic.state.tickets.find(x => x.id === real); return t ? t.apiId : null; };
const isAdmin = logic => (logic.state.session || {}).rol === 'admin';

function diffTickets(prevList, nextList, logic) {
  const prevById = new Map(prevList.map(t => [t.id, t]));
  for (const nt of nextList) {
    const pt = prevById.get(nt.id);
    if (!pt && !nt.apiId) { createTicket(nt, logic); continue; }
    if (!pt || pt === nt) continue;
    const had = new Set([].concat(pt.comentarios || [], pt.historial || [], pt.adjuntos || []));
    const newComments = (nt.comentarios || []).filter(c => !had.has(c) && !c.apiId);
    const newHist = (nt.historial || []).filter(h => !had.has(h) && !h.apiId);
    const newAtts = (nt.adjuntos || []).filter(a => !had.has(a) && !a.apiId && files[a.url]);
    const basic = pt.titulo !== nt.titulo || pt.desc !== nt.desc || pt.cat !== nt.cat;
    const prioCh = pt.prio !== nt.prio;
    const statusCh = pt.status !== nt.status;
    const closing = statusCh && nt.status === 'closed';
    const asigCh = pt.asig !== nt.asig && !!nt.asig;
    if (!basic && !prioCh && !statusCh && !asigCh && !newComments.length && !newHist.length && !newAtts.length) continue;
    const id = nt.id;
    enqueue('t' + id, async () => {
      const apiId = apiIdOf(logic, id); if (!apiId) return;
      if (asigCh) await api.assignTicket(apiId, nt.asig);
      if (isAdmin(logic) && (basic || prioCh || (statusCh && !closing))) {
        const status = closing ? (pt.apiStatus && pt.status !== 'closed' ? pt.apiStatus : pt.status === 'closed' ? 'open' : pt.status) : stOut(pt, nt);
        await api.updateTicket(apiId, { title: nt.titulo, description: nt.desc, category_id: nt.cat, status, priority: prOut(pt, nt) });
      } else if (!isAdmin(logic) && basic) {
        await api.updateTicket(apiId, { title: nt.titulo, description: nt.desc, category_id: nt.cat });
      }
      for (const c of newComments) await api.createComment(apiId, c.texto);
      for (const a of newAtts) await api.uploadAttachment(apiId, files[a.url]);
      for (const h of newHist.slice().reverse()) await api.createHistory({ ticket_id: apiId, action: cut(h.kind || 'edit', 225), old_value: '', new_value: cut(h.texto, 225) });
      if (closing) await api.closeTicket(apiId);
    }, logic);
  }
}

function createTicket(nt, logic) {
  const id = nt.id;
  enqueue('t' + id, async () => {
    let d, num = id;
    try {
      for (let tries = 0; ; tries++) {
        try { d = await api.createTicket({ ticket_number: num, title: cut(nt.titulo, 255), description: nt.desc, category_id: nt.cat }); break; }
        catch (e) { if (e.status === 422 && e.body && e.body.errors && e.body.errors.ticket_number && tries < 20) { num++; continue; } throw e; }
      }
    } catch (e) {
      // El correo a los administradores sale dentro de la creación: un 500 puede traer el ticket ya guardado
      if (e.status === 500) {
        await refresh(logic, true);
        if (logic.state.tickets.some(t => t.id === id)) { logic.say('TIC-' + id + ' se creó, pero el aviso por correo puede no haber salido.'); return; }
      }
      throw e;
    }
    const ses = logic.state.session || {};
    silent(() => logic.setState(st => {
      const real = d.ticket_number || num;
      const out = { tickets: st.tickets.map(t => t.id === id ? Object.assign({}, t, { id: real, apiId: d.id, apiStatus: d.status, apiPrio: d.priority }) : t) };
      if (real !== id) {
        renamed.set(id, real);
        ['detailId', 'editId', 'chatId'].forEach(k => { if (st[k] === id) out[k] = real; });
        if (st.celebrate && st.celebrate.id === id) out.celebrate = Object.assign({}, st.celebrate, { id: real });
        out.seq = Math.max(st.seq || 0, real);
      }
      // Si la API no dio la lista de usuarios, el ticket creado revela mi id real
      const meNow = st.users.find(u => u.email === ses.email);
      if (meNow && meNow.id === -1 && d.user_id) {
        out.users = st.users.map(u => u === meNow ? Object.assign({}, u, { id: d.user_id }) : u);
        out.tickets = out.tickets.map(t => Object.assign({}, t, { autor: t.autor === -1 ? d.user_id : t.autor, asig: t.asig === -1 ? d.user_id : t.asig }));
      }
      return out;
    }));
    if (d.ticket_number && d.ticket_number !== id) logic.say('El número TIC-' + id + ' ya existía: tu ticket quedó como TIC-' + d.ticket_number + '.');
    for (const h of (nt.historial || []).slice().reverse()) if (h.kind !== 'create') await api.createHistory({ ticket_id: d.id, action: cut(h.kind || 'edit', 225), old_value: '', new_value: cut(h.texto, 225) });
    for (const c of (nt.comentarios || [])) await api.createComment(d.id, c.texto);
  }, logic);
}

function diffCats(prevList, nextList, logic) {
  const prevById = new Map(prevList.map(c => [c.id, c]));
  for (const nc of nextList) {
    const pc = prevById.get(nc.id);
    const body = { name: nc.nombre, description: nc.descripcion || '', active: nc.activo !== false };
    if (!pc) {
      enqueue('cats', async () => {
        const d = await api.createCategory(body);
        if (d && d.id !== nc.id) silent(() => logic.setState(st => ({
          cats: st.cats.map(c => c.id === nc.id ? Object.assign({}, c, { id: d.id }) : c),
          tickets: st.tickets.map(t => t.cat === nc.id ? Object.assign({}, t, { cat: d.id }) : t)
        })));
      }, logic);
    } else if (pc !== nc && (pc.nombre !== nc.nombre || pc.descripcion !== nc.descripcion || pc.activo !== nc.activo)) {
      enqueue('cats', () => api.updateCategory(nc.id, body), logic);
    }
  }
}

// Usuarios: la API exige contraseña para crear y para editar. La pantalla la pide y queda en memoria solo hasta el envío.
const passwords = {};
export function rememberPassword(email, pwd) { if (email && pwd) passwords[email] = pwd; }
const roleOut = r => (r === 'admin' ? 'admin' : 'user');
function diffUsers(prevList, nextList, logic) {
  const prevById = new Map(prevList.map(u => [u.id, u]));
  for (const nu of nextList) {
    const pu = prevById.get(nu.id);
    if (pu && (pu === nu || (pu.nombre === nu.nombre && pu.email === nu.email && pu.rol === nu.rol))) continue;
    const pwd = passwords[nu.email];
    if (!pwd) continue; // sin contraseña no hay nada que se pueda guardar (p. ej. cambios de "activo")
    delete passwords[nu.email];
    const body = { name: nu.nombre, email: nu.email, password: pwd, role: roleOut(nu.rol) };
    enqueue('users', async () => {
      if (!pu) {
        const d = await api.createUser(body);
        if (d && d.id !== nu.id) silent(() => logic.setState(st => ({ users: st.users.map(u => u.id === nu.id ? Object.assign({}, u, { id: d.id }) : u) })));
      } else {
        await api.updateUser(nu.id, body);
      }
    }, logic);
  }
}
