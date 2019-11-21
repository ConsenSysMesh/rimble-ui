import React, { Component } from 'react';

import {
  Avatar,
  Blockie,
  Box,
  Button,
  Card,
  Checkbox,
  Field,
  Flash,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  Link,
  Loader,
  MetaMaskButton,
  UPortButton,
  Modal,
  Pill,
  Progress,
  QR,
  Radio,
  Select,
  EthAddress,
  Slider,
  Table,
  Text,
  Textarea,
  ToastMessage,
  Tooltip,
  BaseStyles,
  ThemeProvider,
  theme,
} from 'rimble-ui';

import BaseLineGrid from './components/BaseLineGrid';

const testTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    text: 'black',
    background: 'white',
    primary: 'crimson',
  },
};

const selectOptions = [
  { value: '123', label: 'One Two Three' },
  { value: 'abc', label: 'A B C' },
];

const testComponents = props => (
  <React.Fragment>

    <h1>H1 - Quick zephyrs blow, vexing daft Jim.</h1>
    <h2>H1 - Quick zephyrs blow, vexing daft Jim.</h2>
    <h3>H1 - Quick zephyrs blow, vexing daft Jim.</h3>
    <h4>H1 - Quick zephyrs blow, vexing daft Jim.</h4>
    <h5>H1 - Quick zephyrs blow, vexing daft Jim.</h5>
    <h6>H1 - Quick zephyrs blow, vexing daft Jim.</h6>

    <Heading as={'h1'}>H1 - Quick zephyrs blow, vexing daft Jim.</Heading>
    <Heading as={'h2'}>H2 - Quick zephyrs blow, vexing daft Jim.</Heading>
    <Heading as={'h3'}>H3 - Quick zephyrs blow, vexing daft Jim.</Heading>
    <Heading as={'h4'}>H4 - Quick zephyrs blow, vexing daft Jim.</Heading>
    <Heading as={'h5'}>H5 - Quick zephyrs blow, vexing daft Jim.</Heading>
    <Heading as={'h6'}>H6 - Quick zephyrs blow, vexing daft Jim.</Heading>

    <Heading as={'h1'} fontSize={1}>H1 - Quick zephyrs blow, vexing daft Jim.</Heading>
    <Heading as={'h2'} fontSize={2}>H2 - Quick zephyrs blow, vexing daft Jim.</Heading>
    <Heading as={'h3'} fontSize={3}>H3 - Quick zephyrs blow, vexing daft Jim.</Heading>
    <Heading as={'h4'} fontSize={4}>H4 - Quick zephyrs blow, vexing daft Jim.</Heading>
    <Heading as={'h5'} fontSize={5}>H5 - Quick zephyrs blow, vexing daft Jim.</Heading>
    <Heading as={'h6'} fontSize={6}>H6 - Quick zephyrs blow, vexing daft Jim.</Heading>

    <Heading fontSize={7}>XL - Quick zephyrs blow, vexing daft Jim.</Heading>

    <Heading as={'h1'} fontSize={6}>H1 - Quick zephyrs blow, vexing daft Jim.</Heading>

    <Heading as={'h2'} fontSize={5}>H2 - Quick zephyrs blow, vexing daft Jim.</Heading>

    <Heading as={'h3'} fontSize={4}>H3 - Quick zephyrs blow, vexing daft Jim.</Heading>

    <Heading as={'h4'} fontSize={3}>H4 - Quick zephyrs blow, vexing daft Jim.</Heading>

    <Heading as={'h5'} fontSize={2}>H5 - Quick zephyrs blow, vexing daft Jim.</Heading>

    <Heading as={'h6'} fontSize={1}>H6 - Quick zephyrs blow, vexing daft Jim.</Heading>

    <Heading fontSize={0}>SX - Quick zephyrs blow, vexing daft Jim.</Heading>

    <Text fontWeight={1}>
      1 / 300 —
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
      quibusdam, assumenda officiis.
    </Text>
    <Text fontWeight={2}>
      2 / 400 —
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
      quibusdam, assumenda officiis.
    </Text>
    <Text fontWeight={3}>
      3 / 600 —
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
      quibusdam, assumenda officiis.
    </Text>
    <Text fontWeight={4}>
      4 / 700 —
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
      quibusdam, assumenda officiis.
    </Text>

    <Button size={'medium'}>Click me!</Button>
    <Link>I'm a Link!</Link>
    <EthAddress
      address="0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2"
    />
    <EthAddress
      textLabels
      address="0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2"
    />
    <Input />
    <Icon name={'Info'} />
    <Icon name={'Info'} color="primary" />
    <Tooltip message="Your custom message">
      <span>hover me</span>
    </Tooltip>
    <Tooltip variant={'light'} message="Your custom message">
      <Text>hover me</Text>
    </Tooltip>
    <Blockie
      opts={{
        seed: 'foo',
        color: '#dfe',
        bgcolor: '#a71',
        size: 16,
        scale: 3,
        spotcolor: '#4E3FCE',
      }}
    />
    <Avatar />
    <Avatar size="small" />
    <Avatar size="medium" />
    <Avatar size="large" />
    <Textarea rows={4} defaultValue="Type here…" />
    <Slider />
    <Slider disabled />
    <Select>
      <optgroup label="4-legged pets">
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster" disabled>
          Hamster
        </option>
      </optgroup>
      <optgroup label="Flying pets">
        <option value="parrot">Parrot</option>
        <option value="macaw">Macaw</option>
        <option value="albatross">Albatross</option>
      </optgroup>
    </Select>
    <Select options={selectOptions} />
    <Progress value={0.5} />
    <Field label="text">
      <Input type="text" />
    </Field>
    <Field label="number">
      <Input type="number" />
    </Field>
    <Field label="file">
      <Input type="file" />
    </Field>
    <Field label="color">
      <Input type="color" />
    </Field>
    <Field label="date">
      <Input type="date" />
    </Field>
    <Field label="range">
      <Input type="range" />
    </Field>
    <Field label="search">
      <Input type="search" />
    </Field>
    <Field label="email">
      <Input type="email" />
    </Field>
    <Field label="password">
      <Input type="password" />
    </Field>
    <Field label="time">
      <Input type="time" />
    </Field>
    <Field label="url">
      <Input type="url" />
    </Field>
    <Field label="month">
      <Input type="month" />
    </Field>
    <Field label="week">
      <Input type="week" />
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
    <Card m={3} />
    <Card mx="auto" px="4" color="primary">
      <Heading mb={3}>Heading</Heading>
      <Text mb={4}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam autem
        ratione doloribus quidem neque provident eius error dignissimos
        delectus architecto nemo quos alias sunt voluptate impedit, facilis
        sequi tempore. Amet!
      </Text>
      <Button mr={3}>Accept</Button>
      <Button.Outline>Cancel</Button.Outline>
    </Card>
    <Flex />
    <Table />
    <Image src="https://source.unsplash.com/random/1280x720" />
    <MetaMaskButton>
      Connect with MetaMask
    </MetaMaskButton>
    <MetaMaskButton.Outline>
      Connect with MetaMask
    </MetaMaskButton.Outline>
    <UPortButton>
      Connect with uPort
    </UPortButton>
    <UPortButton.Solid>
      Connect with uPort
    </UPortButton.Solid>
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
    <Flash>
      I am a Flash with a <Flash.Link>Link</Flash.Link>
    </Flash>
    <Flash variant={'info'}>
      I am a INFO Flash with a <Flash.Link>Link</Flash.Link>
    </Flash>
    <Flash variant={'warning'}>
      I am a WARNING Flash with a <Flash.Link>Link</Flash.Link>
    </Flash>
    <Flash variant={'success'}>
      I am a SUCCESS Flash with a <Flash.Link>Link</Flash.Link>
    </Flash>
    <Flash variant={'danger'}>
      I am a DANGER Flash with a <Flash.Link>Link</Flash.Link>
    </Flash>
  </React.Fragment>
);

export default class App extends Component {
  render() {
    return (
      <Flex position={'relative'}>
        <Box m={4}>
          <BaseStyles>
            {testComponents()}
          </BaseStyles>
        </Box>
        <Box m={4}>
          <ThemeProvider theme={testTheme}>
            <BaseStyles>
              {testComponents()}
            </BaseStyles>
          </ThemeProvider>
        </Box>
        <BaseLineGrid />
      </Flex>
    );
  }
}
