import path from 'path'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), splitVendorChunkPlugin()],
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
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('@open-ish') || id.includes('tslib')) {
            return '@open-ish'
          }
          if (
            id.includes('react-router-dom') ||
            id.includes('@remix-run') ||
            id.includes('react-router')
          ) {
            return '@react-router'
          }
          if (id.includes('goldex-ui-library')) {
            return '@goldex-ui'
          }
          if (id.includes('goldex-icon-library')) {
            return '@goldex-icons'
          }
        },
      },
    },
  },
})
