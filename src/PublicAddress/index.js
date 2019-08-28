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
import QR from '../QR';
import Portal from '../Portal';
import { useHiddenState } from '../Hidden';
import { ModalBackdrop } from '../Modal';

import Clipboard from './CopyToClipboard';

const StyledInput = styled(Input)`
  text-overflow: ellipsis;
  white-space: nowrap;
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

const StyledPublicAddress = styled(Text)`
  & {
    word-break: break-all;
  }
`;

const AddressQrModal = ({ isOpen, hide, address }) => {
  const text = {
    title: 'Ethereum Address',
    description:
      'To send funds to this Ethereum address, scan this code using your mobile wallet app',
  };

  const colors = {
    foreground: 'black',
    background: 'white',
  };

  if (isOpen) {
    return (
      <Portal>
        <ModalBackdrop>
          <Card
            width={1}
            maxWidth={6}
            bg={colors.background}
            color={colors.foreground}
            border={'none'}
            borderRadius={2}
            p={0}
          >
            <Button.Text
              icon={'Close'}
              mainColor={'inherit'}
              p={0}
              borderRadius={'100%'}
              position={'absolute'}
              top={0}
              right={0}
              onClick={hide}
            />

            <Text
              color={'inherit'}
              p={3}
              borderBottom={1}
              borderColor={'blacks.4'}
              lineHeight={'solid'}
              textAlign={'center'}
              fontWeight={3}
            >
              {text.title}
            </Text>

            <Box p={[3, 4]}>
              <Text color={'inherit'} textAlign={'center'} mb={4}>
                {text.description}
              </Text>
              <Box
                // size={['100%', '200px']}
                width={1}
                maxWidth={'220px'}
                mx={'auto'}
                mb={4}
                p={4}
                bg={'white'}
                border={1}
                borderColor={'blacks.3'}
                boxShadow={2}
              >
                <QR value={address} size={'100%'} />
              </Box>

              <Clipboard text={address}>
                {isCopied => (
                  <StyledPublicAddress
                    color={'inherit'}
                    position={'relative'}
                    display={'flex'}
                    alignItems={'center'}
                  >
                    <StyledInput
                      readOnly
                      value={address}
                      width={1}
                      pr={'5rem'}
                      fontWeight={3}
                    />
                    <Button
                      size={'small'}
                      width={'4rem'}
                      mx={2}
                      position={'absolute'}
                      right={0}
                    >
                      {!isCopied ? 'Copy' : <Icon name={'Check'} />}
                    </Button>
                  </StyledPublicAddress>
                )}
              </Clipboard>
            </Box>
          </Card>
        </ModalBackdrop>
      </Portal>
    );
  }

  return null;
};

const QRButton = ({ address, ...props }) => {
  const { visible, toggle } = useHiddenState();

  const text = {
    tooltip: 'Show QR Code',
    button: 'Show QR Code',
  };

  if (!props.buttonText) {
    return (
      <React.Fragment>
        <Tooltip message={text.tooltip}>
          <Button size={'small'} ml={2} p={0} onClick={toggle}>
            <Icon name={'CenterFocusStrong'} />
          </Button>
        </Tooltip>
        <AddressQrModal address={address} isOpen={visible} hide={toggle} />
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Button size={'small'} ml={2} onClick={toggle}>
        {text.button}
      </Button>
      <AddressQrModal address={address} isOpen={visible} hide={toggle} />
    </React.Fragment>
  );
};

const CopyButton = ({ clipboardText, ...props }) => {
  const text = {
    tooltip: 'Copy to clipboard',
    button: 'Copy',
  };

  if (!props.buttonText) {
    return (
      <Clipboard text={clipboardText}>
        {isCopied => (
          <Tooltip message={text.tooltip}>
            <Button size={'small'} p={0}>
              <Icon name={isCopied ? 'Check' : 'Assignment'} />
            </Button>
          </Tooltip>
        )}
      </Clipboard>
    );
  }
  return (
    <Clipboard text={clipboardText}>
      {isCopied => (
        <Button size={'small'}>{!isCopied ? text.button : 'Copied!'}</Button>
      )}
    </Clipboard>
  );
};

class PublicAddress extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledInput
          readOnly
          value={this.props.address}
          ref={this.inputRef}
          width={1}
          pr={this.props.buttonText ? '12rem' : '6rem'}
        />
        {/* <EthAddress address={this.props.address} /> */}

        <Flex position={'absolute'} right={0} mr={2}>
          <CopyButton
            clipboardText={this.props.address}
            buttonText={this.props.buttonText}
          />
          <QRButton
            address={this.props.address}
            buttonText={this.props.buttonText}
          />
        </Flex>
      </StyledWrapper>
    );
  }
}

PublicAddress.propTypes = {
  /**
   * Sets Ethereum address as the value of the field
   */
  address: PropTypes.string,

  /**
   * Changes buttons to text from icons
   */
  buttonText: PropTypes.bool,
};

PublicAddress.displayName = 'PublicAddress';

export default PublicAddress;
