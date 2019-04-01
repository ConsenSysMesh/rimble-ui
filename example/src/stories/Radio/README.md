# Radio documentation

Use the `Radio` component when users can select **only** one option from a list and you want all the options to be visible. `Radio` maps to a radio input and a label.

_Want to understand best practices for using a `Radio` component?_ Read [`Radio` design guidelines](https://consensys.github.io/rimble-ui/?path=/story/radio--buttons--design--guidelines)

**Import component**

```jsx
import { Radio } from 'rimble-ui';
```

<!-- STORY -->

### Component props

Radio will pass any props that are defined on its component and uses the following:

| Name     | Type   | Default | Description                                                           |
| -------- | ------ | ------- | --------------------------------------------------------------------- |
| checked  | bool   | true    | Sets checked property of the radio input which will precheck the box  |
| disabled | bool   | true    | Sets disabled property of the radio input to prevent user interaction |
| label    | string | "label" | Sets the text of the sibling label element                            |

### Styled-system props

Radio uses all the style props from [`Box`](https://consensys.github.io/rimble-ui/?path=/story/layout--box).
