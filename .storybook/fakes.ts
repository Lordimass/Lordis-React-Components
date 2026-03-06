import { MinimalImage, MinimalProduct } from "../src";
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

export const fakeMinimalImage: MinimalImage = {
  uri: "https://live.staticflickr.com/65535/55130400819_0682e2c8e7_b.jpg",
  alt: "A close up of one blooming blue flower with various foliage growing around it",
};

export const fakeMinimalImage2: MinimalImage = {
  uri: "https://live.staticflickr.com/65535/55130348123_7904c5bb62_b.jpg",
  alt: "A close up of a fluffy black and white cat looking at the camera with large pupils.",
};

export const fakeMinimalImage3: MinimalImage = {
  uri: "https://live.staticflickr.com/65535/55130400824_2432bec17e_b.jpg",
  alt: "A photo of a labradoodle dog laid down in front of a Christmas tree.",
};
