import baseConfig from '../base/index.js';
import boundaryConfig from '../import/boundary-config.js';
import importConfig from '../import/index.js';
import nextConfig from '../next/index.js';
import reactConfig from '../react/index.js';
import typescriptConfig from '../typescript/index.js';

export default [
  ...baseConfig,
  ...typescriptConfig,
  ...importConfig,
  ...boundaryConfig,
  ...reactConfig,
  ...nextConfig,
];
