import{j as e}from"./iframe-UVT2eC66.js";import{u as s,M as i,a,C as r}from"./blocks-BNqxG40k.js";import{Default as c}from"./useConsentMode.stories-CtSujWxA.js";import"./preload-helper-PPVm8Dsz.js";import"./Ticker-BDeHoXpS.js";import"./BasketManager-BU6dQHgA.js";import"./PageSelector-DT8Ws5ZN.js";import"./Price-BHOVhCMj.js";import"./Content-D81plnyf.js";import"./GoHome-BlTPqZET.js";const d=`# useConsentMode() \`<Function>\`

> **useConsentMode**(\`msg?\`): \`void\`

Defined in: [src/lib/ga/index.tsx:44](https://github.com/Lordimass/Lordis-React-Components/blob/93cdeea5e11d17765ab2aef4fdc0657350500593/src/lib/ga/index.tsx#L44)

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
`,e.jsx(r,{of:c,layout:"padded",style:{minHeight:"50vh"},story:{height:"20vh"}})]})}function C(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o()}export{C as default};
