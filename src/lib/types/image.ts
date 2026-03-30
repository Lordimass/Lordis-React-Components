/** The minimum data required to represent an image */
export interface MinimalImage {
  /** URI of the image */
  uri?: string;
  /** Alt text for accessibility */
  alt?: string;
  /**
   * The order to display this image in when in a list. Higher numbers will be
   * displayed later, and lower numbers will be displayed sooner
   */
  display_order?: number;
  /** Additional information on the image */
  metadata?: { [key: string]: any };
  [key: string]: unknown;
}

export interface MinimalProductImage extends MinimalImage {
  /** Additional information on the association between the image and its product. */
  association_metadata?: AssociationMetadata;
}

export interface AssociationMetadata {
  /**
   * Whether this image is relevant to all products in the product group
   * (if it exists), rather than just the SKU it's assigned to
   */
  global?: boolean | null;

  /**
   * Whether this image is to be used as an icon for the product when
   *  in a group, rather than as a standard product image
   */
  group_product_icon?: boolean | null;

  /**
   * Whether this image is used to represent the group as a whole, rather
   * than an individual variant.
   */
  group_representative?: boolean | null;

  [key: string]: unknown;
}
