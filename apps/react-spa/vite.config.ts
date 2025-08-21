import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tanstackRouter()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: new URL("./src", import.meta.url).pathname,
      },
      {
        find: "@domain",
        replacement: new URL("../../libs/domain/src", import.meta.url).pathname,
      },
      {
        find: "@styles",
        replacement: new URL("../../libs/styles", import.meta.url).pathname,
      },
    ],
  },
  server: {
    port: 4001,
  },
});
