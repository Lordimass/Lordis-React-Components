# LocaleContext `<Variable>`

> `const` **LocaleContext**: `Context`&lt;`ILocaleContext`&gt;

Defined in: [localeHandler.ts:73](https://github.com/Lordimass/Lordis-React-Components/blob/84f83f1effeca17588c60e2c43324be932b6da49/src/lib/localeHandler.ts#L73)

Context wrapper which provides the user's locale, associated currency, and country. It's value should be set to the
return value of [useLocale](useLocale.md) to automatically fetch these details by reverse geocoding the IP address.
