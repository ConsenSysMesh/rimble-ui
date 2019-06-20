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
};

Image.displayName = 'Image';

export default Image;
