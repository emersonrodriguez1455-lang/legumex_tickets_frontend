// Clase base de la lógica: estado propio que se fusiona al instante (como setState de React, pero síncrono)
// y pide al componente anfitrión (App.jsx) que vuelva a pintar.
export class LogicaBase {
  constructor(props) { this.props = props || {}; this.state = {}; this.__host = null; }
  setState(update, cb) { this.__host && this.__host.__setLogicState(update, cb); }
  forceUpdate() { this.__host && this.__host.forceUpdate(); }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  renderVals() { return {}; }
}
