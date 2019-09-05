import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text';

const StyledText = styled(Text)`
  & {
    word-break: break-all;
  }
`;

const addressSummary = (address, firstSegLength = 5, lastSegLength = 4) => {
  if (!address) return '';
  return address
    ? address.slice(0, firstSegLength) +
        '...' +
        address.slice(address.length - lastSegLength)
    : '...';
};

class TextOnlyAddress extends React.PureComponent {
  render() {
    const { address, truncate } = this.props;
    const displayAddress = truncate ? addressSummary(address) : address;

    return <StyledText {...this.props}>{displayAddress}</StyledText>;
  }
}

TextOnlyAddress.propTypes = {
  /**
   * The Ethereum Address
   */
  address: PropTypes.string.isRequired,
  /**
   * Will shorten the address when true
   */
  truncate: PropTypes.bool,
};

TextOnlyAddress.defaultProps = {
  truncate: false,
};

TextOnlyAddress.displayName = 'TextOnlyAddress';

export default TextOnlyAddress;
