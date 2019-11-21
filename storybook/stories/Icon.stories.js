import React from 'react';
import { Icon, Tooltip } from 'rimble-ui'

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

export const withMarginAndPadding = () => (
  <Icon
    name={'MoneyOff'}
    color={'red'}
    size={'80'}
    p={4}
    m={3}
  />
)

export const withTooltip = () => (
  <Tooltip message={'this is a tooltip icon'}>
    <Icon
      name={'Info'}
      color={'primary'}
      size={'2rem'}
      m={5}
    />
  </Tooltip>
)
