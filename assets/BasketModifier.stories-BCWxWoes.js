import{j as a,b as c}from"./iframe-DRBv36uK.js";import{B as u}from"./BasketManager-DFdGgmQi.js";import{f as s,k as d,e as n}from"./fakes-BYwxJvp5.js";import"./preload-helper-PPVm8Dsz.js";import"./Ticker-fqiHh6E3.js";import"./PageSelector-Be4e-Kg0.js";import"./Price-C35a5FQB.js";import"./Content-iw_KOvAe.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,x={component:u,args:{onChange:l(),product:s},argTypes:{onChange:{control:!1,table:{disable:!0}},showMaxValue:{control:"boolean",if:{arg:"max",exists:!0}},min:{control:"number"},max:{control:"number"},defaultValue:{control:"number",table:{defaultValue:{summary:"0"}}},updateValueRef:{control:!1,table:{disable:!0}},height:{control:"text",table:{value:"50px"}},product:{control:"object"}},globals:{backgrounds:"white"}},e={args:{inputId:"default-basket-modifier-story",product:s}},t={args:{inputId:"out-of-stock-basket-modifier-story",product:n}},r={args:{inputId:"disabled-basket-modifier-story",product:d}},o={args:{product:n,inputId:"kill-switch-basket-modifier-story"},decorators:[i=>a.jsx(c,{value:{kill_switch:{enabled:!0,message:"We're currently performing maintenance on the site, please try again later :D"}},children:a.jsx(i,{})})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    inputId: "default-basket-modifier-story",
    product: fakeProduct
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    inputId: "out-of-stock-basket-modifier-story",
    product: fakeProduct2
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    inputId: "disabled-basket-modifier-story",
    product: fakeProduct3
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    product: fakeProduct2,
    inputId: "kill-switch-basket-modifier-story"
  },
  decorators: [Story => <LRCRemoteSettingsContext value={{
    kill_switch: {
      enabled: true,
      message: "We're currently performing maintenance on the site, please try again later :D"
    }
  }}>\r
        <Story />\r
      </LRCRemoteSettingsContext>]
}`,...o.parameters?.docs?.source}}};const S=["Default","OutOfStock","Disabled","KillSwitch"];export{e as Default,r as Disabled,o as KillSwitch,t as OutOfStock,S as __namedExportsOrder,x as default};
