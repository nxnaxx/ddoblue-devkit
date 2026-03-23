export const sortRules = {
  'import/order': 'off',
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        ['^\\u0000'],
        ['^.+\\.(css|scss|svg|png|jpg|jpeg|gif)$'],
        ['^node:'],
        ['^react$', '^next'],
        ['^@?\\w'],
        ['^@/'],
        ['^\\.\\./'],
        ['^\\.'],
      ],
    },
  ],

  'simple-import-sort/exports': 'error',
};
