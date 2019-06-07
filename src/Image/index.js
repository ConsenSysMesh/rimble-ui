import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';
import Box from '../Box';

const StyledImage = styled(Box)`
  & {
  }
`;

const Image = props => <StyledImage {...props} />;

Image.defaultProps = {
  theme,
  as: 'img',
  display: 'block',
  maxWidth: '100%',
  height: 'auto',
};

Image.propTypes = {
  ...Box.propTypes,
  /**
   * Sets theme
   */
  theme: PropTypes.object,
  /**
   * Sets element type
   */
  as: PropTypes.string,
  /**
   * Sets display property
   */
  display: PropTypes.string,
  /**
   * Sets max-width
   */
  maxWidth: PropTypes.string,
  /**
   * Sets image height - width will be 100%
   */
  height: PropTypes.string,
};

Image.displayName = 'Image';

export default Image;
