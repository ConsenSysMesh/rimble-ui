# Input documentation

The `Input` component provides a styled version of HTML `<input>`.

_Want to understand best practices for using an Input component?_ Read [`Input` design guidelines](https://consensys.github.io/rimble-ui/?path=/story/input--design--guidelines)

**Import component**

```jsx
import { Input } from 'rimble-ui';
```

<!-- STORY -->

### Component props

Input will pass any props that are defined on its component and uses the following:

| Prop        | Type    | Values                                          | Default | Description                                                   |
| ----------- | ------- | ----------------------------------------------- | ------- | ------------------------------------------------------------- |
| type        | string  | text, url, tel, search, number, password, email |         | Determines the type of input to display                       |
| required    | boolean | true, false                                     | true    | Renders an optional label if false. Triggers HTML5 validation |
| placeholder | string  |                                                 |         | Determines placeholder text inside the input                  |
| name        | string  |                                                 |         | Matches label to input                                        |
| id          | string  |                                                 |         | Makes input capturable by id                                  |
| disabled    | boolean | true, false                                     | true    | Disables an input if true                                     |

### Styled-system props

Input uses all the style props from [`Box`](https://consensys.github.io/rimble-ui/?path=/story/components-layout-box--documentation), but also includes these:

| Prop       | CSS property | Function   | Theme field |
| ---------- | ------------ | ---------- | ----------- |
| boxShadow  | box-shadow   | boxShadows | shadows     |
| fontSize   | font-size    | fontSize   | fontSizes   |
| fontFamily | font-family  | fontFamily | fonts       |
