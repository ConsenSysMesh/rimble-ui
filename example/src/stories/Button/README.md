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
<Button fullWidth>Full-width Button</Button>
```
<!-- Disabled button here -->
```jsx
<Button disabled>disabled Button</Button>
```

```jsx
<Button icon="Check">Click me!</Button>
<Button icon="Check" iconpos="right">Click me!</Button>
<Button icon='MoreHoriz' icononly/>
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
