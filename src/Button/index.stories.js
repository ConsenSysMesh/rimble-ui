import { storiesOf } from '@storybook/react'

import React from 'react'
import Button from '../Button'

storiesOf('Button/Default', module)
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
