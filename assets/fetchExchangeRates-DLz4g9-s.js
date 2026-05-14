import{j as n}from"./iframe-Cke4DDEk.js";import{u as r,M as s,a}from"./blocks-BNf9wUUQ.js";import"./preload-helper-PPVm8Dsz.js";const i=`# fetchExchangeRates() \`<Function>\`

> **fetchExchangeRates**(\`from\`): \`Promise\`&lt;[\`ExchangeRates\`](ExchangeRates.md)&gt;

Defined in: [src/lib/price.ts:41](https://github.com/Lordimass/Lordis-React-Components/blob/326415672951a5abd9e7ce9ea0e0c302c72b380c/src/lib/price.ts#L41)

Fetch the current exchange rates in relation to a currency.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| \`from\` | \`string\` | The currency to fetch exchange rates in relation to. |

## Returns

\`Promise\`&lt;[\`ExchangeRates\`](ExchangeRates.md)&gt;
`,o=`# ExchangeRates \`<Type Alias>\`

> **ExchangeRates** = \`object\` & \`object\`

Defined in: [src/lib/price.ts:24](https://github.com/Lordimass/Lordis-React-Components/blob/326415672951a5abd9e7ce9ea0e0c302c72b380c/src/lib/price.ts#L24)

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
`;function c(e){return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"lib/Price/fetchExchangeRates"}),`
`,n.jsx(a,{children:i}),`
`,n.jsx("br",{}),`
`,n.jsx(a,{children:o})]})}function p(e={}){const{wrapper:t}={...r(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(c,{...e})}):c()}export{p as default};
