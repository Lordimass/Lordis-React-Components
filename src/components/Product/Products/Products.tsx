import "./Products.css";
import {
  GAItem,
  LocaleContext,
  ProductData,
  ProductGroup,
  trackViewItemList,
} from "../../../lib";
import { ReactElement, useContext, useEffect, useState } from "react";
import PageSelector from "../../Ticker/PageSelector/PageSelector";
import Product from "../Product";
import { Currency } from "dinero.js";

export interface ProductsProps {
  /** Products to display */
  prods: (ProductData | ProductGroup)[];
  /** Max elements to display before overflowing onto a new page. */
  pageSize?: number;
  /** Options for Google Analytics tracking, leaving this undefined will stop tracking for this list. */
  trackViewItemListProps?: {
    /**
     * The ID of the item list, `$page` will be replaced with the page number if applicable
     * @example "home_page_$page"
     */
    itemListId: string;
    /**
     * The name of the item list, `$page` will be replaced with the page number if applicable
     * @example "Home Page $page"
     */
    itemListName: string;
  };
}

/**
 * Display a list of products, optionally paginated
 */
export default function Products({
  prods,
  pageSize,
  trackViewItemListProps,
}: ProductsProps) {
  const { currency } = useContext(LocaleContext);

  const [page, setPage] = useState(1);
  const [toShow, setToShow] = useState<(ProductData | ProductGroup)[]>([]);

  const pageCount = pageSize ? Math.ceil(prods.length / pageSize) : undefined;

  useEffect(() => {
    let newToShow = pageSize
      ? prods.slice((page - 1) * pageSize, page * pageSize)
      : prods;

    paginatedTrackViewItemList(
      currency,
      newToShow,
      trackViewItemListProps,
      pageCount ? page : undefined,
    );

    setToShow(newToShow);
  }, [prods, page, pageCount]);

  return (
    <div className="products-box">
      <div className="products">
        {toShow.map((p, i) => (
          <Product prod={p} key={i} />
        ))}
      </div>
      {pageCount ? (
        <PageSelector
          id="product-list-page-selector"
          pageCount={pageCount}
          onChange={(e) => setPage(e)}
        />
      ) : null}
    </div>
  );
}

function paginatedTrackViewItemList(
  currency: Currency,
  items: (ProductData | ProductGroup)[],
  props?: ProductsProps["trackViewItemListProps"],
  page?: number,
) {
  if (!props) return;
  if (page) {
    props.itemListId.replace("$page", "" + page);
    props.itemListName.replace("$page", "" + page);
  }

  trackViewItemList(
    currency,
    items.map((p) => new GAItem(p)),
    props.itemListId,
    props.itemListName,
  );
}
