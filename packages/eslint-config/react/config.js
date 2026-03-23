import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';

import { reactRules } from './rules/react.js';
import { reactHooksRules } from './rules/hooks.js';
import { jsxA11yRules } from './rules/jsx-a11y.js';

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
