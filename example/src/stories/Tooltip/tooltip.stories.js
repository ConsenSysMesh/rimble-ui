import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Tooltip } from 'rimble-ui'
import { Button } from 'rimble-ui'

storiesOf('Tooltip', module)
  .addDecorator(withDocs(MyREADME))
  .add('default', () => (
    <Tooltip message='Your custom message'>
      hover me
    </Tooltip>
  ))
