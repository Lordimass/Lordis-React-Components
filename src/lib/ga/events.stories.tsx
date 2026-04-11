// @ts-ignore
import trackPageView from "../../../typedoc/ga/events/trackPageView.md?raw";
// @ts-ignore
import trackEarnVirtualCurrency from "../../../typedoc/ga/events/trackEarnVirtualCurrency.md?raw";
// @ts-ignore
import trackJoinGroup from "../../../typedoc/ga/events/trackJoinGroup.md?raw";
// @ts-ignore
import trackLogin from "../../../typedoc/ga/events/trackLogin.md?raw";
// @ts-ignore
import trackSearch from "../../../typedoc/ga/events/trackSearch.md?raw";
// @ts-ignore
import trackSelectContent from "../../../typedoc/ga/events/trackSelectContent.md?raw";
// @ts-ignore
import trackShare from "../../../typedoc/ga/events/trackShare.md?raw";
// @ts-ignore
import trackSignUp from "../../../typedoc/ga/events/trackSignUp.md?raw";
// @ts-ignore
import trackSpendVirtualCurrency from "../../../typedoc/ga/events/trackSpendVirtualCurrency.md?raw";
// @ts-ignore
import trackTutorialBegin from "../../../typedoc/ga/events/trackTutorialBegin.md?raw";
// @ts-ignore
import trackTutorialComplete from "../../../typedoc/ga/events/trackTutorialComplete.md?raw";
// @ts-ignore
import trackAddPaymentInfo from "../../../typedoc/ga/events/trackAddPaymentInfo.md?raw";
// @ts-ignore
import trackAddShippingInfo from "../../../typedoc/ga/events/trackAddShippingInfo.md?raw";
// @ts-ignore
import trackAddToCart from "../../../typedoc/ga/events/trackAddToCart.md?raw";
// @ts-ignore
import trackAddToWishlist from "../../../typedoc/ga/events/trackAddToWishlist.md?raw";
// @ts-ignore
import trackBeginCheckout from "../../../typedoc/ga/events/trackBeginCheckout.md?raw";
// @ts-ignore
import trackPurchase from "../../../typedoc/ga/events/trackPurchase.md?raw";
// @ts-ignore
import trackRefund from "../../../typedoc/ga/events/trackRefund.md?raw";
// @ts-ignore
import trackRemoveFromCart from "../../../typedoc/ga/events/trackRemoveFromCart.md?raw";
// @ts-ignore
import trackSelectItem from "../../../typedoc/ga/events/trackSelectItem.md?raw";
// @ts-ignore
import trackSelectPromotion from "../../../typedoc/ga/events/trackSelectPromotion.md?raw";
// @ts-ignore
import trackViewCart from "../../../typedoc/ga/events/trackViewCart.md?raw";
// @ts-ignore
import trackViewItem from "../../../typedoc/ga/events/trackViewItem.md?raw";
// @ts-ignore
import trackViewItemList from "../../../typedoc/ga/events/trackViewItemList.md?raw";
// @ts-ignore
import trackViewPromotion from "../../../typedoc/ga/events/trackViewPromotion.md?raw";
import type { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react-vite";
import { Markdown } from "@storybook/addon-docs/blocks";

const meta: Meta = {
  title: "lib/Google Analytics/Events",
  parameters: {
    docs: {
      page: () => (
        <>
          <Markdown>{trackPageView}</Markdown>
          <br />
          <Markdown>{trackEarnVirtualCurrency}</Markdown>
          <br />
          <Markdown>{trackJoinGroup}</Markdown>
          <br />
          <Markdown>{trackLogin}</Markdown>
          <br />
          <Markdown>{trackSearch}</Markdown>
          <br />
          <Markdown>{trackSelectContent}</Markdown>
          <br />
          <Markdown>{trackShare}</Markdown>
          <br />
          <Markdown>{trackSignUp}</Markdown>
          <br />
          <Markdown>{trackSpendVirtualCurrency}</Markdown>
          <br />
          <Markdown>{trackTutorialBegin}</Markdown>
          <br />
          <Markdown>{trackTutorialComplete}</Markdown>
          <br />
          <Markdown>{trackAddPaymentInfo}</Markdown>
          <br />
          <Markdown>{trackAddShippingInfo}</Markdown>
          <br />
          <Markdown>{trackAddToCart}</Markdown>
          <br />
          <Markdown>{trackAddToWishlist}</Markdown>
          <br />
          <Markdown>{trackBeginCheckout}</Markdown>
          <br />
          <Markdown>{trackPurchase}</Markdown>
          <br />
          <Markdown>{trackRefund}</Markdown>
          <br />
          <Markdown>{trackRemoveFromCart}</Markdown>
          <br />
          <Markdown>{trackSelectItem}</Markdown>
          <br />
          <Markdown>{trackSelectPromotion}</Markdown>
          <br />
          <Markdown>{trackViewCart}</Markdown>
          <br />
          <Markdown>{trackViewItem}</Markdown>
          <br />
          <Markdown>{trackViewItemList}</Markdown>
          <br />
          <Markdown>{trackViewPromotion}</Markdown>
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
