import { StoryObj } from "@storybook/react-vite";
import { LRCContext } from "../../components";
import { useConsentMode } from "./index";

function DecoratorInner() {
  useConsentMode();
  return <></>;
}

const meta = {
  component: <></>,
  decorators: [
    (_: any) => {
      return (
        <LRCContext>
          <DecoratorInner />
        </LRCContext>
      );
    },
  ],
  beforeEach: () => {
    localStorage.removeItem("consentModeAnswer");
  },
  tags: ["hidden"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
