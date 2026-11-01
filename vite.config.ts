import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages serves this project from https://<user>.github.io/portfolio-ea2/,
  // so the build must be aware of that subpath. Keep local dev at the root.
  base: command === 'build' ? '/portfolio-ea2/' : '/',
  plugins: [react()],
}))
