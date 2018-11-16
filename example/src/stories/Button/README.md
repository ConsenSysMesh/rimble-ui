# Button
The `Button` components accept props defining their size.

<!-- STORY -->

### Usage
```jsx
import { Button } from 'rimble-ui'
```
<!-- Default button example here -->
```jsx
<Button>Click Me</Button>
```
<!-- Large,Medium, and Small buttons here -->
```jsx
<Button size="small">Small Button</Button>
<Button size="medium">Medium Button</Button>
<Button size="large">Large Button</Button>
```
<!-- Disabled button here -->
```jsx
<Button disabled>disabled Button</Button>
```
<!-- Full-width button here -->
```jsx
<Button fullWidth>Full-width Button</Button>
```

### Props
| Name        | Type    | Default | Description                                 |
| ----------- | ------- | ------- | ------------------------------------------- |
| `size`      | string  |         | Sets button size to small, medium, or large |
| `fullWidth` | boolean |         | Sets button width to fullWidth              |
| `disabled`  | boolean |         | Sets button style to disabled               |
