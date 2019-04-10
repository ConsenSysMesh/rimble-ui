# Modal documentation

The `Modal` component displays any content fixed positioned in the screen center with a background color.

**Import component**

```jsx
import { Modal } from 'rimble-ui';
```

<!-- STORY -->

### Component props

`Modal` will pass any props that are defined on its component and uses the following:

| Prop       | Type     | Values     | Default  | Description                                |
| ---------- | -------- | ---------- | -------- | ------------------------------------------ |
| isOpen     | boolean  | true,false | false    | Determines if the modal should be visible  |
| bg         | string   |            | black.10 | Determines the color behind the modal      |
| closeModal | function |            |          | Sets the value of the isOpen prop to false |
| openModal  | function |            |          | Sets the value of the isOpen prop to true  |

### Styled-system props

`Modal` uses all the style props from [`Box`](https://consensys.github.io/rimble-ui/?path=/story/components-layout-box--documentation).
