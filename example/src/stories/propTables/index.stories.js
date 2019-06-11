import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import {
  Box,
  Flex,
  Card,
  Text,
  Heading,
  Link,
  Pill,
  Button,
  Form,
  Input,
  Avatar,
  Flash,
  Tooltip,
  Icon,
  Blockie
} from 'rimble-ui'

storiesOf('Prop Tables', module)
  .addParameters({
    info: {
      inline: true
    },
  })
  .addDecorator(withInfo) // At your stories directly.
  .add('Avatar Example', () => (
    <Avatar src="https://airswap-token-images.s3.amazonaws.com/DAI.png" />
  ))
  .add('Box Example', () => (
    <Box size={'10rem'} bg={'grey'} />
  ))
  .add('Flex Example', () => (
    <Flex size={'10rem'} bg={'grey'} />
  ))
  .add('Card Example', () => (
    <Card size={'10rem'} />
  ))
  .add('Text Example', () => (
    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
  ))
  .add('Link Example', () => (
    <Link href="#!">Link</Link>
  ))
  .add('Pill Example', () => (
    <Pill>Pill</Pill>
  ))
  .add('Heading Example', () => (
    <Heading>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Heading>
  ))
  .add('Button Example', () => (
    <Button>Click me</Button>
  ))
  .add('Form Example', () => (
    <Form>
      Click me
    </Form>
  ))
  .add('Input Example', () => (
    <Input
      type="text"
      id="name"
      name="name"
      required
      minlength="4"
      maxlength="8"
      size="10"
    />
  ))
  .add('Tooltip Example', () => (
    <Tooltip message={'your tooltip message here'}>
      hover me
    </Tooltip>
  ))
  .add('Flash Example', () => (
    <Flash>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum aperiam, reiciendis dolore ipsum modi sunt repellat? Nemo numquam provident, ab ipsum repudiandae maiores excepturi magnam praesentium soluta, cumque eum quasi.
    </Flash>
  ))
  .add('Icon Example', () => (
    <Icon name="Check" />
  ))
  .add('Blockie Example', () => (
    <Blockie opts={{ seed: 'foo' }} />
  ))
;
