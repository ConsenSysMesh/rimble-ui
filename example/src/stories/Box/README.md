# Box
The `Box` renders a responsive box-model layout component.

<!-- STORY -->

### Usage
```jsx
import { Box } from 'rimble-ui'
```

<!-- component example here -->
```jsx
<Box
  p={5}
  fontSize={4}
  width={[ 1, 1, 1/2 ]}
  color='white'
  bg='salmon'>
  This is a Box
</Box>
```

## Margin & Padding

The `space` function adds margin and padding props.
The margin and padding props use a shorthand syntax, similar to
[Basscss][basscss], [Tachyons][tachyons], and [Bootstrap][bootstrap].

[basscss]: http://basscss.com/#basscss-margin
[tachyons]: http://tachyons.io/docs/layout/spacing/
[bootstrap]: https://getbootstrap.com/docs/4.1/utilities/spacing/

### Margin Props

- `m` margin
- `mt` margin-top
- `mr` margin-right
- `mb` margin-bottom
- `ml` margin-left
- `mx` margin-left and margin-right
- `my` margin-top and margin-bottom

### Padding Props

- `p` padding
- `pt` padding-top
- `pr` padding-right
- `pb` padding-bottom
- `pl` padding-left
- `px` padding-left and padding-right
- `py` padding-top and padding-bottom

### Space Theming

To set a consistent white-space scale, add a `space` array to your theme.
Use numbers to set pixel values, or use strings for other CSS units such as `rem`.

```js
// theme.js
export default {
  space: [
    0, 4, 8, 16, 32, 64, 128, 256, 512
  ]
}
```

All spacing props accept numbers, strings, or arrays as values, where:

- Numbers between 0 and the last index of the `space` array are values from the `space` array defined in theme
- Numbers greater than the length of the `space` array are converted to pixels
- String values can be used for any valid CSS value (e.g. `'auto'` or `'2em'`)
- Margin props accept negative values to set negative margin
- Arrays can be used for [responsive styles](#responsive-styles)


## Width

The `width` function adds a single `width` prop for setting responsive width styles.

The `width` prop accepts number, string, or array values, where:

- Numbers between 0 and 1 are converted to percentage based widths (e.g. `1/2` becomes `'50%'`)
- Numbers greater than 1 are converted to pixels
- Strings can be used for other CSS values (e.g. `'50vw'` or `'30em'`)
- Arrays can be used for [responsive styles](#responsive-styles)


## Responsive Styles

All styled-system functions accept arrays as values to set styles responsively using a mobile-first approach.

```jsx
<Box
  width={[
    1,    // 100% below the smallest breakpoint
    1/2,  // 50% from the next breakpoint and up
    1/4   // 25% from the next breakpoint and up
  ]}
/>
```
