# @ddoblue/eslint-config

## 0.6.0

### Minor Changes

- c04202d: Remove `settings.next.rootDir` from Next preset

  After this change:
  - consumers can configure `settings.next.rootDir` based on their project structure

  #### Migration

  If needed, configure `settings.next.rootDir` in your root ESLint config.

  ```js
  {
    settings: {
      next: {
        rootDir: 'packages/my-app/',
      },
    },
  }
  ```

## 0.5.0

### Minor Changes

- 27c6933: update react/jsx-sort-props rule
  - group shorthand props first
  - place callback props last
  - disable alphabetical sorting

## 0.4.0

### Minor Changes

- 633741f: - Fix duplicate type import errors when composing multiple configs
  - Provide more accurate and isolated type definitions per config

## 0.3.1

### Patch Changes

- c19c27b: add missing Storybook plugin import

## 0.3.0

### Minor Changes

- e3b64a4: - update TypeScript naming convention rule to allow PascalCase for variables
  - add Storybook configuration support
  - update README

## 0.2.1

### Patch Changes

- 216066e: apply missing import order rule change

## 0.2.0

### Minor Changes

- a14ff7b: update import order rule

## 0.1.0

### Minor Changes

- f23223d: add initial config presets
