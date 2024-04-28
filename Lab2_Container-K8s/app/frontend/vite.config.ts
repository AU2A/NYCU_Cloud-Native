import { defineConfig } from 'vite'
import { env } from 'process'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://'+env.BACKEND_HOST+':8888',
        changeOrigin: true
      }
    }
  }
})
