import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FLEX_CONTAINER, FLEX_ITEM } from '../constants';
import theme from '../theme';
import Box from '../Box';

// Flex
const Flex = styled(Box)`
  ${FLEX_CONTAINER}
`;

Flex.defaultProps = {
  theme,
  display: 'flex',
};

Flex.propTypes = {
  ...Box.propTypes,
  ...FLEX_CONTAINER.propTypes,
  theme: PropTypes.object,
};

Flex.displayName = 'Flex';

// Flex Item
Flex.Item = styled(Box)`
  ${FLEX_CONTAINER}
  ${FLEX_ITEM}
`;

Flex.Item.defaultProps = {
  theme,
};

Flex.Item.propTypes = {
  ...Box.propTypes,
  ...FLEX_ITEM.propTypes,
  ...FLEX_CONTAINER.propTypes,
  theme: PropTypes.object,
};

// Flex Row
Flex.Row = styled(Box)`
  ${FLEX_CONTAINER}
`;

Flex.Row.defaultProps = {
  ...Flex.defaultProps,
  flexDirection: 'row',
};

Flex.Row.propTypes = {
  ...Flex.propTypes,
  theme: PropTypes.object,
};

// Flex Column
Flex.Column = styled(Box)`
  ${FLEX_CONTAINER}
`;

Flex.Column.defaultProps = {
  ...Flex.defaultProps,
  flexDirection: 'column',
};

Flex.Column.propTypes = {
  ...Flex.propTypes,
  theme: PropTypes.object,
};

export default Flex;
