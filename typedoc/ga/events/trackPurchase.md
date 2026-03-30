# trackPurchase() `<Function>`

> **trackPurchase**(`currency`, `value`, `items`, `transaction_id`, `customer_type?`, `coupon?`, `shipping?`, `tax?`): `void`

Defined in: [ga/events.ts:345](https://github.com/Lordimass/Lordis-React-Components/blob/5a0469711f38fed4f9a62e593d9d25995d476106/src/lib/ga/events.ts#L345)

This event signifies when one or more items is purchased by a user.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `currency` | `string` | Currency of the items associated with the event, in [3-letter ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. Value metrics on the `view_item` event to not contribute to revenue If you set `value` then `currency` is required for revenue metrics to be computed accurately. |
| `value` | `number` | The monetary value of the event. Set `value` to the sum of (price * quantity) for all items in items. Don't include shipping or tax. `value` is typically required for meaningful reporting. If you mark the event as a key event then it's recommended you set value. `currency` is required if you set value. |
| `items` | [`GAItem`](../types/GAItem.md)[] | The items for the event. |
| `transaction_id` | `string` | The unique identifier of a transaction. The transaction_id parameter helps you avoid getting duplicate events for a purchase. |
| `customer_type?` | `"new"` \| `"returning"` | Is the conversion from a `new` or `returning` customer? - `new`: New customer who hasn't purchased within a given time period (540-day window recommended and set at default, but not required). - `returning`: A returning customer who has purchased during the given time period. Don't specify a value if there's uncertainty (for example, if the user checked out as a guest). |
| `coupon?` | `string` | The coupon name/code associated with the event. Event-level and item-level coupon parameters are independent. |
| `shipping?` | `number` | Shipping cost associated with a transaction. |
| `tax?` | `number` | Tax cost associated with a transaction. |

## Returns

`void`
