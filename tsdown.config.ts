import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    config: "src/exports/config.ts",
    datatypes: "src/exports/datatypes.ts",
    contexts: "src/exports/contexts.ts",
    formatting: "src/exports/formatting.ts",
    price: "src/exports/price.ts",
    image: "src/exports/image.ts",
    routing: "src/exports/routing.ts",
    analytics: "src/exports/analytics.ts",
    supabaseServer: "src/exports/supabaseServer.ts",
    supabaseClient: "src/exports/supabaseClient.ts",
    server: "src/lib/server/index.ts",
    "server/ga": "src/lib/server/ga/index.ts",
    "locale/client": "src/lib/locale/localeClient.ts",
    "locale/server": "src/lib/locale/localeServer.ts",
    "components/product": "src/exports/components/product.ts",
    "components/basket": "src/exports/components/basket.ts",
    "components/ui": "src/exports/components/ui.ts",
    "components/context": "src/exports/components/context.ts",
  },
  format: ["cjs", "esm"],
  dts: true, // Generate TypeScript declaration files
  clean: true,
  sourcemap: true,
  minify: true,
  target: false,
});
