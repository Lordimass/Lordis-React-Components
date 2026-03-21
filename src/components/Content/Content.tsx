import { ReactNode } from "react";
import { Spinner } from "react-bootstrap";
import "./Content.css";

export type ContentProps = {
  children?: ReactNode;
  /** The ID of the div holding the page content. */
  id?: string;
  /** Canonical URL for the page. Used by Google search indexing to determine the "main" URL for a given page. */
  canonical?: string;
  /** Whether to tell Googlebot not to index this page. */
  noindex?: boolean;
  /** The title of the page, written on the tab next to the favicon. */
  title?: string;
  /** Page description for <meta> tag. */
  metaDescription?: string | null;
  /** Whether the page is done loading, will display a throbber instead of page content until this is true. */
  loadCondition?: boolean;
  /** Text to display by the throbber while `loadCondition` is false. */
  loadingText?: string;
};

/**
 * Content for a page, including important page header tags. You will generally want to use this component in
 * conjunction with a custom `Page` component which should provide a header and footer for the page.
 */
export default function Content({
  children,
  id,
  canonical,
  title,
  metaDescription,
  noindex = false,
  loadCondition = true,
  loadingText = "Loading...",
}: ContentProps) {
  return (
    <div className="content" id={id} role={"main"}>
      {title ? <title>{title}</title> : null}
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      {noindex ? <meta name="robots" content="noindex" /> : null}
      {metaDescription ? (
        <meta name="description" content={metaDescription} />
      ) : null}

      {!loadCondition ? <LoadingScreen text={loadingText} /> : children}
    </div>
  );
}

/** A loading screen, with a throbber and an optional text component. */
function LoadingScreen({
  text,
}: {
  /** Text to display above the loading screen throbber. */
  text: string;
}) {
  console.log("text" + text);
  return (
    <div className="loading-screen">
      {text ? <p>{text}</p> : null}
      <Spinner animation="border" role="status">
        <span className={"visually-hidden"}>{text}</span>
      </Spinner>
    </div>
  );
}
