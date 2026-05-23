import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'get-in-touch.html'),
        faq: resolve(__dirname, 'faq.html'),
        challenges: resolve(__dirname, 'challenges.html'),
      },
    },
  },
});
