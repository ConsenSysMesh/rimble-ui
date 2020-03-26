import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Portal from '../Portal';
import Box from '../Box';

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
    place-items: center;
    place-content: center;
  }
`;

StyledOverlay.defaultProps = {
  bg: 'blacks.10',
  color: 'text',
  fontSize: '2',
  fontFamily: 'sansSerif',
  p: 3,
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

    return (
      <Portal>
        <StyledOverlay>{this.props.children}</StyledOverlay>
      </Portal>
    );
  }
}

Modal.defaultProps = {
  isOpen: false,
};

Modal.propTypes = {
  /**
   * Shows the content of the Modal when true
   */
  isOpen: PropTypes.bool,
};

Modal.displayName = 'Modal';

export { StyledOverlay as ModalBackdrop };

export default Modal;
