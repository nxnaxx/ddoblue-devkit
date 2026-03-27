import config from '@ddoblue/eslint-config';

export default [
  ...config,

  {
    ignores: [
      'dist',
      'node_modules',
      '**/commitlint.config.ts',
      '**/*.d.ts',
      '**/*.cjs',
      'apps/*',
      'packages/*',
    ],
  },
];
