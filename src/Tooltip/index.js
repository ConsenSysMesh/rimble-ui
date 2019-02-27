import React from 'react'
import styled from 'styled-components'
import Popper from '@d8660091/react-popper'

import Text from '../Text'

import defaultTheme from '../theme'

const StyledTooltip = styled(Text)`
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

StyledTooltip.defaultProps = {
  theme: defaultTheme,
  fontFamily: 'sansSerif'
}

Tooltip.displayName = 'Tooltip'

Tooltip.defaultProps = {
  placement: 'bottom',
  offset: '0, 0',
  message: 'props.message text'
}

export default Tooltip
