import React from 'react';
import styled from 'styled-components';

import { boxShadow } from 'styled-system';

import Button from './BaseButton';

// outline
const StyledSolidButton = styled(Button)`
  & {
    color: var(--contrast-color);
    ${'' /* background: var(--main-color); */}
    background: #FFF;

    position: relative;
    z-index: 0;
    transition: all 0.15s ease;
  }

  &:hover {
    text-decoration: inherit;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    ${'' /* opacity: 0.5; */}
  }

  &:active {
    box-shadow: none;
    background: #000;
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
    z-index: 1;
    height: 100%;
    width: 100%;
    ${'' /* opacity: 0; */}
    ${'' /* background: none; */}
    background: var(--main-color);
    ${'' /* background: #fff; */}
    pointer-events: none;
  }

  &:hover::before {
    ${'' /* background: #fff; */}
    opacity: 0.9;
  }

  ${'' /* &:active::before {
    background: #000;
    opacity: 0.1;
  } */}

  ${boxShadow}
`;

const SolidButton = ({ className, children, ...props }) => {
  return (
    <StyledSolidButton className={className} {...props}>
      {children}
    </StyledSolidButton>
  );
};

SolidButton.defaultProps = {
  borderRadius: 1,
  boxShadow: 1,
};

export default SolidButton;
