# ProductDataConstructorOpts `<Interface>`

Defined in: [types/product.ts:17](https://github.com/Lordimass/Lordis-React-Components/blob/5a0469711f38fed4f9a62e593d9d25995d476106/src/lib/types/product.ts#L17)

## Indexable

> \[`key`: `string`\]: `unknown`

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="active"></a> `active?` | `boolean` | Whether this is a product which is currently active and available to buy |
| <a id="groupname"></a> `groupName?` | `string` | Products with the same group name can be grouped together (in an array) to be displayed as one product with variants, instead of each as unique products. |
| <a id="images"></a> `images?` | [`MinimalProductImage`](../image/MinimalProductImage.md)[] | All images associated with this product |
| <a id="name"></a> `name?` | `string` | Customer facing name of the product. |
| <a id="price"></a> `price?` | `number` | Price of product in the default currency, inc. tax. |
| <a id="stock"></a> `stock?` | `number` | Quantity of this product in stock |
