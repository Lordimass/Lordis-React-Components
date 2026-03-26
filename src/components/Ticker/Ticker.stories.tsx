import type { Meta, StoryObj } from "@storybook/react-vite";

import Ticker from "./Ticker";
import { expect, fn } from "storybook/test";

const meta = {
  title: "Tickers/Ticker",
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
  play: async ({ args, canvas, step, userEvent }) => {
    let inputField = canvas.getByLabelText(
      "Default Ticker",
    ) as HTMLInputElement;

    // Check increment functionality
    await step("Increment", async () => {
      const start = Number(inputField.value);
      const increment = canvas.getByTitle("increment");
      await userEvent.click(increment);
      // Assert that onChange was called
      await expect(args.onChange).toHaveBeenCalledWith(start + 1);
      // Assert that input field was updated
      await expect(inputField.value).toSatisfy((value: string) => {
        console.log(value);
        return value == "" + (start + 1);
      });
    });

    // Check decrement functionality
    await step("Decrement", async () => {
      const start = Number(inputField.value);
      const decrement = canvas.getByTitle("decrement");
      await userEvent.click(decrement);
      // Assert that onChange was called
      await expect(args.onChange).toHaveBeenCalledWith(start - 1);
      // Assert that input field was updated
      await expect(inputField.value).toSatisfy((value: string) => {
        console.log(value);
        return value == "" + (start - 1);
      });
    });
  },
};

export const MaxValue: Story = {
  args: {
    inputId: "default-ticker-story",
    ariaLabel: "Default Ticker",
    showMaxValue: true,
    max: 10,
  },
  play: async ({ args, canvas, step, userEvent }) => {
    let inputField = canvas.getByLabelText(
      "Default Ticker",
    ) as HTMLInputElement;
    const increment = canvas.getByTitle("increment");

    await step("Increase to maximum", async () => {
      const start = Number(inputField.value);
      for (let i = 0; i < (args.max || 10); i++) {
        await userEvent.click(increment);
      }
      // Assert that input field was updated
      await expect(inputField.value).toSatisfy((value: string) => {
        console.log(value);
        return value == "10";
      });
    });

    await step("Attempt to increase beyond maximum", async () => {
      await userEvent.click(increment);
      await expect(args.onChange).toHaveBeenCalledWith(args.max || 10);
    });
  },
};
