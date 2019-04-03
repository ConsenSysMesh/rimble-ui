# Slider documentation

The `Slider` component provides a styled slider control for the HTML `<input type="range">`.

**Import component**

```jsx
import { Slider } from 'rimble-ui';
```

<!-- STORY -->

### Component props

Slider will pass any props that are defined on its component and uses the following:

| Name     | Type   | Default | Description                                                            |
| -------- | ------ | ------- | ---------------------------------------------------------------------- |
| min      | number |         | Sets the lowest allowed value for the input                            |
| max      | number |         | Sets the highest allowed value for the input                           |
| step     | number | "any"   | Sets the increment between allowed values for the input                |
| value    | number |         | Sets the value of the input                                            |
| disabled | bool   | true    | Sets disabled property of the slider input to prevent user interaction |

### Styled-system props

Slider does not use any props from styled-system.
