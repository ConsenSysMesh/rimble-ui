import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  & {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    font-weight: 600;
    font-size: 14px;
  }

  > input {
    margin-top: .5rem;
  }
`

const Field = ({ children, label, ...props }) => {
  return <Label htmlFor="">
    {label}
    {children}
  </Label>
}

export default Field
