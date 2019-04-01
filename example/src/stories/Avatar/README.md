# Avatar documentation

A basic avatar component.

**Import component**

```jsx
import { Avatar } from 'rimble-ui';
```

<!-- STORY -->

### Component props

Avatar will pass any props that are defined on its component including:

| Name    | Type   | Default | Description                                  |
| ------- | ------ | ------- | -------------------------------------------- |
| `alt`   | string | avatar  | Sets alt property on image for accessibility |
| `size`  | string | small   | Sets avatar size to small, medium, or large  |
| `src`   | string |         | Sets avatar `background-image`               |
| `ratio` | int    | 1       | Sets height and width ratio of the avatar    |

### Styled-system props

Avatar uses all the style props from [`Box`](https://consensys.github.io/rimble-ui/?path=/story/layout--box).
