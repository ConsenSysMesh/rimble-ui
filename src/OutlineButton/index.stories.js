import { storiesOf } from '@storybook/react'

import React from 'react'

import OutlineButton from '../OutlineButton'

storiesOf('Button/OutlineButton', module)
  .add('default', () => (
    <div>
      <OutlineButton size='small'>Small OutlineButton</OutlineButton>
      <OutlineButton size='medium'>Medium OutlineButton</OutlineButton>
      <OutlineButton size='large'>Large OutlineButton</OutlineButton>
    </div>
  ))
