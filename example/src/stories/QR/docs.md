# QR documentation

Use the `QR` component to renders a QR code for a provided string. Can be used as a shortcut to input a public Ethereum address or link to a specific website.

_Want to understand best practices for using a `QR` component?_ Read [`QR` design guidelines](https://consensys.github.io/rimble-ui/?path=/story/components-qr-code--design-guidelines)

**Import component**

```jsx
import { QR } from 'rimble-ui';
```

<!-- STORY -->

### Component props

QR Code will pass any props that are defined on its component and uses the following:

| Prop  | Type   | Values | Default | Description                                    |
| ----- | ------ | ------ | ------- | ---------------------------------------------- |
| value | string |        |         | Sets the value that is rendered into a QR code |

### Styled-system props

QR Code does not use any styled-system props.
