import React from 'react';
import styled from 'styled-components';

import Button, { StyledButton, ButtonBody } from './BaseButton';

// text
const StyledTextButton = styled(StyledButton)`
  & {
    color: var(--main-color);
    border: none;
    background: none;
    box-shadow: none;
  }

  &:hover {
    text-decoration: underline;
    background: none;
    box-shadow: none;
  }

  &:active {
    text-decoration: none;
  }

  &::before {
    display: none;
  }
`;

const TextButton = React.forwardRef(
  ({ children, icon, iconpos, ...props }, ref) => {
    return (
      <StyledTextButton {...props} ref={ref}>
        <ButtonBody icon={icon} iconpos={iconpos} children={children} />
      </StyledTextButton>
    );
  }
);

TextButton.defaultProps = {
  ...Button.defaultProps,
  px: 2,
};

export default TextButton;
