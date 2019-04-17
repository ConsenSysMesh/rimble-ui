# Flash documentation

Use the `Flash` component for messages that persist but don't block the user. For example, you may want to let users know they're on the wrong network but allow them to continue browsing until they try to connect. The `Flash` renders a responsive box-model layout component. Inherits props from `Box` component.

_Want to understand best practices for using a Flash component?_ Read [`Flash` design guidelines](https://consensys.github.io/rimble-ui/?path=/story/components-flash--design-guidelines)

**Import component:**
```jsx
import { Flash } from 'rimble-ui';
```
<!-- STORY -->

### Accessibility

- Critical and warning banners have a role="alert"
- All other banners have a role="status"
- Banner containers have a tabindex="0" and display a visible keyboard focus indicator.
- Banners use aria-describedby to describe their purpose to assistive technologies when they're announced or receive focus. All of the banner content is used for the aria-describedby.

### Component props

…

### `Styled-system` props

`Flash` uses all the style props from [`Box`](https://consensys.github.io/rimble-ui/?path=/story/components-layout-box--documentation)
