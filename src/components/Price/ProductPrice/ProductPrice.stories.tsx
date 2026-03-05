import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  fakePricedProduct,
  fakePricedProductGroup,
} from "../../../../.storybook/fakes";
import ProductPrice from "./ProductPrice";
import { withLRCContext } from "../../../../.storybook/preview";

const meta = {
  title: "Webshop/Price/ProductPrice",
  component: ProductPrice,
  globals: {
    backgrounds: "light",
  },
  argTypes: {
    prod: { control: { disable: true } },
  },
  decorators: [withLRCContext],
} satisfies Meta<typeof ProductPrice>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    prod: fakePricedProduct,
  },
};

export const PriceRange: Story = {
  args: {
    prod: fakePricedProductGroup,
  },
};

export const AllEqualPrices: Story = {
  args: {
    prod: fakePricedProductGroup.slice(0, 2),
  },
};
