import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Box from '../Box'
import { ExpandMore } from '@rimble/icons/es/md'
import { StyledInput } from '../Input'

const StyledWrapper = styled(Box)`
  & {
    position: relative;
    display: inline-block;
  }
`

const StyledExpandMore = styled(ExpandMore)`
  > svg {
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
  }
`

const Select = React.forwardRef(
  ({ options, children, width, ...props }, ref) => {
    const renderChildren = () => {
      if (children) {
        return children
      } else if (options) {
        return options.map((option, i) => (
          <option key={i} value={option.value} children={option.label} />
        ))
      } else {
        return null
      }
    }

    return (
      <StyledWrapper width={width}>
        <StyledInput
          as={'select'}
          children={renderChildren()}
          ref={ref}
          width={'100%'}
          p={'auto'}
          py={0}
          pl={3}
          pr={'3rem'}
          {...props}
        />
        <StyledExpandMore size={'1em'} my={'auto'} mx={3} color={'inherit'} />
      </StyledWrapper>
    )
  }
)

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
}

Select.displayName = 'Select'

export default Select
