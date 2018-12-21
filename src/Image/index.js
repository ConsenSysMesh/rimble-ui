import React from 'react';
import styled from 'styled-components'
import Box from '../Box'

const Image = styled(Box)`
  & {
    background: #F7F7F7;
  }
`

Image.defaultProps = {
  as: 'img',
  display: 'block',
  width: '100%'
}

Image.displayName = 'Image'

export default Image;
