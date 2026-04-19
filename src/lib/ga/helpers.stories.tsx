// @ts-ignore
import trackAddPaymentInfoWithBasket from "../../../typedoc/ga/helpers/trackAddPaymentInfoWithBasket.md?raw";
// @ts-ignore
import trackAddShippingInfoWithBasket from "../../../typedoc/ga/helpers/trackAddShippingInfoWithBasket.md?raw";
// @ts-ignore
import trackAddToCartAutoValue from "../../../typedoc/ga/helpers/trackAddToCartAutoValue.md?raw";
// @ts-ignore
import trackModifyCart from "../../../typedoc/ga/helpers/trackModifyCart.md?raw";
// @ts-ignore
import trackAddToWishlistAutoValue from "../../../typedoc/ga/helpers/trackAddToWishlistAutoValue.md?raw";
// @ts-ignore
import trackBeginCheckoutWithBasket from "../../../typedoc/ga/helpers/trackBeginCheckoutWithBasket.md?raw";
// @ts-ignore
import trackPurchaseWithBasket from "../../../typedoc/ga/helpers/trackPurchaseWithBasket.md?raw";
// @ts-ignore
import trackPurchaseAutoValue from "../../../typedoc/ga/helpers/trackPurchaseAutoValue.md?raw";
// @ts-ignore
import trackRefundAutoValue from "../../../typedoc/ga/helpers/trackRefundAutoValue.md?raw";
// @ts-ignore
import trackRemoveFromCartAutoValue from "../../../typedoc/ga/helpers/trackRemoveFromCartAutoValue.md?raw";
// @ts-ignore
import trackViewCartWithBasket from "../../../typedoc/ga/helpers/trackViewCartWithBasket.md?raw";
// @ts-ignore
import trackViewItemAutoConvert from "../../../typedoc/ga/helpers/trackViewItemAutoConvert.md?raw";
// @ts-ignore
import trackViewItemListAutoConvert from "../../../typedoc/ga/helpers/trackViewItemListAutoConvert.md?raw";
// @ts-ignore
import trackViewPromotionAutoConvert from "../../../typedoc/ga/helpers/trackViewPromotionAutoConvert.md?raw";
import type { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react-vite";
import { Markdown } from "@storybook/addon-docs/blocks";

const meta: Meta = {
  title: "lib/Google Analytics/Helpers",
  parameters: {
    docs: {
      page: () => (
        <>
          <Markdown>{trackAddPaymentInfoWithBasket}</Markdown>
          <br />
          <Markdown>{trackAddShippingInfoWithBasket}</Markdown>
          <br />
          <Markdown>{trackAddToCartAutoValue}</Markdown>
          <br />
          <Markdown>{trackModifyCart}</Markdown>
          <br />
          <Markdown>{trackAddToWishlistAutoValue}</Markdown>
          <br />
          <Markdown>{trackBeginCheckoutWithBasket}</Markdown>
          <br />
          <Markdown>{trackPurchaseWithBasket}</Markdown>
          <br />
          <Markdown>{trackPurchaseAutoValue}</Markdown>
          <br />
          <Markdown>{trackRefundAutoValue}</Markdown>
          <br />
          <Markdown>{trackRemoveFromCartAutoValue}</Markdown>
          <br />
          <Markdown>{trackViewCartWithBasket}</Markdown>
          <br />
          <Markdown>{trackViewItemAutoConvert}</Markdown>
          <br />
          <Markdown>{trackViewItemListAutoConvert}</Markdown>
          <br />
          <Markdown>{trackViewPromotionAutoConvert}</Markdown>
          <br />
        </>
      ),
      toc: {
        headingSelector: "h1",
      },
    },
  },
  component: () => {
    return <></>;
  },
};

export default meta;

export const Default: StoryObj = {};
