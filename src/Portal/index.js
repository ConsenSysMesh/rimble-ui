import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { isBrowser } from '../utils';

const portalRoot = isBrowser() ? document.body : null;

class Portal extends Component {
  constructor(props) {
    super(props);
    this.el = isBrowser() ? document.createElement('div') : null;
  }

  componentDidMount() {
    portalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    portalRoot.removeChild(this.el);
  }

  render() {
    if (isBrowser()) {
      return ReactDOM.createPortal(this.props.children, this.el);
    }
    // ssr
    return null;
  }
}

Portal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Portal;
