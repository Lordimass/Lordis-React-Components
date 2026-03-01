/**
 * Get the relative path to a product page. Does not check whether that product actually exists.
 * @param sku The sku of the product to fetch a path for.
 * @param maintainQueryString Whether to preserve the current search parameters in the path.
 * @returns The relative path to the page requested.
 * @example "/products/1"
 * @example "/products/1?locale=en-GB"
 */
export function getProductPagePath(sku: number, maintainQueryString = true) {
  const url = new URL(window.location.href);
  url.pathname = `/products/${sku}`;
  return url.pathname + (maintainQueryString ? url.search : "");
}
