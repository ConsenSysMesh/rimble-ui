# Tooltip documentation

Use a `Tooltip` to give your user extra information about something on the interface. This component is a simple styled tooltip that uses [react-popper](https://github.com/d8660091/react-popper).

_Want to understand best practices for using a Tooltip component?_ Read [`Tooltip` design guidelines](https://consensys.github.io/rimble-ui/?path=/story/tooltip--design--guidelines)

**Import component**

```jsx
import { Tooltip } from 'rimble-ui';
```

<!-- STORY -->

### Component props

`Tooltip` will pass any props that are defined on its component and uses the following:

| Prop      | Type   | Values                   | Default | Description                                          |
| --------- | ------ | ------------------------ | ------- | ---------------------------------------------------- |
| variant   | string | dark, light              | light   | Sets colour of tooltip background                    |
| placement | string | top, bottom, left, right | bottom  | Sets placement of tooltip in relation to the trigger |
| message   | string |                          | None    | Sets the copy for the tooltip                        |

### Styled-system props

`Tooltip` uses all the style props from [`Text`](https://consensys.github.io/rimble-ui/?path=/story/text--default).
