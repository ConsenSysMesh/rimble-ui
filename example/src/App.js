import React, { Component } from "react";

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
  theme
} from "rimble-ui";

const myTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: "red"
  }
};

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Button size={"medium"}>Click me!</Button>
          <OutlineButton>Click</OutlineButton>
          <TextButton>Click</TextButton>
          <Link>I'm a Link!</Link>
          <PublicAddress address="0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2"/>
          <Input></Input>
          <Icon name={'Info'}></Icon>
          <Tooltip variant='dark' message='Your custom message'>
            hover me
          </Tooltip>
          <Blockie opts={{seed: "foo", color: "#dfe", bgcolor: "#a71", size: 15, scale: 3, spotcolor: "#4E3FCE"}} />
          <Textarea rows={4} defaultValue='Type here…' />
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quibusdam, assumenda officiis.</Text>
          <Avatar/>
          <Avatar size="small"/>
          <Avatar size="medium"/>
          <Avatar size="large"/>
          <Checkbox />
          <Slider />
          <Select items={['Wandering Thunder','Black Wildflower','Ancient Paper',]} />
          <Progress value={0.5} />
          <Heading.h1>Quick zephyrs blow, vexing daft Jim.</Heading.h1>

          <Heading.h2>Quick zephyrs blow, vexing daft Jim.</Heading.h2>

          <Heading.h3>Quick zephyrs blow, vexing daft Jim.</Heading.h3>

          <Heading.h4>Quick zephyrs blow, vexing daft Jim.</Heading.h4>

          <Heading.h5>Quick zephyrs blow, vexing daft Jim.</Heading.h5>

          <Heading.h6>Quick zephyrs blow, vexing daft Jim.</Heading.h6>
          <Field label='label'>
            <Input type='text' />
          </Field>
          <Radio label="Radio default" />
          <Radio checked label="Radio checked" />
          <Radio disabled label="Radio disabled" />
          <Radio disabled checked label="Radio checked disabled" />
          <Checkbox label="Checkbox default" />
          <Checkbox checked label="Checkbox checked" />
          <Checkbox disabled label="Checkbox disabled" />
          <Checkbox disabled checked label="Checkbox checked disabled" />
          <Pill mr={'2'} mb={'3'}>{'Pending'}</Pill>
          <Pill selected={true} mr={'2'} mb={'3'}>{'Pending'}</Pill>

          <Pill color={'primary'} mr={'2'} mb={'3'}>{'Pending'}</Pill>
          <Pill selected={true} color={'primary'} mr={'2'} mb={'3'}>{'Pending'}</Pill>

          <Pill color={'red'} mr={'2'} mb={'3'}>{'Pending'}</Pill>
          <Pill selected={true} color={'red'} mr={'2'} mb={'3'}>{'Pending'}</Pill>

          <Pill color={'blue'} mr={'2'} mb={'3'}>{'Pending'}</Pill>
        </div>
        <ThemeProvider theme={myTheme}>
          <Button size={"medium"}>Click me!</Button>
          <OutlineButton>Click</OutlineButton>
          <TextButton>Click</TextButton>
          <Link>I'm a Link!</Link>
          <PublicAddress address="0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2"/>
          <Input></Input>
          <Icon name={'Info'}></Icon>
          <Tooltip variant='dark' message='Your custom message'>
              hover me
          </Tooltip>
          <Blockie opts={{seed: "foo", color: "#dfe", bgcolor: "#a71", size: 15, scale: 3, spotcolor: "#4E3FCE"}} />
          <Textarea rows={4} defaultValue='Type here…' />
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quibusdam, assumenda officiis.</Text>
          <Avatar/>
          <Avatar size="small"/>
          <Avatar size="medium"/>
          <Avatar size="large"/>
          <Checkbox />
          <Slider />
          <Select items={['Wandering Thunder','Black Wildflower','Ancient Paper',]} />
          <Progress value={0.5} />
          <Heading.h1>Quick zephyrs blow, vexing daft Jim.</Heading.h1>

          <Heading.h2>Quick zephyrs blow, vexing daft Jim.</Heading.h2>

          <Heading.h3>Quick zephyrs blow, vexing daft Jim.</Heading.h3>

          <Heading.h4>Quick zephyrs blow, vexing daft Jim.</Heading.h4>

          <Heading.h5>Quick zephyrs blow, vexing daft Jim.</Heading.h5>

          <Heading.h6>Quick zephyrs blow, vexing daft Jim.</Heading.h6>
          <Field label='label'>
            <Input type='text' />
          </Field>
          <Radio label="Radio default" />
          <Radio checked label="Radio checked" />
          <Radio disabled label="Radio disabled" />
          <Radio disabled checked label="Radio checked disabled" />
          <Checkbox label="Checkbox default" />
          <Checkbox checked label="Checkbox checked" />
          <Checkbox disabled label="Checkbox disabled" />
          <Checkbox disabled checked label="Checkbox checked disabled" />
          <Pill mr={'2'} mb={'3'}>{'Pending'}</Pill>
          <Pill selected={true} mr={'2'} mb={'3'}>{'Pending'}</Pill>

          <Pill color={'primary'} mr={'2'} mb={'3'}>{'Pending'}</Pill>
          <Pill selected={true} color={'primary'} mr={'2'} mb={'3'}>{'Pending'}</Pill>

          <Pill color={'red'} mr={'2'} mb={'3'}>{'Pending'}</Pill>
          <Pill selected={true} color={'red'} mr={'2'} mb={'3'}>{'Pending'}</Pill>

          <Pill color={'blue'} mr={'2'} mb={'3'}>{'Pending'}</Pill>
          <Pill selected={true} color={'blue'} mr={'2'} mb={'3'}>{'Pending'}</Pill>
        </ThemeProvider>
      </div>
    );
  }
}
