# GAItem `<Interface>`

Defined in: [ga/types.ts:6](https://github.com/Lordimass/Lordis-React-Components/blob/aa128b98749d67f71bbe2a0ad87371f57e55e964/src/lib/ga/types.ts#L6)

A product used in Google Analytics events.

Interpreted from the [GA4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtag#add_payment_info_item)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="affiliation"></a> `affiliation?` | `string` | A product affiliation to designate a supplying company or brick and mortar store location. <br/> Note: `affiliation` is only available at the item-scope. |
| <a id="coupon"></a> `coupon?` | `string` | The coupon name/code associated with the item. <br/> Event-level and item-level coupon parameters are independent. |
| <a id="creative_name"></a> `creative_name?` | `string` | The name of the promotional creative. <br/> If set, event-level `creative_name` is ignored. If not set, event-level `creative_name` is used, if present. |
| <a id="creative_slot"></a> `creative_slot?` | `string` | The name of the promotional creative slot associated with the item. <br/> If set, event-level `creative_slot` is ignored. If not set, event-level `creative_slot` is used, if present. |
| <a id="discount"></a> `discount?` | `number` | The unit monetary discount value associated with the item. |
| <a id="index"></a> `index?` | `number` | The index/position of the item in a list. |
| <a id="item_brand"></a> `item_brand?` | `string` | The brand of the item. |
| <a id="item_category"></a> `item_category?` | `string` | The category of the item. If used as part of a category hierarchy or taxonomy then this will be the first category. |
| <a id="item_category2"></a> `item_category2?` | `string` | The second category hierarchy or additional taxonomy for the item. |
| <a id="item_category3"></a> `item_category3?` | `string` | The third category hierarchy or additional taxonomy for the item. |
| <a id="item_category4"></a> `item_category4?` | `string` | The fourth category hierarchy or additional taxonomy for the item. |
| <a id="item_category5"></a> `item_category5?` | `string` | The fifth category hierarchy or additional taxonomy for the item. |
| <a id="item_id"></a> `item_id?` | `string` | The ID of the item. <br/> *One of item\_id or item\_name is required. |
| <a id="item_list_id"></a> `item_list_id?` | `string` | The ID of the list in which the item was presented to the user. <br/> If set, event-level `item_list_id` is ignored. <br/> If not set, event-level `item_list_id` is used, if present. |
| <a id="item_list_name"></a> `item_list_name?` | `string` | The name of the list in which the item was presented to the user. <br/> If set, event-level `item_list_name` is ignored. <br/> If not set, event-level `item_list_name` is used, if present. |
| <a id="item_name"></a> `item_name?` | `string` | The name of the item. <br/> *One of item\_id or item\_name is required. |
| <a id="item_variant"></a> `item_variant?` | `string` | The item variant or unique code or description for additional item details/options. |
| <a id="location_id"></a> `location_id?` | `string` | The physical location associated with the item (e.g. the physical store location). It's recommended to use the Google Place ID that corresponds to the associated item. A custom location ID can also be used. <br/> **Note:** `location_id` is only available at the item-scope. |
| <a id="price"></a> `price?` | `number` | The monetary unit price of the item, in units of the specified currency parameter. If a discount applies to the item, set price to the discounted unit price and specify the unit price discount in the discount parameter. |
| <a id="quantity"></a> `quantity?` | `number` | Item quantity. <br/> If not set, `quantity` is set to 1. |
