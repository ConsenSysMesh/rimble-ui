# Tooltip documentation
A simple styled tooltip. The`Tooltip` component uses [react-popper](https://github.com/d8660091/react-popper).

**Import component**
```jsx
import { Tooltip } from 'rimble-ui'
```

<!-- STORY -->



<!-- component example here -->
```jsx
<Text textAlign='center' my={3}>
  <Tooltip variant='dark' message='Your custom message' placement='top'>
      hover me
  </Tooltip>
</Text>
<Text textAlign='center' my={3}>
  <Tooltip message='Your custom message' placement='right'>
    hover me
  </Tooltip>
</Text>
<Text textAlign='center' my={3}>
  <Tooltip message='Your custom message' placement='bottom'>
    hover me
  </Tooltip>
</Text>
<Text textAlign='center' my={3}>
  <Tooltip message='Your custom message' placement='left'>
    hover me
  </Tooltip>
</Text>

```

```jsx
<Flex size='80px' borderRadius='100%' mx='auto' my='5' bg='#ccc' alignItems='center' justifyContent='center'>
  <Tooltip message='Wrap me around your tooltip trigger'>
    <Icon name='Info' />
  </Tooltip>
</Flex>
```

### Tooltip with Icon Button
```jsx
<Tooltip variant='dark' message='Edit'>
  <TextButton icononly icon='Edit' color='#666' />
</Tooltip>
```

### Tooltip to show some content
```jsx
<Tooltip variant='dark' message='Learn more about feature'>
  <TextButton icononly icon='Info' color='#666' />
</Tooltip>
```

### Appearance
```jsx
<Tooltip message='Edit'>
  <Button icononly icon='Edit' />
</Tooltip>

<Tooltip variant='light' message='Edit'>
  <Button icononly icon='Edit' />
</Tooltip>

<Tooltip variant='dark' message='Edit'>
  <Button icononly icon='Edit' />
</Tooltip>
```

### Position
```jsx
<Tooltip message='Your custom message' placement='left'>
  hover me
</Tooltip>
```


<!-- component props -->
