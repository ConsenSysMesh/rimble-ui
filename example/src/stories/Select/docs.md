# Select documentation

Use the `Select` component when you want your users to select an option from a list. `Select` provides a styled version of the HTML `<select>`.

_Want to understand best practices for using a `Select` component?_ Read [`Select` design guidelines](https://consensys.github.io/rimble-ui/?path=/story/components-form-select--design-guidelines)

**Import component**

```jsx
import { Select } from 'rimble-ui';
```

<!-- STORY -->

### Component props

`Select` will pass any props that are defined on its component and uses the following:

| Name     | Type | Default | Description                                                           |
| -------- | ---- | ------- | --------------------------------------------------------------------- |
| disabled | bool | true    | Sets disabled property of the radio input to prevent user interaction |
| required | bool | true    | Ensures that a value is selected                                      |

### Styled-system props

`Select` uses all the style props from [`Box`](https://consensys.github.io/rimble-ui/?path=/story/components-layout-box--documentation).
