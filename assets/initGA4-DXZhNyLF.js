import{j as e}from"./iframe-MPdWfe22.js";import{u as s,M as o,a}from"./blocks-CWfd5jqJ.js";import"./preload-helper-PPVm8Dsz.js";const d=`# initGA4() \`<Function>\`

> **initGA4**(\`measurement_id\`, \`dev?\`): \`void\`

Defined in: [ga/init.ts:21](https://github.com/Lordimass/Lordis-React-Components/blob/4df373ed3415c425349838d1ddde53e293217655/src/lib/ga/init.ts#L21)

Initialises Google Analytics 4 with default denied settings until cookies are accepted.

GA4 must be initialised before consent for Advanced mode, which sends cookie-less pings to track analytics without
association with the user. This should be combined with acceptCookies and declineCookies when consent
is gained (or declined) by the user to use cookies for analytics. Until then, only cookie-less pings will be used,
which prevent insights into user behaviours because events are not associated with each other, and instead just exist
as stand-alone events.

This method should be called early in the flow. Before the root component is even initialised (i.e. in \`main.tsx\`)

## Parameters

| Parameter | Type |
| ------ | ------ |
| \`measurement_id\` | \`string\` |
| \`dev?\` | \`boolean\` |

## Returns

\`void\`
`;function i(n){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"lib/Google Analytics/initGA4"}),`
`,e.jsx(a,{children:d})]})}function h(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i()}export{h as default};
