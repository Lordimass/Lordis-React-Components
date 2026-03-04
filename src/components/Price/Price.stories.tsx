import { Meta, StoryObj } from "@storybook/react-vite";
import Price from "./Price";
import DineroFactory from "dinero.js";
import Dinero from "dinero.js";
import { CURRENCY_SYMBOLS } from "../../assets/currencySymbols";
import { LocaleContext } from "../../lib";

const meta = {
  title: "Webshop/Price",
  component: Price,
  globals: {
    backgrounds: { value: "light", grid: false },
  },
  args: {
    baseDinero: DineroFactory({ amount: 499, currency: "GBP", precision: 2 }),
    currency: "GBP",
    noConversion: false,
  },
  argTypes: {
    baseDinero: {
      control: "select",
      options: ["£4.99", "£0.00", "£0.50", "£999.99"],
      mapping: {
        "£4.99": DineroFactory({ amount: 499, currency: "GBP", precision: 2 }),
        "£0.00": DineroFactory({ amount: 0, currency: "GBP", precision: 2 }),
        "£0.50": DineroFactory({ amount: 50, currency: "GBP", precision: 2 }),
        "£999.99": DineroFactory({
          amount: 99999,
          currency: "GBP",
          precision: 2,
        }),
      },
      table: {
        defaultValue: { summary: "£4.99" },
      },
    },
    currency: {
      control: "select",
      options: Object.keys(CURRENCY_SYMBOLS),
      table: {
        defaultValue: { summary: "GBP" },
        type: { summary: "Currency" },
      },
    },
    simple: {
      control: "boolean",
      table: { type: { summary: "false|true" } },
    },
    noConversion: {
      control: "boolean",
      table: { type: { summary: "false|true" } },
    },
  },
} satisfies Meta<typeof Price>;

export default meta;

type Price = StoryObj<typeof Price>;

export const Default: Price = {
  args: {
    simple: false,
  },
};

export const Simple: Price = {
  args: {
    simple: true,
  },
};

export const TaxInclusiveDisclaimer: Price = {
  args: {
    baseDinero: DineroFactory({ amount: 499, currency: "GBP", precision: 2 }),
    currency: "USD",
  },
  decorators: [
    (Story) => (
      <LocaleContext
        value={{ country: "US", currency: "USD", locale: "en-US" }}
      >
        <Story />
      </LocaleContext>
    ),
  ],
};
