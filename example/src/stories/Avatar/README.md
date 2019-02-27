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

<Avatar src='https://miro.medium.com/fit/c/240/240/1*1ByDBR2I219gNx76GLSJgg.jpeg' />

<Avatar size='100px' src='https://miro.medium.com/fit/c/240/240/1*1ByDBR2I219gNx76GLSJgg.jpeg' />

<Avatar
  size='large'
  src='https://miro.medium.com/fit/c/240/240/1*1ByDBR2I219gNx76GLSJgg.jpeg'
/>

<Avatar
  size='medium'
  src='https://miro.medium.com/fit/c/240/240/1*1ByDBR2I219gNx76GLSJgg.jpeg'
/>

<Avatar
  size='small'
  src='https://miro.medium.com/fit/c/240/240/1*1ByDBR2I219gNx76GLSJgg.jpeg'
/>
```

### Props
| Name   | Type   | Default | Description                                 |
| ------ | ------ | ------- | ------------------------------------------- |
| `size` | string |         | Sets avatar size to small, medium, or large |
|`src`|string|| Sets avatar `background-image`
