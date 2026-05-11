import "./Tag.scss";

/**
 * A small piece of text in a bubble. Most notably used on product pages to display a tag for a product.
 * @example "this-is-a-tag"
 */
export default function Tag({
  tag,
}: {
  /** The tag to display */
  tag: string;
}) {
  return <div className="tag">{tag}</div>;
}
