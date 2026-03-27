import { fn } from "storybook/test";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { LRC_Toast } from "./ToastWrapper";
import { fakeMinimalImage, fakeMinimalImage2 } from "../../../.storybook/fakes";

const meta = {
  title: "Toasts/Toast",
  component: LRC_Toast,
  args: {
    toast: { msg: "Toast message" },
    onClose: fn(),
  },
} satisfies Meta<typeof LRC_Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

const toast = { msg: "Toast message" };

export const Default: Story = {};

export const WithImage: Story = {
  args: { toast: { ...toast, image: fakeMinimalImage2 } },
};

export const Light: Story = {
  args: { toast: { ...toast, variant: "light" } },
};
export const Dark: Story = {
  args: { toast: { ...toast, variant: "dark" } },
};
export const Warning: Story = {
  args: { toast: { ...toast, variant: "warning" } },
};
export const Danger: Story = {
  args: { toast: { ...toast, variant: "danger" } },
};
export const Info: Story = {
  args: { toast: { ...toast, variant: "info" } },
};
export const Primary: Story = {
  args: { toast: { ...toast, variant: "primary" } },
};
export const Secondary: Story = {
  args: { toast: { ...toast, variant: "secondary" } },
};
export const Success: Story = {
  args: { toast: { ...toast, variant: "success" } },
};
