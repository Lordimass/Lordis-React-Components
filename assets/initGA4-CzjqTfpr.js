import{n as e}from"./chunk-zsgVPwQN.js";import{F as t}from"./iframe-JSkxpIvg.js";import{r as n}from"./react-xIh-A3YC.js";import{c as r,p as i,s as a}from"./blocks-CJ1jtZFT.js";import{t as o}from"./mdx-react-shim-BTzDpTZ-.js";var s,c=e((()=>{s=`# initGA4() \`<Function>\`

> **initGA4**(\`measurement_id\`, \`dev?\`): \`void\`

Defined in: [ga/init.ts:21](https://github.com/Lordimass/Lordis-React-Components/blob/53e51ecb677fce0ffb298703b5b5cf2ac6e0532b/src/lib/ga/init.ts#L21)

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