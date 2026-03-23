import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

import { reactHooksRules } from './rules/hooks.js';
import { jsxA11yRules } from './rules/jsx-a11y.js';
import { reactRules } from './rules/react.js';

export const reactConfig = [
  {
    name: 'ddoblue/react',
    files: ['**/*.{jsx,tsx}'],

    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },

    settings: {
      react: { version: 'detect' },
    },

    rules: {
      ...reactPlugin.configs.flat.recommended.rules,
      ...reactHooks.configs.flat.recommended.rules,
      ...jsxA11y.configs.recommended.rules,

      ...reactRules,
      ...reactHooksRules,
      ...jsxA11yRules,
    },
  },
];
