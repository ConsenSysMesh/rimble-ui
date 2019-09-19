import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import Button, { StyledButton, ButtonBody } from './BaseButton';

// outline styles
const StyledSolidButton = styled(StyledButton)`
  & {
    color: var(--contrast-color);
    ${'' /* background: var(--main-color); */}
    background: #FFF;
    z-index: 0;
    transition: all 0.15s ease;
  }

  &:hover {
    text-decoration: inherit;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:hover::before {
    opacity: 0.9;
  }

  &:active {
    box-shadow: none;
    background: #000;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    height: 100%;
    width: 100%;
    background: var(--main-color);
    pointer-events: none;
  }
`;

const SolidButton = React.forwardRef(
  ({ children, icon, iconpos, ...props }, ref) => {
    return (
      <StyledSolidButton {...props} ref={ref}>
        <ButtonBody icon={icon} iconpos={iconpos} children={children} />
      </StyledSolidButton>
    );
  }
);

SolidButton.defaultProps = {
  ...Button.defaultProps,
  borderRadius: 1,
  boxShadow: 1,
};

export { StyledSolidButton };

export default SolidButton;
