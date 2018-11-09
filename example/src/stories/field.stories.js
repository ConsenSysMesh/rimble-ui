import React from 'react'

import { storiesOf } from '@storybook/react'

import { Field } from 'rimble-ui'
import { Input } from 'rimble-ui'

storiesOf('Form/Field', module)
  .add('default', () => (
    <Field label='label'>
      <Input type='text' />
    </Field>
  ))
