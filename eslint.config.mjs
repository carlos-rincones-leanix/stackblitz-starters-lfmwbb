import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

import noEmbedRulePlugin from './eslint-rules/no-embed-root-model-plugin.js';

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: { globals: globals.browser },
    // Using the eslint-plugin-example plugin defined locally
    plugins: { example: noEmbedRulePlugin },
    rules: {
      'example/no-embed-root-model': 'error',
    },
  },
];
