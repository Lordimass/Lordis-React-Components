import{j as t}from"./iframe-bXSde-nS.js";import{u as n,b as o,c as d}from"./blocks-Bfd9YPB4.js";import"./preload-helper-PPVm8Dsz.js";const r=`# Basket \`<Class>\`

Defined in: [types/basket.ts:20](https://github.com/Lordimass/Lordis-React-Components/blob/5ea2b8a4d10a260fc607dd5ada4b5f5da01646ab/src/lib/types/basket.ts#L20)

A basket of products for a customer

## Constructors

### Constructor

> **new Basket**(\`products\`, \`lastUpdated\`): \`Basket\`

Defined in: [types/basket.ts:28](https://github.com/Lordimass/Lordis-React-Components/blob/5ea2b8a4d10a260fc607dd5ada4b5f5da01646ab/src/lib/types/basket.ts#L28)

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

Defined in: [types/basket.ts:46](https://github.com/Lordimass/Lordis-React-Components/blob/5ea2b8a4d10a260fc607dd5ada4b5f5da01646ab/src/lib/types/basket.ts#L46)

Fetch and return the basket from \`localStorage\`.

#### Returns

\`Basket\`

A Basket object. Returns an empty basket with [Basket.lastUpdated](#lastupdated) set to 0 if no basket was
found in localStorage.
`;function a(e){return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"lib/types/Basket/Basket"}),`
`,t.jsx(d,{children:r})]})}function b(e={}){const{wrapper:s}={...n(),...e.components};return s?t.jsx(s,{...e,children:t.jsx(a,{...e})}):a()}export{b as default};
