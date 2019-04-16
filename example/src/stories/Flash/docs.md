# Flash documentation

The `Flash` renders a responsive box-model layout component. Inherits props from `Box` component.

## Usage

**Import:**
```jsx
import { Flash } from 'rimble-ui';
```

**Example:**
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

**Output:**
<!-- STORY -->

## API

**Component props**

…

**`styled-system` props**

`Flash` uses all the style props from [`Box`](https://consensys.github.io/rimble-ui/?path=/story/components-layout-box--documentation)
