import{n as e}from"./chunk-zsgVPwQN.js";import{F as t}from"./iframe-JSkxpIvg.js";import{r as n}from"./react-xIh-A3YC.js";import{c as r,p as i,s as a}from"./blocks-CJ1jtZFT.js";import{t as o}from"./mdx-react-shim-BTzDpTZ-.js";var s,c=e((()=>{s=`# fetchExchangeRates() \`<Function>\`

> **fetchExchangeRates**(\`from\`): \`Promise\`&lt;[\`ExchangeRates\`](ExchangeRates.md)&gt;

Defined in: [price.ts:41](https://github.com/Lordimass/Lordis-React-Components/blob/53e51ecb677fce0ffb298703b5b5cf2ac6e0532b/src/lib/price.ts#L41)

Fetch the current exchange rates in relation to a currency.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| \`from\` | \`string\` | The currency to fetch exchange rates in relation to. |

## Returns

\`Promise\`&lt;[\`ExchangeRates\`](ExchangeRates.md)&gt;
`})),l,u=e((()=>{l=`# ExchangeRates \`<Type Alias>\`

> **ExchangeRates** = \`object\` & \`object\`

Defined in: [price.ts:24](https://github.com/Lordimass/Lordis-React-Components/blob/53e51ecb677fce0ffb298703b5b5cf2ac6e0532b/src/lib/price.ts#L24)

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
`}));function d(e){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{title:`lib/Price/fetchExchangeRates`}),`
`,(0,p.jsx)(a,{children:s}),`
`,(0,p.jsx)(`br`,{}),`
`,(0,p.jsx)(a,{children:l})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),o(),c(),u(),i()}))();export{f as default};