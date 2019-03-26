import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Progress } from 'rimble-ui'

storiesOf('Form', module)
  .addDecorator(withDocs(MyREADME))
  .add('Progress bar', () => (
    <Progress value={0.5} />
  ))
