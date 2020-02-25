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
  <>
    <Text color={'white'} bg={'primary'}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam unde incidunt soluta!
    </Text>
    <Text color={'background'} bg={'text'}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam unde incidunt soluta!
    </Text>
  </>
);

export const withOtherElements = () => (
  <>
    <Text as={'span'}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam unde incidunt soluta!
    </Text>
    <Text as={'p'}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam unde incidunt soluta!
    </Text>

    <Text as={'b'}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam unde incidunt soluta!
    </Text>
    <Text as={'em'}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam unde incidunt soluta!
    </Text>
    <Text as={'i'}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam unde incidunt soluta!
    </Text>
    <Text as={'small'}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam unde incidunt soluta!
    </Text>
    <Text as={'strong'}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam unde incidunt soluta!
    </Text>
    <Text as={'sub'}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam unde incidunt soluta!
    </Text>
    <Text as={'sup'}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam unde incidunt soluta!
    </Text>
    <Text as={'ins'}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam unde incidunt soluta!
    </Text>
    <Text as={'del'}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam unde incidunt soluta!
    </Text>
    <Text as={'mark'}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam unde incidunt soluta!
    </Text>
  </>
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
