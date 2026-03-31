# LRCRemoteSettingsContext `<Variable>`

> `const` **LRCRemoteSettingsContext**: `Context`&lt;[`LRCRemoteSettings`](LRCRemoteSettings.md)&gt;

Defined in: [types/index.ts:12](https://github.com/Lordimass/Lordis-React-Components/blob/f78061d1f0a0b6e5e1d28ae400bc1274db428614/src/lib/types/index.ts#L12)

Settings for components which are provided from some external source. For example, this could be used to configure
the site based on values from a database table, which is fetched when the site loads. Certain keys are reserved for
settings which are used by components, which you can be set freely, so long as they follow the given structure.
