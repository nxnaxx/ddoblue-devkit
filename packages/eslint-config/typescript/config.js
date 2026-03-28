import tseslint from 'typescript-eslint';

import { tsCoreRules } from './rules/core.js';
import { tsNamingRules } from './rules/naming.js';
import { typeAwareRules } from './rules/type-aware.js';

export const typescriptConfig = [
  ...tseslint.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: ['**/*.{ts,tsx}'],
  })),

  ...tseslint.configs.stylisticTypeChecked.map((config) => ({
    ...config,
    files: ['**/*.{ts,tsx}'],
  })),

  {
    name: 'ddoblue/typescript',
    files: ['**/*.{ts,tsx}'],

    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },

    rules: {
      ...tsCoreRules,
      ...typeAwareRules,
      ...tsNamingRules,
    },
  },
];
