import { Meta, StoryObj } from "@storybook/react-vite";
import {
  fakeBasketProduct,
  fakeProduct,
  fakeProduct2,
  fakeProductGroup,
  fakeProductNoImages,
} from "../../../.storybook/fakes";
import Product from "./Product";

const meta = {
  title: "Webshop/Product",
  component: Product,
  args: {
    prod: fakeProduct,
    horizontal: false,
    quantityLocked: false,
    admin: false,
    forceVertical: false,
  },
  argTypes: {
    prod: {
      control: { disable: true },
      table: { defaultValue: { summary: fakeProduct.name } },
    },
    horizontal: { control: "boolean" },
    quantityLocked: { control: "boolean" },
    admin: { control: "boolean" },
    forceVertical: { control: "boolean" },
  },
  globals: {
    layout: "",
  },
} satisfies Meta<typeof Product>;

export default meta;

type Product = StoryObj<typeof Product>;

export const SingleProduct: Product = {};

export const SingleProductOutOfStock: Product = {
  args: {
    prod: fakeProduct2,
  },
};

export const SingleProductHorizontal: Product = {
  args: {
    horizontal: true,
  },
};

export const Group: Product = {
  args: {
    prod: fakeProductGroup,
  },
};

export const GroupHorizontal: Product = {
  args: {
    prod: fakeProductGroup,
    horizontal: true,
  },
};

export const QuantityLocked: Product = {
  args: {
    prod: fakeProduct,
    quantityLocked: true,
  },
};

export const BasketProduct: Product = {
  args: {
    prod: fakeBasketProduct,
    quantityLocked: true,
  },
};

export const NoImages: Product = {
  args: {
    prod: fakeProductNoImages,
  },
};
