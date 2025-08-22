import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@domain": path.resolve(__dirname, "../../libs/domain/src"),
    },
  },
  test: {
    globals: true,
    environment: "node",
    include: ["test/**/*.test.ts"],
    coverage: {
      reporter: ["text", "html"],
    },
  },
});
