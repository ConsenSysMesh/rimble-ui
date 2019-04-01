# Flex

The `Flex` component renders a responsive flexbox layout component that controls the layout of the components nested inside. Use it when you want to create mobile responsive layouts or want to arrange content in columns or rows. This component extends [`Box`](https://consensys.github.io/rimble-ui/?path=/story/Layout--Box--Documentation).

**Import component**

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
