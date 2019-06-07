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
  theme: PropTypes.object,
  as: PropTypes.string,
  display: PropTypes.string,
  maxWidth: PropTypes.string,
  height: PropTypes.string,
};

Image.displayName = 'Image';

export default Image;
