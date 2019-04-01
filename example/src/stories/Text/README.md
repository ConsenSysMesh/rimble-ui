# Text

The `Text` component allows for control font size, weight, alignment, and color.

**Import component**

```jsx
import { Text } from 'rimble-ui';
```

<!-- STORY -->

### Component props

`Text` will pass any props that are defined on its component and uses the following:

| Prop    | Type    | Values      | Default | Description                             |
| ------- | ------- | ----------- | ------- | --------------------------------------- |
| italic  | boolean | true, false | true    | Displays all text with emphasis         |
| bold    | boolean | true, false | true    | Displays all text with bold font weight |
| caps    | boolean | true, false | true    | Transforms text to capital letters      |
| regular | boolean | true, false | true    | Removes all text style changes          |

### Styled-system props

`Text` uses all the style props from [`Box`](https://consensys.github.io/rimble-ui/?path=/story/layout--box), but also includes these:

| Prop          | CSS property   | Function      | Theme field    |
| ------------- | -------------- | ------------- | -------------- |
| fontSize      | font-size      | fontSize      | fontSizes      |
| fontFamily    | font-family    | fontFamily    | fonts          |
| fontWeight    | font-weight    | fontWeight    | fontWeights    |
| fontStyle     | font-style     | fontStyle     | none           |
| textAlign     | text-align     | textAlign     | none           |
| lineHeight    | line-height    | lineHeight    | lineHeights    |
| letterSpacing | letter-spacing | letterSpacing | letterSpacings |
