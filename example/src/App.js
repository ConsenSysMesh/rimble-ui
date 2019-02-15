import React, { Component } from "react";

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
           <Slider />
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
           <Slider />
        </ThemeProvider>
      </div>
    );
  }
}
