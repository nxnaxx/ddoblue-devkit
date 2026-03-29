import { storybookCoreRules } from './rules/core.js';
import { storybookReactRules } from './rules/storybook-react.js';

export const storybookConfig = [
  ...storybook.configs['flat/recommended'],

  {
    name: 'ddoblue/storybook',
    files: ['.storybook/*.{ts,tsx}', '**/*.stories.{ts,tsx,js,jsx,mdx}'],
    rules: {
      ...storybookCoreRules,
      ...storybookReactRules,
    },
  },
];
