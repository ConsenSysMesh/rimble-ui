# Icon
The `Icon` component renders Material Design Icons. Built with [rmdi](https://github.com/jxnblk/rmdi).

<!-- STORY -->

### Usage
<!-- component example here -->

```jsx
import { Icon } from 'rimble-ui'

<Icon name='Star' />
<Icon name='Star' color='primary' />
<Icon name='Star' color='tomato' size='80' />
```

### List of Icons

See the [icon list](ICONS.md) for a complete list of all icons available

### Props

Prop | Type | Description
---|---|---
`size` | number | width and height in pixels
`color` | string | fill color, uses Styled System's [`color`][color] function

### Spacing Props

Margin can be applied with the following props, which use Styled System's [`space`][space] function.
Margin props accept numbers for pixel values, strings with CSS units, or arrays for [responsive][responsive] margin

Prop | Description
---|---
`m` | margin
`mt` | margin-top
`mr` | margin-right
`mb` | margin-bottom
`ml` | margin-left
`mx` | margin-left and margin-right
`my` | margin-top and margin-bottom

[color]: https://github.com/jxnblk/styled-system#color-responsive
[space]: https://github.com/jxnblk/styled-system#space-responsive
[responsive]: https://github.com/jxnblk/styled-system#responsive-styles
