import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

import defaultTheme from '../theme';
import Input from '../Input';

const Textarea = styled(Input)`
  & {
    appearance: none;
  }
`;

Textarea.defaultProps = {
  theme: defaultTheme,
  as: 'textarea',
  color: 'copyColor',
  bg: 'white',
  fontFamily: 'sansSerif',
  fontSize: '1rem',
  lineHeight: 'solid',
  height: 'auto',
  p: 3,
  border: 1,
  borderColor: 'grey',
  borderRadius: 1,
  boxShadow: 1,
};

Textarea.displayName = 'Textarea';

export default Textarea;
