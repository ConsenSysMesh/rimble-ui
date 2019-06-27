import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';
import Box from '../Box';

const Image = props => <Box {...props} />;

Image.defaultProps = {
  theme,
  as: 'img',
  display: 'block',
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
