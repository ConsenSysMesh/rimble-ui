import React from 'react'
import PropTypes from 'prop-types'
import RmdIcon from '@rimble/icons/es/Icon'
import Box from '../Box'
import theme from '../theme'

const Icon = React.forwardRef(({ name, size, ...rest }, ref) => (
  <Box ref={ref} {...rest}>
    <RmdIcon name={name} size={size} />
  </Box>
))

Icon.defaultProps = {
  name: '',
  size: '24px',
  display: 'inline-flex',
  theme,
}

Icon.propTypes = {
  /**
   * Sets which icon to display
   */
  name: PropTypes.string.isRequired,
  /**
   * Sets the width and height in pixels
   */
  size: PropTypes.string,
  /**
   * Sets the element display property
   */
  display: PropTypes.string,
  theme: PropTypes.object,
}

Icon.displayName = 'Icon'

export default Icon
