import React from 'react'
import styled from 'styled-components'

import Input from '../Input'

const Textarea = styled.textarea`
  appearance: none;
  font-size: 1rem;
  line-height: 1;
  border-radius: ${ props => props.theme.radii[0] };

  padding: 1rem;
  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);

  &:hover {

  }
  &:focus {
    outline: none;
    border-color: ${ props => props.theme.colors.primary }
  }
  &:active {

  }
  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`

export default Textarea
