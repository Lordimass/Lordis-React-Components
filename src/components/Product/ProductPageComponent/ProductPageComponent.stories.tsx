import type { Meta, StoryObj } from "@storybook/react-vite";

import ProductPageComponent from "./ProductPageComponent";
import { fakeProductGroup } from "../../../../.storybook/fakes";

const meta = {
  title: "Components/Product/ProductPageComponent",
  component: ProductPageComponent,
  args: {
    p_product: fakeProductGroup.products[0],
    group: fakeProductGroup,
  },
} satisfies Meta<typeof ProductPageComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
