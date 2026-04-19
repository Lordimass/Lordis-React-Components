import{T as m}from"./Ticker-wrMQk1bu.js";import"./iframe-BvCpfDJE.js";import"./preload-helper-PPVm8Dsz.js";const{expect:i,fn:d}=__STORYBOOK_MODULE_TEST__,f={component:m,args:{onChange:d(),showMaxValue:!1},argTypes:{onChange:{control:!1,table:{disable:!0}},showMaxValue:{control:"boolean",if:{arg:"max",exists:!0}},min:{control:"number"},max:{control:"number"},defaultValue:{control:"number",table:{defaultValue:{summary:"0"}}},updateValueRef:{control:!1,table:{disable:!0}},height:{control:"text",table:{value:"50px"}}}},o={args:{inputId:"default-ticker-story",ariaLabel:"Default Ticker"},play:async({args:n,canvas:r,step:l,userEvent:s})=>{let a=r.getByLabelText("Default Ticker");await l("Increment",async()=>{const t=Number(a.value),e=r.getByTitle("increment");await s.click(e),await i(n.onChange).toHaveBeenCalledWith(t+1),await i(a.value).toSatisfy(c=>(console.log(c),c==""+(t+1)))}),await l("Decrement",async()=>{const t=Number(a.value),e=r.getByTitle("decrement");await s.click(e),await i(n.onChange).toHaveBeenCalledWith(t-1),await i(a.value).toSatisfy(c=>(console.log(c),c==""+(t-1)))})}},u={args:{inputId:"default-ticker-story",ariaLabel:"Default Ticker",showMaxValue:!0,max:10},play:async({args:n,canvas:r,step:l,userEvent:s})=>{let a=r.getByLabelText("Default Ticker");const t=r.getByTitle("increment");await l("Increase to maximum",async()=>{Number(a.value);for(let e=0;e<(n.max||10);e++)await s.click(t);await i(a.value).toSatisfy(e=>(console.log(e),e=="10"))}),await l("Attempt to increase beyond maximum",async()=>{await s.click(t),await i(n.onChange).toHaveBeenCalledWith(n.max||10)})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const w=["Default","MaxValue"];export{o as Default,u as MaxValue,w as __namedExportsOrder,f as default};
