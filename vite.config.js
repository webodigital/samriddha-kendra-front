import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /* server: {
    proxy: {
      '/graphql': {
        target: 'http://localhost:5000', // Replace with your Node.js backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  }, */
})
