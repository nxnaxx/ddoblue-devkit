import type { UserConfig } from '@commitlint/types';

const ALLOWED_TYPES = [
  'feat',
  'fix',
  'refactor',
  'docs',
  'test',
  'chore',
  'build',
  'ci',
  'style',
  'perf',
];

const ALLOWED_SCOPES = new Set(['eslint-config', 'markdown-lint', 'prettier-config', 'tsconfig']);
const REQUIRED_SCOPE_TYPES = new Set(['feat', 'fix', 'refactor', 'test', 'perf']);

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    'type-enum': [2, 'always', ALLOWED_TYPES],
    'type-empty': [2, 'never'],
    'scope-empty': [0],
    'subject-empty': [2, 'never'],
    'subject-case': [0],
    'header-max-length': [2, 'always', 120],

    // plugin rules
    'scope-enum-optional': [2, 'always'],
    'scope-required-by-type': [2, 'always'],
  },

  plugins: [
    {
      rules: {
        'scope-enum-optional': ({ scope }) => {
          const hasScope = typeof scope === 'string' && scope.trim().length > 0;
          const isValid = !hasScope || ALLOWED_SCOPES.has(scope);
          return [isValid, `scope must be one of: ${[...ALLOWED_SCOPES].join(', ')}`];
        },
        'scope-required-by-type': ({ type, scope }) => {
          const hasValidType = typeof type === 'string' && type.length > 0;
          const requiresScope = hasValidType && REQUIRED_SCOPE_TYPES.has(type);
          const hasScope = typeof scope === 'string' && scope.trim().length > 0;

          const isValid = !requiresScope || hasScope;
          return [isValid, `type "${type}" requires a scope`];
        },
      },
    },
  ],
};

export default Configuration;
