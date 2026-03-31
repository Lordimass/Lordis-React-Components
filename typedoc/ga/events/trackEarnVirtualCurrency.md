# trackEarnVirtualCurrency() `<Function>`

> **trackEarnVirtualCurrency**(`virtual_currency_name?`, `value?`): `void`

Defined in: [ga/events.ts:42](https://github.com/Lordimass/Lordis-React-Components/blob/f78061d1f0a0b6e5e1d28ae400bc1274db428614/src/lib/ga/events.ts#L42)

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
