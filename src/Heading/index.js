import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COMMON, TYPOGRAPHY } from '../constants';
import theme from '../theme';

const defaultProps = {
  fontFamily: 'sansSerif',
  fontWeight: 3,
  lineHeight: 'title',
  m: 0,
  p: 0,
};

// Heading
const StyledHeading = styled.div`
  ${COMMON}
  ${TYPOGRAPHY}
  font-size: ${props => {
    switch (props.as) {
      case 'h1':
        return props.theme.fontSizes[6];
      case 'h2':
        return props.theme.fontSizes[5];
      case 'h3':
        return props.theme.fontSizes[4];
      case 'h4':
        return props.theme.fontSizes[3];
      case 'h5':
        return props.theme.fontSizes[2];
      case 'h6':
        return props.theme.fontSizes[1];
      default:
        return props.theme.fontSizes[4];
    }
  }}px
`;

StyledHeading.defaultProps = {
  theme,
  ...defaultProps,
};

const Heading = React.forwardRef((props, ref) => (
  <StyledHeading ref={ref} {...props} />
));

Heading.defaultProps = {
  ...defaultProps,
  as: 'h3',
  fontSize: 4,
};

Heading.propTypes = {
  ...COMMON.propTypes,
  ...TYPOGRAPHY.propTypes,
  theme: PropTypes.object,
};

Heading.displayName = 'Heading';

// H1
Heading.h1 = props => <Heading {...props} />;
Heading.h1.defaultProps = {
  ...defaultProps,
  as: 'h1',
  fontSize: 6,
};
Heading.h1.displayName = 'Heading.h1';

// H2
Heading.h2 = props => <Heading {...props} />;
Heading.h2.defaultProps = {
  ...defaultProps,
  as: 'h2',
  fontSize: 5,
};
Heading.h2.displayName = 'Heading.h2';

// H3
Heading.h3 = props => <Heading {...props} />;
Heading.h3.defaultProps = {
  ...defaultProps,
  as: 'h3',
  fontSize: 4,
};
Heading.h3.displayName = 'Heading.h3';

// H4
Heading.h4 = props => <Heading {...props} />;
Heading.h4.defaultProps = {
  ...defaultProps,
  as: 'h4',
  fontSize: 3,
};
Heading.h4.displayName = 'Heading.h4';

// H5
Heading.h5 = props => <Heading {...props} />;
Heading.h5.defaultProps = {
  ...defaultProps,
  as: 'h5',
  fontSize: 2,
};
Heading.h5.displayName = 'Heading.h5';

// H6
Heading.h6 = props => <Heading {...props} />;
Heading.h6.defaultProps = {
  ...defaultProps,
  as: 'h6',
  fontSize: 1,
};
Heading.h6.displayName = 'Heading.h6';

export default Heading;
