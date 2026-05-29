import{j as t}from"./iframe-B8FnZOsO.js";import{u as s,M as i,a,C as r}from"./blocks-BR8aLIwO.js";import{Default as d}from"./useConsentMode.stories-aS2HewMW.js";import"./preload-helper-PPVm8Dsz.js";import"./Ticker-BSJvoH0X.js";import"./BasketManager-NB3yd9o8.js";import"./Button-DfqGN-lf.js";import"./PageSelector-agJkbdD5.js";import"./Price-C0J2lOvK.js";import"./Content-BAQeVBXF.js";import"./GoHome-BxxwhqlQ.js";const c=`# useConsentMode() \`<Function>\`

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
