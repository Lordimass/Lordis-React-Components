import{j as n}from"./iframe-CsQADwQM.js";import{u as o,M as i,a,C as r}from"./blocks-BvFkJ0SB.js";import{Default as c}from"./useConsentMode.stories-C5GG_-aD.js";import"./preload-helper-PPVm8Dsz.js";import"./Ticker-3o6JmnH-.js";import"./BasketManager-B2a62XBC.js";import"./PageSelector-Bkz3iTyX.js";import"./Price-BzJoB4mG.js";import"./Content-BSFTVdSo.js";const d=`# useConsentMode() \`<Function>\`

> **useConsentMode**(\`msg?\`): \`void\`

Defined in: [src/lib/ga/index.tsx:44](https://github.com/Lordimass/Lordis-React-Components/blob/447919f783f9e081434be9413643dc8c70b74d59/src/lib/ga/index.tsx#L44)

Displays a toast requesting consent to use the \`ga_\` cookie. If this is not displayed and accepted, cookies are
declined by default.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| \`msg\` | \`string\` | \`"Is it ok for us to collect basic site analytics using a cookie?"\` | Message to display on the toast asking for consent. |

## Returns

\`void\`
`;function s(t){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"lib/Google Analytics/useConsentMode"}),`
`,n.jsx(a,{children:d}),`
`,n.jsx(r,{of:c,layout:"padded",style:{minHeight:"50vh"},story:{height:"20vh"}})]})}function y(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s()}export{y as default};
