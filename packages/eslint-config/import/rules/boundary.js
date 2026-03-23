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
          group: ['./*'],
          message: 'Avoid same-level relative imports; use alias',
        },
      ],
    },
  ],
};
