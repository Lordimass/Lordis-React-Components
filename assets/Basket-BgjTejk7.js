import{n as e}from"./chunk-zsgVPwQN.js";import{F as t}from"./iframe-JSkxpIvg.js";import{r as n}from"./react-xIh-A3YC.js";import{c as r,p as i,s as a}from"./blocks-CJ1jtZFT.js";import{t as o}from"./mdx-react-shim-BTzDpTZ-.js";var s,c=e((()=>{s=`# Basket \`<Class>\`

Defined in: [types/basket.ts:20](https://github.com/Lordimass/Lordis-React-Components/blob/53e51ecb677fce0ffb298703b5b5cf2ac6e0532b/src/lib/types/basket.ts#L20)

A basket of products for a customer

## Constructors

### Constructor

> **new Basket**(\`products\`, \`lastUpdated\`): \`Basket\`

Defined in: [types/basket.ts:28](https://github.com/Lordimass/Lordis-React-Components/blob/53e51ecb677fce0ffb298703b5b5cf2ac6e0532b/src/lib/types/basket.ts#L28)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| \`products\` | [\`BasketProduct\`](BasketProduct.md)[] | The products in the basket and their quantities |
| \`lastUpdated\` | \`number\` | The date-time in milliseconds since epoch at which this version of the basket was last updated with information from the database |

#### Returns

\`Basket\`

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="lastupdated"></a> \`lastUpdated\` | \`number\` | The date-time in milliseconds since epoch at which this version of the basket was last updated with information from the database |
| <a id="products"></a> \`products\` | [\`BasketProduct\`](BasketProduct.md)[] | The products in the basket and their quantities |

## Methods

### getBasket()

> \`static\` **getBasket**(): \`Basket\`

Defined in: [types/basket.ts:46](https://github.com/Lordimass/Lordis-React-Components/blob/53e51ecb677fce0ffb298703b5b5cf2ac6e0532b/src/lib/types/basket.ts#L46)

Fetch and return the basket from \`localStorage\`.

#### Returns

\`Basket\`

A Basket object. Returns an empty basket with [Basket.lastUpdated](#lastupdated) set to 0 if no basket was
found in localStorage.
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`lib/types/Basket/Basket`}),`
`,(0,d.jsx)(a,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),c(),i()}))();export{u as default};