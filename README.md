# Finca Reservas App

Aplicación full-stack para promoción de finca turística (glamping/turismo rural) con formulario de reservas.

## Tecnologías

- Frontend: React, Vite, React Router, Tailwind CSS, Axios
- Backend: Node.js, Express, CORS, Body-parser
- Mapa: React Leaflet (OpenStreetMap)

## Estructura

- client
  - src/components
  - src/pages
  - src/services
- server
  - routes
  - controllers
  - data

## Instalación

Desde la raíz del proyecto:

1. Instala dependencias del monorepo:
   - `npm install`
2. Instala dependencias de frontend y backend:
   - `npm run install:all`

## Ejecutar en desarrollo

### Opción 1 (frontend + backend juntos)

- `npm run dev`

### Opción 2 (por separado)

Frontend:

- `cd client`
- `npm install`
- `npm run dev`

Backend:

- `cd server`
- `npm install`
- `npm run dev`

## Endpoints

- `POST /api/reservations`
- `GET /api/health`
