import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Essential for free GitHub Pages deployment without root domain issues
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
