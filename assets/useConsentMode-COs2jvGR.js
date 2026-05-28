import{j as e}from"./iframe-CYHw0qUT.js";import{u as s,M as i,a,C as r}from"./blocks-mZ7EsXG2.js";import{Default as d}from"./useConsentMode.stories-C3a0y39p.js";import"./preload-helper-PPVm8Dsz.js";import"./Ticker-Dvixn-6T.js";import"./BasketManager-CvDgY2FT.js";import"./PageSelector-DBy_Huyi.js";import"./Price-DxAoNesm.js";import"./Content-BUEJeBpc.js";import"./GoHome-BQNUw9K3.js";const c=`# useConsentMode() \`<Function>\`

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
`;function o(t){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"lib/Google Analytics/useConsentMode"}),`
`,e.jsx(a,{children:c}),`
`,e.jsx(r,{of:d,layout:"padded",style:{minHeight:"50vh"},story:{height:"20vh"}})]})}function y(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o()}export{y as default};
