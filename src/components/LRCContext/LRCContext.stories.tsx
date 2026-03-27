import type { Meta, StoryObj } from "@storybook/react-vite";

import LrcContext from "./LRCContext";
import { delay, HttpResponse, http } from "msw";

const meta = {
  title: "Abstract/LRCContext",
  component: LrcContext,
  args: {
    children: (
      <span>
        This is a context component, put content inside it and access it using{" "}
        <pre style={{ display: "inline" }}>useContext</pre>.
      </span>
    ),
  },
  argTypes: {
    children: { table: { disable: true } },
    LRCRemoteSettingsContextValue: { control: "object" },
  },
  globals: {
    backgrounds: { value: "light", grid: false },
  },
  tags: ["!"],
} satisfies Meta<typeof LrcContext>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // parameters: {
  //   // msw: {
  //   //   handler: http.get("https://your-restful-endpoint", async () => {
  //   //     await delay(800);
  //   //     return new HttpResponse(null, {
  //   //       status: 403,
  //   //     });
  //   //   }),
  //   // },
  // },
};
