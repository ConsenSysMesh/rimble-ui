import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Popper from '@d8660091/react-popper';
import theme from '../theme';
import Text from '../Text';

const StyledTooltip = styled(Text)`
  & {
    background: ${props => (props.variant === 'dark' ? '#333' : '#FFF')};
    color: ${props => (props.variant === 'dark' ? '#FFF' : '#666')};
    border: ${props =>
      props.variant === 'dark' ? 'none' : '1px solid #CCCCCC'};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: flex;
    align-items: center;
    min-height: 24px;
    margin: 4px;
    padding: 12px;
    line-height: 16px;
    font-size: 12px;
    z-index: 999999;
  }
`;

const Tooltip = props => {
  const options = {
    placement: props.placement,
    modifiers: {
      offset: {
        offset: props.offset,
      },
    },
  };

  const triggerElement = ({ setReference, toggle }) => (
    <span
      ref={setReference}
      onMouseEnter={toggle}
      onMouseLeave={toggle}
      children={props.children}
      style={{ display: 'inline-block' }}
    />
  );

  if (typeof window !== 'undefined') {
    return (
      <Popper
        options={options}
        renderRef={triggerElement}
        style={{ zIndex: 99999 }}
      >
        <StyledTooltip variant={props.variant} children={props.message} />
      </Popper>
    );
  } else {
    return props.children;
  }
};

StyledTooltip.defaultProps = {
  theme,
  fontFamily: 'sansSerif',
};

Tooltip.propTypes = {
  variant: PropTypes.oneOf(['dark', 'light']),
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  offset: PropTypes.string,
  message: PropTypes.string,
};

Tooltip.displayName = 'Tooltip';

Tooltip.defaultProps = {
  variant: 'dark',
  placement: 'bottom',
  offset: '0, 0',
  message: 'props.message text',
};

export default Tooltip;
