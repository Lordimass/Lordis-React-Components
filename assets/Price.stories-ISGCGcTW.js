import{n as e}from"./chunk-zsgVPwQN.js";import{A as t,F as n,S as r,_ as i,j as a,m as o,y as s}from"./iframe-p6oOQHW_.js";import{n as c,t as l}from"./Price-DxqY4tN-.js";var u,d,f,p,m,h;e((()=>{c(),a(),s(),o(),u=n(),d={component:l,globals:{backgrounds:{value:`light`,grid:!1}},args:{baseDinero:t({amount:499,currency:`GBP`,precision:2}),currency:`GBP`,noConversion:!1},argTypes:{baseDinero:{control:`select`,options:[`£4.99`,`£0.00`,`£0.50`,`£999.99`],mapping:{"£4.99":t({amount:499,currency:`GBP`,precision:2}),"£0.00":t({amount:0,currency:`GBP`,precision:2}),"£0.50":t({amount:50,currency:`GBP`,precision:2}),"£999.99":t({amount:99999,currency:`GBP`,precision:2})},table:{defaultValue:{summary:`£4.99`}}},currency:{control:`select`,options:Object.keys(i),table:{defaultValue:{summary:`GBP`},type:{summary:`Currency`}}},simple:{control:`boolean`,table:{type:{summary:`false|true`}}},noConversion:{control:`boolean`,table:{type:{summary:`false|true`}}}}},f={args:{simple:!1}},p={args:{simple:!0}},m={args:{baseDinero:t({amount:499,currency:`GBP`,precision:2}),currency:`USD`},decorators:[e=>(0,u.jsx)(r,{value:{country:`US`,currency:`USD`,locale:`en-US`},children:(0,u.jsx)(e,{})})]},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    simple: false
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    simple: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Simple`,`TaxInclusiveDisclaimer`]}))();export{f as Default,p as Simple,m as TaxInclusiveDisclaimer,h as __namedExportsOrder,d as default};