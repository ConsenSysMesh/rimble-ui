import React from 'react'
import styled from 'styled-components'
import { themeGet } from 'styled-system'

import RadioButtonChecked from 'rmdi/lib/RadioButtonChecked'
import RadioButtonUnchecked from 'rmdi/lib/RadioButtonUnchecked'

import Box from '../Box'
import Text from '../Text'

import defaultTheme from '../theme'

const StyledWrapper = styled(Box)`
  & {
    position: relative;
    display: inline-block;
  }

  > input {
    position: relative;
    display: block;
    appearance: none;
    height: 1.5rem;
    width: 1.5rem;
    margin: 0;
  }

  > svg {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    pointer-events: none;
    fill: ${props => themeGet('colors.grey', '#CCC')};
  }

  > svg[name="checked"] {
    display: none;
    z-index: 1;
    fill: ${props => themeGet('colors.primary', '#000')};
  }

  > input:checked ~ svg[name="checked"] {
    display: block;
  }
`

const Radio = ({className, ...props}) => (
  <Box as="label" className={className} {...props} htmlFor={props.id} display="flex" alignItems="center" opacity={props.disabled ? 0.4 : 1 }>
    <StyledWrapper>
      <input type="checkbox" {...props} />
      <RadioButtonChecked name='checked' />
      <RadioButtonUnchecked />
    </StyledWrapper>
    <Text fontSize={1} fontWeight={3} ml={1} mr={2}>
      {props.label}
    </Text>
  </Box>
)

Radio.defaultProps = {
  theme: defaultTheme,
  color: 'primary'
}

Radio.displayName = 'Radio'

export default Radio
