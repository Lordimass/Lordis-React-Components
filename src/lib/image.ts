import {
  MinimalImage,
  MinimalProductImage,
  ProductData,
  ProductGroup,
} from "./types";

/**
 * Gets the public URL of the image which represents a product or group of products.
 * @param product The product or group of products from which to fetch URL from.
 * @returns The public URL of the image, or undefined if not found
 */
export function getRepresentativeImageURL(
  product: ProductData | ProductGroup,
): string | undefined {
  const representativeImage = getRepresentativeImage(product);
  if (representativeImage) return representativeImage.uri;
}

/**
 * Gets the image that represents a product or group of products
 * @param prod The group of products from which to fetch URL from.
 * @returns An `ImageData` object of the image that represents the group, or undefined if not found
 */
export function getRepresentativeImage(
  prod: ProductData | ProductGroup,
): MinimalProductImage | undefined {
  const images =
    prod instanceof ProductGroup
      ? prod.products.map((prod: ProductData) => prod.images).flat(1)
      : prod.images;
  if (!images) return undefined;
  const representatives = images.filter(
    (img?: MinimalProductImage) =>
      img && img.association_metadata?.group_representative,
  );

  if (representatives.length > 0) {
    return representatives[0];
  } else {
    return images[0];
  }
}
