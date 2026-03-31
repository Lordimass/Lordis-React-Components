# trackPageView() `<Function>`

> **trackPageView**(`page_title?`, `page_location?`): `void`

Defined in: [ga/events.ts:28](https://github.com/Lordimass/Lordis-React-Components/blob/aa128b98749d67f71bbe2a0ad87371f57e55e964/src/lib/ga/events.ts#L28)

Records a user viewing a page.

**Caution:** If you send manual pageviews without disabling pageview measurement, you may end up with duplicate
pageviews. *However*, automatic page views are disabled by default when using initGA4 from this library.

Whenever someone loads a page of your website or their browser history state is
changed by the active site, an enhanced measurement event called page_view is sent from your website to Google
Analytics. Since the event is sent automatically, you don't need to send pageview data to Analytics manually.

However, when you want to manually control how pageviews are sent (e.g. single-page applications or infinite
scrolling), you can disable pageviews and then manually send them from your website.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `page_title` | `string` | `document.title` | The title of the page. Defaults to `location.href` |
| `page_location` | `string` | `location.href` | The URL of the page. The value must start with the protocol followed by the full URL; for example, https://www.example.com/contact-us-submitted. Defaults to `document.title` |

## Returns

`void`
