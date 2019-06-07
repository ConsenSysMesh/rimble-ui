import React, { Component } from 'react';
import styled from 'styled-components';

import Box from '../Box';
import Card from '../Card';

const StyledOverlay = styled(Box)`
  & {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`;

StyledOverlay.defaultProps = {
  bg: 'blacks.10',
  px: 3,
  py: 3,
};

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen || false,
    };
  }

  closeModal = e => {
    e.preventDefault();
    this.setState((state, props) => ({
      isOpen: false,
    }));
  };

  openModal = e => {
    e.preventDefault();
    this.setState((state, props) => ({
      isOpen: true,
    }));
  };

  render() {
    if (!this.props.isOpen) {
      return null;
    }

    return <StyledOverlay>{this.props.children}</StyledOverlay>;
  }
}

Modal.displayName = 'Modal';

export default Modal;
