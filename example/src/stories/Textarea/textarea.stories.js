import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Textarea, Box } from 'rimble-ui'

storiesOf('Form', module)
  .addDecorator(withDocs(MyREADME))
  .add('Textarea', () => (
<Box textAlign={'left'}>
<Box>
<Textarea rows={4} defaultValue='Start typing...' />
</Box>
<Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
<code>{'<Textarea rows={4} defaultValue="Start typing..." />'}</code>
</Box>
</Box>
  ))
