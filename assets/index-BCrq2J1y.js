import{j as n}from"./iframe-DckmqF05.js";import{u as i,M as c,a as s}from"./blocks-BiBmIR87.js";import"./preload-helper-PPVm8Dsz.js";const r=`# acceptCookies() \`<Function>\`

> **acceptCookies**(): \`void\`

Defined in: [ga/index.ts:9](https://github.com/Lordimass/Lordis-React-Components/blob/6cf2e1d56782e1721b1fa7316004e8170e73719e/src/lib/ga/index.ts#L9)

Update consent to agree to Google Analytics cookies.

## Returns

\`void\`
`,d=`# declineCookies() \`<Function>\`

> **declineCookies**(): \`void\`

Defined in: [ga/index.ts:19](https://github.com/Lordimass/Lordis-React-Components/blob/6cf2e1d56782e1721b1fa7316004e8170e73719e/src/lib/ga/index.ts#L19)

Update consent to deny use of Google Analytics cookies.

## Returns

\`void\`
`,a=`# getGAClientId() \`<Function>\`

> **getGAClientId**(): \`string\` \\| \`null\`

Defined in: [ga/index.ts:30](https://github.com/Lordimass/Lordis-React-Components/blob/6cf2e1d56782e1721b1fa7316004e8170e73719e/src/lib/ga/index.ts#L30)

Get the Google Analytics client ID from the cookie.

## Returns

\`string\` \\| \`null\`

The GA client ID or null if not found.
`,l="# getGASessionId() `<Function>`\n\n> **getGASessionId**(`ga4MeasurementId`): `Promise`&lt;`string` \\| `null`&gt;\n\nDefined in: [ga/index.ts:54](https://github.com/Lordimass/Lordis-React-Components/blob/6cf2e1d56782e1721b1fa7316004e8170e73719e/src/lib/ga/index.ts#L54)\n\nGet the Google Analytics session ID.\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `ga4MeasurementId` | `string` | The Google Analytics measurement ID with which to fetch the session ID in association to. |\n\n## Returns\n\n`Promise`&lt;`string` \\| `null`&gt;\n\nThe GA session ID or null if not found.\n";function o(e){const t={h1:"h1",hr:"hr",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"lib/Google Analytics/Google Analytics"}),`
`,n.jsx(t.h1,{id:"cookie-consent",children:"Cookie Consent"}),`
`,n.jsx("br",{}),`
`,n.jsx(s,{children:r}),`
`,n.jsx("br",{}),`
`,n.jsx(s,{children:d}),`
`,n.jsx(t.hr,{}),`
`,n.jsx(t.h1,{id:"client-and-session-ids",children:"Client and Session IDs"}),`
`,n.jsx("br",{}),`
`,n.jsx(s,{children:a}),`
`,n.jsx("br",{}),`
`,n.jsx(s,{children:l})]})}function m(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o(e)}export{m as default};
