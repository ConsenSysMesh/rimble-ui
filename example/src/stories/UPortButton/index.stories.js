import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { UPortButton, Flex } from 'rimble-ui'

storiesOf('Button', module)
  .addDecorator(withDocs(MyREADME))
  .add('UPortButton', () => (
    <div>
      <Flex mb={3} justifyContent={'center'}>
        <UPortButton>Connect with uPort</UPortButton>
      </Flex>
      <Flex justifyContent={'center'}>
        <UPortButton.Solid>Connect with uPort</UPortButton.Solid>
      </Flex>
    </div>
  ))
