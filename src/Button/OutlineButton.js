import React from 'react';
import styled from 'styled-components';

import SolidButton from './SolidButton';

// outline
const StyledOutlineButton = styled(SolidButton)`
  & {
    color: var(--main-color);
    border: 1px solid;
    border-color: gray;
    background: transparent;
  }

  &&:hover {
    border-color: var(--main-color);
  }

  ${'' /* &&:hover::before {
    opacity: 0;
    background-color: var(--main-color);
  } */}

  &&:active::before {
    opacity: 0.1;
    background: var(--main-color);
  }
`;

const OutlineButton = ({ className, children, ...props }) => {
  return (
    <StyledOutlineButton className={className} {...props}>
      {children}
    </StyledOutlineButton>
  );
};

export default OutlineButton;
