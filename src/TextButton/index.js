import React from 'react'
import styled from 'styled-components'
import { themeGet } from 'styled-system'
import {
  tint,
  shade
} from 'polished'

import Button from '../Button'

const TextButton = styled(Button).attrs({
  primarycolor: props => themeGet('colors.primary', '#000')(props)
})`
  & {
    background-color: transparent;
    box-shadow: none;
  }
  &:hover {
    color: ${props => tint(0.2, props.primarycolor)};
    background-color: transparent;
    text-decoration: underline;
    box-shadow: none;
  }
  &:active {
    color: ${props => shade(0.2, props.primarycolor)};
    text-decoration: none;
    background-color: transparent;
  }
`

TextButton.defaultProps = {
  fontSize: 'inherit',
  fontWeight: '600',
  color: 'primary',
  bg: 'transparent',
  height: '48px',
  border: 'none',
  px: 4,
  py: 0
}

TextButton.displayName = 'TextButton'

export default TextButton
