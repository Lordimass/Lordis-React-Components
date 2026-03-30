# trackViewItemList() `<Function>`

> **trackViewItemList**(`currency`, `items`, `item_list_id`, `item_list_name`): `void`

Defined in: [ga/events.ts:555](https://github.com/Lordimass/Lordis-React-Components/blob/5a0469711f38fed4f9a62e593d9d25995d476106/src/lib/ga/events.ts#L555)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `currency` | `string` | Currency of the items associated with the event, in [3-letter ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. Value metrics on the `view_item` event to not contribute to revenue If you set `value` then `currency` is required for revenue metrics to be computed accurately. |
| `items` | [`GAItem`](../types/GAItem.md)[] | The items for the event |
| `item_list_id` | `string` | The ID of the list in which the item was presented to the user. Ignored if set at the item-level. |
| `item_list_name` | `string` | The name of the list in which the item was presented to the user. Ignored if set at the item-level. |

## Returns

`void`
