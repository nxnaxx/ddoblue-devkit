import baseConfig from '../base/index.js';
import importConfig from '../import/config.js';
import nodeConfig from '../node/index.js';
import prettierConfig from '../prettier/index.js';
import typescriptConfig from '../typescript/index.js';

export default [
  ...baseConfig,
  ...nodeConfig,

  {
    rules: {
      'n/no-missing-import': 'off',
      'n/file-extension-in-import': 'off',
    },
  },

  ...typescriptConfig,
  ...importConfig,
  ...prettierConfig,
];
