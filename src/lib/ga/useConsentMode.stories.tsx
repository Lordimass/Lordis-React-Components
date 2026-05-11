import { StoryObj } from "@storybook/react-vite";
import { LRCContext } from "../../components";
import { useConsentMode } from "./index";
import { Button } from "react-bootstrap";

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
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
