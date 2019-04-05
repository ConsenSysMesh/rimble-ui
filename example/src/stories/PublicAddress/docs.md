# PublicAddress documentation

Use the `PublicAddress` component to display an Ethereum Public Address and offer copy-to-clipboard functionality.

_Want to understand best practices for using a PublicAddress component?_ Read [`PublicAddress` design guidelines](https://consensys.github.io/rimble-ui/?path=/story/components-publicaddress--design-guidelines)

**Import component**

```jsx
import { PublicAddress } from 'rimble-ui';
```

<!-- STORY -->

### Component props

`PublicAddress` will pass any props that are defined on its component and uses the following:

| Prop        | Type     | Values | Default | Description                                         |
| ----------- | -------- | ------ | ------- | --------------------------------------------------- |
| address     | string   |        |         | Sets the address that is displayed in the component |
| handleClick | function |        |         | Adds an is-copied class to component                |

### Styled-system props

`PublicAddress` uses all the style props from [`Box`](https://consensys.github.io/rimble-ui/?path=/story/components-layout-box--documentation).
