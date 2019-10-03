import React from 'react';
import { Flash } from 'rimble-ui'

export default {
  title: 'Flash'
}

export const defaultFlash = () => (
  <Flash>
    Flash "info"
    This is a primary alert with an <Flash.Link>example link</Flash.Link>. Give it a click if you like.
  </Flash>
)

export const info = () => (
  <Flash variant={'info'}>
    Flash "info"
    This is a primary alert with an <Flash.Link>example link</Flash.Link>. Give it a click if you like.
  </Flash>
)

export const success = () => (
  <Flash variant={'success'}>
    Flash "info"
    This is a primary alert with an <Flash.Link>example link</Flash.Link>. Give it a click if you like.
  </Flash>
)

export const warning = () => (
  <Flash variant={'warning'}>
    Flash "info"
    This is a primary alert with an <Flash.Link>example link</Flash.Link>. Give it a click if you like.
  </Flash>
)

export const danger = () => (
  <Flash variant={'danger'}>
    Flash "info"
    This is a primary alert with an <Flash.Link>example link</Flash.Link>. Give it a click if you like.
  </Flash>
)
