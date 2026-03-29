import baseConfig from '../base/index.js';
import importConfig from '../import/config.js';
import prettierConfig from '../prettier/index.js';
import reactConfig from '../react/index.js';
import typescriptConfig from '../typescript/index.js';

export default [
  ...baseConfig,
  ...typescriptConfig,
  ...importConfig,
  ...reactConfig,
  ...prettierConfig,
];
