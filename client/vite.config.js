import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/real-time-communication-with-socket-io-ricky092/',
  server: {
    port: 5173,
  },
});
