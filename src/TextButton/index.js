import React from 'react'

import styled from 'styled-components'
import { tint } from 'polished'

import Button from '../Button'

import theme from '../theme'

const TextButton = styled(Button)`
  & {
    box-shadow: none;
  }
  &:hover {
    color: #7165D8;
    background-color: transparent;
    text-decoration: underline;
    box-shadow: none;
  }
  &:active {
    color: #332A80;
    text-decoration: none;
  }
`

TextButton.defaultProps = {
  theme: theme,
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
