import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/", // Use "/" if deploying at the root domain
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://3.106.130.193:8000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  devServer: {
    historyApiFallback: true, // Serve index.html for all routes
    contentBase: "./public",
    hot: true,
  },
});