import { ProductData, ProductGroup } from "./types/product";
import { MinimalProductImage } from "./types/image";

/**
 * Gets the image that represents a product or group of products
 * @param prod The group of products from which to fetch URL from.
 * @returns An `ImageData` object of the image that represents the group, or undefined if not found
 */
export function getRepresentativeImage(
  prod: ProductData | ProductGroup,
): MinimalProductImage | undefined {
  if (prod instanceof ProductGroup) return prod.getGroupRepresentativeImage();
  else return prod.images[0];
}
