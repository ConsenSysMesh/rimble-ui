import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';

const Card = React.forwardRef((props, ref) => <Box ref={ref} {...props} />);

Card.defaultProps = {
  position: 'relative',
  bg: 'white',
  border: 1,
  borderColor: 'light-gray',
  boxShadow: 2,
  p: 4,
};

Card.propTypes = {
  ...Box.propTypes,
  theme: PropTypes.object,
};

Card.displayName = 'Card';

export default Card;
