import React from 'react';
import { Logica } from './logic/Logica.js';
import { renderInterfaz } from './layouts/Interfaz.jsx';
import * as sync from './services/sync.js';

// Une lógica, interfaz y sincronización: la lógica guarda el estado y arma los valores (V),
// la interfaz los pinta y sync manda al servidor lo que cambió en cada acción.
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.logic = new Logica(props);
    this.logic.__host = this;
    this.state = { v: 0 };
  }
  __setLogicState(update, cb) {
    const prev = this.logic.state;
    const patch = typeof update === 'function' ? update(prev) : update;
    this.logic.state = { ...prev, ...patch };
    sync.diff(prev, this.logic.state, this.logic);
    this.setState(s => ({ v: s.v + 1 }), cb);
  }
  componentDidMount() { this.logic.componentDidMount(); }
  componentDidUpdate(prevProps) { this.logic.props = this.props; this.logic.componentDidUpdate(prevProps); }
  componentWillUnmount() { this.logic.componentWillUnmount(); }
  render() {
    const V = { ...this.props, ...(this.logic.renderVals() || {}) };
    return renderInterfaz(V);
  }
}
