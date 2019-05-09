import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import Box from '../Box';
import Button from '../Button';
import Field from '../Field';
import Input from '../Input';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledInput = styled(Input)`
  text-overflow: ellipsis;
  white-space: no-wrap;
`;

const StyledButton = styled(Button)`
  & {
    position: relative;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.-is-copied::before {
    content: '';
    position: absolute;

    width: 100%;
    height: 100%;
    background: inherit;
    opacity: 1;

    animation-name: ${fadeOut};
    animation-duration: 100ms;
    animation-timing-function: linear;
  }

  &::after {
    opacity: 0;
    content: 'Copied!';
    position: absolute;
    width: 100%;
    background: inherit;
    transition: all 500ms ease;
  }

  &.-is-copied::after {
    opacity: 1;
    animation-name: ${slideIn};
    animation-duration: 1000ms;
    animation-timing-function: ease;
  }
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
    right: 0.75rem;
  }
`;

class PublicAddress extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.buttonRef = React.createRef();
  }

  handleClick = e => {
    const { inputRef, buttonRef } = this;

    e.preventDefault();
    inputRef.current.select();
    document.execCommand('copy');
    buttonRef.current.classList.add('-is-copied');

    setTimeout(() => {
      buttonRef.current.classList.remove('-is-copied');
    }, 5000);
  };

  render() {
    let label = 'Public address';
    if (this.props.label != null) {
      label = this.props.label;
    }
    return (
      <Field label={label}>
        <StyledWrapper required={true}>
          <StyledInput
            readOnly
            value={this.props.address}
            ref={this.inputRef}
          />
          <StyledButton
            size="small"
            px={3}
            onClick={this.handleClick}
            ref={this.buttonRef}
          >
            Copy
          </StyledButton>
        </StyledWrapper>
      </Field>
    );
  }
}

PublicAddress.displayName = 'PublicAddress';

PublicAddress.propTypes = {
  address: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
};

export default PublicAddress;
