import React from 'react';
import { Input } from 'rimble-ui'

export default {
  title: 'Input'
}

export const input = () => (
  <Input
    type={'text'}
    placeholder={'placeholder'}
    required={'true'}
  />
)
