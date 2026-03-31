# trackSelectPromotion() `<Function>`

> **trackSelectPromotion**(`creative_name?`, `creative_slot?`, `promotion_id?`, `promotion_name?`, `items?`): `void`

Defined in: [ga/events.ts:476](https://github.com/Lordimass/Lordis-React-Components/blob/aa128b98749d67f71bbe2a0ad87371f57e55e964/src/lib/ga/events.ts#L476)

This event signifies a promotion was selected from a list.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `creative_name?` | `string` | The name of the promotional creative. Ignored if set at the item-level. |
| `creative_slot?` | `string` | The name of the promotional creative slot associated with the event. Ignored if set at the item-level. |
| `promotion_id?` | `string` | The ID of the promotion associated with the event. Ignored if set at the item-level. |
| `promotion_name?` | `string` | The name of the promotion associated with the event. Ignored if set at the item-level. |
| `items?` | [`GAItem`](../types/GAItem.md)[] | The items for the event. |

## Returns

`void`
