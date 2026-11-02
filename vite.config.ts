import { defineConfig } from 'vite'
import { cloudflare } from '@cloudflare/vite-plugin'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { intlayer } from 'vite-intlayer'
import { startPrerenderConfig } from './src/seo/sitemap.vite.ts'

const config = defineConfig({
  server: { port: 4321 },
  resolve: { tsconfigPaths: true },
  plugins: [
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    devtools(),
    tailwindcss(),
    intlayer(),
    tanstackStart(startPrerenderConfig),
    viteReact(),
  ],
})

export default config
