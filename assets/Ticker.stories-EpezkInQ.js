import{n as e}from"./chunk-zsgVPwQN.js";import{n as t,t as n}from"./Ticker-CgcTiKJb.js";var r,i,a,o,s,c;e((()=>{t(),{expect:r,fn:i}=__STORYBOOK_MODULE_TEST__,a={component:n,args:{onChange:i(),showMaxValue:!1},argTypes:{onChange:{control:!1,table:{disable:!0}},showMaxValue:{control:`boolean`,if:{arg:`max`,exists:!0}},min:{control:`number`},max:{control:`number`},defaultValue:{control:`number`,table:{defaultValue:{summary:`0`}}},updateValueRef:{control:!1,table:{disable:!0}},height:{control:`text`,table:{value:`50px`}}}},o={args:{inputId:`default-ticker-story`,ariaLabel:`Default Ticker`},play:async({args:e,canvas:t,step:n,userEvent:i})=>{let a=t.getByLabelText(`Default Ticker`);await n(`Increment`,async()=>{let n=Number(a.value),o=t.getByTitle(`increment`);await i.click(o),await r(e.onChange).toHaveBeenCalledWith(n+1),await r(a.value).toSatisfy(e=>(console.log(e),e==``+(n+1)))}),await n(`Decrement`,async()=>{let n=Number(a.value),o=t.getByTitle(`decrement`);await i.click(o),await r(e.onChange).toHaveBeenCalledWith(n-1),await r(a.value).toSatisfy(e=>(console.log(e),e==``+(n-1)))})}},s={args:{inputId:`default-ticker-story`,ariaLabel:`Default Ticker`,showMaxValue:!0,max:10},play:async({args:e,canvas:t,step:n,userEvent:i})=>{let a=t.getByLabelText(`Default Ticker`),o=t.getByTitle(`increment`);await n(`Increase to maximum`,async()=>{Number(a.value);for(let t=0;t<(e.max||10);t++)await i.click(o);await r(a.value).toSatisfy(e=>(console.log(e),e==`10`))}),await n(`Attempt to increase beyond maximum`,async()=>{await i.click(o),await r(e.onChange).toHaveBeenCalledWith(e.max||10)})}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    inputId: "default-ticker-story",
    ariaLabel: "Default Ticker"
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    let inputField = canvas.getByLabelText("Default Ticker") as HTMLInputElement;

    // Check increment functionality
    await step("Increment", async () => {
      const start = Number(inputField.value);
      const increment = canvas.getByTitle("increment");
      await userEvent.click(increment);
      // Assert that onChange was called
      await expect(args.onChange).toHaveBeenCalledWith(start + 1);
      // Assert that input field was updated
      await expect(inputField.value).toSatisfy((value: string) => {
        console.log(value);
        return value == "" + (start + 1);
      });
    });

    // Check decrement functionality
    await step("Decrement", async () => {
      const start = Number(inputField.value);
      const decrement = canvas.getByTitle("decrement");
      await userEvent.click(decrement);
      // Assert that onChange was called
      await expect(args.onChange).toHaveBeenCalledWith(start - 1);
      // Assert that input field was updated
      await expect(inputField.value).toSatisfy((value: string) => {
        console.log(value);
        return value == "" + (start - 1);
      });
    });
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    inputId: "default-ticker-story",
    ariaLabel: "Default Ticker",
    showMaxValue: true,
    max: 10
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    let inputField = canvas.getByLabelText("Default Ticker") as HTMLInputElement;
    const increment = canvas.getByTitle("increment");
    await step("Increase to maximum", async () => {
      const start = Number(inputField.value);
      for (let i = 0; i < (args.max || 10); i++) {
        await userEvent.click(increment);
      }
      // Assert that input field was updated
      await expect(inputField.value).toSatisfy((value: string) => {
        console.log(value);
        return value == "10";
      });
    });
    await step("Attempt to increase beyond maximum", async () => {
      await userEvent.click(increment);
      await expect(args.onChange).toHaveBeenCalledWith(args.max || 10);
    });
  }
}`,...s.parameters?.docs?.source}}},c=[`Default`,`MaxValue`]}))();export{o as Default,s as MaxValue,c as __namedExportsOrder,a as default};