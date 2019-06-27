import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';
import { StyledInput } from '../Input';

const Textarea = props => <StyledInput as={'textarea'} {...props} />;

Textarea.defaultProps = {
  theme,
  color: 'copyColor',
  bg: 'white',
  fontFamily: 'sansSerif',
  fontSize: '1rem',
  lineHeight: 'solid',
  height: 'auto',
  border: 1,
  borderColor: 'grey',
  borderRadius: 1,
  boxShadow: 1,
};

Textarea.propTypes = {
  theme: PropTypes.object,
};

Textarea.displayName = 'Textarea';

export default Textarea;
