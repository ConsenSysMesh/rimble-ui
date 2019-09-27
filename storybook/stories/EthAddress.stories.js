import React from 'react';
import { EthAddress } from 'rimble-ui'

export default {
  title: 'EthAddress'
}

export const iconLabels = () => (
  <EthAddress address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'} />
)

export const textLabels = () => (
  <EthAddress textLabels address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'} />
)
