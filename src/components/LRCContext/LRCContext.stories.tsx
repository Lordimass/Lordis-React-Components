import type { Meta, StoryObj } from "@storybook/react-vite";

import LRCContext from "./LRCContext";

const meta = {
  component: LRCContext,
  args: {
    children: (
      <span>
        This is a context component, put content inside it and access it using{" "}
        <pre style={{ display: "inline" }}>useContext</pre>.
      </span>
    ),
  },
  argTypes: {
    children: { table: { disable: true } },
    LRCRemoteSettingsContextValue: { control: "object" },
  },
  globals: {
    backgrounds: { value: "light", grid: false },
  },
} satisfies Meta<typeof LRCContext>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
