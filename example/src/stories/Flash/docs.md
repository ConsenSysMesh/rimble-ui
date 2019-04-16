# Flash documentation

The `Flash` renders a responsive box-model layout component. Inherits props from `Box` component.

**Import component**

```jsx
import { Flash } from 'rimble-ui';
```

```jsx
<Flash>
  Flash default
  This is a primary alert with an <Link>example link</Link>. Give it a click if you like.
</Flash>

<Flash variant={'info'} my={3}>
  Flash "info"
  This is a primary alert with an <Link>example link</Link>. Give it a click if you like.
</Flash>

<Flash variant={'success'} my={3}>
  Flash "success"
  This is a primary alert with an <Link>example link</Link>. Give it a click if you like.
</Flash>

<Flash variant={'warning'} my={3}>
  Flash "warning"
  This is a primary alert with an <Link>example link</Link>. Give it a click if you like.
</Flash>

<Flash variant={'danger'} my={3}>
  Flash "danger"
  This is a primary alert with an <Link>example link</Link>. Give it a click if you like.
</Flash>
```

<!-- STORY -->

### Component props

`Flash` does not have any props but will pass on props that are defined on its component.

### Styled-system props

`Flash` uses all the style props from [`Box`](https://consensys.github.io/rimble-ui/?path=/story/components-layout-box--documentation)
