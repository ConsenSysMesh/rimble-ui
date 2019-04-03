# Table documentation

The `Table` component renders the `<table>` HTML element. Inherits props from the `Box` component.

_Want to understand best practices for using a Table component?_ Read [`Table` design guidelines](https://consensys.github.io/rimble-ui/?path=/story/table--design--guidelines)

**Import component**

```jsx
import { Table } from 'rimble-ui';
```

<!-- STORY -->

### Component props

`Table` does not have any props but will pass on props that are defined on its component.

### Styled-system props

`Table` uses all the style props from [`Box`](https://consensys.github.io/rimble-ui/?path=/story/components-layout-box--documentation), but also includes these:

| Prop       | CSS property | Function   | Theme field |
| ---------- | ------------ | ---------- | ----------- |
| fontFamily | font-family  | fontFamily | fonts       |
| height     | height       | height     | heights     |
| boxShadow  | box-shadow   | boxShadow  | shadows     |

### Accessibility

- All tables must use `<th>` and `<td>` – this helps those using assistive technologies understand which data relates to each table header
