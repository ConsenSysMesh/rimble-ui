import React from 'react'

import { storiesOf } from '@storybook/react'

import { Progress } from 'rimble-ui'

storiesOf('Form/Progress', module)
  .add('default', () => (
    <Progress value={0.5} />
  ))
