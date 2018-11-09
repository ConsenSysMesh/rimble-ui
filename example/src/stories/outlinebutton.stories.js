import React from 'react'

import { storiesOf } from '@storybook/react'

import { OutlineButton } from 'rimble-ui'

storiesOf('Button/OutlineButton', module)
  .add('default', () => (
    <div>
      <OutlineButton size='small'>Small OutlineButton</OutlineButton>
      <OutlineButton size='medium'>Medium OutlineButton</OutlineButton>
      <OutlineButton size='large'>Large OutlineButton</OutlineButton>
    </div>
  ))
