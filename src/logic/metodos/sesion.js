// Sesión: quién es "yo" y cómo se entra con la API.
// Se mezclan en Logica.prototype: "this" es la instancia de Logica.
import * as api from '../../services/api.js';
import * as sync from '../../services/sync.js';

export const metodosSesion = {
  // Con sesión real, "yo" es el usuario que inició sesión (se busca por correo)
  me() {
    const st = this.state, u = st.users || [];
    if (st.session) { const mine = u.find(x => x.email === st.session.email); if (mine) return mine; }
    return (st.role === 'admin' ? u[0] : u[3]) || u[0] || { id: 0, nombre: st.session ? st.session.name : '', email: '', rol: st.role, activo: true };
  },

  async applySession(data) {
    const rol = data.role === 'admin' ? 'admin' : 'usuario';
    sync.silent(() => this.setState({ session: { email: data.email, name: data.name, rol }, role: rol }));
    try { await sync.refresh(this, true); }
    catch (e) { api.logout(); clearTimeout(this._lg2); this.setState({ session: null, loginPhase: '', loginErr: e.message || 'No pudimos cargar los datos.' }); return; }
    this.setState({ email: data.email });
    this.finishLogin();
  }
};
