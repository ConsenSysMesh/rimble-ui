import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Progress } from 'rimble-ui'

storiesOf('Form/Progress', module)
  .addDecorator(withDocs(MyREADME))
  .add('default', () => (
    <Progress value={0.5} />
  ))
