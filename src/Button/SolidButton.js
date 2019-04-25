import React from 'react';
import styled from 'styled-components';

import Button from './BaseButton';

// outline
const StyledSolidButton = styled(Button)`
  & {
    color: var(--contrast-color);
    background: var(--main-color);
  }

  &:hover {
    text-decoration: inherit;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    height: 100%;
    width: 100%;
    background: none;
    opacity: 0;
    transition: opacity 0.15s ease;
  }

  &:hover::before {
    background: #fff;
    opacity: 0.1;
  }

  &:active::before {
    background: #000;
    opacity: 0.1;
  }
`;

const SolidButton = ({ className, children, ...props }) => {
  return (
    <StyledSolidButton className={className} {...props}>
      {children}
    </StyledSolidButton>
  );
};

export default SolidButton;
