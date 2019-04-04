import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import { Slider, Box, Text } from 'rimble-ui';

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
      <Box>
        <Slider
          min={'0'}
          max={'100'}
          step={'10'}
          value={this.state.sliderValue}
          onChange={this.handleChange}
        />
        <Text>Value: {this.state.sliderValue}</Text>
      </Box>
    );
  }
}

storiesOf('Components/Form/Slider', module)
  .addDecorator(withDocs(Documentation))
  .add('Documentation', () => (
    <Box mx={3} textAlign={'left'}>
      <Box>
        <MyCustomSlider />
      </Box>
      <CodeBlock textOnly>
        {'<Slider min={"0"} max={"100"} step={"10"} />'}
      </CodeBlock>
    </Box>
  ));
