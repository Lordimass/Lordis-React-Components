import{j as e}from"./iframe-BHF6ExkF.js";import{c as t}from"./blocks-DIfF66PW.js";import"./preload-helper-PPVm8Dsz.js";const i=`# trackPageView() \`<Function>\`

> **trackPageView**(\`page_title?\`, \`page_location?\`): \`void\`

Defined in: [ga/events.ts:28](https://github.com/Lordimass/Lordis-React-Components/blob/afe69d4d10179637a684b460b0bb0e906c3e9709/src/lib/ga/events.ts#L28)

Records a user viewing a page.

**Caution:** If you send manual pageviews without disabling pageview measurement, you may end up with duplicate
pageviews. *However*, automatic page views are disabled by default when using initGA4 from this library.

Whenever someone loads a page of your website or their browser history state is
changed by the active site, an enhanced measurement event called page_view is sent from your website to Google
Analytics. Since the event is sent automatically, you don't need to send pageview data to Analytics manually.

However, when you want to manually control how pageviews are sent (e.g. single-page applications or infinite
scrolling), you can disable pageviews and then manually send them from your website.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| \`page_title\` | \`string\` | \`document.title\` | The title of the page. Defaults to \`location.href\` |
| \`page_location\` | \`string\` | \`location.href\` | The URL of the page. The value must start with the protocol followed by the full URL; for example, https://www.example.com/contact-us-submitted. Defaults to \`document.title\` |

## Returns

\`void\`
`,r=`# trackEarnVirtualCurrency() \`<Function>\`

> **trackEarnVirtualCurrency**(\`virtual_currency_name?\`, \`value?\`): \`void\`

Defined in: [ga/events.ts:42](https://github.com/Lordimass/Lordis-React-Components/blob/afe69d4d10179637a684b460b0bb0e906c3e9709/src/lib/ga/events.ts#L42)

This event measures when a user is awarded virtual currency in a game. Log this along with
[trackSpendVirtualCurrency](trackSpendVirtualCurrency.md) to better understand your virtual economy.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| \`virtual_currency_name?\` | \`string\` | The name of the virtual currency. |
| \`value?\` | \`number\` | The value of the virtual currency. |

## Returns

\`void\`

## Example

\`\`\`ts
trackEarnVirtualCurrency("Gems", 5)
\`\`\`
`,s=`# trackJoinGroup() \`<Function>\`

> **trackJoinGroup**(\`group_id?\`): \`void\`

Defined in: [ga/events.ts:55](https://github.com/Lordimass/Lordis-React-Components/blob/afe69d4d10179637a684b460b0bb0e906c3e9709/src/lib/ga/events.ts#L55)

Log this event when a user joins a group such as a guild, team, or family. Use this event to analyze how popular
certain groups or social features are.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| \`group_id?\` | \`string\` | The ID of the group. |

## Returns

\`void\`
`,o=`# trackLogin() \`<Function>\`

> **trackLogin**(\`method?\`): \`void\`

Defined in: [ga/events.ts:64](https://github.com/Lordimass/Lordis-React-Components/blob/afe69d4d10179637a684b460b0bb0e906c3e9709/src/lib/ga/events.ts#L64)

Send this event to signify that a user has logged in to your website or app.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| \`method?\` | \`string\` | The method used to log in. |

## Returns

\`void\`
`,a=`# trackSearch() \`<Function>\`

> **trackSearch**(\`search_term?\`): \`void\`

Defined in: [ga/events.ts:75](https://github.com/Lordimass/Lordis-React-Components/blob/afe69d4d10179637a684b460b0bb0e906c3e9709/src/lib/ga/events.ts#L75)

Log this event to indicate when the user has performed a search. You can use this event to identify what users are
searching for on your website or app. For example, you could send this event when a user views a search results page
after performing a search.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| \`search_term?\` | \`string\` | The term that was searched for. |

## Returns

\`void\`
`,c=`# trackSelectContent() \`<Function>\`

> **trackSelectContent**(\`content_type\`, \`content_id\`): \`void\`

Defined in: [ga/events.ts:87](https://github.com/Lordimass/Lordis-React-Components/blob/afe69d4d10179637a684b460b0bb0e906c3e9709/src/lib/ga/events.ts#L87)

This event signifies that a user has selected some content of a certain type. This event can help you identify
popular content and categories of content on your website or app.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| \`content_type\` | \`string\` | The type of selected content. |
| \`content_id\` | \`string\` | An identifier for the content that was selected. |

## Returns

\`void\`

## Example

\`\`\`ts
trackSelectContent("product", "C_12345")
\`\`\`
`,u='# trackShare() `<Function>`\n\n> **trackShare**(`method?`, `content_type?`, `item_id?`): `void`\n\nDefined in: [ga/events.ts:99](https://github.com/Lordimass/Lordis-React-Components/blob/afe69d4d10179637a684b460b0bb0e906c3e9709/src/lib/ga/events.ts#L99)\n\nUse this event when a user has shared content.\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `method?` | `string` | The method in which the content is shared. |\n| `content_type?` | `string` | The type of shared content. |\n| `item_id?` | `string` | The ID of the shared content. |\n\n## Returns\n\n`void`\n\n## Example\n\n```ts\ntrackShare("Twitter", "image", "C_12345")\n```\n',m=`# trackSignUp() \`<Function>\`

> **trackSignUp**(\`method?\`): \`void\`

Defined in: [ga/events.ts:112](https://github.com/Lordimass/Lordis-React-Components/blob/afe69d4d10179637a684b460b0bb0e906c3e9709/src/lib/ga/events.ts#L112)

This event indicates that a user has signed up for an account. Use this event to understand the different behaviors
of logged in and logged-out users.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| \`method?\` | \`string\` | The method used for sign up. |

## Returns

\`void\`
`,d='# trackSpendVirtualCurrency() `<Function>`\n\n> **trackSpendVirtualCurrency**(`value`, `virtual_currency_name`, `item_name?`): `void`\n\nDefined in: [ga/events.ts:124](https://github.com/Lordimass/Lordis-React-Components/blob/afe69d4d10179637a684b460b0bb0e906c3e9709/src/lib/ga/events.ts#L124)\n\nThis event measures the sale of virtual goods in your app and helps you identify which virtual goods are the most\npopular.\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `value` | `number` | The value of the virtual currency. |\n| `virtual_currency_name` | `string` | The name of the virtual currency. |\n| `item_name?` | `string` | The name of the item the virtual currency is being used for. |\n\n## Returns\n\n`void`\n\n## Example\n\n```ts\ntrackSpendVirtualCurrency(5, "Gems", "Starter Boost")\n```\n',h=`# trackTutorialBegin() \`<Function>\`

> **trackTutorialBegin**(): \`void\`

Defined in: [ga/events.ts:140](https://github.com/Lordimass/Lordis-React-Components/blob/afe69d4d10179637a684b460b0bb0e906c3e9709/src/lib/ga/events.ts#L140)

This event signifies the start of the on-boarding process. Use this in a funnel with [trackTutorialComplete](trackTutorialComplete.md)
to understand how many users complete the tutorial.

## Returns

\`void\`
`,l=`# trackTutorialComplete() \`<Function>\`

> **trackTutorialComplete**(): \`void\`

Defined in: [ga/events.ts:148](https://github.com/Lordimass/Lordis-React-Components/blob/afe69d4d10179637a684b460b0bb0e906c3e9709/src/lib/ga/events.ts#L148)

This event signifies the user's completion of your on-boarding process. Use this in a funnel with
[trackTutorialBegin](trackTutorialBegin.md) to understand how many users complete the tutorial.

## Returns

\`void\`
`,v="# trackAddPaymentInfo() `<Function>`\n\n> **trackAddPaymentInfo**(`currency`, `value`, `items`, `coupon?`, `payment_type?`): `void`\n\nDefined in: [ga/events.ts:175](https://github.com/Lordimass/Lordis-React-Components/blob/afe69d4d10179637a684b460b0bb0e906c3e9709/src/lib/ga/events.ts#L175)\n\nThis event signifies a user has submitted their payment information in an ecommerce checkout process.\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `currency` | `string` | Currency of the items associated with the event, in [3-letter ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. Value metrics on the `view_item` event to not contribute to revenue If you set `value` then `currency` is required for revenue metrics to be computed accurately. |\n| `value` | `number` | The monetary value of the event. Set `value` to the sum of (price * quantity) for all items in items. Don't include shipping or tax. `value` is typically required for meaningful reporting. If you mark the event as a key event then it's recommended you set value. `currency` is required if you set value. |\n| `items` | [`GAItem`](../types/GAItem.md)[] | The items for the event. |\n| `coupon?` | `string` | The coupon name/code associated with the event. Event-level and item-level coupon parameters are independent. |\n| `payment_type?` | `string` | The chosen method of payment. |\n\n## Returns\n\n`void`\n",p="# trackAddShippingInfo() `<Function>`\n\n> **trackAddShippingInfo**(`currency`, `value`, `items`, `coupon?`, `shipping_tier?`): `void`\n\nDefined in: [ga/events.ts:215](https://github.com/Lordimass/Lordis-React-Components/blob/afe69d4d10179637a684b460b0bb0e906c3e9709/src/lib/ga/events.ts#L215)\n\nThis event signifies a user has submitted their shipping information in an ecommerce checkout process.\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `currency` | `string` | Currency of the items associated with the event, in [3-letter ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. Value metrics on the `view_item` event to not contribute to revenue If you set `value` then `currency` is required for revenue metrics to be computed accurately. |\n| `value` | `number` | The monetary value of the event. Set `value` to the sum of (price * quantity) for all items in items. Don't include shipping or tax. `value` is typically required for meaningful reporting. If you mark the event as a key event then it's recommended you set value. `currency` is required if you set value. |\n| `items` | [`GAItem`](../types/GAItem.md)[] | The items for the event. |\n| `coupon?` | `string` | The coupon name/code associated with the event. Event-level and item-level `coupon` parameters are independent. |\n| `shipping_tier?` | `string` | The shipping tier (e.g. `Ground`, `Air`, `Next-day`) selected for delivery of the purchased item. |\n\n## Returns\n\n`void`\n",f="# trackAddToCart() `<Function>`\n\n> **trackAddToCart**(`currency`, `value`, `items`): `void`\n\nDefined in: [ga/events.ts:250](https://github.com/Lordimass/Lordis-React-Components/blob/afe69d4d10179637a684b460b0bb0e906c3e9709/src/lib/ga/events.ts#L250)\n\nThis event signifies that an item was added to a cart for purchase.\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `currency` | `string` | Currency of the items associated with the event, in [3-letter ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. Value metrics on the `view_item` event to not contribute to revenue If you set `value` then `currency` is required for revenue metrics to be computed accurately. |\n| `value` | `number` | The monetary value of the event. Set `value` to the sum of (price * quantity) for all items in items. Don't include shipping or tax. `value` is typically required for meaningful reporting. If you mark the event as a key event then it's recommended you set value. `currency` is required if you set value. |\n| `items` | [`GAItem`](../types/GAItem.md)[] | The items for the event. |\n\n## Returns\n\n`void`\n",g="# trackAddToWishlist() `<Function>`\n\n> **trackAddToWishlist**(`currency`, `value`, `items`): `void`\n\nDefined in: [ga/events.ts:273](https://github.com/Lordimass/Lordis-React-Components/blob/afe69d4d10179637a684b460b0bb0e906c3e9709/src/lib/ga/events.ts#L273)\n\nThe event signifies that an item was added to a wishlist. Use this event to identify popular gift items in your app.\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `currency` | `string` | Currency of the items associated with the event, in [3-letter ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. Value metrics on the `view_item` event to not contribute to revenue If you set `value` then `currency` is required for revenue metrics to be computed accurately. |\n| `value` | `number` | The monetary value of the event. Set `value` to the sum of (price * quantity) for all items in items. Don't include shipping or tax. `value` is typically required for meaningful reporting. If you mark the event as a key event then it's recommended you set value. `currency` is required if you set value. |\n| `items` | [`GAItem`](../types/GAItem.md)[] | The items for the event. |\n\n## Returns\n\n`void`\n",b="# trackBeginCheckout() `<Function>`\n\n> **trackBeginCheckout**(`currency`, `value`, `items`, `coupon?`): `void`\n\nDefined in: [ga/events.ts:303](https://github.com/Lordimass/Lordis-React-Components/blob/afe69d4d10179637a684b460b0bb0e906c3e9709/src/lib/ga/events.ts#L303)\n\nThis event signifies that a user has begun a checkout.\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `currency` | `string` | Currency of the items associated with the event, in [3-letter ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. Value metrics on the `view_item` event to not contribute to revenue If you set `value` then `currency` is required for revenue metrics to be computed accurately. |\n| `value` | `number` | The monetary value of the event. Set `value` to the sum of (price * quantity) for all items in items. Don't include shipping or tax. `value` is typically required for meaningful reporting. If you mark the event as a key event then it's recommended you set value. `currency` is required if you set value. |\n| `items` | [`GAItem`](../types/GAItem.md)[] | The items for the event. |\n| `coupon?` | `string` | The coupon name/code associated with the event. Event-level and item-level coupon parameters are independent. |\n\n## Returns\n\n`void`\n",y="# trackPurchase() `<Function>`\n\n> **trackPurchase**(`currency`, `value`, `items`, `transaction_id`, `customer_type?`, `coupon?`, `shipping?`, `tax?`): `void`\n\nDefined in: [ga/events.ts:345](https://github.com/Lordimass/Lordis-React-Components/blob/afe69d4d10179637a684b460b0bb0e906c3e9709/src/lib/ga/events.ts#L345)\n\nThis event signifies when one or more items is purchased by a user.\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `currency` | `string` | Currency of the items associated with the event, in [3-letter ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. Value metrics on the `view_item` event to not contribute to revenue If you set `value` then `currency` is required for revenue metrics to be computed accurately. |\n| `value` | `number` | The monetary value of the event. Set `value` to the sum of (price * quantity) for all items in items. Don't include shipping or tax. `value` is typically required for meaningful reporting. If you mark the event as a key event then it's recommended you set value. `currency` is required if you set value. |\n| `items` | [`GAItem`](../types/GAItem.md)[] | The items for the event. |\n| `transaction_id` | `string` | The unique identifier of a transaction. The transaction_id parameter helps you avoid getting duplicate events for a purchase. |\n| `customer_type?` | `\"new\"` \\| `\"returning\"` | Is the conversion from a `new` or `returning` customer? - `new`: New customer who hasn't purchased within a given time period (540-day window recommended and set at default, but not required). - `returning`: A returning customer who has purchased during the given time period. Don't specify a value if there's uncertainty (for example, if the user checked out as a guest). |\n| `coupon?` | `string` | The coupon name/code associated with the event. Event-level and item-level coupon parameters are independent. |\n| `shipping?` | `number` | Shipping cost associated with a transaction. |\n| `tax?` | `number` | Tax cost associated with a transaction. |\n\n## Returns\n\n`void`\n",w="# trackRefund() `<Function>`\n\n> **trackRefund**(`currency`, `value`, `items`, `transaction_id`, `coupon?`, `shipping?`, `tax?`): `void`\n\nDefined in: [ga/events.ts:394](https://github.com/Lordimass/Lordis-React-Components/blob/afe69d4d10179637a684b460b0bb0e906c3e9709/src/lib/ga/events.ts#L394)\n\nThis event signifies when one or more items is refunded to a user.\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `currency` | `string` | Currency of the items associated with the event, in [3-letter ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. Value metrics on the `view_item` event to not contribute to revenue If you set `value` then `currency` is required for revenue metrics to be computed accurately. |\n| `value` | `number` | The monetary value of the event. Set `value` to the sum of (price * quantity) for all items in items. Don't include shipping or tax. `value` is typically required for meaningful reporting. If you mark the event as a key event then it's recommended you set value. `currency` is required if you set value. |\n| `items` | [`GAItem`](../types/GAItem.md)[] | The items for the event. |\n| `transaction_id` | `string` | The unique identifier of a transaction. The transaction_id parameter helps you avoid getting duplicate events for a purchase. |\n| `coupon?` | `string` | The coupon name/code associated with the event. Event-level and item-level coupon parameters are independent. |\n| `shipping?` | `number` | Shipping cost associated with a transaction. |\n| `tax?` | `number` | Tax cost associated with a transaction. |\n\n## Returns\n\n`void`\n",k="# trackRemoveFromCart() `<Function>`\n\n> **trackRemoveFromCart**(`currency`, `value`, `items`): `void`\n\nDefined in: [ga/events.ts:433](https://github.com/Lordimass/Lordis-React-Components/blob/afe69d4d10179637a684b460b0bb0e906c3e9709/src/lib/ga/events.ts#L433)\n\nThis event signifies that an item was removed from a cart.\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `currency` | `string` | Currency of the items associated with the event, in [3-letter ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. Value metrics on the `view_item` event to not contribute to revenue If you set `value` then `currency` is required for revenue metrics to be computed accurately. |\n| `value` | `number` | The monetary value of the event. Set `value` to the sum of (price * quantity) for all items in items. Don't include shipping or tax. `value` is typically required for meaningful reporting. If you mark the event as a key event then it's recommended you set value. `currency` is required if you set value. |\n| `items` | [`GAItem`](../types/GAItem.md)[] | The items for the event. |\n\n## Returns\n\n`void`\n",T="# trackSelectItem() `<Function>`\n\n> **trackSelectItem**(`item`, `item_list_id?`, `item_list_name?`): `void`\n\nDefined in: [ga/events.ts:451](https://github.com/Lordimass/Lordis-React-Components/blob/afe69d4d10179637a684b460b0bb0e906c3e9709/src/lib/ga/events.ts#L451)\n\nThis event signifies an item was selected from a list.\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `item` | [`GAItem`](../types/GAItem.md) | The item for the event |\n| `item_list_id?` | `string` | The ID of the list in which the item was presented to the user. Ignored if set at the item-level. |\n| `item_list_name?` | `string` | The name of the list in which the item was presented to the user. Ignored if set at the item-level. |\n\n## Returns\n\n`void`\n",_="# trackSelectPromotion() `<Function>`\n\n> **trackSelectPromotion**(`creative_name?`, `creative_slot?`, `promotion_id?`, `promotion_name?`, `items?`): `void`\n\nDefined in: [ga/events.ts:476](https://github.com/Lordimass/Lordis-React-Components/blob/afe69d4d10179637a684b460b0bb0e906c3e9709/src/lib/ga/events.ts#L476)\n\nThis event signifies a promotion was selected from a list.\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `creative_name?` | `string` | The name of the promotional creative. Ignored if set at the item-level. |\n| `creative_slot?` | `string` | The name of the promotional creative slot associated with the event. Ignored if set at the item-level. |\n| `promotion_id?` | `string` | The ID of the promotion associated with the event. Ignored if set at the item-level. |\n| `promotion_name?` | `string` | The name of the promotion associated with the event. Ignored if set at the item-level. |\n| `items?` | [`GAItem`](../types/GAItem.md)[] | The items for the event. |\n\n## Returns\n\n`void`\n",I="# trackViewCart() `<Function>`\n\n> **trackViewCart**(`currency`, `value`, `items`): `void`\n\nDefined in: [ga/events.ts:513](https://github.com/Lordimass/Lordis-React-Components/blob/afe69d4d10179637a684b460b0bb0e906c3e9709/src/lib/ga/events.ts#L513)\n\nThis event signifies that a user viewed their cart.\n\nThis event signifies that an item was removed from a cart.\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `currency` | `string` | Currency of the items associated with the event, in [3-letter ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. Value metrics on the `view_item` event to not contribute to revenue If you set `value` then `currency` is required for revenue metrics to be computed accurately. |\n| `value` | `number` | The monetary value of the event. Set `value` to the sum of (price * quantity) for all items in items. Don't include shipping or tax. `value` is typically required for meaningful reporting. If you mark the event as a key event then it's recommended you set value. `currency` is required if you set value. |\n| `items` | [`GAItem`](../types/GAItem.md)[] | The items for the event. |\n\n## Returns\n\n`void`\n",L="# trackViewItem() `<Function>`\n\n> **trackViewItem**(`currency`, `value`, `items`): `void`\n\nDefined in: [ga/events.ts:535](https://github.com/Lordimass/Lordis-React-Components/blob/afe69d4d10179637a684b460b0bb0e906c3e9709/src/lib/ga/events.ts#L535)\n\nThis event signifies that some content was shown to the user. Use this event to discover the most popular items viewed.\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `currency` | `string` | Currency of the items associated with the event, in [3-letter ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. Value metrics on the `view_item` event to not contribute to revenue If you set `value` then `currency` is required for revenue metrics to be computed accurately. |\n| `value` | `number` | The monetary value of the event. Set `value` to the sum of (price * quantity) for all items in items. Don't include shipping or tax. `value` is typically required for meaningful reporting. If you mark the event as a key event then it's recommended you set value. `currency` is required if you set value. |\n| `items` | [`GAItem`](../types/GAItem.md)[] | The items for the event. |\n\n## Returns\n\n`void`\n",x="# trackViewItemList() `<Function>`\n\n> **trackViewItemList**(`currency`, `items`, `item_list_id`, `item_list_name`): `void`\n\nDefined in: [ga/events.ts:555](https://github.com/Lordimass/Lordis-React-Components/blob/afe69d4d10179637a684b460b0bb0e906c3e9709/src/lib/ga/events.ts#L555)\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `currency` | `string` | Currency of the items associated with the event, in [3-letter ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. Value metrics on the `view_item` event to not contribute to revenue If you set `value` then `currency` is required for revenue metrics to be computed accurately. |\n| `items` | [`GAItem`](../types/GAItem.md)[] | The items for the event |\n| `item_list_id` | `string` | The ID of the list in which the item was presented to the user. Ignored if set at the item-level. |\n| `item_list_name` | `string` | The name of the list in which the item was presented to the user. Ignored if set at the item-level. |\n\n## Returns\n\n`void`\n",C="# trackViewPromotion() `<Function>`\n\n> **trackViewPromotion**(`item`, `creative_name?`, `creative_slot?`, `promotion_id?`, `promotion_name?`): `void`\n\nDefined in: [ga/events.ts:586](https://github.com/Lordimass/Lordis-React-Components/blob/afe69d4d10179637a684b460b0bb0e906c3e9709/src/lib/ga/events.ts#L586)\n\nThis event signifies a promotion was viewed from a list.\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `item` | [`GAItem`](../types/GAItem.md) | The item for the event |\n| `creative_name?` | `string` | The name of the promotional creative. Ignored if set at the item-level. |\n| `creative_slot?` | `string` | The name of the promotional creative slot associated with the event. Ignored if set at the item-level. |\n| `promotion_id?` | `string` | The ID of the promotion associated with the event. Ignored if set at the item-level. |\n| `promotion_name?` | `string` | The name of the promotion associated with the event. Ignored if set at the item-level. |\n\n## Returns\n\n`void`\n",R={title:"lib/Google Analytics/Events",parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{children:i}),e.jsx("br",{}),e.jsx(t,{children:r}),e.jsx("br",{}),e.jsx(t,{children:s}),e.jsx("br",{}),e.jsx(t,{children:o}),e.jsx("br",{}),e.jsx(t,{children:a}),e.jsx("br",{}),e.jsx(t,{children:c}),e.jsx("br",{}),e.jsx(t,{children:u}),e.jsx("br",{}),e.jsx(t,{children:m}),e.jsx("br",{}),e.jsx(t,{children:d}),e.jsx("br",{}),e.jsx(t,{children:h}),e.jsx("br",{}),e.jsx(t,{children:l}),e.jsx("br",{}),e.jsx(t,{children:v}),e.jsx("br",{}),e.jsx(t,{children:p}),e.jsx("br",{}),e.jsx(t,{children:f}),e.jsx("br",{}),e.jsx(t,{children:g}),e.jsx("br",{}),e.jsx(t,{children:b}),e.jsx("br",{}),e.jsx(t,{children:y}),e.jsx("br",{}),e.jsx(t,{children:w}),e.jsx("br",{}),e.jsx(t,{children:k}),e.jsx("br",{}),e.jsx(t,{children:T}),e.jsx("br",{}),e.jsx(t,{children:_}),e.jsx("br",{}),e.jsx(t,{children:I}),e.jsx("br",{}),e.jsx(t,{children:L}),e.jsx("br",{}),e.jsx(t,{children:x}),e.jsx("br",{}),e.jsx(t,{children:C}),e.jsx("br",{})]}),toc:{headingSelector:"h1"}}}},n={};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};const A=["Default"];export{n as Default,A as __namedExportsOrder,R as default};
