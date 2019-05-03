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
    background: inherit;
    box-shadow: inherit;
  }

  &:active {
    text-decoration: none;
  }

  &::before {
    display: none;
  }
`;

const TextButton = ({ className, children, icon, ...props }) => {
  return (
    <StyledTextButton className={className} {...props}>
      <ButtonBody icon={icon} children={children} />
    </StyledTextButton>
  );
};

TextButton.defaultProps = {
  ...Button.defaultProps,
  px: 2,
};

export default TextButton;
