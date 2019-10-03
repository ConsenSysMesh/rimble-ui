import React from 'react';
import { ToastMessage } from 'rimble-ui'

export default {
  title: 'ToastMessage'
}

export const light = () => (
  <ToastMessage message={'0xAc0...e5A connected'} />
)

export const dark = () => (
  <ToastMessage message={'0xAc0...e5A connected'} colorTheme={'dark'} />
)

export const icon = () => (
  <ToastMessage
    message={'Write update here [Required]'}
    secondaryMessage={'Supporting information for update [Optional]'}
    icon={'InfoOutline'}
    actionText={'Link'}
    actionHref={'#!'}
  />
)

export const success = () => (
  <ToastMessage
    message={'Payment sent'}
    secondaryMessage={'You have 4.20 ETH remaining'}
    variant={'success'}
  />
)

export const failure = () => (
  <ToastMessage
    message={'Transaction failed'}
    secondaryMessage={"You didn't have enough Ether"}
    variant={'failure'}
  />
)

export const processing = () => (
  <ToastMessage
    message={'Processing payment...'}
    variant={'processing'}
  />
)
