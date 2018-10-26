import React from 'react'
import styled from 'styled-components'

const Field = ({ children, label, ...props }) => {
  return <label htmlFor="">
    {label}
    {children}
  </label>
}

export default Field
