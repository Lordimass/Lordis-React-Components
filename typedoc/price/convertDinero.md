# convertDinero() `<Function>`

> **convertDinero**(`dinero`, `to`, `exchangeRates?`): `Promise`&lt;`Dinero`&gt;

Defined in: [price.ts:50](https://github.com/Lordimass/Lordis-React-Components/blob/5a0469711f38fed4f9a62e593d9d25995d476106/src/lib/price.ts#L50)

Convert between currencies

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dinero` | `Dinero` | An object representing the money amount to convert from. |
| `to` | `Currency` | The currency to convert to. |
| `exchangeRates?` | [`ExchangeRates`](ExchangeRates.md) | Cached exchange rates if they exist, used to prevent fetching exchange rates all the time if many conversions are needed. |

## Returns

`Promise`&lt;`Dinero`&gt;
