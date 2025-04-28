import { defineConfig } from 'eslint/config';
import js from '@eslint/js';

export default defineConfig([
  { files: ['**/*.js'], plugins: { js }, extends: ['js/recommended'] },

  {
    rules: {
      'semi': ['error', 'always', { 'omitLastInOneLineBlock': true }],
      'quotes': ['error', 'single', { 'avoidEscape': true }],
      'indent': ['error', 2],
      'eol-last': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { 'max': 1 }],
      'no-unused-vars': ['warn', { 'args': 'none', 'ignoreRestSiblings': true }],
      'no-undef': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'curly': ['error', 'all'],
      'eqeqeq': ['error', 'always'],
      'no-else-return': 'error',
      'default-case': 'warn',
      'consistent-return': 'error',
      'dot-notation': 'error',
      'no-await-in-loop': 'warn',
    },
  },
]);
