# Checkbox documentation

Use the `Checkbox` component when users can choose 0 or more than 1 options from a list. `Checkbox` maps to a checkbox input and a label.

_Want to understand best practices for using a `Checkbox` component?_ Read [`Checkbox` design guidelines](https://consensys.github.io/rimble-ui/?path=/story/checkbox--design--guidelines)


**Import component**

```jsx
import { Checkbox } from 'rimble-ui';
```

<!-- STORY -->

### Component props

Checkbox will pass any props that are defined on its component and uses the following:

| Name     | Type   | Default | Description                                                         |
| -------- | ------ | ------- | ------------------------------------------------------------------- |
| checked  | bool   | true    | Sets checked property of the checkbox which will precheck the box.  |
| disabled | bool   | true    | Sets disabled property of the checkbox to prevent user interaction. |
| label    | string | "label" | Sets the text of the sibling label element.                         |

### Styled-system props

Checkbox uses all the style props from [`Box`](https://consensys.github.io/rimble-ui/?path=/story/layout--box).
