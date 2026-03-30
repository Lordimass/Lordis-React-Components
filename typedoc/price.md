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
| [convertDinero](price/convertDinero.md) | Convert between currencies |
| [fetchExchangeRates](price/fetchExchangeRates.md) | Fetch the current exchange rates in relation to a currency. |
