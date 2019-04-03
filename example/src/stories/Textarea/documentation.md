# Textarea documentation

The `Textarea` component provides a styled version of the HTML `<textarea>`.

**Import component**

```jsx
<Textarea rows={4} defaultValue="Type here…" />
```

<!-- STORY -->

### Component props

`Textarea` will pass any props that are defined on its component and uses the following:

| Prop         | Type    | Values      | Default | Description                                                   |
| ------------ | ------- | ----------- | ------- | ------------------------------------------------------------- |
| required     | boolean | true, false | true    | Renders an optional label if false. Triggers HTML5 validation |
| placeholder  | string  |             |         | Determines placeholder text inside the textarea               |
| name         | string  |             |         | Matches label to input                                        |
| id           | string  |             |         | Makes input capturable by id                                  |
| defaultValue | string  |             |         | Defines the initial contents of the textarea                  |
| disabled     | boolean | true, false | true    | Disables the textarea if true                                 |
| rows         | number  |             | none    | Renders the textarea with the defined height in rows          |

### Styled-system props

`Textarea` uses all the style props from [`Input`](https://consensys.github.io/rimble-ui/?path=/story/components-form-inputs--documentation).
