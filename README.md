# Email Builder

Constructor visual de templates de email con drag-and-drop, soporte para variables `{{variable}}` y exportación a HTML.

## Stack

- **React 19** + **TypeScript** — UI
- **GrapesJS** — editor visual drag-and-drop
- **Zustand** — estado del editor (device, panel activo)
- **Tailwind CSS 4** — estilos
- **Vite** — bundler

## Requisitos

- Node.js 18+
- pnpm
- Backend REST en `http://localhost:3001/api` (configurable vía `.env`)

## Instalación

```bash
pnpm install
cp .env.example .env
pnpm dev
```

## Scripts

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Servidor de desarrollo |
| `pnpm build` | Build de producción |
| `pnpm preview` | Preview del build |
| `pnpm lint` | Linter ESLint |
| `pnpm lint:fix` | Corregir errores de lint automáticamente |
| `pnpm type-check` | Verificar tipos TypeScript |

## Variables de entorno

| Variable | Default | Descripción |
|----------|---------|-------------|
| `VITE_API_URL` | `http://localhost:3001/api` | URL base del backend |

## API esperada

El frontend consume una REST API con los siguientes endpoints:

```
GET    /templates          Lista todos los templates
GET    /templates/:id      Obtiene uno por ID
POST   /templates          Crea un template
PATCH  /templates/:id      Actualiza un template
DELETE /templates/:id      Elimina un template
```

## Variables en templates

Los templates soportan interpolación con la sintaxis `{{variable}}`. Las variables se detectan automáticamente al editar el HTML y se muestran en el panel lateral.

Ejemplo: `Hola, {{firstName}}. Tu código es {{code}}.`

## Bloques disponibles

El editor incluye 22 bloques predefinidos organizados en dos categorías:

- **Layout** — Contenedor, 2/3 columnas, sidebar izq./der., banner full
- **Bloques** — Header, texto, imagen, botón, alerta, estadísticas, testimonio, lista, footer, etc.
