import React from 'react'
import styled from 'styled-components'

import {
  borders,
  borderColor,
  borderRadius,
  boxShadow
} from 'styled-system'

import ExpandMore from 'rmdi/lib/ExpandMore'

const Wrapper = styled.span`
  & {
    position: relative;
  }

  > svg {
    position: absolute;
    right: 1rem;
    top: 0;
    bottom: 0;
    pointer-events: none;
    margin: auto;
  }
`

const StyledSelect = styled.select`
  appearance: none;
  font-size: 1rem;
  line-height: 48px;
  padding: 0 3rem 0 1rem;
  background: #FFF;

  ${borders}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}

  &:hover {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  }
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
  &:active {
  }
  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`

const Select = (props) => (
  <Wrapper>
    <StyledSelect {...props}>
      {props.items.map(
        (item, i) => (<option key={i} value={item}>{item}</option>)
      )}
    </StyledSelect>
    <ExpandMore />
  </Wrapper>
)

Select.defaultProps = {
  borders: 1,
  borderColor: 'grey',
  borderRadius: 1,
  boxShadow: 1
}

Select.displayName = 'Select'

export default Select
