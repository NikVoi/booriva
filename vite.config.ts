import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
  resolve: {
    alias: {
      "@components": new URL("./src/components", import.meta.url).pathname,
      "@pages": new URL("./src/pages", import.meta.url).pathname,
      "@constants": new URL("./src/constants", import.meta.url).pathname,
      "@services": new URL("./src/services", import.meta.url).pathname,
      "@assets": new URL("./src/assets", import.meta.url).pathname,
      "@style": new URL("./src/style", import.meta.url).pathname,
    },
  },
});
