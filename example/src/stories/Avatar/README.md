# Avatar documentation

A basic avatar component.

<!-- STORY -->

**Import component**

```jsx
import { Avatar } from 'rimble-ui';
```

### Component props

Avatar will pass any props that are defined on its component and uses the following:

| Name    | Type   | Default | Description                                  |
| ------- | ------ | ------- | -------------------------------------------- |
| `alt`   | string | avatar  | Sets alt property on image for accessibility |
| `size`  | string | small   | Sets avatar size to small, medium, or large  |
| `src`   | string |         | Sets avatar `background-image`               |
| `ratio` | int    | 1       | Sets height and width ratio of the avatar    |

### Styled-system props

Avatar uses all the style props from [`Box`](https://consensys.github.io/rimble-ui/?path=/story/layout--box).
