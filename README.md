# my-library

A TypeScript library template: ESM + CJS output, type tests, linting and
formatting on commit, CI on every change, and npm releases from tags.

## Stack

| Concern | Tool |
| --- | --- |
| Runtime | Node.js >= 22, ESM first |
| Build | tsdown (ESM + CJS + d.ts) |
| Test | Vitest, including `*.test-d.ts` type tests |
| Lint / format | oxlint, oxfmt |
| Git hooks | husky + lint-staged |
| Dependencies | Renovate |
| CI / release | GitHub Actions, npm provenance |

## Getting started

```sh
pnpm install
pnpm test
```

## Scripts

| Script | Purpose |
| --- | --- |
| `pnpm build` | Bundle `src/index.ts` to `dist` and format the output |
| `pnpm test` | Run unit and type tests once |
| `pnpm test:watch` | Run tests in watch mode |
| `pnpm coverage` | Run tests with V8 coverage |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm lint` / `pnpm lint:fix` | oxlint |
| `pnpm format` / `pnpm format:check` | oxfmt |
| `pnpm check:package` | publint and arethetypeswrong against the packed tarball |

## Layout

```
src/index.ts            public entry point
__test__/*.test.ts      runtime tests
__test__/*.test-d.ts    type-level tests (compiled, never executed)
.github/workflows/      ci.yml and release.yml
```

## Rename checklist

1. `package.json`: `name`, `description`, `keywords`, `author`, `repository`,
   `homepage`, `bugs`.
2. `tsdown.config.ts`: the entry stays `src/index.ts` unless you add more.
3. Replace `greet` in `src/index.ts` and the tests with your API.
4. Add a `LICENSE` file if you publish publicly.

## Releasing

1. Bump `version` in `package.json`.
2. Commit, then tag: `git tag v0.1.0 && git push origin main v0.1.0`.
3. The release workflow checks that the tag matches the package version, runs
   every check, publishes with provenance, then creates a GitHub release.

Set the `NPM_TOKEN` repository secret before the first release. Unscoped public
packages need `--access public`, which the workflow already passes.

## Notes

- Tests import `../src/index.ts` directly, so they never exercise `dist`. The
  `check:package` step is what validates the exports map and emitted types.
- `pnpm-workspace.yaml` allow-lists esbuild's postinstall script, which pnpm
  blocks by default and Vitest needs.
