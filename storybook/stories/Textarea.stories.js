import React from 'react';
import { Textarea } from 'rimble-ui'

export default {
  title: 'Textarea'
}

export const textarea = () => (
  <Textarea rows={4} defaultValue={'Start typing… '} />
)
