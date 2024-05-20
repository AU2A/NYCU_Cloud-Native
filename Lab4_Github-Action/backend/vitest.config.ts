import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    pool: "forks",
    coverage: {
      reporter: ["text", "json-summary", "json"],
      thresholds: {
        lines: 20,
        branches: 20,
        functions: 20,
        statements: 20,
      },
    },
  },
});
