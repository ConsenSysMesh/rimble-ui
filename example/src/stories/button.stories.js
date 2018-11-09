import React from 'react'

import { storiesOf } from '@storybook/react'

import { Button } from 'rimble-ui'

storiesOf('Button/Default', module)
  .add('sizes', () => (
    <div>
      <Button size='small'>Small Button</Button>
      <Button size='medium'>Medium Button</Button>
      <Button size='large'>Large Button</Button>
      <Button disabled >disabled Button</Button>
    </div>
  ))
  .add('full width', () => (
    <div>
      <Button fullWidth>Full-width Button</Button>
    </div>
  ))
