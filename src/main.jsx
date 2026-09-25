import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const start = props => createRoot(document.getElementById('root')).render(<App {...props} />);

// Modos de prueba (src/mocks). Se buscan con import.meta.glob: si se borra src/mocks
// para producción, quedan vacíos y la app arranca normal contra la API real.
const pruebas = import.meta.glob(['./mocks/apiSimulada.js', './mocks/datosDemo.js']);
const simulada = pruebas['./mocks/apiSimulada.js'];
const demo = pruebas['./mocks/datosDemo.js'];

// npm run dev:simulado → API falsa en el navegador (sin backend)
if (import.meta.env.VITE_SIMULADO === 'true' && simulada) simulada().then(m => { m.install(); start(); });
// VITE_DEMO=true → sin API: la lógica arranca con los datos de ejemplo en memoria
else if (import.meta.env.VITE_DEMO === 'true' && demo) demo().then(m => start({ datosDemo: m.DATOS_DEMO }));
else start();
