import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from '../Input';

const Textarea = React.forwardRef((props, ref) => (
  <StyledInput as={'textarea'} ref={ref} {...props} />
));

Textarea.defaultProps = {
  lineHeight: 'copy',
  height: 'auto',
};

Textarea.propTypes = {
  theme: PropTypes.object,
};

Textarea.displayName = 'Textarea';

export default Textarea;
