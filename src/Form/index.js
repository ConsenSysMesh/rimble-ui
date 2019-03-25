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
      <Box className={className} {...this.props}>
        {children}
      </Box>
    );
  }
}

Form.defaultProps = {
  as: 'form',
  validated: false,
};

Form.displayName = 'Form';

Form.Input = Input;
Form.Field = Field;
Form.Check = Checkbox;

export default Form;
