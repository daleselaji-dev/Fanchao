# Fanchao

Fanchao (番炒) is a small full-stack demo application used as the reference project
for the Cloud Agent development environment. It is a "stir-fry menu" board:

- **server/** — an Express + TypeScript JSON API (`/api/health`, `/api/dishes`).
- **client/** — a Vite + React + TypeScript single-page app that reads from and
  writes to the API.

## Requirements

- Node.js >= 20 (repo is developed against Node 22)
- npm 10+

## Getting started

```bash
npm ci        # install all workspace dependencies
npm run dev   # start API (http://localhost:3001) and client (http://localhost:5173)
```

The Vite dev server proxies `/api/*` to the API on port `3001`, so open
<http://localhost:5173> and add a dish to see the full round-trip.

## Common commands

| Command | Description |
| --- | --- |
| `npm run dev` | Run the API and the client together (hot reload). |
| `npm run dev:server` | Run only the API. |
| `npm run dev:client` | Run only the client. |
| `npm test` | Run the server test suite (Vitest + Supertest). |
| `npm run lint` | Lint the whole repo with ESLint. |
| `npm run build` | Type-check and build both workspaces. |

## Project layout

```
.
├── client/            # Vite + React + TS front-end
├── server/            # Express + TS API
├── package.json       # npm workspaces + top-level scripts
└── .cursor/           # Cloud Agent environment configuration
```
