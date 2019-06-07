import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';
import { StyledInput } from '../Input';

const StyledTextarea = styled(StyledInput)`
  & {
    appearance: none;
  }
`;

Textarea.defaultProps = {
  theme,
  as: 'textarea',
  color: 'copyColor',
  bg: 'white',
  fontFamily: 'sansSerif',
  fontSize: '1rem',
  lineHeight: 'solid',
  height: 'auto',
  p: 3,
  border: 1,
  borderColor: 'grey',
  borderRadius: 1,
  boxShadow: 1,
};

const Textarea = props => <StyledTextarea {...props} />;

Text.propTypes = {
  theme: PropTypes.object,
};

Textarea.displayName = 'Textarea';

export default Textarea;
