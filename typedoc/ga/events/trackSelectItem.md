# trackSelectItem() `<Function>`

> **trackSelectItem**(`item`, `item_list_id?`, `item_list_name?`): `void`

Defined in: [ga/events.ts:451](https://github.com/Lordimass/Lordis-React-Components/blob/84f83f1effeca17588c60e2c43324be932b6da49/src/lib/ga/events.ts#L451)

This event signifies an item was selected from a list.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | [`GAItem`](../types/GAItem.md) | The item for the event |
| `item_list_id?` | `string` | The ID of the list in which the item was presented to the user. Ignored if set at the item-level. |
| `item_list_name?` | `string` | The name of the list in which the item was presented to the user. Ignored if set at the item-level. |

## Returns

`void`
