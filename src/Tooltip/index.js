import React from 'react'
import styled from 'styled-components'

import Popper from '@d8660091/react-popper'

const StyledContentDiv = styled.div`
  background: black;
  color: white;
  padding: .5rem 1rem;
  border-radius: 4px;
`

const Tooltip = (props) => {
  return <Popper
    options={{
      placement: 'bottom'
    }}
    renderRef={({ setReference, toggle }) => (
      <span ref={setReference} onMouseEnter={toggle} onMouseLeave={toggle} style={{'display':'inline-block'}}>
        {props.children}
      </span>
    )}>
    <StyledContentDiv>Popper content</StyledContentDiv>
  </Popper>
}
export default Tooltip
