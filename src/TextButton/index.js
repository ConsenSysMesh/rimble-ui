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
    background-color: transparent;
    box-shadow: none;
  }
`

TextButton.defaultProps = {
  color: 'primary',
  bg: 'transparent',
  border: 'none',
  borderRadius: 'none',
  theme: theme
}

TextButton.displayName = 'TextButton'

export default TextButton
