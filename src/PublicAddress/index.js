import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Box from '../Box';
import Button from '../Button';
import Input from '../Input';

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

  > input {
    width: 100%;
    padding-right: 5.25rem;
  }

  > button {
    position: absolute;
    width: 4rem;
    right: 0.75rem;
  }
`;

class PublicAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCopied: false,
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

  render() {
    return (
      <StyledWrapper required={true}>
        <StyledInput readOnly value={this.props.address} ref={this.inputRef} />
        <Button size="small" onClick={this.handleClick} ref={this.buttonRef}>
          {this.state.isCopied ? 'Copied!' : 'Copy'}
        </Button>
      </StyledWrapper>
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
