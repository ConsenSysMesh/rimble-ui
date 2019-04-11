import React from 'react';
import styled from 'styled-components';

import defaultTheme from '../theme';

// import Box from '../Box';
import Text from '../Text';

// const ProtoFlash = ({ className, children}) => (
//   <Box className={className} bg={'red'}>
//     <Text>
//       {children}
//     </Text>
//   </Box>
// )

const Flash = styled(Text)`
  & {
  }

  a {
    font-size: inherit;
    cursor: pointer;
    color: inherit;
  }
`;

Flash.defaultProps = {
  theme: defaultTheme,
  as: 'div',
  p: '3',
  bg: 'near-white',
  color: 'mid-gray',
  borderColor: 'mid-gray',
  border: '1',
  borderRadius: 1,
  fontFamily: 'sansSerif',
};

Flash.displayName = 'Flash';

export default Flash;
