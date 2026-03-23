import baseConfig from '../base/index.js';
import importConfig from '../import/index.js';
import typescriptConfig from '../typescript/index.js';

export default [...baseConfig, ...typescriptConfig, ...importConfig];
