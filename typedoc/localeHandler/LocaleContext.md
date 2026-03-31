# LocaleContext `<Variable>`

> `const` **LocaleContext**: `Context`&lt;`ILocaleContext`&gt;

Defined in: [localeHandler.ts:73](https://github.com/Lordimass/Lordis-React-Components/blob/aa128b98749d67f71bbe2a0ad87371f57e55e964/src/lib/localeHandler.ts#L73)

Context wrapper which provides the user's locale, associated currency, and country. It's value should be set to the
return value of [useLocale](useLocale.md) to automatically fetch these details by reverse geocoding the IP address.
