import { storiesOf } from '@storybook/react'

import React from 'react'
import Button from '../Button'

storiesOf('Button', module)
  .add('sizes', () => (
    <div>
      <Button size='small'>Small Button</Button>
      <Button size='medium'>Medium Button</Button>
      <Button size='large'>Large Button</Button>
    </div>
  ))
  .add('full width', () => (
    <div>
      <Button fullWidth>Full-width Button</Button>
    </div>
  ))
  .add('modes', () => (
    <div>
      <Button mode='solid'>Solid Button</Button>
      <Button mode='outline'>Outline Button</Button>
      <Button mode='text'>Text Button</Button>
    </div>
  ))
