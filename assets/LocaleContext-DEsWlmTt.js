import{j as e}from"./iframe-DAStW_b5.js";import{u as s,M as c,a as o}from"./blocks-D07_JkfQ.js";import"./preload-helper-PPVm8Dsz.js";const r=`# useLocale() \`<Function>\`

> **useLocale**(): \`ILocaleContext\`

Defined in: [src/lib/localeHandler.ts:83](https://github.com/Lordimass/Lordis-React-Components/blob/2e6a7d6c333977f5ae73a20c9721b3d153e57aac/src/lib/localeHandler.ts#L83)

Automatically fetch the user's locale, associated currency, and country. This is done based on the user

## Returns

\`ILocaleContext\`

The user's locale string and associated currency.
`,l="# LocaleContext `<Variable>`\n\n> `const` **LocaleContext**: `Context`&lt;`ILocaleContext`&gt;\n\nDefined in: [src/lib/localeHandler.ts:73](https://github.com/Lordimass/Lordis-React-Components/blob/2e6a7d6c333977f5ae73a20c9721b3d153e57aac/src/lib/localeHandler.ts#L73)\n\nContext wrapper which provides the user's locale, associated currency, and country. It's value should be set to the\nreturn value of [useLocale](useLocale.md) to automatically fetch these details by reverse geocoding the IP address.\n";function a(t){return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"lib/LocaleContext"}),`
`,e.jsx(o,{children:r}),`
`,e.jsx("br",{}),`
`,e.jsx(o,{children:l})]})}function h(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a()}export{h as default};
