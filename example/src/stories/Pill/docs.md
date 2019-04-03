# Pill documentation

Use the `Pill` component to indicate information is contextual and grouped under a single taxonomy. It renders text with a colored background. Useful for showing transaction status.

**Import component**

```jsx
import { Pill } from 'rimble-ui';
```

<!-- STORY -->

### Component props

Pill will pass any props that are defined on its component and uses the following:

| Prop     | Type    | Values      | Default | Description                                       |
| -------- | ------- | ----------- | ------- | ------------------------------------------------- |
| selected | boolean | true, false | false   | Determines the tint level on the background color |

### Styled-system props

Pill uses all the style props from [`Text`](https://consensys.github.io/rimble-ui/?path=/story/components-text--documentation).
