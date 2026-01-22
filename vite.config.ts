import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use environment variable for base path, default to repo name for GitHub Pages
  // For S3 deployment, set VITE_BASE_URL=/ in your build environment
  base: '/',
})
