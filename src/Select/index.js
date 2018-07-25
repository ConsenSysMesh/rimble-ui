import React from 'react'
import styled from 'styled-components'

const StyledSelect = styled.select`
  display: block;
  ${'' /* font-family: inherit; */}
`

const Select = (props) => {
  return <StyledSelect>
    {props.items.map(
      (item, i) => (<option key={i} value={item}>{item}</option>)
    )}
    {/* {props.children} */}
  </StyledSelect>
}


export default Select
