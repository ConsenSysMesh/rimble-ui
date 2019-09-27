import React from 'react';
import { Box, Flex } from 'rimble-ui'

export default {
  title: 'Box'
}

export const box = () => (
  <Box width={1} height={5} bg={'primary'} />
)

export const flex = () => (
  <Flex  >
    <Box width={1} height={5} bg={'primary'} m={1} />
    <Box width={1} height={5} bg={'primary'} m={1} />
    <Box width={1} height={5} bg={'primary'} m={1} />
    <Box width={1} height={5} bg={'primary'} m={1} />
  </Flex>
)
