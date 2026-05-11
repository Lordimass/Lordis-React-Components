import Tag from "./Tag";
import "./Tag.scss";

/**
 * A collection of [`Tag`]{@link Tag}s
 * @example ["giant", "glowing", "this-could-be-a-tag"]
 */
export default function Tags({
  tags,
}: {
  /** The tags to display */
  tags: string[];
}) {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <Tag tag={tag} key={tag} />
      ))}
    </div>
  );
}
