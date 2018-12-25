import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { MetaMaskButton } from 'rimble-ui'

storiesOf('Button', module)
  .addDecorator(withDocs(MyREADME))
  .add('MetaMaskButton', () => (
    <div>
      <MetaMaskButton mb={3}>Connect with MetaMask</MetaMaskButton>
      <br/>
      <MetaMaskButton.outline mb={3}>Connect with MetaMask</MetaMaskButton.outline>
      <br/>
      <MetaMaskButton fullWidth mb={3}>Connect with MetaMask</MetaMaskButton>
      <br/>
      <MetaMaskButton.outline  mb={3} fullWidth >Connect with MetaMask</MetaMaskButton.outline>


      <MetaMaskButton size="small" mb={3} mr={3}>Connect with MetaMask</MetaMaskButton>
      <MetaMaskButton.outline size="small" mb={3}>Connect with MetaMask</MetaMaskButton.outline>
      <br/>
      <MetaMaskButton size="medium" mb={3} mr={3}>Connect with MetaMask</MetaMaskButton>
      <MetaMaskButton.outline size="medium" mb={3}>Connect with MetaMask</MetaMaskButton.outline>
      <br/>
      <MetaMaskButton size="large" mb={3} mr={3}>Connect with MetaMask</MetaMaskButton>
      <MetaMaskButton.outline size="large" mb={3}>Connect with MetaMask</MetaMaskButton.outline>
    </div>
  ))
