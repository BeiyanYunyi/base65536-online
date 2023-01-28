import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import style9 from 'style9/vite';

export default defineConfig({
  plugins: [solidPlugin(), style9()],
  build: {
    target: 'esnext',
  },
});
