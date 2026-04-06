# trackSelectContent() `<Function>`

> **trackSelectContent**(`content_type`, `content_id`): `void`

Defined in: [ga/events.ts:87](https://github.com/Lordimass/Lordis-React-Components/blob/84f83f1effeca17588c60e2c43324be932b6da49/src/lib/ga/events.ts#L87)

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
