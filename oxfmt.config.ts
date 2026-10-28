import { defineConfig } from 'oxfmt'

export default defineConfig({
  singleQuote: true,
  semi: false,
  sortTailwindcss: {
    stylesheet: './src/styles.css',
    functions: ['cn', 'cva'],
  },
  ignorePatterns: ['src/routeTree.gen.ts'],
})
