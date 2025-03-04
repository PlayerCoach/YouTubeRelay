import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy }  from 'vite-plugin-static-copy'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
  react(),
  tailwindcss(),
  viteStaticCopy({
    targets: [
      {src: 'chrome_extension/manifest.json', dest: '.'},
      {src: 'chrome_extension/icons/*', dest: 'icons'},

  ],})],

})
