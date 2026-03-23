import config from '@ddoblue/eslint-config/presets/node';

export default [
  ...config,

  {
    ignores: ['dist', 'node_modules', '**/commitlint.config.ts', '**/*.d.ts'],
  },
];
