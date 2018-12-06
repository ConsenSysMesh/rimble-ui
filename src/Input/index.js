import React from 'react'
import styled from 'styled-components'

import theme from '../theme'

import {
  borders,
  borderColor,
  borderRadius
} from 'styled-system'

const Input = styled.input`
  appearance: none;
  font-size: 1rem;
  line-height: 1;

  height: 48px;
  padding: 0 1rem;

  /* Rectangle 3: */
  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  /* box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10); */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  ${borderRadius}

  &:hover {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  }
  &:focus {
    outline: none;
    /* border-color: ${ props => props.theme.colors.primary } */
    border: 1px solid #5436D6;
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
  borderRadius: 0
}

Input.displayName = 'Input'

export default Input
