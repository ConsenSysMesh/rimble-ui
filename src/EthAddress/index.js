import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';

const addressSummary = (address, firstSegLength = 5, lastSegLength = 4) => {
  if (!address) return '';
  return address
    ? address.slice(0, firstSegLength) +
        '...' +
        address.slice(address.length - lastSegLength)
    : '...';
};

class EthAddress extends React.PureComponent {
  render() {
    const { address, truncate } = this.props;
    const displayAddress = truncate ? addressSummary(address) : address;

    return <Text>{displayAddress}</Text>;
  }
}

EthAddress.propTypes = {
  /**
   * The Ethereum Address
   */
  address: PropTypes.string.isRequired,
  /**
   * Will shorten the address when true
   */
  truncate: PropTypes.bool,
};

EthAddress.defaultProps = {
  truncate: false,
};

EthAddress.displayName = 'EthAddress';

export default EthAddress;
