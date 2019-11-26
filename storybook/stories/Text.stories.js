import React from 'react';
import { Text } from 'rimble-ui';

export default {
  title: 'Text'
};

export const text = () => (
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam unde incidunt soluta!
  </Text>
);

export const changeColors = () => (
  <Text as={'p'} color={'white'} bg={'primary'}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam unde incidunt soluta!
  </Text>
);

// export const caps = () => (
//   <Text caps>
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam unde incidunt soluta!
//   </Text>
// );

// export const italic = () => (
//   <Text italic>
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam unde incidunt soluta!
//   </Text>
// );
