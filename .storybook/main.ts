import type { StorybookConfig } from "@storybook/react-vite";
import { viteFinal } from "@storybook/react-vite/preset";

const config: StorybookConfig = {
  stories: [
    "../src/lib/LordisReactComponents.mdx",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(ts|tsx)",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-styling-webpack"
  ],
  framework: "@storybook/react-vite",
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldExtractValuesFromUnion: true,
    },
  },
  viteFinal: (config) => {
    console.log("viteFinal", JSON.stringify(config, null, 2));
    // make adjustments here
    return config;
  },
};
export default config;
