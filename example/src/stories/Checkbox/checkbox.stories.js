import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Checkbox, Box, Text, Field } from 'rimble-ui'

storiesOf('Form', module)
  .addDecorator(withDocs(MyREADME))
  .add('Checkboxes', () => (
    <Box ml={3} textAlign={'left'}>
    <Field label='Check all that apply'>
      <Checkbox label="Checkbox default" required="true" my={2} />
      <Checkbox checked label="Checkbox checked" required="true" my={2} />
      <Checkbox disabled label="Checkbox disabled" required="true" my={2} />
      <Checkbox disabled checked label="Checkbox checked disabled" required="true" my={2} />
    </Field>
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
      <code>{'<Checkbox label="Checkbox default" />'}</code><br />
      <code>{'<Checkbox checked label="Checkbox checked" />'}</code><br />
      <code>{'<Checkbox disabled label="Checkbox disabled" />'}</code><br />
      <code>{'<Checkbox disabled checked label="Checkbox checked disabled" />'}</code>
    </Box>
    </Box>
  ))
