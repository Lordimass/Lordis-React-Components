# trackViewPromotion() `<Function>`

> **trackViewPromotion**(`item`, `creative_name?`, `creative_slot?`, `promotion_id?`, `promotion_name?`): `void`

Defined in: [ga/events.ts:586](https://github.com/Lordimass/Lordis-React-Components/blob/f78061d1f0a0b6e5e1d28ae400bc1274db428614/src/lib/ga/events.ts#L586)

This event signifies a promotion was viewed from a list.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | [`GAItem`](../types/GAItem.md) | The item for the event |
| `creative_name?` | `string` | The name of the promotional creative. Ignored if set at the item-level. |
| `creative_slot?` | `string` | The name of the promotional creative slot associated with the event. Ignored if set at the item-level. |
| `promotion_id?` | `string` | The ID of the promotion associated with the event. Ignored if set at the item-level. |
| `promotion_name?` | `string` | The name of the promotion associated with the event. Ignored if set at the item-level. |

## Returns

`void`
