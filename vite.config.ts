import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // IMPORTANT for https://limocrash.github.io/Pillars-Showcase/
    base: '/Pillars-Showcase/',  // Re-enabled for GitHub Pages deployment

    plugins: [react()],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('.', import.meta.url)),
      },
    },

    // Easiest GH Pages flow: build into /docs and publish that folder
    build: {
      outDir: 'docs',
      emptyOutDir: true,
    },

    // Optional: keeps your AI Workshop from crashing on missing env at build time
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY ?? ''),
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY ?? ''),
    },
  }
})
