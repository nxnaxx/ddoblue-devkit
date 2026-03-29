import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'index.js',
    base: 'base/index.js',
    typescript: 'typescript/index.js',
    react: 'react/index.js',
    next: 'next/index.js',
    node: 'node/index.js',
    prettier: 'prettier/index.js',
    storybook: 'storybook/index.js',

    // import sub configs
    import: 'import/config.js',
    'import/boundary': 'import/boundary-config.js',

    // presets
    'presets/react': 'presets/react.js',
    'presets/react-strict': 'presets/react-strict.js',
    'presets/next': 'presets/next.js',
    'presets/next-strict': 'presets/next-strict.js',
    'presets/nest': 'presets/nest.js',
    'presets/library': 'presets/library.js',
  },
  format: ['esm'],
  dts: true,
  splitting: false,
  sourcemap: false,
  clean: true,

  outDir: 'dist',
  target: 'es2022',
});
