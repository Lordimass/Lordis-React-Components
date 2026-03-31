import{j as n}from"./iframe-DH9Sv-14.js";import{u as c,b as s,c as a}from"./blocks-CQaJkc-s.js";import"./preload-helper-PPVm8Dsz.js";const o=`# fetchExchangeRates() \`<Function>\`

> **fetchExchangeRates**(\`from\`): \`Promise\`&lt;[\`ExchangeRates\`](ExchangeRates.md)&gt;

Defined in: [price.ts:41](https://github.com/Lordimass/Lordis-React-Components/blob/84f83f1effeca17588c60e2c43324be932b6da49/src/lib/price.ts#L41)

Fetch the current exchange rates in relation to a currency.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| \`from\` | \`string\` | The currency to fetch exchange rates in relation to. |

## Returns

\`Promise\`&lt;[\`ExchangeRates\`](ExchangeRates.md)&gt;
`,i=`# ExchangeRates \`<Type Alias>\`

> **ExchangeRates** = \`object\` & \`object\`

Defined in: [price.ts:24](https://github.com/Lordimass/Lordis-React-Components/blob/84f83f1effeca17588c60e2c43324be932b6da49/src/lib/price.ts#L24)

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
`;function r(e){return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"lib/Price/fetchExchangeRates"}),`
`,n.jsx(a,{children:o}),`
`,n.jsx("br",{}),`
`,n.jsx(a,{children:i})]})}function f(e={}){const{wrapper:t}={...c(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r()}export{f as default};
