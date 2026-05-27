import{j as e}from"./iframe-C2wc1zSf.js";import{a as t}from"./blocks-CNQLComZ.js";import"./preload-helper-PPVm8Dsz.js";const r="# trackAddPaymentInfoWithBasket() `<Function>`\n\n> **trackAddPaymentInfoWithBasket**(`currency`, `payment_type?`, `coupon?`): `void`\n\nDefined in: [src/lib/ga/helpers.ts:28](https://github.com/Lordimass/Lordis-React-Components/blob/8828fcffb3798b2ea9ea82cf90efa4e89bffa01c/src/lib/ga/helpers.ts#L28)\n\nWrapper function for [trackAddPaymentInfo](../events/trackAddPaymentInfo.md). Automatically determines the items and event value from the\nproducts in the user's [Basket](../../types/basket/Basket.md).\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `currency` | `Currency` | Currency of the items associated with the event. |\n| `payment_type?` | `string` | The chosen method of payment. |\n| `coupon?` | `string` | The coupon name/code associated with the event. Event-level and item-level coupon parameters are independent. |\n\n## Returns\n\n`void`\n",a="# trackAddShippingInfoWithBasket() `<Function>`\n\n> **trackAddShippingInfoWithBasket**(`currency`, `shipping_tier?`, `coupon?`): `void`\n\nDefined in: [src/lib/ga/helpers.ts:53](https://github.com/Lordimass/Lordis-React-Components/blob/8828fcffb3798b2ea9ea82cf90efa4e89bffa01c/src/lib/ga/helpers.ts#L53)\n\nWrapper function for [trackAddShippingInfo](../events/trackAddShippingInfo.md). Automatically determines the items and event value from the\nproducts in the user's [Basket](../../types/basket/Basket.md).\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `currency` | `Currency` | Currency of the items associated with the event. |\n| `shipping_tier?` | `string` | The shipping tier (e.g. `Ground`, `Air`, `Next-day`) selected for delivery of the purchased item. |\n| `coupon?` | `string` | The coupon name/code associated with the event. Event-level and item-level coupon parameters are independent. |\n\n## Returns\n\n`void`\n",s=`# trackAddToCartAutoValue() \`<Function>\`

> **trackAddToCartAutoValue**(\`currency\`, \`products\`): \`void\`

Defined in: [src/lib/ga/helpers.ts:75](https://github.com/Lordimass/Lordis-React-Components/blob/8828fcffb3798b2ea9ea82cf90efa4e89bffa01c/src/lib/ga/helpers.ts#L75)

Wrapper function for [trackAddToCart](../events/trackAddToCart.md). Automatically determines the event value from the
items supplied.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| \`currency\` | \`Currency\` | Currency of the items associated with the event. |
| \`products\` | [\`BasketProduct\`](../../types/basket/BasketProduct.md)[] | The products for the event. |

## Returns

\`void\`
`,o="# trackModifyCart() `<Function>`\n\n> **trackModifyCart**(`currency`, `product`, `difference`): `void`\n\nDefined in: [src/lib/ga/helpers.ts:97](https://github.com/Lordimass/Lordis-React-Components/blob/8828fcffb3798b2ea9ea82cf90efa4e89bffa01c/src/lib/ga/helpers.ts#L97)\n\nWrapper function for [trackAddToCart](../events/trackAddToCart.md) and [trackRemoveFromCart](../events/trackRemoveFromCart.md).\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `currency` | `Currency` | Currency of the items associated with the event. |\n| `product` | [`ProductData`](../../types/product/ProductData.md) | The product for this event. |\n| `difference` | `number` | The change in quantity of `product`. |\n\n## Returns\n\n`void`\n",i=`# trackAddToWishlistAutoValue() \`<Function>\`

> **trackAddToWishlistAutoValue**(\`currency\`, \`products\`): \`void\`

Defined in: [src/lib/ga/helpers.ts:120](https://github.com/Lordimass/Lordis-React-Components/blob/8828fcffb3798b2ea9ea82cf90efa4e89bffa01c/src/lib/ga/helpers.ts#L120)

Wrapper function for [trackAddToWishlist](../events/trackAddToWishlist.md). Automatically determines the event value from the
items supplied.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| \`currency\` | \`Currency\` | Currency of the items associated with the event. |
| \`products\` | [\`BasketProduct\`](../../types/basket/BasketProduct.md)[] | The products for the event. |

## Returns

\`void\`
`,c=`# trackBeginCheckoutWithBasket() \`<Function>\`

> **trackBeginCheckoutWithBasket**(\`currency\`, \`coupon?\`): \`void\`

Defined in: [src/lib/ga/helpers.ts:143](https://github.com/Lordimass/Lordis-React-Components/blob/8828fcffb3798b2ea9ea82cf90efa4e89bffa01c/src/lib/ga/helpers.ts#L143)

Wrapper function for [trackBeginCheckout](../events/trackBeginCheckout.md). Automatically determines the items and event value from the
products in the user's [Basket](../../types/basket/Basket.md).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| \`currency\` | \`Currency\` | Currency of the items associated with the event. |
| \`coupon?\` | \`string\` | The coupon name/code associated with the event. Event-level and item-level coupon parameters are independent. |

## Returns

\`void\`
`,d="# trackPurchaseWithBasket() `<Function>`\n\n> **trackPurchaseWithBasket**(`currency`, `transaction_id`, `customer_type?`, `coupon?`, `shipping?`, `tax?`): `void`\n\nDefined in: [src/lib/ga/helpers.ts:173](https://github.com/Lordimass/Lordis-React-Components/blob/8828fcffb3798b2ea9ea82cf90efa4e89bffa01c/src/lib/ga/helpers.ts#L173)\n\nWrapper function for [trackPurchase](../events/trackPurchase.md). Automatically determines the items and event value from the\nproducts in the user's [Basket](../../types/basket/Basket.md). Note that typically tax will be included in the prices of items, so if a value\nis provided for `tax`, it will be subtracted from the calculated value of the products as this should not include\ntax if possible.\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `currency` | `Currency` | Currency of the items associated with the event. |\n| `transaction_id` | `string` | The unique identifier of a transaction. The transaction_id parameter helps you avoid getting duplicate events for a purchase. |\n| `customer_type?` | `\"new\"` \\| `\"returning\"` | Is the conversion from a `new` or `returning` customer? - `new`: New customer who hasn't purchased within a given time period (540-day window recommended and set at default, but not required). - `returning`: A returning customer who has purchased during the given time period. Don't specify a value if there's uncertainty (for example, if the user checked out as a guest). |\n| `coupon?` | `string` | The coupon name/code associated with the event. Event-level and item-level coupon parameters are independent. |\n| `shipping?` | `number` | Shipping cost associated with a transaction. |\n| `tax?` | `number` | Tax cost associated with a transaction. |\n\n## Returns\n\n`void`\n",u='# trackPurchaseAutoValue() `<Function>`\n\n> **trackPurchaseAutoValue**(`products`, `currency`, `transaction_id`, `customer_type?`, `coupon?`, `shipping?`, `tax?`): `void`\n\nDefined in: [src/lib/ga/helpers.ts:216](https://github.com/Lordimass/Lordis-React-Components/blob/8828fcffb3798b2ea9ea82cf90efa4e89bffa01c/src/lib/ga/helpers.ts#L216)\n\nWrapper function for [trackPurchase](../events/trackPurchase.md). Automatically determines the event value from the items supplied. Note\nthat typically tax will be included in the prices of items, so if a value is provided for `tax`, it will be\nsubtracted from the calculated value of the products as this should not include tax if possible.\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `products` | [`BasketProduct`](../../types/basket/BasketProduct.md)[] | The products associated with the transaction. |\n| `currency` | `Currency` | Currency of the items associated with the event. |\n| `transaction_id` | `string` | The unique identifier of a transaction. The transaction_id parameter helps you avoid getting duplicate events for a purchase. |\n| `customer_type?` | `"new"` \\| `"returning"` | Is the conversion from a `new` or `returning` customer? - `new`: New customer who hasn\'t purchased within a given time period (540-day window recommended and set at default, but not required). - `returning`: A returning customer who has purchased during the given time period. Don\'t specify a value if there\'s uncertainty (for example, if the user checked out as a guest). |\n| `coupon?` | `string` | The coupon name/code associated with the event. Event-level and item-level coupon parameters are independent. |\n| `shipping?` | `number` | Shipping cost associated with a transaction. |\n| `tax?` | `number` | Tax cost associated with a transaction. |\n\n## Returns\n\n`void`\n',h="# trackRefundAutoValue() `<Function>`\n\n> **trackRefundAutoValue**(`products`, `currency`, `transaction_id`, `coupon?`, `shipping?`, `tax?`): `void`\n\nDefined in: [src/lib/ga/helpers.ts:258](https://github.com/Lordimass/Lordis-React-Components/blob/8828fcffb3798b2ea9ea82cf90efa4e89bffa01c/src/lib/ga/helpers.ts#L258)\n\nWrapper function for [trackRefund](../events/trackRefund.md). Automatically determines the event value from the items supplied. Note\nthat typically tax will be included in the prices of items, so if a value is provided for `tax`, it will be\nsubtracted from the calculated value of the products as this should not include tax if possible.\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `products` | [`BasketProduct`](../../types/basket/BasketProduct.md)[] | The products associated with the transaction. |\n| `currency` | `Currency` | Currency of the items associated with the event. |\n| `transaction_id` | `string` | The unique identifier of a transaction. The transaction_id parameter helps you avoid getting duplicate events for a purchase. |\n| `coupon?` | `string` | The coupon name/code associated with the event. Event-level and item-level coupon parameters are independent. |\n| `shipping?` | `number` | Shipping cost associated with a transaction. |\n| `tax?` | `number` | Tax cost associated with a transaction. |\n\n## Returns\n\n`void`\n",p=`# trackRemoveFromCartAutoValue() \`<Function>\`

> **trackRemoveFromCartAutoValue**(\`currency\`, \`products\`): \`void\`

Defined in: [src/lib/ga/helpers.ts:289](https://github.com/Lordimass/Lordis-React-Components/blob/8828fcffb3798b2ea9ea82cf90efa4e89bffa01c/src/lib/ga/helpers.ts#L289)

Wrapper function for [trackRemoveFromCart](../events/trackRemoveFromCart.md). Automatically determines the event value from the
items supplied.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| \`currency\` | \`Currency\` | Currency of the items associated with the event. |
| \`products\` | [\`BasketProduct\`](../../types/basket/BasketProduct.md)[] | The products for the event. |

## Returns

\`void\`
`,m=`# trackViewCartWithBasket() \`<Function>\`

> **trackViewCartWithBasket**(\`currency\`): \`void\`

Defined in: [src/lib/ga/helpers.ts:310](https://github.com/Lordimass/Lordis-React-Components/blob/8828fcffb3798b2ea9ea82cf90efa4e89bffa01c/src/lib/ga/helpers.ts#L310)

Wrapper function for [trackViewCart](../events/trackViewCart.md). Automatically determines the items and event value from the
products in the user's [Basket](../../types/basket/Basket.md).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| \`currency\` | \`Currency\` | Currency of the items associated with the event. |

## Returns

\`void\`
`,l="# trackViewItemAutoConvert() `<Function>`\n\n> **trackViewItemAutoConvert**(`currency`, `product`): `void`\n\nDefined in: [src/lib/ga/helpers.ts:321](https://github.com/Lordimass/Lordis-React-Components/blob/8828fcffb3798b2ea9ea82cf90efa4e89bffa01c/src/lib/ga/helpers.ts#L321)\n\nWrapper function for [trackViewItem](../events/trackViewItem.md). Automatically converts the product to a GA4 item.\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `currency` | `Currency` | Currency of the items associated with the event. |\n| `product` | [`ProductData`](../../types/product/ProductData.md) | The product for the event. |\n\n## Returns\n\n`void`\n",f="# trackViewItemListAutoConvert() `<Function>`\n\n> **trackViewItemListAutoConvert**(`currency`, `products`, `item_list_id?`, `item_list_name?`): `void`\n\nDefined in: [src/lib/ga/helpers.ts:340](https://github.com/Lordimass/Lordis-React-Components/blob/8828fcffb3798b2ea9ea82cf90efa4e89bffa01c/src/lib/ga/helpers.ts#L340)\n\nWrapper function for [trackViewItemList](../events/trackViewItemList.md). Automatically converts products to GA4 items.\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `currency` | `Currency` | Currency of the items associated with the event. |\n| `products` | [`BasketProduct`](../../types/basket/BasketProduct.md)[] | Products for the event. |\n| `item_list_id?` | `string` | The ID of the list in which the item was presented to the user. Ignored if set at the item-level. |\n| `item_list_name?` | `string` | The name of the list in which the item was presented to the user. Ignored if set at the item-level. |\n\n## Returns\n\n`void`\n",v="# trackViewPromotionAutoConvert() `<Function>`\n\n> **trackViewPromotionAutoConvert**(`product`, `creative_name?`, `creative_slot?`, `promotion_id?`, `promotion_name?`): `void`\n\nDefined in: [src/lib/ga/helpers.ts:371](https://github.com/Lordimass/Lordis-React-Components/blob/8828fcffb3798b2ea9ea82cf90efa4e89bffa01c/src/lib/ga/helpers.ts#L371)\n\nWrapper function for [trackViewPromotion](../events/trackViewPromotion.md). Automatically converts products to GA4 items.\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `product` | [`ProductData`](../../types/product/ProductData.md) | Product for the event. |\n| `creative_name?` | `string` | The name of the promotional creative. Ignored if set at the item-level. |\n| `creative_slot?` | `string` | The name of the promotional creative slot associated with the event. Ignored if set at the item-level. |\n| `promotion_id?` | `string` | The ID of the promotion associated with the event. Ignored if set at the item-level. |\n| `promotion_name?` | `string` | The name of the promotion associated with the event. Ignored if set at the item-level. |\n\n## Returns\n\n`void`\n",g={title:"lib/Google Analytics/Helpers",parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{children:r}),e.jsx("br",{}),e.jsx(t,{children:a}),e.jsx("br",{}),e.jsx(t,{children:s}),e.jsx("br",{}),e.jsx(t,{children:o}),e.jsx("br",{}),e.jsx(t,{children:i}),e.jsx("br",{}),e.jsx(t,{children:c}),e.jsx("br",{}),e.jsx(t,{children:d}),e.jsx("br",{}),e.jsx(t,{children:u}),e.jsx("br",{}),e.jsx(t,{children:h}),e.jsx("br",{}),e.jsx(t,{children:p}),e.jsx("br",{}),e.jsx(t,{children:m}),e.jsx("br",{}),e.jsx(t,{children:l}),e.jsx("br",{}),e.jsx(t,{children:f}),e.jsx("br",{}),e.jsx(t,{children:v}),e.jsx("br",{})]}),toc:{headingSelector:"h1"}}},component:()=>e.jsx(e.Fragment,{})},n={};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};const w=["Default"];export{n as Default,w as __namedExportsOrder,g as default};
