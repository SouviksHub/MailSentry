import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    strictPort: true,
    // Proxy API requests to FastAPI backend (avoids CORS in dev)
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        secure: false,
      },
    },
    // Only allow localhost connections in dev
    host: "localhost",
  },

  preview: {
    port: 3000,
    strictPort: true,
  },

  build: {
    // Generate source maps for debugging (disable in production if needed)
    sourcemap: false,
    // Target modern browsers only (better security, smaller bundles)
    target: "es2022",
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
        },
      },
    },
  },

  // Prevent leaking env variables — only VITE_ prefixed vars are exposed
  envPrefix: "VITE_",
});
