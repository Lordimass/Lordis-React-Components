# getRepresentativeImage() `<Function>`

> **getRepresentativeImage**(`prod`): [`MinimalProductImage`](../types/image/MinimalProductImage.md) \| `undefined`

Defined in: [image.ts:8](https://github.com/Lordimass/Lordis-React-Components/blob/84f83f1effeca17588c60e2c43324be932b6da49/src/lib/image.ts#L8)

Gets the image that represents a product or group of products

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prod` | [`ProductData`](../types/product/ProductData.md) \| [`ProductGroup`](../types/product/ProductGroup.md) | The group of products from which to fetch URL from. |

## Returns

[`MinimalProductImage`](../types/image/MinimalProductImage.md) \| `undefined`

An `ImageData` object of the image that represents the group, or undefined if not found
