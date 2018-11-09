import React from 'react'

import { storiesOf } from '@storybook/react'

import { TextButton } from 'rimble-ui'

storiesOf('Button/TextButton', module)
  .add('default', () => (
    <div>
      <TextButton size='small'>Small TextButton</TextButton>
      <TextButton size='medium'>Medium TextButton</TextButton>
      <TextButton size='large'>Large TextButton</TextButton>
    </div>
  ))
