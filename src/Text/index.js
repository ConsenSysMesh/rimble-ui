import React from 'react'
import PropTypes from 'prop-types'
import Box from '../Box'
import theme from '../theme'

const Text = React.forwardRef((props, ref) => <Box ref={ref} {...props} />)

Text.defaultProps = {
  fontSize: 2,
  fontWeight: 2,
  lineHeight: 'copy',
  theme,
}

Text.propTypes = {
  ...Box.propTypes,
  theme: PropTypes.object,
}

Text.displayName = 'Text'

Text.span = props => <Text {...props} />
Text.span.defaultProps = {
  ...Text.defaultProps,
  as: 'span',
}

Text.p = props => <Text {...props} />
Text.p.defaultProps = {
  ...Text.defaultProps,
  as: 'p',
}

Text.s = props => <Text {...props} />
Text.s.defaultProps = {
  ...Text.defaultProps,
  as: 's',
}

export default Text
