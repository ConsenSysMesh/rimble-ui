# Button documentation

Use the `Button` component when you want users to perform an action like connecting their Ethereum account or starting a transaction. It contains a label with an optional icon before or after the label. It maps to a `<button type='button'>` element and extends [`Box`](https://consensys.github.io/rimble-ui/?path=/story/layout--box).

_Want to understand best practices for using this component?_ Read [`Button` design guidelines](https://github.com/ConsenSys/rimble-ui/blob/rc-button-docs/example/src/stories/Button/GUIDELINES.md)

**Import component**

```jsx
import { Button } from 'rimble-ui';
```

<!-- STORY -->

### Component props

Button's icon inherits all the props from [`Icon`](https://consensys.github.io/rimble-ui/?path=/story/icon--default), but also includes these:

| Prop      | Type    | Values                                                           | Default | Description                                  |
| --------- | ------- | ---------------------------------------------------------------- | ------- | -------------------------------------------- |
| size      | String  | small, medium, large                                             | medium  | Sets button size to small, medium or large   |
| fullWidth | boolean | true, false                                                      | true    | Sets button width to fullWidth               |
| disabled  | boolean | true, false                                                      | true    | Sets button style to disabled                |
| icon      | string  | [icon list](https://github.com/jxnblk/rmdi/blob/master/ICONS.md) | none    | Adds Icon to button                          |
| iconPos   | string  | left, right                                                      | left    | Sets Icon position inside button             |
| iconOnly  | boolean | true, false                                                      | true    | Sets Button dimensions for icon-only buttons |

### Styled-system props

Button uses all the style props from [`Box`](https://consensys.github.io/rimble-ui/?path=/story/layout--box), but also includes these:

| Prop         | CSS property                   | Function     | Theme field  |
| ------------ | ------------------------------ | ------------ | ------------ |
| position     | position                       | position     | none         |
| color        | color                          | color        | colors       |
| bg           | background-color               | bg           | none         |
| height       | height                         | height       | heights      |
| m            | margin                         | space        | space        |
| px           | padding-right and padding-left | px           | space        |
| py           | padding-top and padding-bottom | py           | space        |
| border       | border-width                   | border       | borderWidths |
| borderColor  | border-color                   | borderColor  | colors       |
| borderRadius | border-radius                  | borderRadius | radii        |
| boxShadow    | box-shadow                     | boxShadow    | shadows      |
| fontSize     | font-size                      | fontSize     | fontSizes    |
| fontFamily   | font-family                    | fontFamily   | fonts        |
| fontWeight   | font-weight                    | fontWeight   | fontWeights  |
