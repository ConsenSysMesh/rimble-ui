import React from 'react'
import styled from 'styled-components'

import theme from '../theme'

import {
  borders,
  borderColor,
  borderRadius,
  boxShadow
} from 'styled-system'

const Input = styled.input`
  appearance: none;
  font-size: 1rem;
  line-height: 1;

  height: 48px;
  padding: 0 1rem;

  border: 1px solid;
  background: #FFFFFF;

  ${borders}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}

  &:hover {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  }
  &:focus {
    outline: none;
    border-color: #5436D6;
  }
  &:active {

  }
  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`

Input.defaultProps = {
  theme: theme,
  borders: 0,
  borderColor: 'grey',
  borderRadius: 1,
  boxShadow: 1
}

Input.displayName = 'Input'

export default Input
