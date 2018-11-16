# Text
The `Text` component allows for control font size, weight, alignment, and color.

<!-- STORY -->

### Usage
```jsx
import { Text } from 'rimble-ui'
```

<!-- Text examples  -->
```jsx
<Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quibusdam, assumenda officiis.</Text>
```

By default, the `Text` component will render a `<div>` element.
Use `<Text.p />` to render a `<p>` element.
Use `<Text.span />` to render a `<span>` element.
```jsx
<Text.span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quibusdam, assumenda officiis.</Text.span>

<Text.p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quibusdam, assumenda officiis.</Text.p>

<Text.s>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quibusdam, assumenda officiis.</Text.s>
```

<!-- Text component props -->
