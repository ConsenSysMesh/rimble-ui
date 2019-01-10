import React from 'react'
import styled from 'styled-components'
import { triangle } from 'polished'

import Popper from '@d8660091/react-popper'

const StyledTooltip = styled.div`
  ${'' /* background: black;
  color: white;
  padding: .5rem 1rem;
  border-radius: 4px; */}
  & {
    background: ${ props => props.variant === 'dark' ? '#000' : '#FFF' };
    color: ${ props => props.variant === 'dark' ? '#FFF' : '#666' };
    border: ${ props => props.variant === 'dark' ? 'none' : '1px solid #CCCCCC' };

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    min-height: 2.5rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    margin: 4px 8px;

    line-height: 24px;
    font-size: 14px;
    z-index: 999999;
  }

  ${'' /* &:after, &:before {
    content: '';
    position: absolute;
    margin: auto;
    bottom: calc(100% - 1px);
    left: 0;
    right: 0;
    ${triangle({ pointingDirection: 'top', width: '16px', height: '8px', foregroundColor: 'white' })}
  }
  &:before {
    bottom: 100%;
    ${triangle({ pointingDirection: 'top', width: '16px', height: '8px', foregroundColor: '#CCC' })}
  } */}
`

const Tooltip = (props) => {
  const options = {
    placement: props.placement,
    modifiers: {
      offset: {
        offset: props.offset
      }
    }
  }

  const triggerElement = ({ setReference, toggle }) => (
    <span
      ref={setReference}
      onMouseEnter={toggle}
      onMouseLeave={toggle}
      >
      {props.children}
    </span>
  )

  return (
    <Popper renderRef={triggerElement} options={options} style={{zIndex: 99999}}>
      <StyledTooltip variant={props.variant}>
        {props.message}
      </StyledTooltip>
    </Popper>
  )
}

Tooltip.defaultProps = {
  placement: 'bottom',
  offset: '0, 0',
  message: 'props.message text'
}

export default Tooltip
