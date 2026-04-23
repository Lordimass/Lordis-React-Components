import{j as e}from"./iframe-CfTX6395.js";import{u as a,M as c,a as o}from"./blocks-W8ftslpm.js";import"./preload-helper-PPVm8Dsz.js";const r=`# useLocale() \`<Function>\`

> **useLocale**(): \`ILocaleContext\`

Defined in: [localeHandler.ts:83](https://github.com/Lordimass/Lordis-React-Components/blob/8ffa19c0e8a2971f0c0980b1d53debf4d712da44/src/lib/localeHandler.ts#L83)

Automatically fetch the user's locale, associated currency, and country. This is done based on the user

## Returns

\`ILocaleContext\`

The user's locale string and associated currency.
`,l="# LocaleContext `<Variable>`\n\n> `const` **LocaleContext**: `Context`&lt;`ILocaleContext`&gt;\n\nDefined in: [localeHandler.ts:73](https://github.com/Lordimass/Lordis-React-Components/blob/8ffa19c0e8a2971f0c0980b1d53debf4d712da44/src/lib/localeHandler.ts#L73)\n\nContext wrapper which provides the user's locale, associated currency, and country. It's value should be set to the\nreturn value of [useLocale](useLocale.md) to automatically fetch these details by reverse geocoding the IP address.\n";function s(t){return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"lib/LocaleContext"}),`
`,e.jsx(o,{children:r}),`
`,e.jsx("br",{}),`
`,e.jsx(o,{children:l})]})}function h(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s()}export{h as default};
