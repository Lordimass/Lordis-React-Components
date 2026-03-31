# convertDinero() `<Function>`

> **convertDinero**(`dinero`, `to`, `exchangeRates?`): `Promise`&lt;`Dinero`&gt;

Defined in: [price.ts:61](https://github.com/Lordimass/Lordis-React-Components/blob/f78061d1f0a0b6e5e1d28ae400bc1274db428614/src/lib/price.ts#L61)

Convert between currencies. If called from the client, will cache exchange rates in session storage so that this
function can be repeatedly called without spamming API requests. If this is called from the server, you should
cache the exchange rates some other way and provide them using the `exchangeRates` parameter.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dinero` | `Dinero` | An object representing the money amount to convert from. |
| `to` | `Currency` | The currency to convert to. |
| `exchangeRates?` | [`ExchangeRates`](ExchangeRates.md) | Cached exchange rates if they exist, used to prevent fetching exchange rates all the time if many conversions are needed. |

## Returns

`Promise`&lt;`Dinero`&gt;
