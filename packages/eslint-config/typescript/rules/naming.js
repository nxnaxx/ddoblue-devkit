export const tsNamingRules = {
  '@typescript-eslint/naming-convention': [
    'warn',

    {
      selector: 'default',
      format: null,
    },
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE'],
    },
    {
      selector: 'function',
      format: ['camelCase', 'PascalCase'],
    },
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
    {
      selector: 'method',
      format: ['camelCase'],
    },
    {
      selector: 'parameter',
      format: ['camelCase'],
      leadingUnderscore: 'allow',
    },
    {
      selector: 'classProperty',
      modifiers: ['private'],
      format: ['camelCase'],
      leadingUnderscore: 'allow',
    },
    {
      selector: ['objectLiteralProperty', 'typeProperty'],
      format: null,
    },
    {
      selector: ['objectLiteralProperty', 'typeProperty', 'classProperty'],
      modifiers: ['requiresQuotes'],
      format: null,
    },
  ],
};
