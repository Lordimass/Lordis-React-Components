import{j as t}from"./iframe-De0rt5-Z.js";import{u as o,M as s,a}from"./blocks-VEp38wat.js";import"./preload-helper-PPVm8Dsz.js";const i=`# ProductGroup \`<Class>\`

Defined in: [src/lib/types/product.ts:159](https://github.com/Lordimass/Lordis-React-Components/blob/24e878b83b5003dfeadffc9e71d752017d154060/src/lib/types/product.ts#L159)

A collection of closely related products/variants of the same product

## Constructors

### Constructor

> **new ProductGroup**(\`products\`): \`ProductGroup\`

Defined in: [src/lib/types/product.ts:168](https://github.com/Lordimass/Lordis-React-Components/blob/24e878b83b5003dfeadffc9e71d752017d154060/src/lib/types/product.ts#L168)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| \`products\` | [\`ProductData\`](ProductData.md)[] | The products in the group |

#### Returns

\`ProductGroup\`

## Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| <a id="groupname"></a> \`groupName\` | \`public\` | \`string\` | The name of this group of products |
| <a id="products"></a> \`products\` | \`public\` | [\`ProductData\`](ProductData.md)[] | The products in the group |

## Methods

### getAllImages()

> **getAllImages**(): [\`MinimalProductImage\`](../image/MinimalProductImage.md)[]

Defined in: [src/lib/types/product.ts:178](https://github.com/Lordimass/Lordis-React-Components/blob/24e878b83b5003dfeadffc9e71d752017d154060/src/lib/types/product.ts#L178)

Fetch a list of all the images associated to this group.

#### Returns

[\`MinimalProductImage\`](../image/MinimalProductImage.md)[]

***

### getCarouselImages()

> **getCarouselImages**(\`sku\`): [\`MinimalProductImage\`](../image/MinimalProductImage.md)[]

Defined in: [src/lib/types/product.ts:199](https://github.com/Lordimass/Lordis-React-Components/blob/24e878b83b5003dfeadffc9e71d752017d154060/src/lib/types/product.ts#L199)

Get all the images which should be displayed on image carousels for a product in this group. This includes \`global\`
images, and excludes \`group_representatives\` and \`group_product_icons\`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| \`sku\` | \`string\` \\| \`number\` | The SKU of the product in the group to use as a reference for which images to fetch. |

#### Returns

[\`MinimalProductImage\`](../image/MinimalProductImage.md)[]

***

### getGroupRepresentativeImage()

> **getGroupRepresentativeImage**(): [\`MinimalProductImage\`](../image/MinimalProductImage.md)

Defined in: [src/lib/types/product.ts:185](https://github.com/Lordimass/Lordis-React-Components/blob/24e878b83b5003dfeadffc9e71d752017d154060/src/lib/types/product.ts#L185)

Get the image that represents this group as a whole.

#### Returns

[\`MinimalProductImage\`](../image/MinimalProductImage.md)

***

### getVariantIcon()

> **getVariantIcon**(\`sku\`): [\`MinimalProductImage\`](../image/MinimalProductImage.md)

Defined in: [src/lib/types/product.ts:226](https://github.com/Lordimass/Lordis-React-Components/blob/24e878b83b5003dfeadffc9e71d752017d154060/src/lib/types/product.ts#L226)

Find and return the image attached to this product which has \`variant_icon: true\` in its \`association_metadata\`. This
shoud be a small and identifiable icon used when displaying this product as variants in a group.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| \`sku\` | \`string\` \\| \`number\` |

#### Returns

[\`MinimalProductImage\`](../image/MinimalProductImage.md)
`;function r(e){return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"lib/types/Product/ProductGroup"}),`
`,t.jsx(a,{children:i})]})}function m(e={}){const{wrapper:n}={...o(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(r,{...e})}):r()}export{m as default};
