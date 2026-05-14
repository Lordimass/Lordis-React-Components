import{j as e}from"./iframe-BqYlIohx.js";import{u as a,M as c,a as o}from"./blocks-325b0_01.js";import"./preload-helper-PPVm8Dsz.js";const r=`# useLocale() \`<Function>\`

> **useLocale**(): \`ILocaleContext\`

Defined in: [src/lib/localeHandler.ts:83](https://github.com/Lordimass/Lordis-React-Components/blob/73d94206f6f09e3adac9b972bc63991bd92bb7a6/src/lib/localeHandler.ts#L83)

Automatically fetch the user's locale, associated currency, and country. This is done based on the user

## Returns

\`ILocaleContext\`

The user's locale string and associated currency.
`,l="# LocaleContext `<Variable>`\n\n> `const` **LocaleContext**: `Context`&lt;`ILocaleContext`&gt;\n\nDefined in: [src/lib/localeHandler.ts:73](https://github.com/Lordimass/Lordis-React-Components/blob/73d94206f6f09e3adac9b972bc63991bd92bb7a6/src/lib/localeHandler.ts#L73)\n\nContext wrapper which provides the user's locale, associated currency, and country. It's value should be set to the\nreturn value of [useLocale](useLocale.md) to automatically fetch these details by reverse geocoding the IP address.\n";function s(t){return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"lib/LocaleContext"}),`
`,e.jsx(o,{children:r}),`
`,e.jsx("br",{}),`
`,e.jsx(o,{children:l})]})}function b(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s()}export{b as default};
