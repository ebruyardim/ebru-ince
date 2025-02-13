import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      include: "**/*.tsx",
    }),
  ],
  server: {
    watch: {
      usePolling: true, // Dosya değişikliklerini algılamayı güçlendirir
    },
    hmr: true, // Hot Module Replacement'ı etkinleştirir
  },
});
