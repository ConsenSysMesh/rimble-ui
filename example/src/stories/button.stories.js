import React from 'react'

import { storiesOf } from '@storybook/react'

import { Button } from 'rimble-ui'

storiesOf('Button/Default', module)
  .add('default', () => (
    <Button>Click Me</Button>
  ))
  .add('sizes', () => (
    <div>
      <Button size='small'>Small Button</Button>
      <br/>
      <Button size='medium'>Medium Button</Button>
      <br/>
      <Button size='large'>Large Button</Button>
      <br/>
      <Button fullWidth>Full-width Button</Button>
    </div>
  ))
  .add('Disabled', () => (
    <Button disabled >disabled Button</Button>
  ))
