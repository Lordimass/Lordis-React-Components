import { allFakeProducts } from "../../../../.storybook/fakes";
import { Meta, StoryObj } from "@storybook/react-vite";
import Products from "./Products";

const meta = {
  component: Products,
  args: {
    prods: allFakeProducts,
    trackViewItemListProps: {
      itemListId: "home_page_$page",
      itemListName: "Home Page $page",
    },
  },
  argTypes: {
    prods: {
      control: { disable: true },
    },
    pageSize: {
      control: "number",
    },
    trackViewItemListProps: {
      control: "object",
    },
  },
  globals: {
    layout: "",
  },
} satisfies Meta<typeof Products>;

export default meta;

type Products = StoryObj<typeof Products>;

export const Default: Products = {};

export const Paginated: Products = {
  args: {
    pageSize: 3,
  },
};
