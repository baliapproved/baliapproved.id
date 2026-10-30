import { defineConfig } from 'oxlint'

export default defineConfig({
  categories: {
    correctness: 'error',
  },
  plugins: [
    // Adding plugins replaces Oxlint's defaults, so retain them explicitly.
    'unicorn',
    'typescript',
    'oxc',

    // Additional plugins for this project.
    'import',
    'react',
    'react-perf',
  ],
  rules: {
    'import/no-cycle': 'error',
  },
  ignorePatterns: ['**/routeTree.gen.ts'],
})
