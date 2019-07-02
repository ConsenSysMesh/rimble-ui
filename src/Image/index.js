import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';

const Image = React.forwardRef((props, ref) => <Box ref={ref} {...props} />);

Image.defaultProps = {
  as: 'img',
  maxWidth: '100%',
  height: 'auto',
};

Image.propTypes = {
  ...Box.propTypes,
  theme: PropTypes.object,
  /**
   * Sets alt attribute on image for accessibility
   */
  alt: PropTypes.string,
  /**
   * Sets the src attribute of the img element
   */
  src: PropTypes.string.isRequired,
};

Image.displayName = 'Image';

export default Image;
