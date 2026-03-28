export const boundaryRules = {
  'no-restricted-imports': [
    'error',
    {
      patterns: [
        {
          group: ['../*'],
          message: 'Use absolute imports instead of parent relative paths',
        },
        {
          group: ['./!(**/*.css|**/*.scss|**/*.sass)'],
          message: 'Avoid same-level relative imports; use alias',
        },
      ],
    },
  ],
};
