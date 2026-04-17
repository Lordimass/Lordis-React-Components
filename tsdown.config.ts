import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true, // Generate TypeScript declaration files
  clean: true,
  sourcemap: true,
  minify: true,
  target: false,
});
