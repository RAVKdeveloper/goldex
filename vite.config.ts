import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    cors: false,
    host: '0.0.0.0',
    // proxy: { '/api': { target: 'http://localhost:8000' } },
    proxy: {
      '/api': {
        target: 'https://pstage.goldex.space',
        changeOrigin: true,
        // secure: false,
      },
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
