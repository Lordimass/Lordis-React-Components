# ProductData `<Class>`

Defined in: [types/product.ts:37](https://github.com/Lordimass/Lordis-React-Components/blob/84f83f1effeca17588c60e2c43324be932b6da49/src/lib/types/product.ts#L37)

A fully fledged product object.

## Extended by

- [`BasketProduct`](../basket/BasketProduct.md)

## Implements

- [`MinimalProduct`](MinimalProduct.md)

## Indexable

> \[`key`: `string`\]: `unknown`

## Constructors

### Constructor

> **new ProductData**(`sku`, `opts?`): `ProductData`

Defined in: [types/product.ts:59](https://github.com/Lordimass/Lordis-React-Components/blob/84f83f1effeca17588c60e2c43324be932b6da49/src/lib/types/product.ts#L59)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sku` | `number` |
| `opts` | [`ProductDataConstructorOpts`](ProductDataConstructorOpts.md) |

#### Returns

`ProductData`

## Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| <a id="active"></a> `active` | `public` | `boolean` | Whether this is a product which is currently active and available to buy |
| <a id="groupname"></a> `groupName?` | `public` | `string` | Products with the same group name can be grouped together (in an array) to be displayed as one product with variants, instead of each as unique products. |
| <a id="images"></a> `images` | `public` | [`MinimalProductImage`](../image/MinimalProductImage.md)[] | All images associated with this product |
| <a id="metadata"></a> `metadata` | `public` | `object` | Additional data on this product which isn't encoded in the standard class attributes. |
| <a id="name"></a> `name` | `public` | `string` | Customer facing name of the product. |
| <a id="price"></a> `price` | `public` | `number` | Price of product in the default currency, inc. tax. |
| <a id="sku"></a> `sku` | `public` | `number` | The ID of this product |
| <a id="stock"></a> `stock` | `public` | `number` | Quantity of this product in stock |

## Methods

### setBasketStringQuantity()

> **setBasketStringQuantity**(`quant`, `currency?`): `void`

Defined in: [types/product.ts:77](https://github.com/Lordimass/Lordis-React-Components/blob/84f83f1effeca17588c60e2c43324be932b6da49/src/lib/types/product.ts#L77)

Given a new quantity and relevant information on a product to associate it with,
update the local storage basket to contain that new quantity

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `quant` | `number` | `undefined` | The new basket string quantity for the product. |
| `currency` | `Currency` | `LRC.defaultCurrency` | The currency to be used when recording a GA4 event. Defaults to [LRC.defaultCurrency](../../index/LordisReactComponents.md#defaultcurrency) |

#### Returns

`void`
