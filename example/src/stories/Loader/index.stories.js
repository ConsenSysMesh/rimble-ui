import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Loader, Button } from 'rimble-ui'

storiesOf('Loader', module)
  .addDecorator(withDocs(MyREADME))
  .add('Default', () => (
    <div>
      <Loader />
      <Loader color="white" bg="primary" />

      <Loader size="40px" />
      <Loader size="80px" color="red" />
      <Loader size="80px" color="white" bg="primary" />

      <Loader color="black" />
      <Loader color="white" bg="grey" />
    </div>
  ))
