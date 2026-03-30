# trackSelectContent() `<Function>`

> **trackSelectContent**(`content_type`, `content_id`): `void`

Defined in: [ga/events.ts:87](https://github.com/Lordimass/Lordis-React-Components/blob/5a0469711f38fed4f9a62e593d9d25995d476106/src/lib/ga/events.ts#L87)

This event signifies that a user has selected some content of a certain type. This event can help you identify
popular content and categories of content on your website or app.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content_type` | `string` | The type of selected content. |
| `content_id` | `string` | An identifier for the content that was selected. |

## Returns

`void`

## Example

```ts
trackSelectContent("product", "C_12345")
```
