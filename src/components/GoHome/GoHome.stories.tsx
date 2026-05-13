import type { Meta, StoryObj } from "@storybook/react-vite";

import GoHome from "./GoHome";

const meta = {
  title: "Components/GoHome",
  component: GoHome,
  argTypes: {
    url: { control: "text" },
  },
} satisfies Meta<typeof GoHome>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
