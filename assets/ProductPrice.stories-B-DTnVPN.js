import{P as s,a as t}from"./BasketManager-BuMC6IkQ.js";import{w as c}from"./iframe-CgZtSh_6.js";import{f as p,a}from"./fakes-DXugJHkt.js";import"./Ticker-D4lsCQln.js";import"./PageSelector-BHFKIz8Y.js";import"./Price-CJAmFuXI.js";import"./Content-ChW55cbZ.js";import"./preload-helper-PPVm8Dsz.js";const f={component:t,globals:{backgrounds:"light"},argTypes:{prod:{control:{disable:!0}}},decorators:[c]},r={args:{prod:p}},o={args:{prod:a}},e={args:{prod:new s(a.products.slice(0,2))}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
