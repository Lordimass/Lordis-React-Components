import type { Meta, StoryObj } from "@storybook/react-vite";

import ToastWrapper from "./ToastWrapper";
import { useContext } from "react";
import { ToastContext } from "../../lib";

function AddToast() {
  const { toast } = useContext(ToastContext);
  return (
    <button
      className={"btn btn-outline-primary"}
      onClick={() => toast({ msg: "A toast!" })}
    >
      Add Toast
    </button>
  );
}

const meta = {
  title: "Toasts/ToastWrapper",
  component: ToastWrapper,
  args: {
    children: <AddToast />,
  },
  argTypes: {
    children: { table: { disable: true } },
    defaults: { control: "object" },
  },
  decorators: [
    (Story) => (
      <>
        <Story></Story>
      </>
    ),
  ],
} satisfies Meta<typeof ToastWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
