# BasketProduct `<Class>`

Defined in: [types/basket.ts:4](https://github.com/Lordimass/Lordis-React-Components/blob/aa128b98749d67f71bbe2a0ad87371f57e55e964/src/lib/types/basket.ts#L4)

A product which is in the customer's basket

## Extends

- [`ProductData`](../product/ProductData.md)

## Indexable

> \[`key`: `string`\]: `unknown`

## Constructors

### Constructor

> **new BasketProduct**(`sku`, `basketQuantity`, `opts?`): `BasketProduct`

Defined in: [types/basket.ts:8](https://github.com/Lordimass/Lordis-React-Components/blob/aa128b98749d67f71bbe2a0ad87371f57e55e964/src/lib/types/basket.ts#L8)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sku` | `number` | - |
| `basketQuantity` | `number` | The quantity of this product in the user's basket |
| `opts?` | [`ProductDataConstructorOpts`](../product/ProductDataConstructorOpts.md) | - |

#### Returns

`BasketProduct`

#### Overrides

[`ProductData`](../product/ProductData.md).[`constructor`](../product/ProductData.md#constructor)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="active"></a> `active` | `public` | `boolean` | Whether this is a product which is currently active and available to buy | [`ProductData`](../product/ProductData.md).[`active`](../product/ProductData.md#active) |
| <a id="basketquantity"></a> `basketQuantity?` | `public` | `number` | The quantity of this product in the user's basket | - |
| <a id="groupname"></a> `groupName?` | `public` | `string` | Products with the same group name can be grouped together (in an array) to be displayed as one product with variants, instead of each as unique products. | [`ProductData`](../product/ProductData.md).[`groupName`](../product/ProductData.md#groupname) |
| <a id="images"></a> `images` | `public` | [`MinimalProductImage`](../image/MinimalProductImage.md)[] | All images associated with this product | [`ProductData`](../product/ProductData.md).[`images`](../product/ProductData.md#images) |
| <a id="metadata"></a> `metadata` | `public` | `object` | Additional data on this product which isn't encoded in the standard class attributes. | [`ProductData`](../product/ProductData.md).[`metadata`](../product/ProductData.md#metadata) |
| <a id="name"></a> `name` | `public` | `string` | Customer facing name of the product. | [`ProductData`](../product/ProductData.md).[`name`](../product/ProductData.md#name) |
| <a id="price"></a> `price` | `public` | `number` | Price of product in the default currency, inc. tax. | [`ProductData`](../product/ProductData.md).[`price`](../product/ProductData.md#price) |
| <a id="sku"></a> `sku` | `public` | `number` | The ID of this product | [`ProductData`](../product/ProductData.md).[`sku`](../product/ProductData.md#sku) |
| <a id="stock"></a> `stock` | `public` | `number` | Quantity of this product in stock | [`ProductData`](../product/ProductData.md).[`stock`](../product/ProductData.md#stock) |

## Methods

### setBasketStringQuantity()

> **setBasketStringQuantity**(`quant`, `currency?`): `void`

Defined in: [types/product.ts:77](https://github.com/Lordimass/Lordis-React-Components/blob/aa128b98749d67f71bbe2a0ad87371f57e55e964/src/lib/types/product.ts#L77)

Given a new quantity and relevant information on a product to associate it with,
update the local storage basket to contain that new quantity

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `quant` | `number` | `undefined` | The new basket string quantity for the product. |
| `currency` | `Currency` | `LRC.defaultCurrency` | The currency to be used when recording a GA4 event. Defaults to [LRC.defaultCurrency](../../index/LordisReactComponents.md#defaultcurrency) |

#### Returns

`void`

#### Inherited from

[`ProductData`](../product/ProductData.md).[`setBasketStringQuantity`](../product/ProductData.md#setbasketstringquantity)
