import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

import defaultTheme from '../theme';
import Text from '../Text';
import Box from '../Box';

let lastId = 0;
const newID = (prefix = 'id') => `${prefix}${lastId++}`;

const flashVariant = variant({
  key: 'messageStyle',
});

const StyledFlash = styled(Box)`
  ${flashVariant}

  & {
    position: relative;
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

const Flash = ({ className, children, ...props }) => {
  const id = newID('Flash');
  const contentID = `${id}Content`;
  let ariaRoleType = 'status';

  switch (status) {
    case 'warning':
      ariaRoleType = 'alert';
      break;
    case 'danger':
      ariaRoleType = 'alert';
      break;
    default:
    // invalid status
  }

  return (
    <StyledFlash
      className={className}
      tabIndex={0}
      role={ariaRoleType}
      aria-live="polite"
      aria-describedby={contentID}
      {...props}
    >
      <Text color={'inherit'} display={'inherit'} id={contentID}>
        {children}
      </Text>
    </StyledFlash>
  );
};

Flash.defaultProps = {
  theme: defaultTheme,
  variant: 'base',
  p: '3',
  border: '1',
  borderRadius: 1,
  width: '100%',
};

Flash.displayName = 'Flash';

export default Flash;
