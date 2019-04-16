import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

import defaultTheme from '../theme';
import Text from '../Text';

const flashVariant = variant({
  key: 'messageStyle',
});

const StyledFlash = styled(Text)`
  ${flashVariant}

  & {
  }

  a {
    font-size: inherit;
    cursor: pointer;
    color: inherit;
    &:hover {
      color: inherit;
    }
  }
`;

const Flash = ({ className, children, ...props }) => (
  <StyledFlash className={className} {...props}>
    {children}
  </StyledFlash>
);

Flash.defaultProps = {
  theme: defaultTheme,
  variant: 'base',
  fontFamily: 'sansSerif',
  p: '3',
  border: '1',
  borderRadius: 1,
};

Flash.displayName = 'Flash';

export default Flash;
