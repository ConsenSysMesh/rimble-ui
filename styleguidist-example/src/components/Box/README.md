React component example:

```js
<Box bg="red">Push Me</Box>
```

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

You can add a custom props to an example wrapper:

```js { "props": { "className": "checks" } }
<Box>I’m transparent!</Box>
```

Or disable an editor by passing a `noeditor` modifier:

```jsx noeditor
<Box>Push Me</Box>
```

To render an example as highlighted source code add a `static` modifier:

```jsx static
import React from 'react';
```

Examples with all other languages are rendered only as highlighted source code, not an actual component:

```html
<Box size="large">Push Me</Box>
```

Any [Markdown](http://daringfireball.net/projects/markdown/) is **allowed** _here_.
