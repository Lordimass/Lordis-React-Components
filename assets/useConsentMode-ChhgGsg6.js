import{j as t}from"./iframe-BqYlIohx.js";import{u as s,M as i,a,C as r}from"./blocks-325b0_01.js";import{Default as c}from"./useConsentMode.stories-BfYHFuYD.js";import"./preload-helper-PPVm8Dsz.js";import"./Ticker-DgXEEspF.js";import"./BasketManager-fUFrEAui.js";import"./PageSelector-DtILmLLO.js";import"./Price-BAL1_Gw-.js";import"./Content-QEkytTOt.js";import"./GoHome-IgagZVdq.js";const d=`# useConsentMode() \`<Function>\`

> **useConsentMode**(\`msg?\`): \`void\`

Defined in: [src/lib/ga/index.tsx:44](https://github.com/Lordimass/Lordis-React-Components/blob/73d94206f6f09e3adac9b972bc63991bd92bb7a6/src/lib/ga/index.tsx#L44)

Displays a toast requesting consent to use the \`ga_\` cookie. If this is not displayed and accepted, cookies are
declined by default.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| \`msg\` | \`string\` | \`"Is it ok for us to collect basic site analytics using a cookie?"\` | Message to display on the toast asking for consent. |

## Returns

\`void\`
`;function o(n){return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"lib/Google Analytics/useConsentMode"}),`
`,t.jsx(a,{children:d}),`
`,t.jsx(r,{of:c,layout:"padded",style:{minHeight:"50vh"},story:{height:"20vh"}})]})}function y(n={}){const{wrapper:e}={...s(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o()}export{y as default};
