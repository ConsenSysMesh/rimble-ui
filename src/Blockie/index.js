import React, { Component } from 'react';
import PropTypes from 'prop-types';
import blockies from 'ethereum-blockies';

class BlockiesIdenticon extends Component {
  constructor(props) {
    super(props);
  }
  getOpts() {
    return {
      seed: this.props.opts.seed || 'foo',
      color: this.props.opts.color || '#dfe',
      bgcolor: this.props.opts.bgcolor || '#a71',
      size: this.props.opts.size || 15,
      scale: this.props.opts.scale || 3,
      spotcolor: this.props.opts.spotcolor || '#000',
    };
  }
  componentDidMount() {
    this.draw();
  }
  draw() {
    blockies.render(this.getOpts(), this.canvas);
  }
  render() {
    return React.createElement('canvas', {
      ref: canvas => (this.canvas = canvas),
    });
  }
}

BlockiesIdenticon.defaultProps = {
  opts: {
    seed: 'foo',
    color: '#dfe',
    bgcolor: '#a71',
    size: 15,
    scale: 3,
    spotcolor: '#000',
  },
};

BlockiesIdenticon.propTypes = {
  /**
   * Sets the options for the blockies identicon
   */
  opts: PropTypes.shape({
    seed: PropTypes.string,
    color: PropTypes.string,
    bgcolor: PropTypes.string,
    size: PropTypes.number,
    scale: PropTypes.number,
    spotcolor: PropTypes.string,
  }),
};

BlockiesIdenticon.displayName = 'BlockiesIdenticon';

export default BlockiesIdenticon;
