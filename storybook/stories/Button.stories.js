import React from 'react';
import { Button, MetaMaskButton, UPortButton } from 'rimble-ui'

export default {
  title: 'Buttons'
}

export const solid = () => (
  <Button>
    Solid Button
  </Button>
)

export const outline = () => (
  <Button.Outline>
    Outline Button
  </Button.Outline>
)

export const text = () => (
  <Button.Text>
    Text Button
  </Button.Text>
)

export const metaMaskSolid = () => (
  <MetaMaskButton>
    Connect with MetaMask
  </MetaMaskButton>
)

export const metaMaskOutline = () => (
  <MetaMaskButton.Outline>
    Connect with MetaMask
  </MetaMaskButton.Outline>
)

export const uPortSolid = () => (
  <UPortButton.Solid>
    Connect with uPort
  </UPortButton.Solid>
)

export const uPortOutline = () => (
  <UPortButton>
    Connect with uPort
  </UPortButton>
)
