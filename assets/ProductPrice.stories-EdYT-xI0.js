import{P as s,a as t}from"./BasketManager-Dza30THG.js";import{w as c}from"./iframe-F3v0Lll7.js";import{f as p,a}from"./fakes-DduKntjQ.js";import"./Ticker-CwyOO8Br.js";import"./PageSelector-bh5PVZ9i.js";import"./Price-gFQar830.js";import"./Content-Clbxk1F0.js";import"./preload-helper-PPVm8Dsz.js";const f={component:t,globals:{backgrounds:"light"},argTypes:{prod:{control:{disable:!0}}},decorators:[c]},r={args:{prod:p}},o={args:{prod:a}},e={args:{prod:new s(a.products.slice(0,2))}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const k=["Default","PriceRange","AllEqualPrices"];export{e as AllEqualPrices,r as Default,o as PriceRange,k as __namedExportsOrder,f as default};
