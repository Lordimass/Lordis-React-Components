# LRCRemoteSettingsContext `<Variable>`

> `const` **LRCRemoteSettingsContext**: `Context`&lt;[`LRCRemoteSettings`](LRCRemoteSettings.md)&gt;

Defined in: [types/index.ts:12](https://github.com/Lordimass/Lordis-React-Components/blob/84f83f1effeca17588c60e2c43324be932b6da49/src/lib/types/index.ts#L12)

Settings for components which are provided from some external source. For example, this could be used to configure
the site based on values from a database table, which is fetched when the site loads. Certain keys are reserved for
settings which are used by components, which you can be set freely, so long as they follow the given structure.
