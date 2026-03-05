import { Meta, StoryObj } from "@storybook/react-vite";
import SquareImageBox from "./SquareImageBox";
import {
  fakeMinimalImage1,
  fakeMinimalImage2,
  fakeMinimalImage3,
} from "../../../.storybook/fakes";

const meta = {
  title: "SquareImageBox",
  component: SquareImageBox,
  args: {
    hoverable: false,
  },
  argTypes: {
    image: { control: "object" },
    size: { control: "text" },
    loading: { control: "radio", options: ["eager", "lazy"] },
    hoverable: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SquareImageBox>;

export default meta;

type SquareImageBox = StoryObj<typeof SquareImageBox>;

export const Single: SquareImageBox = {
  args: {
    image: fakeMinimalImage1,
    size: "300px",
  },
};

export const Carousel: SquareImageBox = {
  args: {
    image: [fakeMinimalImage1, fakeMinimalImage2, fakeMinimalImage3],
    size: "300px",
  },
};

export const SingleHoverable: SquareImageBox = {
  args: {
    image: fakeMinimalImage1,
    size: "300px",
    hoverable: true,
  },
};

export const CarouselHoverable: SquareImageBox = {
  args: {
    image: [fakeMinimalImage1, fakeMinimalImage2, fakeMinimalImage3],
    size: "300px",
    hoverable: true,
  },
};
