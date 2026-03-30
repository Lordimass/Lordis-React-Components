# initGA4() `<Function>`

> **initGA4**(`measurement_id`, `dev?`): `void`

Defined in: [ga/init.ts:16](https://github.com/Lordimass/Lordis-React-Components/blob/5a0469711f38fed4f9a62e593d9d25995d476106/src/lib/ga/init.ts#L16)

Initialises GA4 with default denied settings until cookies are accepted.

GA4 must be initialised before consent for Advanced mode, which sends
cookie-less pings to track analytics without association with the user.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `measurement_id` | `string` |
| `dev?` | `boolean` |

## Returns

`void`
