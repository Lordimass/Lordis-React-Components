import{j as t}from"./iframe-DTQEgc05.js";import{u as o,M as a,a as s}from"./blocks-e_7YJHIZ.js";import"./preload-helper-PPVm8Dsz.js";const i=`# ProductGroup \`<Class>\`

Defined in: [src/lib/types/product.ts:159](https://github.com/Lordimass/Lordis-React-Components/blob/a1d7a3ef5c91711410861b1b996e290c6d1c7979/src/lib/types/product.ts#L159)

A collection of closely related products/variants of the same product

## Constructors

### Constructor

> **new ProductGroup**(\`products\`): \`ProductGroup\`

Defined in: [src/lib/types/product.ts:168](https://github.com/Lordimass/Lordis-React-Components/blob/a1d7a3ef5c91711410861b1b996e290c6d1c7979/src/lib/types/product.ts#L168)

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

Defined in: [src/lib/types/product.ts:178](https://github.com/Lordimass/Lordis-React-Components/blob/a1d7a3ef5c91711410861b1b996e290c6d1c7979/src/lib/types/product.ts#L178)

Fetch a list of all the images associated to this group.

#### Returns

[\`MinimalProductImage\`](../image/MinimalProductImage.md)[]

***

### getCarouselImages()

> **getCarouselImages**(\`sku\`): [\`MinimalProductImage\`](../image/MinimalProductImage.md)[]

Defined in: [src/lib/types/product.ts:199](https://github.com/Lordimass/Lordis-React-Components/blob/a1d7a3ef5c91711410861b1b996e290c6d1c7979/src/lib/types/product.ts#L199)

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

Defined in: [src/lib/types/product.ts:185](https://github.com/Lordimass/Lordis-React-Components/blob/a1d7a3ef5c91711410861b1b996e290c6d1c7979/src/lib/types/product.ts#L185)

Get the image that represents this group as a whole.

#### Returns

[\`MinimalProductImage\`](../image/MinimalProductImage.md)

***

### getVariantIcon()

> **getVariantIcon**(\`sku\`): [\`MinimalProductImage\`](../image/MinimalProductImage.md)

Defined in: [src/lib/types/product.ts:226](https://github.com/Lordimass/Lordis-React-Components/blob/a1d7a3ef5c91711410861b1b996e290c6d1c7979/src/lib/types/product.ts#L226)

Find and return the image attached to this product which has \`variant_icon: true\` in its \`association_metadata\`. This
shoud be a small and identifiable icon used when displaying this product as variants in a group.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| \`sku\` | \`string\` \\| \`number\` |

#### Returns

[\`MinimalProductImage\`](../image/MinimalProductImage.md)
`;function r(n){return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"lib/types/Product/ProductGroup"}),`
`,t.jsx(s,{children:i})]})}function m(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r()}export{m as default};
