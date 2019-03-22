# Button documentation
Use the `Button` component when you want users to perform an action like connecting their Ethereum account or starting a transaction. It contains a label with an optional icon before or after the label. It maps to a `<button type='button'>` element and extends [`Box`](https://consensys.github.io/rimble-ui/?path=/story/layout--box).

_Want to understand best practices for using this component?_ Read [`Button` design guidelines](https://github.com/ConsenSys/rimble-ui/blob/rc-button-docs/example/src/stories/Button/GUIDELINES.md)

<!-- STORY -->

### Usage
Copy/paste the following code snippets to see `Button` in action.

**Import component**

```jsx
import { Button } from 'rimble-ui'
```

**Default button**

<!-- Default button example here -->
```jsx
<Button>Click Me</Button>
```
**Different button sizes**

This will cover small, medium, large and full-width buttons.

<!-- Large,Medium, and Small buttons here -->
```jsx
<Button size="small">Small Button</Button>
<Button size="medium">Medium Button</Button>
<Button size="large">Large Button</Button>
<Button fullWidth>Full-width Button</Button>
```
**Disabled button**

<!-- Disabled button here -->
```jsx
<Button disabled>disabled Button</Button>
```

**Button with icon**
This will cover a default button with icon, a button with an icon to the right of the label and a button with an icon only.

```jsx
<Button icon="Check">Click me!</Button>
<Button icon="Check" iconpos="right">Click me!</Button>
<Button icon='MoreHoriz' icononly/>
```

### Component props and theming
Button uses all the props from [`Box`](https://consensys.github.io/rimble-ui/?path=/story/layout--box) and its icon property is inherited from [`Icon`](https://consensys.github.io/rimble-ui/?path=/story/icon--default), but also includes these:

**Size** (`string`)		
Sets button size to small, medium, large or full width
Theme: none

**fullWidth** (`boolean`)		
Sets button width to fullWidth
Theme: none

**Disabled** (`boolean`)		
Sets button style to disabled to indicate the user has to do something prior to being able to press this button
Default: true
Theme: none

**Icon** (`string`)
Adds Icon to button. See [icon list](https://github.com/jxnblk/rmdi/blob/master/ICONS.md)
Theme: none

**Iconpos** (`string`)		
Sets Icon position inside button.
Default: left
Theme: none

**Icononly** (`boolean`)		
Sets Button dimensions for icon-only buttons.
Default: false
Theme: none

### Styled-system props
Button uses all the style props from [`Box`](https://consensys.github.io/rimble-ui/?path=/story/layout--box, but also includes these:

**position**	
prop: ?
CSS property: ?
theme field: ?

**color**	
prop: ?
CSS property: ?
theme field: ?

**bg**	
prop: ?
CSS property: ?
theme field: ?

**height**	
prop: ?
CSS property: ?
theme field: ?

**m**	
prop: ?
CSS property: ?
theme field: ?

**px**	
prop: ?
CSS property: ?
theme field: ?

**py**	
prop: ?
CSS property: ?
theme field: ?

**border**	
prop: ?
CSS property: ?
theme field: ?

**borderColor**	
prop: ?
CSS property: ?
theme field: ?

**borderRadius**	
prop: ?
CSS property: ?
theme field: ?

**boxShadow**	
prop: ?
CSS property: ?
theme field: ?

**fontSize**	
prop: ?
CSS property: ?
theme field: ?

**fontFamily**	
prop: ?
CSS property: ?
theme field: ?

**fontWeight**	
prop: ?
CSS property: ?
theme field: ?
