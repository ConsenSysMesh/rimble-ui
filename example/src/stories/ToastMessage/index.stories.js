import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { ToastMessage } from 'rimble-ui'

storiesOf('ToastMessage', module)
  .addDecorator(withDocs(MyREADME))
  .add('ToastMessage', () => (
    <div>
      <ToastMessage>
        Transaction confirmed
      </ToastMessage>
      <ToastMessage variant="success" my={2}>
        Transaction confirmed
      </ToastMessage>
      <ToastMessage variant="warning" my={2}>
        Transaction confirmed
      </ToastMessage>
      <ToastMessage variant="danger" my={2}>
        Transaction confirmed
      </ToastMessage>
      <ToastMessage variant="info" my={2}>
        Transaction confirmed
      </ToastMessage>
    </div>
  ))
