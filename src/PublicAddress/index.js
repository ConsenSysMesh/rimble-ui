import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from '../Box';
import Flex from '../Flex';
import Card from '../Card';
import Text from '../Text';
import Tooltip from '../Tooltip';

import Icon from '../Icon';
import Button from '../Button';
import Input from '../Input';
import EthAddress from '../EthAddress';

import Portal from '../Portal';

import QR from '../QR';

const StyledInput = styled(Input)`
  text-overflow: ellipsis;
  white-space: no-wrap;
`;

const StyledWrapper = styled(Box)`
  & {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    position: relative;
  }

  ${'' /* > input {
    width: 100%;
    padding-right: 5.25rem;
  } */}

  ${'' /* > button {
    position: absolute;
    width: 4rem;
    right: 0.75rem;
  } */}
`;

const StyledModal = styled(Box)`
  & {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);

    display: flex;
    place-items: center;
    place-content: center;
  }
`;

const StyledPublicAddress = styled(EthAddress)`
  & {
  }
`;

const AddressQR = ({ address, ...props }) => (
  <StyledModal>
    <Card
      width={'auto'}
      m={3}
      border={'none'}
      borderRadius={2}
      bg={'primary-light'}
    >
      <Text color={'white'} mb={4} textAlign={'center'}>
        Use your camera to scan the code.
      </Text>

      <Box bg={'white'} size={'200px'} mx={'auto'} mb={4} p={3} boxShadow={2}>
        <QR value={address} size={'100%'} />
      </Box>

      <Text
        color={'white'}
        bg={'primary'}
        px={4}
        py={3}
        borderRadius={2}
        fontWeight={3}
        lineHeight={'solid'}
      >
        {address}
      </Text>

      <Box position={'absolute'} top={0} right={0}>
        <Button.Text
          icon={'Close'}
          mainColor={'white'}
          m={1}
          p={0}
          borderRadius={'100%'}
        />
      </Box>
    </Card>
  </StyledModal>
);

class PublicAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCopied: false,
      isQRCodeOpen: false,
    };
    this.inputRef = React.createRef();
    this.buttonRef = React.createRef();
  }

  handleClick = e => {
    const { inputRef, buttonRef } = this;

    e.preventDefault();
    inputRef.current.select();
    document.execCommand('copy');
    this.setState({ isCopied: true });

    setTimeout(() => {
      this.setState({ isCopied: false });
    }, 5000);
  };

  handleShowQR = e => {
    console.log('show qr code!');
    console.log(this.props.address);

    this.setState({ isQRCodeOpen: true });
  };

  render() {
    return (
      <React.Fragment>
        <StyledWrapper>
          <StyledInput
            width={1}
            readOnly
            value={this.props.address}
            ref={this.inputRef}
          />
          {/* <EthAddress address={this.props.address} /> */}

          <Flex position={'absolute'} right={0} mx={2}>
            <Tooltip message={'copy to clipboard'}>
              <Button
                size={'small'}
                ml={2}
                p={0}
                onClick={this.handleClick}
                ref={this.buttonRef}
              >
                <Icon name={this.state.isCopied ? 'Check' : 'Assignment'} />
              </Button>
            </Tooltip>
            <Tooltip message={'show QR code'}>
              <Button size={'small'} ml={2} p={0} onClick={this.handleShowQR}>
                <Icon name={'CenterFocusStrong'} />
              </Button>
            </Tooltip>
          </Flex>
        </StyledWrapper>
        <Box>
          {this.state.isQRCodeOpen && (
            <Portal>
              <AddressQR address={this.props.address} />
            </Portal>
          )}
        </Box>
      </React.Fragment>
    );
  }
}

PublicAddress.propTypes = {
  /**
   * Sets Ethereum address as the value of the field
   */
  address: PropTypes.string,
};

PublicAddress.displayName = 'PublicAddress';

export default PublicAddress;
