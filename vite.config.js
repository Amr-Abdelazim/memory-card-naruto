import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: '0.0.0.0',      // allow all network interfaces
    port: 5173,           // or any open port
    strictPort: true,
  },
})
