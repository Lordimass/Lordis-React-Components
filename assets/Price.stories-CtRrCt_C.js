import{j as n,a as c,d as e}from"./iframe-DTQEgc05.js";import{P as t,C as u}from"./Price-DvkHcLSE.js";import"./preload-helper-PPVm8Dsz.js";const p={component:t,globals:{backgrounds:{value:"light",grid:!1}},args:{baseDinero:e({amount:499,currency:"GBP",precision:2}),currency:"GBP",noConversion:!1},argTypes:{baseDinero:{control:"select",options:["£4.99","£0.00","£0.50","£999.99"],mapping:{"£4.99":e({amount:499,currency:"GBP",precision:2}),"£0.00":e({amount:0,currency:"GBP",precision:2}),"£0.50":e({amount:50,currency:"GBP",precision:2}),"£999.99":e({amount:99999,currency:"GBP",precision:2})},table:{defaultValue:{summary:"£4.99"}}},currency:{control:"select",options:Object.keys(u),table:{defaultValue:{summary:"GBP"},type:{summary:"Currency"}}},simple:{control:"boolean",table:{type:{summary:"false|true"}}},noConversion:{control:"boolean",table:{type:{summary:"false|true"}}}}},r={args:{simple:!1}},a={args:{simple:!0}},o={args:{baseDinero:e({amount:499,currency:"GBP",precision:2}),currency:"USD"},decorators:[s=>n.jsx(c,{value:{country:"US",currency:"USD",locale:"en-US"},children:n.jsx(s,{})})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    simple: false
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    simple: true
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    baseDinero: DineroFactory({
      amount: 499,
      currency: "GBP",
      precision: 2
    }),
    currency: "USD"
  },
  decorators: [Story => <LocaleContext value={{
    country: "US",
    currency: "USD",
    locale: "en-US"
  }}>\r
        <Story />\r
      </LocaleContext>]
}`,...o.parameters?.docs?.source}}};const y=["Default","Simple","TaxInclusiveDisclaimer"];export{r as Default,a as Simple,o as TaxInclusiveDisclaimer,y as __namedExportsOrder,p as default};
