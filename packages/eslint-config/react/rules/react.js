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
  'react/jsx-sort-props': ['warn', { reservedFirst: true }],
};
