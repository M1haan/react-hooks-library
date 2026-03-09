import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@m1haan/react-hooks-library': path.resolve(__dirname, '../../src')
    }
  }
})