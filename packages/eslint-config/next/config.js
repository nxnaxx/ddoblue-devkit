import nextPlugin from '@next/eslint-plugin-next';
import { nextRules } from './rules/core.js';

export const nextConfig = [
  {
    name: 'ddoblue/next',
    files: ['**/*.{ts,tsx,js,jsx}'],

    plugins: {
      '@next/next': nextPlugin,
    },

    settings: {
      next: {
        rootDir: true,
      },
    },

    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,

      ...nextRules,
    },
  },
];
