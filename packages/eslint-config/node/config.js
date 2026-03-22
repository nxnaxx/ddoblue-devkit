import nodePlugin from 'eslint-plugin-n';
import { nodeRules } from './rules/core.js';

export const nodeConfig = [
  nodePlugin.configs['flat/recommended-module'],

  {
    name: 'ddoblue/node',
    rules: nodeRules,
  },
];
