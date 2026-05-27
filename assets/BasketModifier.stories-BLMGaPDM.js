import{j as a,b as c}from"./iframe-DTQEgc05.js";import{B as u}from"./BasketManager-Pi_iJBZX.js";import{f as s,k as d,e as n}from"./fakes-CucHeiuA.js";import"./preload-helper-PPVm8Dsz.js";import"./Ticker-Bw8dKPTx.js";import"./PageSelector-r2q--MnB.js";import"./Price-DvkHcLSE.js";import"./Content-Bw_nLu0A.js";import"./GoHome-BWkPtn0x.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,S={component:u,args:{onChange:l(),product:s},argTypes:{onChange:{control:!1,table:{disable:!0}},showMaxValue:{control:"boolean",if:{arg:"max",exists:!0}},min:{control:"number"},max:{control:"number"},defaultValue:{control:"number",table:{defaultValue:{summary:"0"}}},updateValueRef:{control:!1,table:{disable:!0}},height:{control:"text",table:{value:"50px"}},product:{control:"object"}},globals:{backgrounds:"white"}},e={args:{inputId:"default-basket-modifier-story",product:s}},t={args:{inputId:"out-of-stock-basket-modifier-story",product:n}},r={args:{inputId:"disabled-basket-modifier-story",product:d}},o={args:{product:n,inputId:"kill-switch-basket-modifier-story"},decorators:[i=>a.jsx(c,{value:{kill_switch:{enabled:!0,message:"We're currently performing maintenance on the site, please try again later :D"}},children:a.jsx(i,{})})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const _=["Default","OutOfStock","Disabled","KillSwitch"];export{e as Default,r as Disabled,o as KillSwitch,t as OutOfStock,_ as __namedExportsOrder,S as default};
