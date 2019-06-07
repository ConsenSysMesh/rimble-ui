import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { textAlign } from 'styled-system';
import theme from '../theme';
import Box from '../Box';

const StyledCard = styled(Box)`
  & {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
    transition: box-shadow 300ms ease;
  }
  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
  }

  ${textAlign}
`;

const Card = props => <StyledCard {...props} />;

Card.defaultProps = {
  theme,
  position: 'relative',
  bg: 'white',
  border: 1,
  borderColor: '#D6D6D6',
  mx: 0,
  my: 2,
  width: '100%',
  minWidth: 1,
  height: 'auto',
  minHeight: 1,
  p: 4,
  textAlign: 'left',
};

Card.propTypes = {
  ...Box.propTypes,
  /**
   * Sets theme
   */
  theme: PropTypes.object,
};

Card.displayName = 'Card';

export default Card;
