import type { Meta, StoryObj } from "@storybook/react-vite";

import Content from "./Content";

const meta = {
  component: Content,
  args: {
    noindex: false,
    loadCondition: false,
    loadingText: "Loading...",
  },
  argTypes: {
    id: { control: "text" },
    canonical: { control: "text" },
    noindex: { control: "boolean" },
    title: { control: "text" },
    metaDescription: { control: "text" },
    loadCondition: { control: "boolean" },
    loadingText: { control: "text" },
  },
  globals: {
    backgrounds: "light",
  },
} satisfies Meta<typeof Content>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
