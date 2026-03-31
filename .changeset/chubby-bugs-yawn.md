---
'@ddoblue/eslint-config': minor
---

Remove `settings.next.rootDir` from Next preset

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
