import React from 'react'

import { storiesOf } from '@storybook/react'

import { Tooltip } from 'rimble-ui'
import { Button } from 'rimble-ui'

storiesOf('Tooltip', module)
  .add('default', () => (
    <Tooltip message='Your custom message'>
      hover me
    </Tooltip>
  ))
