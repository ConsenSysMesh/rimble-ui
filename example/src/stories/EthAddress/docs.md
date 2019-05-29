# EthAddress documentation

Use the `EthAddress` component to display an Ethereum Public Address as text either in full or truncated form

```jsx
import { EthAddress } from 'rimble-ui';
```

<!-- STORY -->

### Component props

`EthAddress` will pass any props that are defined on its component and uses the following:

| Prop          | Type     | Values | Default | Description                                             |
| ------------- | -------- | ------ | ------- | ------------------------------------------------------- |
| address       | string   |        |         | Sets the address that is displayed in the component     |
| truncate      | boolean  |        | false   | Displays the address in truncated form; 0x123...4567    |

`EthAddress` uses all the style props from [`Text`](https://consensys.github.io/rimble-ui/?path=/story/components-text--documentation).