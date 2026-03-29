export const sortRules = {
  'import/order': 'off',
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        ['^\\u0000'],
        ['^node:'],
        ['^react', '^next'],
        ['^@?\\w'],
        ['^@/'],
        ['^\\.\\./'],
        ['^\\.'],
        ['^.+\\.(css|scss|svg|png|jpg|jpeg|gif)$'],
      ],
    },
  ],

  'simple-import-sort/exports': 'error',
};
