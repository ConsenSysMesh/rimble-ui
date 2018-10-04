import React from 'react'

import { storiesOf } from '@storybook/react'

import Textarea from '../Textarea'

storiesOf('Form/Textarea', module)
  .add('default', () => (
    <Textarea rows={4} defaultValue='Hello' />
  ))
