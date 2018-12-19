import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Card } from 'rimble-ui'

storiesOf('Card', module)
  .addDecorator(withDocs(MyREADME))
  .add('Default', () => (
    <div>
      <Card>
        This is a Card
      </Card>
      <Card color="white" bg="primary" >
        This is a Card
      </Card>

      <Card size="40px" />
      <Card size="80px" color="red" />
      <Card size="80px" color="white" bg="primary" />

      <Card color="black" />
      <Card color="white" bg="grey" />
    </div>
  ))
