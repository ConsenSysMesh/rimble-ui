import React, { Component } from 'react';
import styled from 'styled-components'
import ClipboardJS from 'clipboard'

import Box from '../Box'
import Icon from '../Icon'
import Pill from '../Pill'

const addressSummary = (address, firstSegLength = 5, lastSegLength = 4, includeHex = true) => {
  if (!address) return ''
  // let checked = checksumAddress(address)
  // if (!includeHex) {
  //   checked = ethUtil.stripHexPrefix(checked)
  // }
  return address ? address.slice(0, firstSegLength) + '...' + address.slice(address.length - lastSegLength) : '...'
}

class ShortAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    }
    this.myRef = React.createRef();
    this.clipboard;
  }

  componentDidMount() {
    this.clipboard = new ClipboardJS(this.myRef.current, {
      target: () => (this.myRef.current),
      text: () => (this.props.address)
    })

    this.clipboard.on('success', (e) => {
      this.setState({copied: true})
    })
  }

  componentWillUnmount() {
    this.clipboard.destroy()
  }

  renderIcon() {
    if (this.state.copied) {
      return <Icon name={'Check'} />
    } else {
      return <Icon name={'ContentCopy'} size={'1rem'} />
    }
  }

  render() {
    return (
      <Pill ref={this.myRef} color={'primary'}>
        {addressSummary(this.props.address)}
        <Box ml={2} width={'20px'} display={'flex'} justifyContent={'flex-end'}>
          {this.renderIcon()}
        </Box>
      </Pill>
    );
  }

}

export default ShortAddress;
