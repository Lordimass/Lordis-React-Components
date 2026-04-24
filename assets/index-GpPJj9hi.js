import{j as n}from"./iframe-DeJCZYGs.js";import{u as i,M as c,a as s}from"./blocks-47_DAovR.js";import"./preload-helper-PPVm8Dsz.js";const d=`# acceptCookies() \`<Function>\`

> **acceptCookies**(): \`void\`

Defined in: [ga/index.ts:9](https://github.com/Lordimass/Lordis-React-Components/blob/44d0609cb9b1db756686a6efa70b1771d89c7980/src/lib/ga/index.ts#L9)

Update consent to agree to Google Analytics cookies.

## Returns

\`void\`
`,a=`# declineCookies() \`<Function>\`

> **declineCookies**(): \`void\`

Defined in: [ga/index.ts:19](https://github.com/Lordimass/Lordis-React-Components/blob/44d0609cb9b1db756686a6efa70b1771d89c7980/src/lib/ga/index.ts#L19)

Update consent to deny use of Google Analytics cookies.

## Returns

\`void\`
`,r=`# getGAClientId() \`<Function>\`

> **getGAClientId**(): \`string\` \\| \`null\`

Defined in: [ga/index.ts:30](https://github.com/Lordimass/Lordis-React-Components/blob/44d0609cb9b1db756686a6efa70b1771d89c7980/src/lib/ga/index.ts#L30)

Get the Google Analytics client ID from the cookie.

## Returns

\`string\` \\| \`null\`

The GA client ID or null if not found.
`,l="# getGASessionId() `<Function>`\n\n> **getGASessionId**(`ga4MeasurementId`): `Promise`&lt;`string` \\| `null`&gt;\n\nDefined in: [ga/index.ts:54](https://github.com/Lordimass/Lordis-React-Components/blob/44d0609cb9b1db756686a6efa70b1771d89c7980/src/lib/ga/index.ts#L54)\n\nGet the Google Analytics session ID.\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `ga4MeasurementId` | `string` | The Google Analytics measurement ID with which to fetch the session ID in association to. |\n\n## Returns\n\n`Promise`&lt;`string` \\| `null`&gt;\n\nThe GA session ID or null if not found.\n";function o(e){const t={h1:"h1",hr:"hr",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"lib/Google Analytics/Google Analytics"}),`
`,n.jsx(t.h1,{id:"cookie-consent",children:"Cookie Consent"}),`
`,n.jsx("br",{}),`
`,n.jsx(s,{children:d}),`
`,n.jsx("br",{}),`
`,n.jsx(s,{children:a}),`
`,n.jsx(t.hr,{}),`
`,n.jsx(t.h1,{id:"client-and-session-ids",children:"Client and Session IDs"}),`
`,n.jsx("br",{}),`
`,n.jsx(s,{children:r}),`
`,n.jsx("br",{}),`
`,n.jsx(s,{children:l})]})}function u(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o(e)}export{u as default};
