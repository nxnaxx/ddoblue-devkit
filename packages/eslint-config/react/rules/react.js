export const reactRules = {
  'no-console': 'error',
  'react/jsx-uses-react': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/jsx-handler-names': [
    'warn',
    {
      eventHandlerPrefix: '(on|handle)',
      eventHandlerPropPrefix: '(on|handle)',
      checkLocalVariables: true,
    },
  ],
  'react/jsx-sort-props': [
    'warn',
    {
      reservedFirst: true,
      shorthandFirst: true,
      callbacksLast: true,
      noSortAlphabetically: true,
    },
  ],
  'react/jsx-key': 'error',
  'react/jsx-no-duplicate-props': 'error',
  'react/jsx-no-undef': 'error',
  'react/jsx-pascal-case': 'error',
  'react/no-children-prop': 'error',
  'react/no-danger-with-children': 'error',
  'react/no-unescaped-entities': 'error',
};
