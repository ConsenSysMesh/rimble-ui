# Button Guidelines
The `Button` component maps to a `<button type='button'>` element. It contains a label and optional icons before or after the label.
<!-- STORY -->

### Usage
```jsx
import { Button } from 'rimble-ui'
```
<!-- Default button example here -->
```jsx
<Button>Click Me</Button>
```

### Props
| Name        | Type    | Default | Description                                 |
| ----------- | ------- | ------- | ------------------------------------------- |
| `size`      | string  |         | Sets button size to small, medium, or large |
| `fullWidth` | boolean |         | Sets button width to fullWidth              |
| `disabled`  | boolean |         | Sets button style to disabled               |
|`icon`|string| | Adds `Icon` to button. See [icon list](https://github.com/jxnblk/rmdi/blob/master/ICONS.md).|
|`iconpos`|string|left|Sets `Icon` position inside button.|
|`icononly`|boolean|false| Sets `Button` dimensions for icon-only buttons.
