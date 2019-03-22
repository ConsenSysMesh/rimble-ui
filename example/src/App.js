import React, { Component } from 'react';

import {
  Avatar,
  Blockie,
  Box,
  Button,
  Card,
  Checkbox,
  Field,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  Link,
  Loader,
  MetaMaskButton,
  Modal,
  OutlineButton,
  Pill,
  Progress,
  PublicAddress,
  QR,
  Radio,
  Select,
  Slider,
  Table,
  Text,
  Textarea,
  TextButton,
  ThemeProvider,
  ToastMessage,
  Tooltip,
  theme,
} from 'rimble-ui';

const myTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: 'red',
  },
};

const testComponents = props => (
  <React.Fragment>
    <Button size={'medium'}>Click me!</Button>
    <OutlineButton>Click</OutlineButton>
    <TextButton>Click</TextButton>
    <Link>I'm a Link!</Link>
    <PublicAddress address="0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2" />
    <Input />
    <Icon name={'Info'} />
    <Icon name={'Info'} color="primary" />
    <Tooltip variant="dark" message="Your custom message">
      <Text.span>hover me</Text.span>
    </Tooltip>
    <Blockie
      opts={{
        seed: 'foo',
        color: '#dfe',
        bgcolor: '#a71',
        size: 15,
        scale: 3,
        spotcolor: '#4E3FCE',
      }}
    />
    <Textarea rows={4} defaultValue="Type here…" />
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
      quibusdam, assumenda officiis.
    </Text>
    <Avatar />
    <Avatar size="small" />
    <Avatar size="medium" />
    <Avatar size="large" />

    <Slider />
    <Select
      items={['Wandering Thunder', 'Black Wildflower', 'Ancient Paper']}
    />
    <Progress value={0.5} />
    <Heading.h1>Quick zephyrs blow, vexing daft Jim.</Heading.h1>

    <Heading.h2>Quick zephyrs blow, vexing daft Jim.</Heading.h2>

    <Heading.h3>Quick zephyrs blow, vexing daft Jim.</Heading.h3>

    <Heading.h4>Quick zephyrs blow, vexing daft Jim.</Heading.h4>

    <Heading.h5>Quick zephyrs blow, vexing daft Jim.</Heading.h5>

    <Heading.h6>Quick zephyrs blow, vexing daft Jim.</Heading.h6>
    <Field label="label">
      <Input type="text" />
    </Field>
    <Radio label="Radio default" readOnly />
    <Radio checked label="Radio checked" readOnly />
    <Radio disabled label="Radio disabled" readOnly />
    <Radio disabled checked label="Radio checked disabled" readOnly />
    <Checkbox label="Checkbox default" readOnly />
    <Checkbox checked label="Checkbox checked" readOnly />
    <Checkbox disabled label="Checkbox disabled" readOnly />
    <Checkbox disabled checked label="Checkbox checked disabled" readOnly />
    <Box />
    <Card />
    <Flex />
    <Table />
    <Image src="https://source.unsplash.com/random/1280x720" />
    <MetaMaskButton />
    <Loader />
    <QR value="test" />
    <Modal />
    <ToastMessage />
    <ToastMessage.Processing />
    <ToastMessage.Success />
    <ToastMessage.Failure />
    <Pill mr={'2'} mb={'3'}>
      {'Pending'}
    </Pill>
    <Pill selected={true} mr={'2'} mb={'3'}>
      {'Pending'}
    </Pill>

    <Pill color={'primary'} mr={'2'} mb={'3'}>
      {'Pending'}
    </Pill>
    <Pill selected={true} color={'primary'} mr={'2'} mb={'3'}>
      {'Pending'}
    </Pill>

    <Pill color={'red'} mr={'2'} mb={'3'}>
      {'Pending'}
    </Pill>
    <Pill selected={true} color={'red'} mr={'2'} mb={'3'}>
      {'Pending'}
    </Pill>

    <Pill color={'blue'} mr={'2'} mb={'3'}>
      {'Pending'}
    </Pill>
    <Pill selected={true} color={'blue'} mr={'2'} mb={'3'}>
      {'Pending'}
    </Pill>
  </React.Fragment>
);

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>{testComponents()}</div>
        <ThemeProvider theme={myTheme}>{testComponents()}</ThemeProvider>
      </React.Fragment>
    );
  }
}
