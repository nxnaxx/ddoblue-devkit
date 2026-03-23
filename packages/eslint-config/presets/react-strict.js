import baseConfig from '../base/index.js';
import typescriptConfig from '../typescript/index.js';
import importConfig from '../import/index.js';
import boundaryConfig from '../import/boundary-config.js';
import reactConfig from '../react/index.js';

export default [
  ...baseConfig,
  ...typescriptConfig,
  ...importConfig,
  ...boundaryConfig,
  ...reactConfig,
];
