import React from 'react';
import { Component as Logic } from './logic.js';
import { renderTemplate } from './template.jsx';
import * as sync from './sync.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.logic = new Logic(props);
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
    return renderTemplate(V);
  }
}
