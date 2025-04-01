import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/ebru-ince/", // GitHub Pages için alt dizin
  plugins: [
    react({
      include: "**/*.tsx",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    watch: {
      usePolling: true, // Dosya değişikliklerini algılamayı güçlendirir
    },
    hmr: true, // Hot Module Replacement
  },
});
