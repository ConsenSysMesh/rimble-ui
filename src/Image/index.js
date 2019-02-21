import React from 'react';
import styled from 'styled-components'

import Box from '../Box'

import defaultTheme from '../theme'

const Image = styled(Box)`
  & {}
`

Image.defaultProps = {
  theme: defaultTheme,
  as: 'img',
  display: 'block',
  width: '100%',
  bg: 'light-gray'
}

Image.displayName = 'Image'

export default Image;
