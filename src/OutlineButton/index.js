import React from 'react'

import styled from 'styled-components'
import { tint } from 'polished'

import Button from '../Button'

const OutlineButton = styled(Button)`
  & {
  }
  &:hover {
    background-color: ${props => tint(0.9, props.theme.colors.primary)};
  }
`

OutlineButton.defaultProps = {
  color: 'primary',
  bg: 'transparent',
  border: 1,
}

OutlineButton.displayName = 'OutlineButton'

export default OutlineButton
