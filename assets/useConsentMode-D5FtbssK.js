import{j as e}from"./iframe-DBRfcR_h.js";import{u as s,M as i,a,C as r}from"./blocks-DwFOUgFl.js";import{Default as c}from"./useConsentMode.stories-BO3KT_Kz.js";import"./preload-helper-PPVm8Dsz.js";import"./Ticker-CLen4bAA.js";import"./BasketManager-Z56BHmAc.js";import"./PageSelector-Cl02OSA3.js";import"./Price-JbaPVRUx.js";import"./Content-i4GExsvl.js";import"./GoHome-BrXWLuPG.js";const d=`# useConsentMode() \`<Function>\`

> **useConsentMode**(\`msg?\`): \`void\`

Defined in: [src/lib/ga/index.tsx:44](https://github.com/Lordimass/Lordis-React-Components/blob/7018c0cb9837752149bbce743adee0cde9bd984f/src/lib/ga/index.tsx#L44)

Displays a toast requesting consent to use the \`ga_\` cookie. If this is not displayed and accepted, cookies are
declined by default.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| \`msg\` | \`string\` | \`"Is it ok for us to collect basic site analytics using a cookie?"\` | Message to display on the toast asking for consent. |

## Returns

\`void\`
`;function o(t){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"lib/Google Analytics/useConsentMode"}),`
`,e.jsx(a,{children:d}),`
`,e.jsx(r,{of:c,layout:"padded",style:{minHeight:"50vh"},story:{height:"20vh"}})]})}function y(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o()}export{y as default};
