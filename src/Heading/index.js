import React from 'react'

//
import styled from 'styled-components'
import Text from '../Text'

// body size + 6 headings
const Heading = Text.withComponent('h3')

Heading.defaultProps = {
  regular: true,
  fontSize: 4,
  my: 3,
}

Heading.h1 = Heading.withComponent('h1')
Heading.h1.defaultProps = {
  fontSize: 6,
  my: 3,
}

Heading.h2 = Heading.withComponent('h2')
Heading.h2.defaultProps = {
  fontSize: 5,
  my: 3,
}
Heading.h3 = Heading.withComponent('h3')
Heading.h3.defaultProps = {
  fontSize: 4,
  my: 3,
}
Heading.h4 = Heading.withComponent('h4')
Heading.h4.defaultProps = {
  fontSize: 3,
  my: 3,
}
Heading.h5 = Heading.withComponent('h5')
Heading.h5.defaultProps = {
  fontSize: 2,
  my: 3,
}
Heading.h6 = Heading.withComponent('h6')
Heading.h6.defaultProps = {
  fontSize: 1,
  my: 3,
}


export default Heading
