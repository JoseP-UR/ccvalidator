import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../server/public'
  },
  server: {
    host: true,
    proxy: {
      '/api': 'http://nodeserver:3000/' //"nodeserver" for docker, "localhost" for running without docker
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
