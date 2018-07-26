import React from 'react'

import { storiesOf } from '@storybook/react'

import Tooltip from '../Tooltip'
import Button from '../Button'

storiesOf('Tooltip', module)
  .add('default', () => (
    <Tooltip message='Your custom message'>
      hover me
    </Tooltip>
  ))
