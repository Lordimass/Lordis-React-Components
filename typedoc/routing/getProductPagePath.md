# getProductPagePath() `<Function>`

> **getProductPagePath**(`sku`, `maintainQueryString?`): `string`

Defined in: [routing.ts:9](https://github.com/Lordimass/Lordis-React-Components/blob/5a0469711f38fed4f9a62e593d9d25995d476106/src/lib/routing.ts#L9)

Get the relative path to a product page. Does not check whether that product actually exists.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `sku` | `number` | `undefined` | The sku of the product to fetch a path for. |
| `maintainQueryString` | `boolean` | `true` | Whether to preserve the current search parameters in the path. |

## Returns

`string`

The relative path to the page requested.

## Examples

```ts
"/products/1"
```

```ts
"/products/1?locale=en-GB"
```
