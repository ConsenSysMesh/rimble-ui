import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { opacity } from 'styled-system';
import { COMMON, LAYOUT, POSITION, BORDERS } from '../constants';
import theme from '../theme';

const Box = styled.div`
  & {
    box-sizing: border-box;
  }

  ${COMMON}
  ${LAYOUT}
  ${POSITION}
  ${BORDERS}
  ${opacity}
`;

Box.defaultProps = {
  theme,
};

Box.propTypes = {
  ...COMMON.propTypes,
  ...LAYOUT.propTypes,
  ...POSITION.propTypes,
  ...BORDERS.propTypes,
  theme: PropTypes.object,
};

Box.displayName = 'Box';

export default Box;
