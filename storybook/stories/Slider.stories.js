import React, { Component } from 'react';
import { Slider } from 'rimble-ui'

export default {
  title: 'Slider'
}

class MyCustomSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { sliderValue: 20 };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      sliderValue: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Slider
          min={'0'}
          max={'100'}
          step={'10'}
          value={this.state.sliderValue}
          onChange={this.handleChange}
        />
        <div>Value: {this.state.sliderValue}</div>
      </div>
    );
  }
}

export const slider = () => (
  <MyCustomSlider></MyCustomSlider>
)
