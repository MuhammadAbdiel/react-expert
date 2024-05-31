import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    coverage: {
      provider: "istanbul", // or 'v8'
      reporter: ["text", "html"],
      reportsDirectory: "coverage",
      exclude: ["**/*.{jsx,tsx,cjs}"],
    },
  },
});
