import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../Box';

const Flex = React.forwardRef((props, ref) => <Box ref={ref} {...props} />);

Flex.defaultProps = {
  display: 'flex',
};

Flex.propTypes = {
  ...Box.propTypes,
};

Flex.displayName = 'Flex';

export default Flex;
