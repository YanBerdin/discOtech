import eslint from 'eslint-config-airbnb';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslint(), react()],
});
