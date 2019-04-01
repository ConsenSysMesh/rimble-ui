# ToastMessage documentation

Use toast messages to provide updates about a process. The `ToastMessage` component extends `Box`.

- _Want to understand best practices for using a ToastMessage component?_ Read [`ToastMessage` design guidelines](https://consensys.github.io/rimble-ui/?path=/story/ToastMessage--design--guidelines)
- _Want to find out about the provider?_ Read [`ToastMessage.provider` documentation](https://consensys.github.io/rimble-ui/?path=/story/Provider--documentation)

**Import component**

```jsx
import { ToastMessage } from 'rimble-ui';
```

<!-- STORY -->

### Component props

`ToastMessage` will pass any props that are defined on its component and uses the following:

| Prop             | Type     | Values                                | Default | Description                                |
| ---------------- | -------- | ------------------------------------- | ------- | ------------------------------------------ |
| messages         | string   |                                       |         | Sets the primary message text              |
| secondaryMessage | string   |                                       |         | Sets the secondary message text            |
| actionHref       | string   |                                       |         | Sets the URL for the action button         |
| actionText       | string   |                                       |         | Sets the text for the action button        |
| colorTheme       | string   | dark                                  | none    | Sets the color theme for the toast message |
| variant          | string   | default, processing, success, failure | default | Sets the icon and colors for toast message |
| icon             | string   |                                       | none    | Sets the icon for toast message            |
| closeElem        | function |                                       |         | Closes the toast message                   |

### Styled-system props

`ToastMessage` uses all the style props from [`Box`](https://consensys.github.io/rimble-ui/?path=/story/layout--box).
