import React from 'react';

// Ayudantes de la plantilla: mismas reglas que el prototipo (un valor vacío no pinta nada)
export const T = v => (v == null || typeof v === 'boolean') ? null : (React.isValidElement(v) || Array.isArray(v) ? v : String(v));
export const S = v => (v == null ? '' : v);
export const L = v => (Array.isArray(v) ? v : []);
const k2c = s => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
export const CSS = v => {
  if (typeof v !== 'string') return v || undefined;
  const o = {};
  for (const d of v.split(';')) { const i = d.indexOf(':'); if (i < 0) continue; const p = d.slice(0, i).trim(); o[p.startsWith('--') ? p : k2c(p)] = d.slice(i + 1).trim(); }
  return o;
};
