import type { Decorator, Preview } from "@storybook/nextjs-vite";
import { spyOn } from "storybook/test";
import "./storybook.css";
import LRCContext from "../src/components/LRCContext/LRCContext";
import "../src/index.scss";

const preview: Preview = {
  parameters: {
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    backgrounds: {
      options: {
        dark: { name: "Dark", value: "#333" },
        light: { name: "Light", value: "#F7F9F2" },
        beige: { name: "Beige", value: "#d7cfb5" },
        darkRed: { name: "Dark Red", value: "#501212" },
      },
      grid: {
        opacity: 0.2,
      },
    },
    docs: {
      toc: true,
    },
    layout: "centered",
  },
  initialGlobals: {
    backgrounds: { value: "dark", grid: true },
  },

  // Components will have automatically generated Autodocs entries: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  async beforeEach() {
    // Spy on logs so we can see them in Storybook.
    spyOn(console, "log").mockName("console.log");
    spyOn(console, "warn").mockName("console.warn");
    spyOn(console, "error").mockName("console.error");
  },
};

export default preview;

export const withLRCContext: Decorator = (Story) => {
  return (
    <LRCContext>
      <Story />
    </LRCContext>
  );
};

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
