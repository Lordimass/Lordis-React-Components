import type { Meta, StoryObj } from "@storybook/react-vite";

import ToastWrapper from "./ToastWrapper";
import { useContext } from "react";
import { ToastContext } from "../../lib";

function AddToast() {
  const { toast } = useContext(ToastContext);
  return (
    <div
      style={{
        position: "relative",
        left: "150%",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        margin: "10px",
      }}
    >
      <button
        className={"btn btn-outline-primary"}
        onClick={() => toast({ msg: "I'm a toast!" })}
      >
        Add Toast
      </button>
      <button
        className={"btn btn-outline-primary"}
        onClick={() =>
          toast({
            msg: "I'm a toast that doesn't close itself!",
            duration: null,
          })
        }
      >
        Add Permanent Toast
      </button>
    </div>
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
