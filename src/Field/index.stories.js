import React from 'react'

import { storiesOf } from '@storybook/react'

import Field from '../Field'
import Input from '../Input'

storiesOf('Form/Field', module)
  .add('default', () => (
    <Field label='label'>
      <Input type='text' />
    </Field>
  ))
