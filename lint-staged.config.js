/** @type {import('lint-staged').Configuration} */
export default {
  '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}': ['oxlint --fix', 'oxfmt'],
  '*.vue': ['oxlint --fix', 'eslint --fix', 'oxfmt'],
  '*.{json,jsonc,css,scss,less,md,mdx,html}': 'oxfmt',
}
