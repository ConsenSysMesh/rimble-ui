# Button documentation
Use the `Button` component when you want users to perform an action like connecting their Ethereum account or starting a transaction. It contains a label with an optional icon before or after the label. It maps to a `<button type='button'>` element and extends [`Box`](https://consensys.github.io/rimble-ui/?path=/story/layout--box).  

_Want to understand best practices for using this component?_ Read [`Button` design guidelines](https://github.com/ConsenSys/rimble-ui/blob/rc-button-docs/example/src/stories/Button/GUIDELINES.md)

**Import component**

```jsx
import { Button } from 'rimble-ui'
```

<!-- STORY -->

### Component props and theming  
Button uses all the props from [`Box`](https://consensys.github.io/rimble-ui/?path=/story/layout--box) and its icon property is inherited from [`Icon`](https://consensys.github.io/rimble-ui/?path=/story/icon--default), but also includes these:

**Size** (`string`)  
Sets button size to small, medium or large  
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
Button uses all the style props from [`Box`](https://consensys.github.io/rimble-ui/?path=/story/layout--box), but also includes these:

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
