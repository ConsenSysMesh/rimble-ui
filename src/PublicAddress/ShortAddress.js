import React, { Component } from 'react';

const addressSummary = (address, firstSegLength = 10, lastSegLength = 4, includeHex = true) => {
  if (!address) return ''
  // let checked = checksumAddress(address)
  // if (!includeHex) {
  //   checked = ethUtil.stripHexPrefix(checked)
  // }
  return address ? address.slice(0, firstSegLength) + '...' + address.slice(address.length - lastSegLength) : '...'
}

class ShortAddress extends Component {

  render() {
    return (
      <div>{addressSummary(this.props.address)}</div>
    );
  }

}

export default ShortAddress;
