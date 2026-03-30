# Basket `<Class>`

Defined in: [types/basket.ts:20](https://github.com/Lordimass/Lordis-React-Components/blob/5a0469711f38fed4f9a62e593d9d25995d476106/src/lib/types/basket.ts#L20)

A basket of products for a customer

## Constructors

### Constructor

> **new Basket**(`products`, `lastUpdated`): `Basket`

Defined in: [types/basket.ts:28](https://github.com/Lordimass/Lordis-React-Components/blob/5a0469711f38fed4f9a62e593d9d25995d476106/src/lib/types/basket.ts#L28)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `products` | [`BasketProduct`](BasketProduct.md)[] | The products in the basket and their quantities |
| `lastUpdated` | `number` | The date-time in milliseconds since epoch at which this version of the basket was last updated with information from the database |

#### Returns

`Basket`

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="lastupdated"></a> `lastUpdated` | `number` | The date-time in milliseconds since epoch at which this version of the basket was last updated with information from the database |
| <a id="products"></a> `products` | [`BasketProduct`](BasketProduct.md)[] | The products in the basket and their quantities |

## Methods

### getBasket()

> `static` **getBasket**(): `Basket`

Defined in: [types/basket.ts:46](https://github.com/Lordimass/Lordis-React-Components/blob/5a0469711f38fed4f9a62e593d9d25995d476106/src/lib/types/basket.ts#L46)

Fetch and return the basket from `localStorage`.

#### Returns

`Basket`

A Basket object. Returns an empty basket with [Basket.lastUpdated](#lastupdated) set to 0 if no basket was
found in localStorage.
