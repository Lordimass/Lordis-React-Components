# trackEarnVirtualCurrency() `<Function>`

> **trackEarnVirtualCurrency**(`virtual_currency_name?`, `value?`): `void`

Defined in: [ga/events.ts:42](https://github.com/Lordimass/Lordis-React-Components/blob/5a0469711f38fed4f9a62e593d9d25995d476106/src/lib/ga/events.ts#L42)

This event measures when a user is awarded virtual currency in a game. Log this along with
[trackSpendVirtualCurrency](trackSpendVirtualCurrency.md) to better understand your virtual economy.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `virtual_currency_name?` | `string` | The name of the virtual currency. |
| `value?` | `number` | The value of the virtual currency. |

## Returns

`void`

## Example

```ts
trackEarnVirtualCurrency("Gems", 5)
```
