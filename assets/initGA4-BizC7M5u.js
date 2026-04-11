import{n as e}from"./chunk-zsgVPwQN.js";import{F as t}from"./iframe-p6oOQHW_.js";import{r as n}from"./react-BQeV4CCA.js";import{c as r,p as i,s as a}from"./blocks-CkwIrgM7.js";import{t as o}from"./mdx-react-shim-CpxTOdlM.js";var s,c=e((()=>{s=`# initGA4() \`<Function>\`

> **initGA4**(\`measurement_id\`, \`dev?\`): \`void\`

Defined in: [ga/init.ts:21](https://github.com/Lordimass/Lordis-React-Components/blob/4148de20940979b0c6c4522a8a45b7fe497c76e5/src/lib/ga/init.ts#L21)

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
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`lib/Google Analytics/initGA4`}),`
`,(0,d.jsx)(a,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),c(),i()}))();export{u as default};