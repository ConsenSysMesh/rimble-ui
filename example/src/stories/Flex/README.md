# Flex

The `Flex` component renders a responsive flexbox layout component. Extends: [`Box`](https://consensys.github.io/rimble-ui/?path=/story/layout--box).

<!-- STORY -->

### Usage

```jsx
import { Flex, Box } from 'rimble-ui';
```

```jsx
<Flex>
  <Box p={3} width={1 / 2} color="salmon" bg="black">
    Flex
  </Box>
  <Box p={3} width={1 / 2} color="white" bg="salmon">
    Box
  </Box>
</Flex>
```

### Component props

Flex does not have any props but will pass on props that are defined on its component.

### Styled-system props

Flex uses all the style props from [`Box`](https://consensys.github.io/rimble-ui/?path=/story/layout--box).
