import React from 'react'

import Box from '../Box'
import Text from '../Text'

const Field = ({ children, label, ...props }) => (
  <Box as='label' display='flex' flexDirection='column' alignItems='flex-start' htmlFor='' {...props}>
    <Text fontSize={1} fontWeight={3} mb={2}>
      {label}
    </Text>
    {children}
  </Box>
)

Field.displayName = 'Field'

export default Field
