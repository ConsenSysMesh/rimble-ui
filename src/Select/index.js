import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ExpandMore from 'rmdi/lib/ExpandMore';
import { StyledInput } from '../Input';

const StyledWrapper = styled.span`
  & {
    position: relative;
  }

  > ${ExpandMore} {
    position: absolute;
    right: 1rem;
    top: 0;
    bottom: 0;
    pointer-events: none;
    margin: auto;
  }
`;

const StyledSelect = styled(StyledInput)`
  & {
    appearance: none;
    padding: 0 3rem 0 1rem;
  }
`;

const Select = React.forwardRef(({ options, children, ...props }, ref) => {
  const renderChildren = () => {
    if (children) {
      return children;
    } else if (options) {
      return options.map((option, i) => (
        <option key={i} value={option.value} children={option.label} />
      ));
    } else {
      return null;
    }
  };

  return (
    <StyledWrapper>
      <StyledSelect
        as={'select'}
        children={renderChildren()}
        ref={ref}
        {...props}
      />
      <ExpandMore />
    </StyledWrapper>
  );
});

Select.propTypes = {
  theme: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.string),
};

Select.displayName = 'Select';

export default Select;
