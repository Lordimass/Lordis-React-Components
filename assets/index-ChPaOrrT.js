import{j as n}from"./iframe-C7Teu72A.js";import{u as i,M as c,a as t}from"./blocks-Cj-JLDcR.js";import"./preload-helper-PPVm8Dsz.js";const d=`# acceptCookies() \`<Function>\`

> **acceptCookies**(): \`void\`

Defined in: [src/lib/ga/index.tsx:13](https://github.com/Lordimass/Lordis-React-Components/blob/eda0d830f6e70a32bc2acf2278db578e8e7bd317/src/lib/ga/index.tsx#L13)

Update consent to agree to Google Analytics cookies.

## Returns

\`void\`
`,a=`# declineCookies() \`<Function>\`

> **declineCookies**(): \`void\`

Defined in: [src/lib/ga/index.tsx:28](https://github.com/Lordimass/Lordis-React-Components/blob/eda0d830f6e70a32bc2acf2278db578e8e7bd317/src/lib/ga/index.tsx#L28)

Update consent to deny use of Google Analytics cookies.

## Returns

\`void\`
`,r=`# getGAClientId() \`<Function>\`

> **getGAClientId**(): \`string\` \\| \`null\`

Defined in: [src/lib/ga/index.tsx:96](https://github.com/Lordimass/Lordis-React-Components/blob/eda0d830f6e70a32bc2acf2278db578e8e7bd317/src/lib/ga/index.tsx#L96)

Get the Google Analytics client ID from the cookie.

## Returns

\`string\` \\| \`null\`

The GA client ID or null if not found.
`,l="# getGASessionId() `<Function>`\n\n> **getGASessionId**(`ga4MeasurementId`): `Promise`&lt;`string` \\| `null`&gt;\n\nDefined in: [src/lib/ga/index.tsx:120](https://github.com/Lordimass/Lordis-React-Components/blob/eda0d830f6e70a32bc2acf2278db578e8e7bd317/src/lib/ga/index.tsx#L120)\n\nGet the Google Analytics session ID.\n\n## Parameters\n\n| Parameter | Type | Description |\n| ------ | ------ | ------ |\n| `ga4MeasurementId` | `string` | The Google Analytics measurement ID with which to fetch the session ID in association to. |\n\n## Returns\n\n`Promise`&lt;`string` \\| `null`&gt;\n\nThe GA session ID or null if not found.\n";function o(e){const s={h1:"h1",hr:"hr",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"lib/Google Analytics/Google Analytics"}),`
`,n.jsx(s.h1,{id:"cookie-consent",children:"Cookie Consent"}),`
`,n.jsx("br",{}),`
`,n.jsx(t,{children:d}),`
`,n.jsx("br",{}),`
`,n.jsx(t,{children:a}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h1,{id:"client-and-session-ids",children:"Client and Session IDs"}),`
`,n.jsx("br",{}),`
`,n.jsx(t,{children:r}),`
`,n.jsx("br",{}),`
`,n.jsx(t,{children:l})]})}function h(e={}){const{wrapper:s}={...i(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(o,{...e})}):o(e)}export{h as default};
