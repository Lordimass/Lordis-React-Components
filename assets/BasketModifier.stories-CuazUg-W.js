import{n as e}from"./chunk-zsgVPwQN.js";import{F as t,T as n,m as r}from"./iframe-JSkxpIvg.js";import{b as i,c as a,f as o,o as s,s as c,y as l}from"./fakes-udheUdw6.js";var u,d,f,p,m,h,g,_;e((()=>{i(),o(),r(),u=t(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={component:l,args:{onChange:d(),product:s},argTypes:{onChange:{control:!1,table:{disable:!0}},showMaxValue:{control:`boolean`,if:{arg:`max`,exists:!0}},min:{control:`number`},max:{control:`number`},defaultValue:{control:`number`,table:{defaultValue:{summary:`0`}}},updateValueRef:{control:!1,table:{disable:!0}},height:{control:`text`,table:{value:`50px`}},product:{control:`object`}},globals:{backgrounds:`white`}},p={args:{inputId:`default-basket-modifier-story`,product:s}},m={args:{inputId:`out-of-stock-basket-modifier-story`,product:c}},h={args:{inputId:`disabled-basket-modifier-story`,product:a}},g={args:{product:c,inputId:`kill-switch-basket-modifier-story`},decorators:[e=>(0,u.jsx)(n,{value:{kill_switch:{enabled:!0,message:`We're currently performing maintenance on the site, please try again later :D`}},children:(0,u.jsx)(e,{})})]},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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