# Tickets TIC · Legumex

Sistema de tickets del área TIC en React + Vite, conectado a la API "Sistema de Tickets".

## Cómo levantarlo

```bash
npm install
npm run dev
```

Abrí http://localhost:5173 y entrá con tu correo y contraseña del sistema.

## Probarlo sin backend

```bash
npm run dev:simulado
```

La API responde desde el navegador con datos de ejemplo. Entrá con `admin@legumex.com` (admin) o `usuario@legumex.com` (usuario) y cualquier contraseña de 8 caracteres o más. Todo se reinicia al recargar.

## Cargar datos de prueba en la base real

Con un admin que ya exista:

```bash
# macOS / Linux
ADMIN_EMAIL=admin@legumex.com ADMIN_PASSWORD=tu_clave npm run datos-prueba
# Windows PowerShell
$env:ADMIN_EMAIL="admin@legumex.com"; $env:ADMIN_PASSWORD="tu_clave"; npm run datos-prueba
```

Crea por la API 4 categorías, 2 admins y 3 usuarios de prueba (`prueba.*@legumex.com`, contraseña `Prueba1234`), 8 tickets con asignaciones y comentarios, y cierra 2. Se puede volver a correr sin duplicar usuarios ni categorías (los tickets sí se agregan de nuevo).

## Configuración (.env)

- `VITE_API_URL`: base de la API que usa el navegador. En desarrollo: `/api`.
- `VITE_FILES_URL`: base de los adjuntos. En desarrollo: `/storage`.
- `VITE_API_TARGET`: backend al que Vite reenvía `/api` y `/storage` (por defecto `http://192.168.10.209:8001`).
- `VITE_DEMO`: `true` = demostración sin backend (cualquier clave, datos de ejemplo).

Producción: `npm run build` genera `dist/`. Servila en el mismo dominio que la API, o poné las direcciones completas en `VITE_API_URL` / `VITE_FILES_URL` y habilitá CORS en Laravel.

## Qué usa de la API

- Sesión: `POST /api/login` (correo y contraseña), `GET /api/check-status` al recargar. Token vencido → vuelve al login.
- Al entrar y cada 45 s: `GET /api/users`, `/api/ticket_categories`, `/api/tickets`, `/api/ticket_comments`, `/api/ticket_histories`, `/api/ticket_attachments`.
- Crear ticket: `POST /api/tickets`. Si responde 500 (falló el correo), se vuelve a pedir la lista y se busca el número antes de dar error.
- Editar: `PUT /api/tickets/{id}` (admin manda status y priority; el usuario no).
- Asignar / tomar / reasignar: `PATCH /api/tickets/{id}/assign`.
- Cerrar: `PATCH /api/tickets/{id}/closed`.
- Comentarios y chat: `POST /api/ticket_comments`.
- Historial (asignaciones, "bloqueante", ediciones): `POST /api/ticket_histories`.
- Adjuntos: `POST /api/ticket_attachments` (JPG, PNG o WEBP, máx. 5 MB).
- Categorías: `POST` y `PUT /api/ticket_categories`.
- Roles: `admin` → administrador; `user` → usuario. Cada persona ve el sistema con su propio rol (no hay "Ver como").

## Cómo funciona por dentro

- `src/logic.js`: estado y reglas del sistema (roles, permisos, asignación, chat, filtros). Es la misma lógica del prototipo.
- `src/template.jsx`: la interfaz en JSX.
- `src/sync.js`: compara el estado antes y después de cada acción y manda al servidor solo lo que cambió, en orden por ticket. Si el servidor rechaza algo, avisa y recarga los datos reales.
- `src/api.js`: cliente de la API.
- `src/App.jsx`: une lógica, interfaz y sincronización.

## Funciones desactivadas (la API no las permite)

Con la API conectada no aparecen:
- **Quitar asignación** de un ticket (`/assign` exige un usuario).
- **Activar / desactivar usuarios** (los usuarios no tienen campo `active`).
- **Deshacer un cierre** (un usuario no puede reabrir y los comentarios no se borran).
- **Recordatorio por correo y cierre automático** del panel de seguimiento (no existen en el backend).
- Al pasar un admin a usuario sin otro admin disponible, sus tickets siguen a su nombre (no se pueden dejar sin asignar) y se avisa que hay que reasignarlos.

En modo demostración (`VITE_DEMO=true`) siguen visibles, como en el prototipo.

## Estados y prioridades

La API tiene más valores que la interfaz. Se muestran así, y si nadie cambia el campo se devuelve el valor original:
- Estado: `open` → Abierto · `in_progress` y `pending` → En progreso · `resolved`, `closed` y `cancelled` → Cerrado.
- Prioridad: `low`, `medium`, `high` · `critical` se muestra como Alta.

## Número de ticket

`ticket_number` lo manda la pantalla y tiene que ser único. Un usuario común no ve los tickets ajenos, así que si el número ya existe se prueba el siguiente y se avisa con qué número quedó.

## Fechas de comentarios, historial y adjuntos

Los listados de la API no traen `created_at` para esos tres. La primera carga los ordena por id; lo que llega después toma la hora en que apareció (el sondeo es cada 45 s). Si el backend agrega `created_at` a esos listados, se usa automáticamente.

## Usuarios

Crear y editar usuarios pide contraseña (mínimo 8 caracteres), porque la API la exige en los dos casos. Al editar, la que se escriba pasa a ser la contraseña de esa persona. La contraseña no se guarda en el navegador: queda en memoria hasta que se envía.
