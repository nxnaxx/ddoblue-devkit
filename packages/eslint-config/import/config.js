import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';

import { importRules } from './rules/core.js';
import { sortRules } from './rules/sort.js';
import { unusedImportRules } from './rules/unused.js';

const importConfig = [
  {
    name: 'ddoblue/import',

    plugins: {
      import: importPlugin,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },

    settings: {
      'import/resolver': {
        typescript: true,
      },
    },

    rules: {
      ...importRules,
      ...sortRules,
      ...unusedImportRules,
    },
  },
];

export default importConfig;
