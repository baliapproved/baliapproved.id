import { defineConfig } from 'vite'
import { cloudflare } from '@cloudflare/vite-plugin'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { intlayer } from 'vite-intlayer'

const config = defineConfig({
  server: { port: 4321 },
  resolve: { tsconfigPaths: true },
  environments: {
    ssr: {
      optimizeDeps: {
        // Generated translations must stay in Vite's module graph for hot updates.
        exclude: ['@intlayer/dictionaries-entry'],
      },
    },
  },
  plugins: [
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    devtools(),
    tailwindcss(),
    intlayer(),
    tanstackStart(),
    viteReact(),
  ],
})

export default config
