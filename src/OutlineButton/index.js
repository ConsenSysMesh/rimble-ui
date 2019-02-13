import React from 'react'

import styled from 'styled-components'
import { tint, shade } from 'polished'

import Button from '../Button'

const OutlineButton = styled(Button)`
  & {
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
  }
  &:hover {
    color: ${props => tint(0.2, props.theme.colors.primary)};
    border-color: ${props => tint(0.2, props.theme.colors.primary)};
    background-color: #FFF;
  }
  &:active {
    color: ${props => shade(0.2, props.theme.colors.primary)};
    border-color: ${props => shade(0.2, props.theme.colors.primary)};
    background-color: ${props => tint(0.9, props.theme.colors.primary)};
  }
`

OutlineButton.defaultProps = {
  color: 'primary',
  bg: 'white',
  fontWeight: 3,
  height: '48px',
  border: 1,
  px: 4,
  py: 0,
  borderRadius: 1,
}

OutlineButton.displayName = 'OutlineButton'

export default OutlineButton
