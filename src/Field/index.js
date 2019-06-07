import React from 'react';
import styled from 'styled-components';

import Box from '../Box';
import Text from '../Text';

const OptionalLabel = styled(Text)`
  &:after {
    content: ' (optional)';
    font-weight: normal;
    font-style: italic;
  }
`;

const Field = ({ label, children, ...props }) => {
  const isRequired = children => {
    let value = false;
    React.Children.forEach(children, child => {
      if (child.props.required) {
        value = true;
      }
    });
    return value;
  };

  const renderLabel = required => {
    if (required) {
      return (
        <Text fontSize={1} fontWeight={3} mb={2}>
          {label}
        </Text>
      );
    } else {
      return (
        <OptionalLabel fontSize={1} fontWeight={3} mb={2}>
          {label}
        </OptionalLabel>
      );
    }
  };

  return (
    <Box
      as="label"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      mb={3}
      {...props}
    >
      {renderLabel(isRequired(children))}
      {children}
    </Box>
  );
};

Field.displayName = 'Field';

export default Field;
