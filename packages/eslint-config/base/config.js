import { coreRules } from './rules/core.js';

export const baseConfig = [
  js.configs.recommended,

  {
    name: 'ddoblue/base/core',
    rules: coreRules,
  },
];
