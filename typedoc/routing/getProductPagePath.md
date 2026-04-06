# getProductPagePath() `<Function>`

> **getProductPagePath**(`sku`, `maintainQueryString?`): `string`

Defined in: [routing.ts:13](https://github.com/Lordimass/Lordis-React-Components/blob/84f83f1effeca17588c60e2c43324be932b6da49/src/lib/routing.ts#L13)

Get the relative path to a product page. Does not check whether that product actually exists.

This is a very trivial helper method, it's main use is for the `maintainQueryString` functionality which allows the
user's locale query string parameter to carry over to product pages when modifying the window path.

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
