import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        sokiPrivacidad: 'soki/privacidad/index.html',
        sokiPrivacidadHtml: 'soki/privacidad.html',
        sokiTerminos: 'soki/terminos/index.html',
        sokiTerminosHtml: 'soki/terminos.html'
      }
    }
  }
})