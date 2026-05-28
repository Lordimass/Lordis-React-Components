import{P as s}from"./BasketManager-BU6dQHgA.js";import{P as t,w as c}from"./iframe-UVT2eC66.js";import{f as p,a}from"./fakes-CiRxB3gW.js";import"./Ticker-BDeHoXpS.js";import"./PageSelector-DT8Ws5ZN.js";import"./Price-BHOVhCMj.js";import"./Content-D81plnyf.js";import"./GoHome-BlTPqZET.js";import"./preload-helper-PPVm8Dsz.js";const k={component:s,globals:{backgrounds:"light"},argTypes:{prod:{control:{disable:!0}}},decorators:[c]},r={args:{prod:p}},o={args:{prod:a}},e={args:{prod:new t(a.products.slice(0,2))}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    prod: fakeProduct
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    prod: fakeProductGroup
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    prod: new ProductGroup(fakeProductGroup.products.slice(0, 2))
  }
}`,...e.parameters?.docs?.source}}};const G=["Default","PriceRange","AllEqualPrices"];export{e as AllEqualPrices,r as Default,o as PriceRange,G as __namedExportsOrder,k as default};
