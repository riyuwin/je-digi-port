import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/je-digi-port/',

  plugins: [
    tailwindcss(),
    react()
  ],

  server: {
    host: true,
    port: 5173,
  }
})

