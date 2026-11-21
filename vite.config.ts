import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@themes": path.resolve(__dirname, "./src/themes"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-chakra': ['@chakra-ui/react', '@chakra-ui/icons', '@emotion/react', '@emotion/styled', 'framer-motion'],
        },
      },
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});
