import React from 'react'

import { storiesOf } from '@storybook/react'

import Progress from '../Progress'

storiesOf('Form/Progress', module)
  .add('default', () => (
    <Progress value={0.5} />
  ))
