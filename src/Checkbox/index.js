import React from 'react'
import styled from 'styled-components'

import CheckBoxIcon from '../Icon/baseline-check_box-24px'
import CheckBoxOutlineIcon from '../Icon/baseline-check_box_outline_blank-24px'

const StyledWrapper = styled.div`
  & {
    position: relative;
    display: inline-block;
    vertical-align: middle;
  }

  > input {
    position: relative;
    display: block;
    appearance: none;
    background: white;
    height: 1.5rem;
    width: 1.5rem;
    margin: 0;
    font-weight: bold;
  }
  > input:checked + svg.checked {
    display: block;
  }

  > svg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    pointer-events: none;
  }

  > svg.checked {
    display: none;
  }
`

const Checkbox = ({}) => (
  <StyledWrapper>
    <input type="checkbox"/>
    <CheckBoxIcon className='checked'/>
    <CheckBoxOutlineIcon className='unchecked'/>
  </StyledWrapper>
)

export default Checkbox
