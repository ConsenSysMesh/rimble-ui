# Public Address

Use the `PublicAddress` component to display an Ethereum Public Address and offer copy-to-clipboard functionality.

**Import component**

```jsx
import { PublicAddress } from 'rimble-ui';
```

<!-- STORY -->

### Component props

Public Address will pass any props that are defined on its component and uses the following:

| Prop        | Type     | Values | Default | Description                                         |
| ----------- | -------- | ------ | ------- | --------------------------------------------------- |
| address     | string   |        |         | Sets the address that is displayed in the component |
| handleClick | function |        |         | Adds a -is-copied class to component                |

### Styled-system props

Public Address uses all the style props from [`Box`](https://consensys.github.io/rimble-ui/?path=/story/layout--box).
