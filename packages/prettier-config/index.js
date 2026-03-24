/** @type {import("prettier").Config} */
const config = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'lf',

  overrides: [
    {
      files: '*.md',
      options: {
        printWidth: 80,
      },
    },
    {
      files: '*.jsonc',
      options: {
        trailingComma: 'none',
      },
    },
  ],
};

export default config;
