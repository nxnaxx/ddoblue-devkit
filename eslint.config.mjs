import baseConfig from '@ddoblue/eslint-config';
import nestConfig from '@ddoblue/eslint-config/presets/nest';
import nextConfig from '@ddoblue/eslint-config/presets/next-strict';
import reactConfig from '@ddoblue/eslint-config/presets/react-strict';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...baseConfig,

  ...nextConfig.map((config) => ({
    ...config,
    files: ['apps/next/**/*.{js,mjs,ts,tsx}'],
  })),

  ...reactConfig.map((config) => ({
    ...config,
    files: ['apps/react/**/*.{js,mjs,ts,tsx}'],
  })),

  ...nestConfig.map((config) => ({
    ...config,
    files: ['apps/nest/**/*.{js,mjs,ts}'],
  })),

  globalIgnores([
    '**/node_modules/**',
    '**/dist/**',
    '**/coverage/**',
    '**/.cache/**',
    '**/.turbo/**',
    '**/*.d.ts',
    'commitlint.config.ts',
    '**/tsup.config.ts',
  ]),
]);

export default eslintConfig;
