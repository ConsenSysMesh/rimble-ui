import React from 'react'
import styled from 'styled-components'

import Text from '../Text'

import defaultTheme from '../theme'

// body size + 6 headings
const Heading = styled(Text)``
Heading.defaultProps = {
  theme: defaultTheme,
  as: 'h3',
  fontFamily: 'sansSerif',
  fontSize: 4,
  fontWeight: 3,
  textAlign: 'left',
  my: 3
}

Heading.h1 = styled(Heading)``
Heading.h1.defaultProps = {
  theme: defaultTheme,
  as: 'h1',
  fontFamily: 'sansSerif',
  fontSize: 6,
  fontWeight: 3,
  textAlign: 'left',
  my: 3
}

Heading.h2 = styled(Heading)``
Heading.h2.defaultProps = {
  theme: defaultTheme,
  as: 'h2',
  fontFamily: 'sansSerif',
  fontSize: 5,
  fontWeight: 3,
  textAlign: 'left',
  my: 3
}
Heading.h3 = styled(Heading)``
Heading.h3.defaultProps = {
  theme: defaultTheme,
  as: 'h3',
  fontFamily: 'sansSerif',
  fontSize: 4,
  fontWeight: 3,
  textAlign: 'left',
  my: 3
}
Heading.h4 = styled(Heading)``
Heading.h4.defaultProps = {
  theme: defaultTheme,
  as: 'h4',
  fontFamily: 'sansSerif',
  fontSize: 3,
  fontWeight: 3,
  textAlign: 'left',
  my: 3
}
Heading.h5 = styled(Heading)``
Heading.h5.defaultProps = {
  theme: defaultTheme,
  as: 'h5',
  fontFamily: 'sansSerif',
  fontSize: 2,
  fontWeight: 3,
  textAlign: 'left',
  my: 3
}
Heading.h6 = styled(Heading)``
Heading.h6.defaultProps = {
  theme: defaultTheme,
  as: 'h6',
  fontFamily: 'sansSerif',
  fontSize: 1,
  fontWeight: 3,
  textAlign: 'left',
  my: 3
}

Heading.displayName = 'Heading'

export default Heading
