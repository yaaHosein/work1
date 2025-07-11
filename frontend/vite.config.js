import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: "frontend",
  server: {
    port: 5008,
    // proxy: {
    //       '/api': {
    //         target: 'http://localhost:1100',
    //         changeOrigin: true,
    //         rewrite: (path) => path.replace(/^\/api/, ''),
    //       },
    //     },
  },
});
