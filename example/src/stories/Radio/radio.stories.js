import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Radio, Field, Input, Box } from 'rimble-ui'

storiesOf('Form', module)
  .addDecorator(withDocs(MyREADME))
  .add('Radio buttons', () => (
    <Box ml={3} textAlign={'left'}>
    <Field label='Choose transaction speed'>
      <Radio label="Quick" my={2} required='false'/>
      <Radio checked label="Standard" my={2} required='false'/>
      <Radio disabled label="Slower" my={2} required='false'/>
      <Radio disabled checked label="Custom" my={2} required='false'/>
    </Field>
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
      <code>{'<Radio label="Quick" />'}</code><br />
      <code>{'<Radio checked label="Standard" />'}</code><br />
      <code>{'<Radio disabled label="Slower" />'}</code><br />
      <code>{'<Radio disabled checked label="Custom" />'}</code>
    </Box>
    </Box>
  ))
