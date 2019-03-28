# Image

Use the `Image` component to display an image in your product. This renders the `<img>` HTML element and extends the `Box` component.

**Import component**
```jsx
import { Image } from 'rimble-ui'
```

<!-- STORY -->

### Component props
`Image` uses all the props from [`Box`](https://consensys.github.io/rimble-ui/?path=/story/layout--box), but also includes these:

| Prop      | Type    | Values                                                           | Default | Description                                                                                                     |
| --------- | ------- | ---------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| src      | String  |                                              |   | References the image you want to display
| alt | String | | | Explains the image with text for screen readers               


### Styled-system props

### Accessibility
- Always include an alt prop so that screen readers can describe the image to those with visual impairments
