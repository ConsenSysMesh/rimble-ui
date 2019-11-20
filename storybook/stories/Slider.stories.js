import React, { Component } from 'react';
import { Slider, Text,  } from 'rimble-ui';

export default {
  title: 'Slider'
};

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
      <>
        <Slider
          min={'0'}
          max={'100'}
          step={'10'}
          value={this.state.sliderValue}
          onChange={this.handleChange}
          {...this.props}
        />
        <Text>Value: {this.state.sliderValue}</Text>
      </>
    );
  }
}

export const slider = () => (
  <MyCustomSlider>
  </MyCustomSlider>

);

export const disabledSlider = () => (
  <MyCustomSlider disabled/>
);
