import{j as t}from"./iframe-DEhfIclu.js";import{u as s,M as i,a,C as r}from"./blocks-DtyDTnL6.js";import{Default as d}from"./useConsentMode.stories-BwdMNUbF.js";import"./preload-helper-PPVm8Dsz.js";import"./Ticker-B_M1y_nw.js";import"./BasketManager-C_Zoq4OJ.js";import"./Button-D5QUPqkB.js";import"./PageSelector-CbZeP_HR.js";import"./Price-BP3uFC3a.js";import"./Content-C9SJCgqS.js";import"./GoHome-ph71On3P.js";const c=`# useConsentMode() \`<Function>\`

> **useConsentMode**(\`msg?\`): \`void\`

Defined in: [src/lib/ga/index.tsx:44](https://github.com/Lordimass/Lordis-React-Components/blob/eda0d830f6e70a32bc2acf2278db578e8e7bd317/src/lib/ga/index.tsx#L44)

Displays a toast requesting consent to use the \`ga_\` cookie. If this is not displayed and accepted, cookies are
declined by default.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| \`msg\` | \`string\` | \`"Is it ok for us to collect basic site analytics using a cookie?"\` | Message to display on the toast asking for consent. |

## Returns

\`void\`
`;function o(e){return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"lib/Google Analytics/useConsentMode"}),`
`,t.jsx(a,{children:c}),`
`,t.jsx(r,{of:d,layout:"padded",style:{minHeight:"50vh"},story:{height:"20vh"}})]})}function C(e={}){const{wrapper:n}={...s(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(o,{...e})}):o()}export{C as default};
