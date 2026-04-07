import{j as e}from"./iframe-hv_kgyvg.js";import{u as s,b as c,c as o}from"./blocks-Ct_CTnTN.js";import"./preload-helper-PPVm8Dsz.js";const r=`# useLocale() \`<Function>\`

> **useLocale**(): \`ILocaleContext\`

Defined in: [localeHandler.ts:83](https://github.com/Lordimass/Lordis-React-Components/blob/bbd5a4a2438b1d8081ffef8292a30a430ec4bcb0/src/lib/localeHandler.ts#L83)

Automatically fetch the user's locale, associated currency, and country. This is done based on the user

## Returns

\`ILocaleContext\`

The user's locale string and associated currency.
`,l="# LocaleContext `<Variable>`\n\n> `const` **LocaleContext**: `Context`&lt;`ILocaleContext`&gt;\n\nDefined in: [localeHandler.ts:73](https://github.com/Lordimass/Lordis-React-Components/blob/bbd5a4a2438b1d8081ffef8292a30a430ec4bcb0/src/lib/localeHandler.ts#L73)\n\nContext wrapper which provides the user's locale, associated currency, and country. It's value should be set to the\nreturn value of [useLocale](useLocale.md) to automatically fetch these details by reverse geocoding the IP address.\n";function a(t){return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"lib/LocaleContext"}),`
`,e.jsx(o,{children:r}),`
`,e.jsx("br",{}),`
`,e.jsx(o,{children:l})]})}function b(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a()}export{b as default};
