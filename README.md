# Vue Express

Full-stack TypeScript template: a Vue 3 frontend served by Vite in development and an
Express API compiled with `tsc` and run with Node.

## Requirements

- Node.js >= 20
- pnpm

## Getting started

```sh
pnpm install
pnpm dev
```

- Web: http://localhost:5173
- API: http://localhost:3000
- Vite proxies `/api` to the API server, so both share an origin in development.

## Production

```sh
pnpm build
pnpm start
```

`pnpm build` compiles the server to `dist/server` and the frontend to `dist/web`. The
Express app serves `dist/web` when it exists and falls back to `index.html` for client-side
routes, so `pnpm start` serves the whole app from port 3000.

## Scripts

| Script              | Description                                     |
| ------------------- | ----------------------------------------------- |
| `dev`               | Run the API server and Vite dev server together |
| `dev:server`        | Run the API with `tsx watch`                    |
| `dev:web`           | Run Vite                                        |
| `build`             | Build server and web                            |
| `start`             | Run the compiled server                         |
| `typecheck`         | Type-check both sides                           |
| `lint` / `lint:fix` | Run oxlint                                      |
| `fmt` / `fmt:check` | Run oxfmt                                       |
| `check`             | lint + format check + typecheck                 |

## Layout

```
src/
  server/
    app.ts            Express app, static serving, error handling
    index.ts          HTTP server entry
    routes/index.ts   API routes mounted at /api
  web/
    app.vue           Root component
    main.ts           App entry
    router.ts         Vue Router
    pages/            Route components
    styles/           Tailwind entry
```

## Notes

- The server uses NodeNext resolution, so relative imports are written with a `.js`
  extension. `tsx` resolves them to the TypeScript sources in development.
- `@` maps to `src/web`.
- Linting and formatting are handled by oxlint and oxfmt; the pre-commit hook runs
  lint-staged.
