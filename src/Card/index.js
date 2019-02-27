import React from 'react';
import styled from 'styled-components'
import { textAlign } from 'styled-system'
import Box from '../Box'

const Card = styled(Box)`
  & {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
    transition: box-shadow 300ms ease;
  }
  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
  }

  ${textAlign}
`

Card.defaultProps = {
  position: 'relative',
  bg: 'white',
  border: 1,
  borderColor: '#D6D6D6',
  mx: 0,
  my: 2,
  width: '100%',
  minWidth: 1,
  height: 'auto',
  minHeight: 1,
  p: 4,
  textAlign: 'left'
}

Card.displayName = 'Card'

export default Card;
