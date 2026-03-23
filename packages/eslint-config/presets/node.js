import baseConfig from '../base/index.js';
import typescriptConfig from '../typescript/index.js';
import importConfig from '../import/index.js';
import nodeConfig from '../node/index.js';

export default [...baseConfig, ...typescriptConfig, ...importConfig, ...nodeConfig];
