# Image

Use the `Image` component to display an image in your product. This renders the `<img>` HTML element and extends the `Box` component.

**Import component**

```jsx
import { Image } from 'rimble-ui';
```

<!-- STORY -->

### Component props

Image will pass any props that are defined on its component and uses the following:

| Prop | Type   | Values | Default | Description                                     |
| ---- | ------ | ------ | ------- | ----------------------------------------------- |
| src  | string |        |         | References the image you want to display        |
| alt  | string |        |         | Explains the image with text for screen readers |

### Styled-system props

Image uses all the style props from [`Box`](https://consensys.github.io/rimble-ui/?path=/story/layout--box).

### Accessibility

- Always include an alt prop so that screen readers can describe the image to those with visual impairments
