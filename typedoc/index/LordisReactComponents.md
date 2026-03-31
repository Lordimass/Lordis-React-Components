# LordisReactComponents `<Variable>`

> `const` **LordisReactComponents**: `object`

Defined in: [index.ts:12](https://github.com/Lordimass/Lordis-React-Components/blob/f78061d1f0a0b6e5e1d28ae400bc1274db428614/src/lib/index.ts#L12)

Configuration for Lordi's React Components. This is also accessible by the builtin alias, `LRC`.

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| <a id="defaultcurrency"></a> `defaultCurrency` | `Currency` | Default currency to assume monetary values are in. This does not determine the currency displayed to users, just what a float "4.99" should be interpreted as, for example. When this is changed, it's best practice to also change Dinero.defaultCurrency too. |
| <a id="defaultlocale"></a> `defaultLocale` | `string` | If a locale can't be automatically determined, or [LocaleContext](../localeHandler/LocaleContext.md) is not provided, use this locale instead. |
| <a id="disabledproductmessages"></a> `disabledProductMessages` | `object` | Messages which are displayed to users for each possible way a product may be unavailable to buy right now |
| `disabledProductMessages.disabled` | `string` | - |
| `disabledProductMessages.out_of_stock` | `string` | - |
| <a id="maxproductorder"></a> `maxProductOrder` | `number` | The maximum number of one product that can be ordered at a time, regardless of stock. This is a hard cap. |
