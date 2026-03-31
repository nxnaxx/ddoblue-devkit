import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import next from '@ddoblue/eslint-config/presets/next-strict';
import { defineConfig, globalIgnores } from 'eslint/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = defineConfig([
  ...next,

  {
    settings: {
      next: {
        rootDir: __dirname,
      },
    },
  },

  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;
