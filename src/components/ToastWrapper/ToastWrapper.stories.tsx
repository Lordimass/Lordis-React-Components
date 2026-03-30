import type { Meta, StoryObj } from "@storybook/react-vite";

import ToastWrapper from "./ToastWrapper";
import { useContext } from "react";
import { IToast, ToastContext } from "../../lib";
import { expect, fn } from "storybook/test";
import { sleep } from "../../../.storybook/preview";

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
        className={"btn btn-primary"}
        onClick={() => toast({ msg: "I'm a toast!" })}
      >
        Add Toast
      </button>
      <button
        className={"btn btn-primary"}
        onClick={() =>
          toast({
            msg: "I'm a toast that doesn't close itself!",
            duration: null,
          })
        }
      >
        Add Permanent Toast
      </button>
      <button
        className={"btn btn-primary"}
        onClick={() =>
          toast({
            msg: "I'm a toast that closes itself very fast!",
            duration: 0.05,
          })
        }
      >
        Add Fast Toast
      </button>
    </div>
  );
}

const meta = {
  component: ToastWrapper,
  args: {
    children: <AddToast />,
    onChange: fn(),
  },
  argTypes: {
    children: { table: { disable: true } },
    defaults: { control: "object" },
    onChange: { control: false, table: { defaultValue: { summary: "fn()" } } },
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
    const addPermanent = canvas.getByText("Add Permanent Toast");
    await expect(addPermanent).toBeInTheDocument();
    const addFastToast = canvas.getByText("Add Fast Toast");
    await expect(addFastToast).toBeInTheDocument();
    const addToast = canvas.getByText("Add Toast");
    await expect(addToast).toBeInTheDocument();

    // Check that the toast opens
    await step("Check that the toast opens", async () => {
      await userEvent.click(addPermanent);
      await expect(args.onChange).toHaveBeenCalledWith(
        expect.toSatisfy((val: IToast[]) => val.length == 1),
      );
    });

    await step("Check that the toast closes", async () => {
      const toast = canvas.getByRole("alert") as HTMLDivElement;
      const close = toast.getElementsByClassName("btn-close")[0];
      await userEvent.click(close);
      await expect(args.onChange).toHaveBeenCalledWith(
        expect.toSatisfy((val: any[]) => val[0].show == false),
      );
      await sleep(500);
      await expect(args.onChange).toHaveBeenCalledWith([]);
    });

    await step("Check that toasts will automatically close", async () => {
      await userEvent.click(addFastToast);
      await expect(args.onChange).toHaveBeenCalledWith(
        expect.toSatisfy((val: IToast[]) => val.length == 1),
      );
      await sleep(550);
      await expect(args.onChange).toHaveBeenCalledWith([]);
    });

    await step(
      "Check opening a toast for an indeterminate length of time",
      async () => {
        await userEvent.click(addToast);
        await expect(args.onChange).toHaveBeenCalledWith(
          expect.toSatisfy((val: IToast[]) => val.length == 1),
        );
      },
    );
  },
};
