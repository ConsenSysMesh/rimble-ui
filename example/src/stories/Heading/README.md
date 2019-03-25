# Heading documentation
Use the `Heading` component to give users scannable titles on your interface. A user should be able to understand what a page is for just by reading the headings. This components extends the [`Text`](https://consensys.github.io/rimble-ui/?path=/story/text--default) component to provide default heading styles for H1-H6.

**Import component**
```jsx
import { Heading } from 'rimble-ui'
```

<!-- STORY -->

### Component props
Heading uses all the props from [`Text`](https://consensys.github.io/rimble-ui/?path=/story/text--default).

### Accessibility
- Headings should be used `h1` through to `h6` without skipping
- An `h1` should appear at the beginning of the page content so screen readers can skip straight to the first `Header` and start reading the page content
- A good, accessible structure looks like:
  - `h1`
    - `h2`
      - `h3`
        - `h4`
      - `h3`
        - `h4`
          - `h5`
            - `h6`
      - `h3`
        - `h4`
    - `h2`
- `h3` to `h6` are typically only used for long-form content
