import{n as e}from"./chunk-zsgVPwQN.js";import{E as t,L as n,m as r}from"./iframe-BxYMocwE.js";import{d as i,u as a}from"./components-KMH2WK64.js";import{c as o,f as s,o as c,s as l}from"./fakes-B8AvjdGb.js";var u,d,f,p,m,h,g,_;e((()=>{i(),s(),r(),u=n(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={component:a,args:{onChange:d(),product:c},argTypes:{onChange:{control:!1,table:{disable:!0}},showMaxValue:{control:`boolean`,if:{arg:`max`,exists:!0}},min:{control:`number`},max:{control:`number`},defaultValue:{control:`number`,table:{defaultValue:{summary:`0`}}},updateValueRef:{control:!1,table:{disable:!0}},height:{control:`text`,table:{value:`50px`}},product:{control:`object`}},globals:{backgrounds:`white`}},p={args:{inputId:`default-basket-modifier-story`,product:c}},m={args:{inputId:`out-of-stock-basket-modifier-story`,product:l}},h={args:{inputId:`disabled-basket-modifier-story`,product:o}},g={args:{product:l,inputId:`kill-switch-basket-modifier-story`},decorators:[e=>(0,u.jsx)(t,{value:{kill_switch:{enabled:!0,message:`We're currently performing maintenance on the site, please try again later :D`}},children:(0,u.jsx)(e,{})})]},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    inputId: "default-basket-modifier-story",
    product: fakeProduct
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    inputId: "out-of-stock-basket-modifier-story",
    product: fakeProduct2
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    inputId: "disabled-basket-modifier-story",
    product: fakeProduct3
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Default`,`OutOfStock`,`Disabled`,`KillSwitch`]}))();export{p as Default,h as Disabled,g as KillSwitch,m as OutOfStock,_ as __namedExportsOrder,f as default};