import type { Meta, StoryObj } from "@storybook/react-vite";

import Ticker from "./Ticker";
import { fn } from "storybook/test";

const meta = {
  title: "components/Ticker",
  component: Ticker,
  args: {
    onChange: fn(),
    showMaxValue: false,
  },
  argTypes: {
    onChange: { control: false, table: { disable: true } },
    showMaxValue: { control: "boolean", if: { arg: "max", exists: true } },
    min: { control: "number" },
    max: { control: "number" },
    defaultValue: {
      control: "number",
      table: { defaultValue: { summary: "0" } },
    },
    updateValueRef: { control: false, table: { disable: true } },
    height: { control: "text", table: { value: "50px" } },
  },
} satisfies Meta<typeof Ticker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    inputId: "default-ticker-story",
    ariaLabel: "Default Ticker",
  },
};

export const MaxValue: Story = {
  args: {
    inputId: "default-ticker-story",
    ariaLabel: "Default Ticker",
    showMaxValue: true,
    max: 10,
  },
};
