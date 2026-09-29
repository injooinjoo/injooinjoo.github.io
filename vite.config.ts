import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { projects } from './content/work/projects.mjs';

const workPages = Object.fromEntries(
  projects.map((p: { slug: string }) => [`work-${p.slug}`, resolve(__dirname, 'work', p.slug, 'index.html')]),
);

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...workPages,
      },
    },
  },
});
