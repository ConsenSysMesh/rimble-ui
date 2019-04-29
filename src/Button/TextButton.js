import React from 'react';
import styled from 'styled-components';

import Button from './BaseButton';

// text
const StyledTextButton = styled(Button)`
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

const TextButton = ({ className, children, ...props }) => {
  return (
    <StyledTextButton className={className} {...props}>
      {children}
    </StyledTextButton>
  );
};

TextButton.defaultProps = {
  px: 2,
};

export default TextButton;
