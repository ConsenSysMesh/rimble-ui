# Blockie documentation

The `Blockie` component allows for use of [Ethereum blockies](https://github.com/ethereum/blockies) in your app.
Blockies are identicons for Ethereum addresses. These are not meant to replace user profiles, but as security icons, to allow the user to more easily check if an address he wants to interact with is the correct one.

**Import component**

```jsx
import { Blockie } from 'rimble-ui';
```

<!-- STORY -->

### Component props

Blockie will pass any props that are defined on its component and uses the following:

| Name   | Type   | Default                                                                              | Description                                  |
| ------ | ------ | ------------------------------------------------------------------------------------ | -------------------------------------------- |
| `opts` | object | {seed: "foo", color: "#dfe", bgcolor: "#a71", size: 15, scale: 3, spotcolor: "#000"} | Sets the options for the blockies identicon. |

### Styled-system props

Blockie uses all the style props from [`Box`](https://consensys.github.io/rimble-ui/?path=/story/layout--box).
