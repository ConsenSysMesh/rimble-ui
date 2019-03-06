import React from 'react'
import styled from 'styled-components'

import Box from '../Box'
import Text from '../Text'

const OptionalLabel = styled(Text)`
  &:after {
    content: ' (optional)'
  }
`

const Field = ({ children, label, ...props }) => {
  console.log(children.props.required)
  return (
    <Box
      as='label'
      display='flex'
      flexDirection='column'
      alignItems='flex-start'
      mb={3}
      {...props}
    >

      {children.props.required && <Text fontSize={1} fontWeight={3} mb={2}>{label}</Text> }
      {!children.props.required && <OptionalLabel fontSize={1} fontWeight={3} mb={2}>{label}</OptionalLabel> }
      {children}
    </Box>
  )
}

Field.displayName = 'Field'

export default Field
