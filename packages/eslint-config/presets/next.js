import baseConfig from '../base/index.js';
import importConfig from '../import/index.js';
import nextConfig from '../next/index.js';
import reactConfig from '../react/index.js';
import typescriptConfig from '../typescript/index.js';

export default [...baseConfig, ...typescriptConfig, ...importConfig, ...reactConfig, ...nextConfig];
