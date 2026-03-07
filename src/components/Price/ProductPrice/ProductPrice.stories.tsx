import type { Meta, StoryObj } from "@storybook/react-vite";

import ProductPrice from "./ProductPrice";
import { withLRCContext } from "../../../../.storybook/preview";
import { fakeProduct, fakeProductGroup } from "../../../../.storybook/fakes";
import { ProductGroup } from "../../../lib";

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
    prod: fakeProduct,
  },
};

export const PriceRange: Story = {
  args: {
    prod: fakeProductGroup,
  },
};

export const AllEqualPrices: Story = {
  args: {
    prod: new ProductGroup(fakeProductGroup.products.slice(0, 2)),
  },
};
