import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import {
  Card,
  Text,
  Icon,
  MetaMaskButton
} from 'rimble-ui'

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

      <Card size="80px" color="red">
        This is a Card
      </Card>
      <Card size="80px" color="white" bg="primary" >
        This is a Card
      </Card>


      <Card width={'320px'} mx={'auto'} px={4} display="flex" flexDirection="column">
        <Text fontSize={0} fontWeight={4} caps mb={3} display={'flex'} alignItems={'center'} >
          <Icon name={'AccountBalanceWallet'} mr={2}></Icon>
          Connect your Wallet:
        </Text>
        <MetaMaskButton.outline>Install MetaMask</MetaMaskButton.outline>
      </Card>

    </div>
  ))
