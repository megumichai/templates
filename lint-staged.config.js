/** @type {import('lint-staged').Configuration} */
export default {
  '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue}': ['oxlint --fix', 'oxfmt'],
  '*.{json,jsonc,css,scss,less,md,mdx,html}': 'oxfmt',
}
