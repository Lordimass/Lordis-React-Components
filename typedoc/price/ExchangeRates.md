# ExchangeRates `<Type Alias>`

> **ExchangeRates** = `object` & `object`

Defined in: [price.ts:24](https://github.com/Lordimass/Lordis-React-Components/blob/aa128b98749d67f71bbe2a0ad87371f57e55e964/src/lib/price.ts#L24)

A mapping from currency strings to their conversion rates.

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `date` | `string` | Date the exchange rates are valid on in `YYYY-MM-DD` format |

## Example

```ts
{
    date: "2026-03-31",
    "GBP": {
       "1inch": 15.03803069,
       "aave": 0.013586657,
       "ada": 5.42295077,
       ...
    }
  }
```
