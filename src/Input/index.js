import React from 'react'
import styled from 'styled-components'

import {
  themeGet,
  fontSize,
  fontFamily,
  boxShadow
} from 'styled-system'

import Box from '../Box'
import Icon from '../Icon'

import defaultTheme from '../theme'

const StyledIconWrapper = styled(Box)`
  & {
    position: relative;
    display: flex;
    align-items: center;
  }
  > svg {
    position: absolute;
    right: 1rem;
    visibility: hidden;
  }
`

const WithIconWrapper = ({className, ...props}) => {
  return  (
    <StyledIconWrapper className={className} {...props} >
      <Input className={className} {...props} />
      <Icon className={'icon-valid'} name={'CheckCircle'} color={'#28C081'} />
      <Icon className={'icon-invalid'} name={'Warning'} color={'#DC2C10'} />
    </StyledIconWrapper>
  )
}

const Input = styled(Box)`
  & {
    appearance: none;
  }

  &:hover {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  }
  &:focus {
    outline: none;
    border-color: ${themeGet('colors.primary', '#000')};
  }

  &:active {}

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }

  &:focus:required:valid {
    border-color: #28C081;
  }

  &:focus:required:invalid {
    border-color: red;
  }

  ${'' /* &:required {
  } */}

  &:focus:required:valid ~ svg.icon-valid {
    visibility: visible;
  }

  &:focus:required:invalid ~ svg.icon-invalid {
    visibility: visible;
  }

  ${boxShadow}
  ${fontSize}
  ${fontFamily}
`

Input.defaultProps = {
  theme: defaultTheme,
  as: 'input',
  color: 'copyColor',
  bg: 'white',
  fontFamily: 'sansSerif',
  fontSize: '1rem',
  lineHeight: 'solid',
  height: '3rem',
  px: 3,
  py: 0,
  border: 1,
  borderColor: 'grey',
  borderRadius: 1,
  boxShadow: 1
}

Input.displayName = 'Input'

export default WithIconWrapper
