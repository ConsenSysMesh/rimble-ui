# Avatar
A basic avatar component.

<!-- STORY -->

### Usage
```jsx
import { Avatar } from 'rimble-ui'
```

<!-- Avatar example here -->
```jsx
<Avatar />

<Avatar src='https://material-ui.com/static/images/avatar/1.jpg' />

<Avatar size='100px' src='https://material-ui.com/static/images/avatar/1.jpg' />

<Avatar
  size='large'
  src='https://material-ui.com/static/images/avatar/1.jpg'
/>

<Avatar
  size='medium'
  src='https://material-ui.com/static/images/avatar/1.jpg'
/>

<Avatar
  size='small'
  src='https://material-ui.com/static/images/avatar/1.jpg'
/>
```

### Props
| Name   | Type   | Default | Description                                 |
| ------ | ------ | ------- | ------------------------------------------- |
| `size` | string |         | Sets avatar size to small, medium, or large |
|`src`|string|| Sets avatar `background-image`
