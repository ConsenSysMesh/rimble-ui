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
  theme,
  ThemeProvider,
  Icon,
  PublicAddress
} from 'rimble-ui'

const myTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: '#345AD6'
  }
}

export default class App extends Component {
  render () {
    return (
      <ThemeProvider theme={myTheme}>
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
