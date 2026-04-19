import{j as e}from"./iframe-F3v0Lll7.js";import{u as s,M as c,a}from"./blocks-CtSt2DXf.js";import"./preload-helper-PPVm8Dsz.js";const o=`# fetchExchangeRates() \`<Function>\`

> **fetchExchangeRates**(\`from\`): \`Promise\`&lt;[\`ExchangeRates\`](ExchangeRates.md)&gt;

Defined in: [price.ts:41](https://github.com/Lordimass/Lordis-React-Components/blob/4b6b2e9bee65f6c3ff06e30dd78f4747e1c52e05/src/lib/price.ts#L41)

Fetch the current exchange rates in relation to a currency.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| \`from\` | \`string\` | The currency to fetch exchange rates in relation to. |

## Returns

\`Promise\`&lt;[\`ExchangeRates\`](ExchangeRates.md)&gt;
`,i=`# ExchangeRates \`<Type Alias>\`

> **ExchangeRates** = \`object\` & \`object\`

Defined in: [price.ts:24](https://github.com/Lordimass/Lordis-React-Components/blob/4b6b2e9bee65f6c3ff06e30dd78f4747e1c52e05/src/lib/price.ts#L24)

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
`;function r(n){return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"lib/Price/fetchExchangeRates"}),`
`,e.jsx(a,{children:o}),`
`,e.jsx("br",{}),`
`,e.jsx(a,{children:i})]})}function f(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r()}export{f as default};
