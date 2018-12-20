import React from 'react';
import styled from 'styled-components'

import Box from '../Box'

const Card = styled(Box)`


  ${'' /* background: #FFFFFF; */}
  border: 1px solid #D6D6D6;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
`

Card.defaultProps = {
  bg: 'white',
  mx: 0,
  my: 2,
  width: '100%',
  minWidth: 1,
  height: 'auto',
  minHeight: 1,
  p: 4,
}

Card.displayName = 'Card'

export default Card;
