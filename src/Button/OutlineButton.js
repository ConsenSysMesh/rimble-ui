import React from 'react';
import styled from 'styled-components';

import { ButtonBody } from './BaseButton';
import SolidButton, { StyledSolidButton } from './SolidButton';

// outline style
const StyledOutlineButton = styled(StyledSolidButton)`
  & {
    color: var(--main-color);
    background: transparent;
  }

  &:hover {
    border-color: var(--main-color);
  }

  &:hover::before {
    opacity: 0;
  }

  &:active {
    background: #fff;
  }

  &:active::before {
    opacity: 0.1;
  }

  &::before {
    opacity: 0;
  }
`;

const OutlineButton = React.forwardRef(
  ({ children, icon, iconpos, ...props }, ref) => {
    return (
      <StyledOutlineButton {...props} ref={ref}>
        <ButtonBody icon={icon} iconpos={iconpos} children={children} />
      </StyledOutlineButton>
    );
  }
);

OutlineButton.defaultProps = {
  ...SolidButton.defaultProps,
  border: 1,
  borderColor: 'grey',
  boxShadow: 0,
};

export default OutlineButton;
