import{T as y,s as h,j as t,r as T,o as x}from"./iframe-De0rt5-Z.js";import{T as C,f,D as w,h as u,i as b,a as m,j as v}from"./blocks-VEp38wat.js";import"./preload-helper-PPVm8Dsz.js";const B='# IToast `<Type Alias>`\n\n> **IToast** = `object`\n\nDefined in: [src/lib/toasts.ts:8](https://github.com/Lordimass/Lordis-React-Components/blob/24e878b83b5003dfeadffc9e71d752017d154060/src/lib/toasts.ts#L8)\n\nA custom toast.\n\n## Properties\n\n| Property | Type | Description |\n| ------ | ------ | ------ |\n| <a id="duration"></a> `duration?` | `number` \\| `null` | Override the time to display the toast for in seconds. Null for infinite |\n| <a id="image"></a> `image?` | [`MinimalImage`](../types/image/MinimalImage.md) | The URI of an image icon to display on the toast |\n| <a id="key"></a> `key?` | `string` \\| `number` | A unique key by which to identify this toast. |\n| <a id="msg"></a> `msg` | `ReactNode` | Message to display on the toast |\n| <a id="title"></a> `title?` | `ReactNode` | Override the contents of the title of the toast. |\n| <a id="variant"></a> `variant?` | `Variant` | The variant of toast to display |\n',k="# ToastContext `<Variable>`\n\n> `const` **ToastContext**: `Context`&lt;\\{ `closeToast`: (`key`) => `void`; `toast`: (`toast`) => `void`; \\}&gt;\n\nDefined in: [src/lib/toasts.ts:29](https://github.com/Lordimass/Lordis-React-Components/blob/24e878b83b5003dfeadffc9e71d752017d154060/src/lib/toasts.ts#L29)\n\nContext provided by ToastWrapper. Contains a single `toast` method which can be called with an instance of\n[IToast](IToast.md) to display a toast on the screen.\n",{expect:a,fn:j}=__STORYBOOK_MODULE_TEST__;function I(){const{toast:e}=T.useContext(x);return t.jsxs("div",{style:{position:"relative",left:"150%",display:"flex",flexDirection:"column",gap:"5px",margin:"10px"},children:[t.jsx("button",{className:"btn btn-primary",onClick:()=>e({msg:"I'm a toast!"}),children:"Add Toast"}),t.jsx("button",{className:"btn btn-primary",onClick:()=>e({msg:"I'm a toast that doesn't close itself!",duration:null}),children:"Add Permanent Toast"}),t.jsx("button",{className:"btn btn-primary",onClick:()=>e({msg:"I'm a toast that closes itself very fast!",duration:.05}),children:"Add Fast Toast"})]})}const H={component:y,args:{children:t.jsx(I,{}),onChange:j()},argTypes:{children:{table:{disable:!0}},defaults:{control:"object"},onChange:{control:!1,table:{defaultValue:{summary:"fn()"}}}},decorators:[e=>t.jsx(t.Fragment,{children:t.jsx(e,{})})],tags:["skip-visual-test"],parameters:{docs:{page:()=>t.jsxs(t.Fragment,{children:[t.jsx(C,{}),t.jsx(f,{}),t.jsx(w,{}),t.jsx(u,{}),t.jsx(b,{}),t.jsx(m,{children:B}),t.jsx("br",{}),t.jsx(m,{children:k}),t.jsx(v,{})]})}}},l={play:async({args:e,canvas:s,step:o,userEvent:i})=>{const c=s.getByText("Add Permanent Toast");await a(c).toBeInTheDocument();const d=s.getByText("Add Fast Toast");await a(d).toBeInTheDocument();const r=s.getByText("Add Toast");await a(r).toBeInTheDocument(),await o("Check that the toast opens",async()=>{await i.click(c),await a(e.onChange).toHaveBeenCalledWith(a.toSatisfy(n=>n.length==1))}),await o("Check that the toast closes",async()=>{const p=s.getByRole("alert").getElementsByClassName("btn-close")[0];await i.click(p),await a(e.onChange).toHaveBeenCalledWith(a.toSatisfy(g=>g[0].show==!1)),await h(500),await a(e.onChange).toHaveBeenCalledWith([])}),await o("Check that toasts will automatically close",async()=>{await i.click(d),await a(e.onChange).toHaveBeenCalledWith(a.toSatisfy(n=>n.length==1)),await h(550),await a(e.onChange).toHaveBeenCalledWith([])}),await o("Check opening a toast for an indeterminate length of time",async()=>{await i.click(r),await a(e.onChange).toHaveBeenCalledWith(a.toSatisfy(n=>n.length==1))})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    const addPermanent = canvas.getByText("Add Permanent Toast");
    await expect(addPermanent).toBeInTheDocument();
    const addFastToast = canvas.getByText("Add Fast Toast");
    await expect(addFastToast).toBeInTheDocument();
    const addToast = canvas.getByText("Add Toast");
    await expect(addToast).toBeInTheDocument();

    // Check that the toast opens
    await step("Check that the toast opens", async () => {
      await userEvent.click(addPermanent);
      await expect(args.onChange).toHaveBeenCalledWith(expect.toSatisfy((val: IToast[]) => val.length == 1));
    });
    await step("Check that the toast closes", async () => {
      const toast = canvas.getByRole("alert") as HTMLDivElement;
      const close = toast.getElementsByClassName("btn-close")[0];
      await userEvent.click(close);
      await expect(args.onChange).toHaveBeenCalledWith(expect.toSatisfy((val: any[]) => val[0].show == false));
      await sleep(500);
      await expect(args.onChange).toHaveBeenCalledWith([]);
    });
    await step("Check that toasts will automatically close", async () => {
      await userEvent.click(addFastToast);
      await expect(args.onChange).toHaveBeenCalledWith(expect.toSatisfy((val: IToast[]) => val.length == 1));
      await sleep(550);
      await expect(args.onChange).toHaveBeenCalledWith([]);
    });
    await step("Check opening a toast for an indeterminate length of time", async () => {
      await userEvent.click(addToast);
      await expect(args.onChange).toHaveBeenCalledWith(expect.toSatisfy((val: IToast[]) => val.length == 1));
    });
  }
}`,...l.parameters?.docs?.source}}};const S=["Default"];export{l as Default,S as __namedExportsOrder,H as default};
