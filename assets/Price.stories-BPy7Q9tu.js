import{n as e}from"./chunk-zsgVPwQN.js";import{L as t,M as n,N as r,S as i,_ as a,m as o,y as s}from"./iframe-BxYMocwE.js";import{n as c,t as l}from"./Price-T5wg6KnV.js";var u,d,f,p,m,h;e((()=>{c(),r(),s(),o(),u=t(),d={component:l,globals:{backgrounds:{value:`light`,grid:!1}},args:{baseDinero:n({amount:499,currency:`GBP`,precision:2}),currency:`GBP`,noConversion:!1},argTypes:{baseDinero:{control:`select`,options:[`£4.99`,`£0.00`,`£0.50`,`£999.99`],mapping:{"£4.99":n({amount:499,currency:`GBP`,precision:2}),"£0.00":n({amount:0,currency:`GBP`,precision:2}),"£0.50":n({amount:50,currency:`GBP`,precision:2}),"£999.99":n({amount:99999,currency:`GBP`,precision:2})},table:{defaultValue:{summary:`£4.99`}}},currency:{control:`select`,options:Object.keys(a),table:{defaultValue:{summary:`GBP`},type:{summary:`Currency`}}},simple:{control:`boolean`,table:{type:{summary:`false|true`}}},noConversion:{control:`boolean`,table:{type:{summary:`false|true`}}}}},f={args:{simple:!1}},p={args:{simple:!0}},m={args:{baseDinero:n({amount:499,currency:`GBP`,precision:2}),currency:`USD`},decorators:[e=>(0,u.jsx)(i,{value:{country:`US`,currency:`USD`,locale:`en-US`},children:(0,u.jsx)(e,{})})]},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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