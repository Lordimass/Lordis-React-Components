import{j as e}from"./iframe-DBRfcR_h.js";import{u as o,M as s,a}from"./blocks-DwFOUgFl.js";import"./preload-helper-PPVm8Dsz.js";const i=`# ProductGroup \`<Class>\`

Defined in: [src/lib/types/product.ts:159](https://github.com/Lordimass/Lordis-React-Components/blob/7018c0cb9837752149bbce743adee0cde9bd984f/src/lib/types/product.ts#L159)

A collection of closely related products/variants of the same product

## Constructors

### Constructor

> **new ProductGroup**(\`products\`): \`ProductGroup\`

Defined in: [src/lib/types/product.ts:168](https://github.com/Lordimass/Lordis-React-Components/blob/7018c0cb9837752149bbce743adee0cde9bd984f/src/lib/types/product.ts#L168)

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

Defined in: [src/lib/types/product.ts:181](https://github.com/Lordimass/Lordis-React-Components/blob/7018c0cb9837752149bbce743adee0cde9bd984f/src/lib/types/product.ts#L181)

Fetch a list of all the images associated to this group.

#### Returns

[\`MinimalProductImage\`](../image/MinimalProductImage.md)[]

***

### getCarouselImages()

> **getCarouselImages**(\`sku\`): [\`MinimalProductImage\`](../image/MinimalProductImage.md)[]

Defined in: [src/lib/types/product.ts:202](https://github.com/Lordimass/Lordis-React-Components/blob/7018c0cb9837752149bbce743adee0cde9bd984f/src/lib/types/product.ts#L202)

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

Defined in: [src/lib/types/product.ts:188](https://github.com/Lordimass/Lordis-React-Components/blob/7018c0cb9837752149bbce743adee0cde9bd984f/src/lib/types/product.ts#L188)

Get the image that represents this group as a whole.

#### Returns

[\`MinimalProductImage\`](../image/MinimalProductImage.md)

***

### getVariantIcon()

> **getVariantIcon**(\`sku\`): [\`MinimalProductImage\`](../image/MinimalProductImage.md)

Defined in: [src/lib/types/product.ts:229](https://github.com/Lordimass/Lordis-React-Components/blob/7018c0cb9837752149bbce743adee0cde9bd984f/src/lib/types/product.ts#L229)

Find and return the image attached to this product which has \`variant_icon: true\` in its \`association_metadata\`. This
shoud be a small and identifiable icon used when displaying this product as variants in a group.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| \`sku\` | \`string\` \\| \`number\` |

#### Returns

[\`MinimalProductImage\`](../image/MinimalProductImage.md)
`;function r(t){return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"lib/types/Product/ProductGroup"}),`
`,e.jsx(a,{children:i})]})}function m(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r()}export{m as default};
