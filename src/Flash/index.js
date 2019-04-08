import React from 'react';
import styled from 'styled-components';

import { textAlign } from 'styled-system';
import Box from '../Box';

const Flash = styled(Box)`
  & {
  }
`;

Flash.defaultProps = {
  as: 'div',
  p: '3',
  bg: 'near-white',
  border: '1',
  borderColor: 'light-silver',
};

Flash.displayName = 'Flash';

export default Flash;
