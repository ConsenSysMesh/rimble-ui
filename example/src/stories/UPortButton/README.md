# UPortButton
The `UPortButton` component maps to a `<button type='button'>` element. Inherits props from `Button`.

**Import component**
```jsx
import { UPortButton } from 'rimble-ui'
```
<!-- STORY -->
### Component props and theming

Button uses all the props from [`Button`](https://consensys.github.io/rimble-ui/?path=/story/button--documentation), but also includes these:

| Prop      | Type    | Values                                                           | Default | Description                                                                                                     |
| --------- | ------- | ---------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| size      | String  | small, medium, large                                             | medium  | Sets button size to small, medium or large                                                                      |
| fullWidth | boolean | true, false                                                      | true    | Sets button width to fullWidth                                                                                  |
| disabled  | boolean | true, false                                                      | true    | Sets button style to disabled |
| icon      | string  | [icon list](https://github.com/jxnblk/rmdi/blob/master/ICONS.md) | none    | Adds Icon to button                                                                                             |
| iconPos   | string  | left, right                                                      | left    | Sets Icon position inside button                                                                                |
| iconOnly  | boolean | true, false                                                      | true    | Sets Button dimensions for icon-only buttons                                                                    |

### Styled-system props

Button uses all the style props from [`Button`](https://consensys.github.io/rimble-ui/?path=/story/button--documentation), but also includes these:

| Prop         | CSS property                   | Function     | Theme field   |
| ------------ | ------------------------------ | ------------ | ------------- |
| position     | position                       | position     | none          |
| color        | color                          | color        | colors        |
| bg           | background-color               | bg           | none          |
| height       | height                         | height       | heights?      |
| m            | margin                         | space        | space         |
| px           | padding-right and padding-left | px           | space        |
| py           | padding-top and padding-bottom | py           | space         |
| border       | border-width                   | border       | borderWidths? |
| borderColor  | border-color                   | borderColor  | colors        |
| borderRadius | border-radius                  | borderRadius | radii?        |
| boxShadow    | box-shadow                     | boxShadow    | shadows?      |
| fontSize     | font-size                      | fontSize     | fontSizes?    |
| fontFamily   | font-family                    | fontFamily   | fonts         |
| fontWeight   | font-weight                    | fontWeight   | fontWeights?  |

<!-- component example here -->
