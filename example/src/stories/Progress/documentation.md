# Progress

The `Progress` component provides a styled version of the HTML `<progress>`.

**Import component**

```jsx
import { Progress } from 'rimble-ui';
```

<!-- STORY -->

### Component props

Progress will pass any props that are defined on its component and uses the following:

| Prop  | Type   | Values | Default | Description                                                       |
| ----- | ------ | ------ | ------- | ----------------------------------------------------------------- |
| value | number | 0 - 1  | 0       | Determines the amount of element to fill in with background color |

### Styled-system props

Progress gets its color from the theme's colors.primary value but defaults to black if no theme provided.
