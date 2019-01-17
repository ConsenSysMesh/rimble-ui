import React, { Component } from 'react';
import blockies from 'ethereum-blockies'

class BlockiesIdenticon extends Component {
  constructor(props) {
    super(props)
  }
  getOpts () {
    return {
      seed: this.props.opts.seed || "foo",
      color: this.props.opts.color || "#dfe",
      bgcolor: this.props.opts.bgcolor || "#a71",
      size: this.props.opts.size || 15,
      scale: this.props.opts.scale || 3,
      spotcolor: this.props.opts.spotcolor || "#000"
    }
  }
  componentDidMount() {
    this.draw()
  }
  draw() {
    blockies.render(this.getOpts(), this.canvas)
  }
  render() {
    return React.createElement("canvas", {ref: canvas => this.canvas = canvas})
  }
}

BlockiesIdenticon.displayName = "BlockiesIdenticon"

export default BlockiesIdenticon
