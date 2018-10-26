import React from 'react'
import styled from 'styled-components'

const StyledSelect = styled.select`
  ${'' /* display: block; */}
  appearance: none;
  font-size: 1rem;
  border-radius: ${ props => props.theme.radii[0] };

  height: 48px;
  padding: 0 3rem 0 1rem;

  /* Rectangle 3: */
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

const Select = (props) => {
  return <StyledSelect>
    {props.items.map(
      (item, i) => (<option key={i} value={item}>{item}</option>)
    )}
  </StyledSelect>
}

export default Select
