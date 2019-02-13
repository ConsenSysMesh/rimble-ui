import React, { Component } from 'react'

import {
  Avatar,
  Button,
  Checkbox,
  Radio,
  TextButton,
  OutlineButton,
  Field,
  Heading,
  Input,
  Link,
  Progress,
  Select,
  Slider,
  Table,
  Text,
  Textarea,
  Blockie,
  Tooltip,
  ThemeProvider,
  Icon,
  PublicAddress
} from 'rimble-ui'

// theme.js
const theme = {
  colors: {
    primary: '#345AD6',
    black: '#000e1a',
    white: '#fff',
    blue: '#007ce0',
    navy: '#004175',
    grey: '#CCC',
    copyColor: '#3F3D4B'
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  fontWeights: [
    0, 300, 400, 600, 700
  ],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  fonts: {
    serif: 'athelas, georgia, times, serif',
    sansSerif: '"Source Sans Pro", -apple-system, sans-serif',
  },
  space: [
    0, 4, 8, 16, 32, 64, 128, 256
  ],
  radii: [
    '0', '4px', '8px', '16px'
  ],
  width: [0, 16, 32, 64, 128, 256],
  minWidths: [0, 16, 32, 64, 128, 256],
  maxWidths: [0, 16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  heights: [0, 16, 32, 64, 128, 256],
  minHeights: [0, 16, 32, 64, 128, 256],
  maxHeights: [0, 16, 32, 64, 128, 256],
  borders: [
    0,
    '1px solid'
  ],
  shadows: [
    '0',
    '0px 2px 4px rgba(0, 0, 0, 0.1)',
    '0 7px 14px rgba(50,50,93,.1)'
  ],
  opacity: {
    disabled: 0.4
  }
}


export default class App extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Button size={'medium'}>
          Click me!
        </Button>
        <OutlineButton>Click</OutlineButton>
        <TextButton>Click</TextButton>

        <Heading.h1>
          Quick zephyrs blow, vexing daft Jim.
        </Heading.h1>
        <Heading.h2>
          Quick zephyrs blow, vexing daft Jim.
        </Heading.h2>
        <Heading.h3>
          Quick zephyrs blow, vexing daft Jim.
        </Heading.h3>
        <Heading.h4>
          Quick zephyrs blow, vexing daft Jim.
        </Heading.h4>
        <Heading.h5>
          Quick zephyrs blow, vexing daft Jim.
        </Heading.h5>
        <Heading.h6>
          Quick zephyrs blow, vexing daft Jim.
        </Heading.h6>

        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quibusdam, assumenda officiis.</Text>

        <Link href='#!'>Click me!</Link>

        <Input type='text' />
        <Input type='text' disabled/>
        <Input type='email' name='email' id='email' placeholder='you@example.com'/>
        <Input type='email' name='email' id='email' placeholder='you@example.com' disabled/>

        <Textarea rows={4} defaultValue='Type here…' />

        <Checkbox label="Checkbox default" />
        <Checkbox checked label="Checkbox checked" />
        <Checkbox disabled label="Checkbox disabled" />
        <Checkbox disabled checked label="Checkbox checked disabled" />

        <Radio label="Radio default" />
        <Radio checked label="Radio checked" />
        <Radio disabled label="Radio disabled" />
        <Radio disabled checked label="Radio checked disabled" />

        <Select items={['Wandering Thunder','Black Wildflower','Ancient Paper',]} />

        <Slider />

        <Progress value={0.5} />

        <Field label='label'>
          <Input type='text' />
        </Field>

        <Avatar />

        <Blockie opts={{seed: "foo", color: "#dfe", bgcolor: "#a71", size: 15, scale: 3, spotcolor: "#000"}} />

        <Tooltip message='Your custom message'>hover me</Tooltip>

        <Table></Table>

        <Icon name={'Info'} color={'primary'} />

        <PublicAddress address={"0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2"} />
      </ThemeProvider>
    )
  }
}
