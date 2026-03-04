import type { Meta, StoryObj } from "@storybook/react-vite";

import BasketModifier from "./BasketModifier";
import { fn } from "storybook/test";
import {
  fakeMinimalProduct,
  fakeMinimalProductGroup,
} from "../../../../.storybook/fakes";
import { LRCRemoteSettingsContext } from "../../../lib";

const meta = {
  title: "Webshop/BasketModifier",
  component: BasketModifier,
  args: {
    onChange: fn(),
    product: fakeMinimalProduct,
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
    product: { control: "object" },
  },
  globals: {
    backgrounds: "white",
  },
} satisfies Meta<typeof BasketModifier>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    inputId: "default-basket-modifier-story",
    product: fakeMinimalProduct,
  },
};

export const OutOfStock: Story = {
  args: {
    inputId: "out-of-stock-basket-modifier-story",
    product: { ...fakeMinimalProductGroup[1], stock: 0 },
  },
};

export const Disabled: Story = {
  args: {
    inputId: "disabled-basket-modifier-story",
    product: { ...fakeMinimalProductGroup[1], active: false },
  },
};

export const KillSwitch: Story = {
  args: {
    product: fakeMinimalProductGroup[1],
    inputId: "kill-switch-basket-modifier-story",
  },
  decorators: [
    (Story) => (
      <LRCRemoteSettingsContext
        value={{
          kill_switch: {
            enabled: true,
            message:
              "We're currently performing maintenance on the site, please try again later :D",
          },
        }}
      >
        <Story />
      </LRCRemoteSettingsContext>
    ),
  ],
};
