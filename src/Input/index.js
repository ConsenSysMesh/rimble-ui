import React from 'react'
import styled from 'styled-components'

import {
  themeGet,
  fontSize,
  fontFamily,
  boxShadow
} from 'styled-system'

import Box from '../Box'

import defaultTheme from '../theme'

const Input = styled(Box)`
  & {
    appearance: none;
  }

  &:hover {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  }
  &:focus {
    outline: none;
    border-color: ${themeGet('colors.primary', '#000')};
  }
  &:active {

  }
  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }

  ${boxShadow}
  ${fontSize}
  ${fontFamily}
`

Input.defaultProps = {
  theme: defaultTheme,
  as: 'input',
  color: 'copyColor',
  bg: 'white',
  fontFamily: 'sansSerif',
  fontSize: '1rem',
  lineHeight: 'solid',
  height: '3rem',
  px: 3,
  py: 0,
  border: 1,
  borderColor: 'grey',
  borderRadius: 1,
  boxShadow: 1
}

Input.displayName = 'Input'

export default Input
