import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'

  export default defineConfig({
    plugins: [react()],
    base: '/', // Dominio personalizado no necesita subdirectorio
    build: {
      outDir: 'dist'
    }
  })