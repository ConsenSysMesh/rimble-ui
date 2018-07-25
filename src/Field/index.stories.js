import React from 'react'

import { storiesOf } from '@storybook/react'

import Field from '../Field'
import Input from '../Input'

storiesOf('Field', module)
  .add('text', () => (
    <Field label='label'>
      <Input type='text' />
    </Field>
  ))
