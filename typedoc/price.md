# price

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [ExchangeRates](price/ExchangeRates.md) | A mapping from currency strings to their conversion rates. |

## Variables

| Variable | Description |
| ------ | ------ |
| [CURRENCY\_CONVERSION\_ENDPOINT](price/CURRENCY_CONVERSION_ENDPOINT.md) | API Endpoint for currency conversion requests. `{{from}}` will be converted to the currency code to be converted from. `{{to}}` will be converted to the currency code to be converted to. |

## Functions

| Function | Description |
| ------ | ------ |
| [convertDinero](price/convertDinero.md) | Convert between currencies. If called from the client, will cache exchange rates in session storage so that this function can be repeatedly called without spamming API requests. If this is called from the server, you should cache the exchange rates some other way and provide them using the `exchangeRates` parameter. |
| [fetchExchangeRates](price/fetchExchangeRates.md) | Fetch the current exchange rates in relation to a currency. |
