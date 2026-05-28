import{j as n}from"./iframe-CYHw0qUT.js";import{u as s,M as c,a}from"./blocks-mZ7EsXG2.js";import"./preload-helper-PPVm8Dsz.js";const i=`# fetchExchangeRates() \`<Function>\`

> **fetchExchangeRates**(\`from\`): \`Promise\`&lt;[\`ExchangeRates\`](ExchangeRates.md)&gt;

Defined in: [src/lib/price.ts:41](https://github.com/Lordimass/Lordis-React-Components/blob/eda0d830f6e70a32bc2acf2278db578e8e7bd317/src/lib/price.ts#L41)

Fetch the current exchange rates in relation to a currency.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| \`from\` | \`string\` | The currency to fetch exchange rates in relation to. |

## Returns

\`Promise\`&lt;[\`ExchangeRates\`](ExchangeRates.md)&gt;
`,o=`# ExchangeRates \`<Type Alias>\`

> **ExchangeRates** = \`object\` & \`object\`

Defined in: [src/lib/price.ts:24](https://github.com/Lordimass/Lordis-React-Components/blob/eda0d830f6e70a32bc2acf2278db578e8e7bd317/src/lib/price.ts#L24)

A mapping from currency strings to their conversion rates.

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| \`date\` | \`string\` | Date the exchange rates are valid on in \`YYYY-MM-DD\` format |

## Example

\`\`\`ts
{
    date: "2026-03-31",
    "GBP": {
       "1inch": 15.03803069,
       "aave": 0.013586657,
       "ada": 5.42295077,
       ...
    }
  }
\`\`\`
`;function r(e){return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"lib/Price/fetchExchangeRates"}),`
`,n.jsx(a,{children:i}),`
`,n.jsx("br",{}),`
`,n.jsx(a,{children:o})]})}function x(e={}){const{wrapper:t}={...s(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r()}export{x as default};
