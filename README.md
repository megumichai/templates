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

| Script                    | Description                                     |
| ------------------------- | ----------------------------------------------- |
| `dev`                     | Run the API server and Vite dev server together |
| `dev:server`              | Run the API with `tsx watch`                    |
| `dev:web`                 | Run Vite                                        |
| `build`                   | Build server and web                            |
| `start`                   | Run the compiled server                         |
| `typecheck`               | Type-check both sides                           |
| `lint` / `lint:fix`       | Run oxlint and ESLint                           |
| `format` / `format:check` | Run oxfmt                                       |
| `check`                   | lint + format check + typecheck                 |

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
    router.ts         Router instance using generated routes
    pages/            File-based routes
    styles/           Tailwind entry
```

## Notes

- The server uses NodeNext resolution, so relative imports are written with a `.js`
  extension. `tsx` resolves them to the TypeScript sources in development.
- `@` maps to `src/web`.
- Routes are generated from `src/web/pages` by `vue-router/vite`: `index.vue` is
  `/`, `about.vue` is `/about`, and `[...path].vue` is the catch-all. Add a file
  to add a route; `typed-router.d.ts` is generated on dev/build and gitignored.
- Web imports never include a source file extension, e.g. `import App from '@/app'`
  and `() => import('@/pages/index')`; assets such as CSS keep theirs. The
  `import/extensions` rule enforces this for `src/web`. `tsconfig.web.json` maps
  `@/*` to both `./src/web/*` and `./src/web/*.vue`, and Vite lists `.vue` in
  `resolve.extensions`, so components resolve without the suffix.
- Oxlint runs with `typeAware` but without `typeCheck`: `oxlint-tsgolint` cannot
  resolve `.vue` modules, so TypeScript diagnostics come from `pnpm typecheck`
  (`tsc` and `vue-tsc`) instead.
- Naming is kebab-case everywhere: `unicorn/filename-case` (ESLint) enforces
  file names, `vue/component-definition-name-casing` (oxlint) enforces
  component names, and ESLint's `vue/component-name-in-template-casing`,
  `vue/attribute-hyphenation` and `vue/v-on-event-hyphenation` enforce kebab-case
  tags, props and events in templates. Bracket route files such as
  `[...path].vue` are exempt from the file name rule.
- Linting runs through oxlint for general rules and ESLint for the Vue and file
  naming conventions; formatting is oxfmt. The pre-commit hook runs lint-staged.
