import {
  BasketProduct,
  MinimalImage,
  MinimalProduct,
  MinimalProductImage,
  ProductGroup,
} from "../src";
import { ProductData } from "../src";

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

export const fakeRepresentativeImage: MinimalProductImage = {
  uri: "https://live.staticflickr.com/65535/55171341834_c7a8c8f152_b.jpg",
  alt: "A close up of an black cat offset slightly to the left of the image. She is looking past the camera at the person taking the photo.",
  association_metadata: {
    group_representative: true,
  },
};

export const fakeProduct: ProductData = new ProductData(1, {
  name: "Product 1",
  images: [fakeMinimalImage, fakeMinimalImage2, fakeMinimalImage3],
  price: 4.99,
  stock: 10,
});

export const fakeProductLongName: ProductData = new ProductData(5, {
  name: "This product has a reaaaally long name! But it still works ok!",
  images: [fakeMinimalImage3, fakeMinimalImage, fakeMinimalImage2],
  price: 4.99,
  stock: 10,
});

export const fakeProduct2: ProductData = new ProductData(2, {
  name: "Product 2",
  images: [fakeMinimalImage2, fakeMinimalImage, fakeMinimalImage3],
  price: 4.99,
});

export const fakeProduct3: ProductData = new ProductData(3, {
  name: "Product 3",
  images: [
    fakeMinimalImage3,
    fakeMinimalImage,
    fakeMinimalImage2,
    fakeRepresentativeImage,
  ],
  price: 5.99,
  active: false,
  stock: 10,
});

export const fakeProductNoImages: ProductData = new ProductData(4, {
  name: "Fake Product No Images",
  stock: 10,
});

export const fakeProductGroup: ProductGroup = new ProductGroup([
  new ProductData(fakeProduct.sku, {
    ...fakeProduct,
    groupName: "Product Group 1",
  }),
  new ProductData(fakeProduct.sku, {
    ...fakeProduct2,
    groupName: "Product Group 1",
  }),
  new ProductData(fakeProduct.sku, {
    ...fakeProduct3,
    groupName: "Product Group 1",
  }),
]);

export const allFakeProducts: (ProductData | ProductGroup)[] = [
  fakeProduct,
  fakeProduct2,
  fakeProduct3,
  fakeProductNoImages,
  fakeProductGroup,
  fakeProductLongName,
];

export const fakeBasketProduct: BasketProduct = new BasketProduct(
  fakeProduct.sku,
  1,
  fakeProduct,
);
