import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TYPOGRAPHY } from '../constants';
import Box from '../Box';
import theme from '../theme';

const caps = props => (props.caps ? { textTransform: 'uppercase' } : null);

const italic = props => (props.italic ? { fontStyle: 'italic' } : null);

const StyledText = styled(Box)`
  ${TYPOGRAPHY}
  ${caps}
  ${italic}
`;

const Text = React.forwardRef(({ as, ...props }, ref) => (
  <StyledText ref={ref} forwardedAs={as} {...props} />
));

Text.defaultProps = {
  fontFamily: 'sansSerif',
  fontSize: 2,
  fontWeight: 2,
  lineHeight: 'copy',
  theme,
};

Text.propTypes = {
  ...Box.propTypes,
  ...TYPOGRAPHY.propTypes,
  theme: PropTypes.object,
};

Text.displayName = 'Text';

Text.span = props => <Text {...props} />;
Text.span.defaultProps = {
  ...Text.defaultProps,
  as: 'span',
};

Text.p = props => <Text {...props} />;
Text.p.defaultProps = {
  ...Text.defaultProps,
  as: 'p',
};

Text.s = props => <Text {...props} />;
Text.s.defaultProps = {
  ...Text.defaultProps,
  as: 's',
};

export default Text;
