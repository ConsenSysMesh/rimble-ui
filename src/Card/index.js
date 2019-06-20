import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';
import Box from '../Box';

const Card = props => <Box {...props} />;

Card.defaultProps = {
  theme,
  bg: 'white',
  border: 1,
  borderColor: 'light-gray',
  boxShadow: 2,
  p: 4,
  width: 1,
  minWidth: 1,
  height: 'auto',
  minHeight: 1,
};

Card.propTypes = {
  ...Box.propTypes,
  theme: PropTypes.object,
};

Card.displayName = 'Card';

export default Card;
