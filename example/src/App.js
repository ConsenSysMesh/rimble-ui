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
  Tooltip
} from 'rimble-ui'

export default class App extends Component {
  render () {
    return (
      <div>
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

        <Field htmlFor="">
          <Checkbox id="blue" name="pill"/>
          Blue Pill
        </Field>
        <Field htmlFor="">
          <Checkbox id="red" name="pill" />
          Red Pill
        </Field>

        <label htmlFor="">
          <Radio id="blue" name="pill"/>
          Blue Pill
        </label>
        <label htmlFor="">
          <Radio id="red" name="pill" />
          Red Pill
        </label>

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
      </div>
    )
  }
}
