import { MinimalProduct } from "../src";
import { PricedProduct } from "../src/components/Price/ProductPrice/ProductPrice";

export const fakeMinimalProduct: MinimalProduct = {
  sku: 1,
  stock: 10,
};

export const fakeMinimalProduct2: MinimalProduct = {
  ...fakeMinimalProduct,
  sku: 2,
};

export const fakeMinimalProduct3: MinimalProduct = {
  ...fakeMinimalProduct,
  sku: 3,
};

export const fakeMinimalProductGroup: MinimalProduct[] = [
  fakeMinimalProduct,
  fakeMinimalProduct2,
  fakeMinimalProduct3,
];

export const fakePricedProduct: PricedProduct = {
  ...fakeMinimalProduct,
  price: 4.99,
};

export const fakePricedProduct2: PricedProduct = {
  ...fakeMinimalProduct2,
  price: 4.99,
};

export const fakePricedProduct3: PricedProduct = {
  ...fakeMinimalProduct3,
  price: 5.99,
};

export const fakePricedProductGroup: PricedProduct[] = [
  fakePricedProduct,
  fakePricedProduct2,
  fakePricedProduct3,
];
