import { defineConfig } from 'vite'
import path from 'node:path';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src', 'app'),
      '@ui': path.resolve(__dirname, 'src', 'ui'),
    }
  }
})
