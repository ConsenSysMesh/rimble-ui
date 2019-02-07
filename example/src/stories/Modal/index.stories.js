import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Modal } from 'rimble-ui'

storiesOf('Modal', module)
  .addDecorator(withDocs(MyREADME))
  .add('Default', () => (
    <div>
      <Modal></Modal>
    </div>
  ))
