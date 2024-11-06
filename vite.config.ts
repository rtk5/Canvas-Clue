import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This allows access from the network
    // port: 5173  // Optional: specify a custom port if needed
  }
});
