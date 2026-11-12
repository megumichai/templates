import tsParser from '@typescript-eslint/parser'
import pluginUnicorn from 'eslint-plugin-unicorn'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default [
  {
    ignores: ['dist/**', 'typed-router.d.ts'],
  },
  {
    files: ['**/*.{js,ts,vue}'],
    plugins: {
      unicorn: pluginUnicorn,
    },
    rules: {
      'unicorn/filename-case': ['error', { case: 'kebabCase', ignore: [/^\[.*\]\.vue$/] }],
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
    },
  },
  {
    files: ['**/*.vue'],
    plugins: {
      vue: pluginVue,
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'vue/attribute-hyphenation': ['error', 'always'],
      'vue/component-name-in-template-casing': [
        'error',
        'kebab-case',
        { registeredComponentsOnly: false },
      ],
      'vue/v-on-event-hyphenation': ['error', 'always'],
    },
  },
]
