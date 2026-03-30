# trackSelectItem() `<Function>`

> **trackSelectItem**(`item`, `item_list_id?`, `item_list_name?`): `void`

Defined in: [ga/events.ts:451](https://github.com/Lordimass/Lordis-React-Components/blob/5a0469711f38fed4f9a62e593d9d25995d476106/src/lib/ga/events.ts#L451)

This event signifies an item was selected from a list.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | [`GAItem`](../types/GAItem.md) | The item for the event |
| `item_list_id?` | `string` | The ID of the list in which the item was presented to the user. Ignored if set at the item-level. |
| `item_list_name?` | `string` | The name of the list in which the item was presented to the user. Ignored if set at the item-level. |

## Returns

`void`
