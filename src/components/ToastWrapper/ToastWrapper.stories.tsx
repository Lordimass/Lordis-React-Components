import type { Meta, StoryObj } from "@storybook/react-vite";

import ToastWrapper from "./ToastWrapper";
import { useContext } from "react";
import { ToastContext } from "../../lib";
import { expect } from "storybook/test";

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
  tags: ["skip-visual-test"],
} satisfies Meta<typeof ToastWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ args, canvas, step, userEvent }) => {
    const addToast = canvas.getByText("Add Permanent Toast");
    await expect(addToast).toBeInTheDocument();
    await userEvent.click(addToast);
    const toast = canvas.getByRole("alert") as HTMLDivElement;
    await expect(toast).toBeInTheDocument();
    const close = toast.getElementsByClassName("btn-close")[0];
    await userEvent.click(close);
    const newToast = canvas.getByRole("alert") as HTMLDivElement;
    await expect(newToast).not.toBeInTheDocument();
  },
};
