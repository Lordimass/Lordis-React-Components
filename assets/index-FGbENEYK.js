import{j as n}from"./iframe-CfTX6395.js";import{u as i,M as d,a as t}from"./blocks-W8ftslpm.js";import"./preload-helper-PPVm8Dsz.js";const c=`# acceptCookies() \`<Function>\`

> **acceptCookies**(): \`void\`

Defined in: [ga/index.ts:9](https://github.com/Lordimass/Lordis-React-Components/blob/8ffa19c0e8a2971f0c0980b1d53debf4d712da44/src/lib/ga/index.ts#L9)

Update consent to agree to Google Analytics cookies.

## Returns

\`void\`
`,a=`# declineCookies() \`<Function>\`

> **declineCookies**(): \`void\`

Defined in: [ga/index.ts:19](https://github.com/Lordimass/Lordis-React-Components/blob/8ffa19c0e8a2971f0c0980b1d53debf4d712da44/src/lib/ga/index.ts#L19)

Update consent to deny use of Google Analytics cookies.

## Returns

\`void\`
`,l=`# getGAClientId() \`<Function>\`

> **getGAClientId**(): \`string\` \\| \`null\`

Defined in: [ga/index.ts:30](https://github.com/Lordimass/Lordis-React-Components/blob/8ffa19c0e8a2971f0c0980b1d53debf4d712da44/src/lib/ga/index.ts#L30)

Get the Google Analytics client ID from the cookie.

## Returns

\`string\` \\| \`null\`

The GA client ID or null if not found.
`,r="# getGASessionId() `<Function>`\n\n> **getGASessionId**(): `Promise`&lt;`string` \\| `null`&gt;\n\nDefined in: [ga/index.ts:52](https://github.com/Lordimass/Lordis-React-Components/blob/8ffa19c0e8a2971f0c0980b1d53debf4d712da44/src/lib/ga/index.ts#L52)\n\nGet the Google Analytics session ID.\n\n## Returns\n\n`Promise`&lt;`string` \\| `null`&gt;\n\nThe GA session ID or null if not found.\n";function s(e){const o={h1:"h1",hr:"hr",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"lib/Google Analytics/Google Analytics"}),`
`,n.jsx(o.h1,{id:"cookie-consent",children:"Cookie Consent"}),`
`,n.jsx("br",{}),`
`,n.jsx(t,{children:c}),`
`,n.jsx("br",{}),`
`,n.jsx(t,{children:a}),`
`,n.jsx(o.hr,{}),`
`,n.jsx(o.h1,{id:"client-and-session-ids",children:"Client and Session IDs"}),`
`,n.jsx("br",{}),`
`,n.jsx(t,{children:l}),`
`,n.jsx("br",{}),`
`,n.jsx(t,{children:r})]})}function b(e={}){const{wrapper:o}={...i(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(s,{...e})}):s(e)}export{b as default};
