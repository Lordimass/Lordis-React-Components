import{j as t}from"./iframe-DAStW_b5.js";import{u as s,M as i,a,C as r}from"./blocks-D07_JkfQ.js";import{Default as c}from"./useConsentMode.stories-DUUB5krH.js";import"./preload-helper-PPVm8Dsz.js";import"./Ticker-DFdZc9_T.js";import"./BasketManager-kR3xW0c_.js";import"./PageSelector-BsVFmw7g.js";import"./Price-C6eAvKox.js";import"./Content-BWxKOH7P.js";import"./GoHome-DxfFEDMe.js";const d=`# useConsentMode() \`<Function>\`

> **useConsentMode**(\`msg?\`): \`void\`

Defined in: [src/lib/ga/index.tsx:44](https://github.com/Lordimass/Lordis-React-Components/blob/2e6a7d6c333977f5ae73a20c9721b3d153e57aac/src/lib/ga/index.tsx#L44)

Displays a toast requesting consent to use the \`ga_\` cookie. If this is not displayed and accepted, cookies are
declined by default.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| \`msg\` | \`string\` | \`"Is it ok for us to collect basic site analytics using a cookie?"\` | Message to display on the toast asking for consent. |

## Returns

\`void\`
`;function o(e){return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"lib/Google Analytics/useConsentMode"}),`
`,t.jsx(a,{children:d}),`
`,t.jsx(r,{of:c,layout:"padded",style:{minHeight:"50vh"},story:{height:"20vh"}})]})}function C(e={}){const{wrapper:n}={...s(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(o,{...e})}):o()}export{C as default};
