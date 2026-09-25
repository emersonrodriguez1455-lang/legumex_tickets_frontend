// Pulso (métricas) y exportación CSV.
// Se mezclan en Logica.prototype: "this" es la instancia de Logica.
import { ST, PR } from '../../config/constantes.js';

export const metodosPulso = {
  pulse() {
    const list = this.visible();
    const act = list.filter(t => t.status !== 'closed');
    const avg = a => a.length ? a.reduce((x, y) => x + y, 0) / a.length : null;
    const fr = list.map(t => this.firstResponse(t)).filter(x => x != null);
    const rs = list.map(t => this.resolution(t)).filter(x => x != null);
    const late = act.filter(t => this.sla(t).late);
    return { list, act, late, firstResp: avg(fr), frCount: fr.length, resolution: avg(rs), rsCount: rs.length, sinAsignar: act.filter(t => !t.asig).length };
  },

  subSolicitante(list) {
    const act = list.filter(t => t.status !== 'closed');
    if (!act.length) return 'Nada pendiente por ahora';
    const esperan = act.filter(t => this.waitingOnRequester(t));
    if (esperan.length) return esperan.length === 1 ? 'Uno de tus tickets espera algo de vos' : esperan.length + ' de tus tickets esperan algo de vos';
    const viendo = act.filter(t => t.asig);
    if (viendo.length) return viendo.length === 1 ? 'Uno está en manos del área' : viendo.length + ' están en manos del área';
    return act.length === 1 ? 'Aún no lo abren en el área' : 'Aún no los abren en el área';
  },

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
  },

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
  },

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
    return [pantalla === 'tickets' ? 'tickets-legumex.csv' : 'metricas-legumex.csv', [['Código', 'Título', 'Categoría', 'Estado', 'Prioridad', 'Asignado', 'Sin mover (h)', 'Espera al solicitante']].concat(
      base.map(t => [
        'TIC-' + t.id, t.titulo, this.cat(t.cat), ST[t.status].label, PR[t.prio].label,
        (this.user(t.asig) || {}).nombre || 'sin asignar', Math.round(this.idle(t)),
        this.waitingOnRequester(t) ? 'sí' : 'no'
      ])
    )];
  }
};
