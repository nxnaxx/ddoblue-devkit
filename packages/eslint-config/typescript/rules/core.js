export const tsCoreRules = {
  'no-undef': 'off',

  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': 'error',

  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    },
  ],

  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTaggedTemplates: true,
    },
  ],

  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: true }],
};
