import React, { Component } from 'react';

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

Form.displayName = 'Form';

Form.Input = Input.WithValidationStyle;
Form.Field = Field;
Form.Check = Checkbox;

export default Form;
