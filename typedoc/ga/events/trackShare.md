# trackShare() `<Function>`

> **trackShare**(`method?`, `content_type?`, `item_id?`): `void`

Defined in: [ga/events.ts:99](https://github.com/Lordimass/Lordis-React-Components/blob/5a0469711f38fed4f9a62e593d9d25995d476106/src/lib/ga/events.ts#L99)

Use this event when a user has shared content.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `method?` | `string` | The method in which the content is shared. |
| `content_type?` | `string` | The type of shared content. |
| `item_id?` | `string` | The ID of the shared content. |

## Returns

`void`

## Example

```ts
trackShare("Twitter", "image", "C_12345")
```
