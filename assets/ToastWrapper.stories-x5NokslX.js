import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{L as n,at as r,b as i,c as a,m as o,n as s,s as c,t as l}from"./iframe-BxYMocwE.js";import{d as u,f as d,i as f,l as p,p as m,r as h,s as g,u as _}from"./blocks-BgVnmB2Q.js";var v,y=e((()=>{v='# IToast `<Interface>`\n\nDefined in: [toasts.ts:7](https://github.com/Lordimass/Lordis-React-Components/blob/bd511892e880769bd56a1a5ce6b13aed0d3b08bd/src/lib/toasts.ts#L7)\n\nA custom toast.\n\n## Properties\n\n| Property | Type | Description |\n| ------ | ------ | ------ |\n| <a id="duration"></a> `duration?` | `number` \\| `null` | Override the time to display the toast for in seconds. Null for infinite |\n| <a id="image"></a> `image?` | [`MinimalImage`](../types/image/MinimalImage.md) | The URI of an image icon to display on the toast |\n| <a id="msg"></a> `msg` | `string` | Message to display on the toast |\n| <a id="title"></a> `title?` | `string` | Override the contents of the title of the toast. |\n| <a id="variant"></a> `variant?` | `Variant` | The variant of toast to display |\n'})),b,x=e((()=>{b="# ToastContext `<Variable>`\n\n> `const` **ToastContext**: `Context`&lt;\\{ `toast`: (`toast`) => `void`; \\}&gt;\n\nDefined in: [toasts.ts:24](https://github.com/Lordimass/Lordis-React-Components/blob/bd511892e880769bd56a1a5ce6b13aed0d3b08bd/src/lib/toasts.ts#L24)\n\nContext provided by ToastWrapper. Contains a single `toast` method which can be called with an instance of\n[IToast](IToast.md) to display a toast on the screen.\n"}));function S(){let{toast:e}=(0,C.useContext)(i);return(0,w.jsxs)(`div`,{style:{position:`relative`,left:`150%`,display:`flex`,flexDirection:`column`,gap:`5px`,margin:`10px`},children:[(0,w.jsx)(`button`,{className:`btn btn-primary`,onClick:()=>e({msg:`I'm a toast!`}),children:`Add Toast`}),(0,w.jsx)(`button`,{className:`btn btn-primary`,onClick:()=>e({msg:`I'm a toast that doesn't close itself!`,duration:null}),children:`Add Permanent Toast`}),(0,w.jsx)(`button`,{className:`btn btn-primary`,onClick:()=>e({msg:`I'm a toast that closes itself very fast!`,duration:.05}),children:`Add Fast Toast`})]})}var C,w,T,E,D,O,k;e((()=>{y(),x(),a(),C=t(r(),1),o(),l(),m(),w=n(),{expect:T,fn:E}=__STORYBOOK_MODULE_TEST__,D={component:c,args:{children:(0,w.jsx)(S,{}),onChange:E()},argTypes:{children:{table:{disable:!0}},defaults:{control:`object`},onChange:{control:!1,table:{defaultValue:{summary:`fn()`}}}},decorators:[e=>(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(e,{})})],tags:[`skip-visual-test`],parameters:{docs:{page:()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d,{}),(0,w.jsx)(u,{}),(0,w.jsx)(f,{}),(0,w.jsx)(p,{}),(0,w.jsx)(h,{}),(0,w.jsx)(g,{children:v}),(0,w.jsx)(`br`,{}),(0,w.jsx)(g,{children:b}),(0,w.jsx)(_,{})]})}}},O={play:async({args:e,canvas:t,step:n,userEvent:r})=>{let i=t.getByText(`Add Permanent Toast`);await T(i).toBeInTheDocument();let a=t.getByText(`Add Fast Toast`);await T(a).toBeInTheDocument();let o=t.getByText(`Add Toast`);await T(o).toBeInTheDocument(),await n(`Check that the toast opens`,async()=>{await r.click(i),await T(e.onChange).toHaveBeenCalledWith(T.toSatisfy(e=>e.length==1))}),await n(`Check that the toast closes`,async()=>{let n=t.getByRole(`alert`).getElementsByClassName(`btn-close`)[0];await r.click(n),await T(e.onChange).toHaveBeenCalledWith(T.toSatisfy(e=>e[0].show==0)),await s(500),await T(e.onChange).toHaveBeenCalledWith([])}),await n(`Check that toasts will automatically close`,async()=>{await r.click(a),await T(e.onChange).toHaveBeenCalledWith(T.toSatisfy(e=>e.length==1)),await s(550),await T(e.onChange).toHaveBeenCalledWith([])}),await n(`Check opening a toast for an indeterminate length of time`,async()=>{await r.click(o),await T(e.onChange).toHaveBeenCalledWith(T.toSatisfy(e=>e.length==1))})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k=[`Default`]}))();export{O as Default,k as __namedExportsOrder,D as default};