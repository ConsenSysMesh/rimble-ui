import React from 'react';
import { Icon } from 'rimble-ui'

export default {
  title: 'Icon'
}

export const icon = () => (
  <Icon name={'Check'} />
)

export const withColor = () => (
  <Icon name={'MoneyOff'} color={'primary'} />
)

export const withColorAndSize = () => (
  <Icon name={'MoneyOff'} color={'red'} size={'80'} />
)
