import React from 'react'
import styled from 'styled-components'

import Box from '../Box'
import Text from '../Text'

const RequiredLabel = styled(Text)`
  &:after {
    content: ' (required)'
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

      {!children.props.required && <Text fontSize={1} fontWeight={3} mb={2}>{label}</Text> }
      {children.props.required && <RequiredLabel fontSize={1} fontWeight={3} mb={2}>{label}</RequiredLabel> }
      {children}
    </Box>
  )
}

Field.displayName = 'Field'

export default Field
