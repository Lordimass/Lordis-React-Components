import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/lib/LordisReactComponents.mdx",
    "../src/**/*.stories.@(ts|tsx)",
    "../src/**/*.mdx",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-styling-webpack",
  ],
  framework: "@storybook/react-vite",
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldExtractValuesFromUnion: true,
    },
  },
  tags: {
    hidden: { excludeFromSidebar: true, excludeFromDocsStories: true },
  },
};
export default config;
