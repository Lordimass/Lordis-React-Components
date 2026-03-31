# trackSpendVirtualCurrency() `<Function>`

> **trackSpendVirtualCurrency**(`value`, `virtual_currency_name`, `item_name?`): `void`

Defined in: [ga/events.ts:124](https://github.com/Lordimass/Lordis-React-Components/blob/aa128b98749d67f71bbe2a0ad87371f57e55e964/src/lib/ga/events.ts#L124)

This event measures the sale of virtual goods in your app and helps you identify which virtual goods are the most
popular.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | The value of the virtual currency. |
| `virtual_currency_name` | `string` | The name of the virtual currency. |
| `item_name?` | `string` | The name of the item the virtual currency is being used for. |

## Returns

`void`

## Example

```ts
trackSpendVirtualCurrency(5, "Gems", "Starter Boost")
```
