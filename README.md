# Templates

Reusable project scaffolding and CI pipelines, extracted from
[express-zod](https://github.com/express-zod/core).

Each template lives on its own branch. `main` only holds this index, so cloning
`main` never mixes templates together.

| Branch | Description |
| --- | --- |
| [`ts-lib`](../../tree/ts-lib) | TypeScript library: tsdown build (ESM + CJS), Vitest with type tests, oxlint/oxfmt, husky + lint-staged, Renovate, GitHub Actions for CI and npm releases |
| [`vue-express`](../../tree/vue-express) | Vue 3 + Express full-stack app: Vite, Tailwind CSS, tsx dev server, shared TypeScript configs, oxlint/oxfmt, husky + lint-staged |

## Using a template

```sh
git clone --branch ts-lib --single-branch <repository-url> my-library
cd my-library
rm -rf .git
git init -b main
pnpm install
```

Replace `<repository-url>` with this repository's clone URL and `ts-lib` with
the branch you want.

## Adding a template

```sh
git checkout --orphan <name>
git rm -rf .
# add the template files
git add .
git commit -m "feat: add the <name> template"
```

Then add a row to the table above on `main`. Keep every branch self-contained:
it must install, format, lint, typecheck, test and build on its own.
