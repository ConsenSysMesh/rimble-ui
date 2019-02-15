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
        </div>
        <ThemeProvider theme={myTheme}>
          <Button size={"medium"}>Click me!</Button>
          <OutlineButton>Click</OutlineButton>
          <TextButton>Click</TextButton>
          <Link>I'm a Link!</Link>
        </ThemeProvider>
      </div>
    );
  }
}
