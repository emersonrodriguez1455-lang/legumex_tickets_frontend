import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

const start = () => createRoot(document.getElementById('root')).render(<App />);

// npm run dev:simulado → API falsa en el navegador (sin backend)
if (import.meta.env.VITE_SIMULADO === 'true') import('./fake-api.js').then(m => { m.install(); start(); });
else start();
