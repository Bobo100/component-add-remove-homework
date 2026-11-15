import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/component-add-remove-homework/',
  plugins: [react()],
  server: { port: 3000 },
})
