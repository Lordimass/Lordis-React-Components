# trackAddPaymentInfo() `<Function>`

> **trackAddPaymentInfo**(`currency`, `value`, `items`, `coupon?`, `payment_type?`): `void`

Defined in: [ga/events.ts:175](https://github.com/Lordimass/Lordis-React-Components/blob/f78061d1f0a0b6e5e1d28ae400bc1274db428614/src/lib/ga/events.ts#L175)

This event signifies a user has submitted their payment information in an ecommerce checkout process.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `currency` | `string` | Currency of the items associated with the event, in [3-letter ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. Value metrics on the `view_item` event to not contribute to revenue If you set `value` then `currency` is required for revenue metrics to be computed accurately. |
| `value` | `number` | The monetary value of the event. Set `value` to the sum of (price * quantity) for all items in items. Don't include shipping or tax. `value` is typically required for meaningful reporting. If you mark the event as a key event then it's recommended you set value. `currency` is required if you set value. |
| `items` | [`GAItem`](../types/GAItem.md)[] | The items for the event. |
| `coupon?` | `string` | The coupon name/code associated with the event. Event-level and item-level coupon parameters are independent. |
| `payment_type?` | `string` | The chosen method of payment. |

## Returns

`void`
