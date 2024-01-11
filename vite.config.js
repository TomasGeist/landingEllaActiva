import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://geisetech.com.ar/',
  optimizeDeps: {
    exclude: ['js-big-decimal'],
  }
})
