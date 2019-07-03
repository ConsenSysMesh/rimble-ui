import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import Input from '../Input';
import Field from '../Field';
import Checkbox from '../Checkbox';

class Form extends Component {
  render() {
    let { className, children, validated } = this.props;

    if (validated) {
      className += ' was-validated';
    }

    return (
      <Box as={'form'} className={className} {...this.props}>
        {children}
      </Box>
    );
  }
}

Form.defaultProps = {
  validated: false,
};

Form.propTypes = {
  ...Box.propTypes,
  /**
   * Shows the input validation styles when true by adding he `.was-validated` class to the form element.
   */
  validated: PropTypes.bool,
};

Form.displayName = 'Form';

Form.Input = Input.WithValidationStyle;
Form.Field = Field;
Form.Check = Checkbox;

export default Form;
