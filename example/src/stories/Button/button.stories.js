import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Documentation from './documentation.md';
import Guidelines from './GUIDELINES.md';

import {
  Button,
  OutlineButton,
  TextButton,
  MetaMaskButton,
  Icon,
  Loader,
  Text,
  Heading,
  Box,
  Flex,
} from 'rimble-ui';

storiesOf('Button', module)
  .add(
    'Documentation',
    withDocs(Documentation, () => (
      <Box textAlign={'left'}>
        <Box>
          <Heading.h2>Button examples</Heading.h2>
          <Text>Different ways to use the button component</Text>
          <br />
        </Box>
        <Box>
          <Heading.h4>Default button</Heading.h4>
          <Text.p>
            Use to show users the primary action(s) they can take from the
            screen they're on.
          </Text.p>
          <Button mb={3}>Connect wallet</Button>
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
            <code>{'<Button>Connect wallet</Button>'}</code>
          </Box>
        </Box>
        <br />
        <Box>
          <Heading.h4>Different sizes</Heading.h4>
          <Button size="small" mb={3}>
            Connect wallet
          </Button>
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
            <code>{'<Button size="small">Connect wallet</Button>'}</code>
          </Box>
          <br />
          <Button size="medium" mb={3}>
            Connect wallet
          </Button>
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
            <code>{'<Button size="medium">Connect wallet</Button>'}</code>
          </Box>
          <br />
          <Button size="large" mb={3}>
            Connect wallet
          </Button>
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
            <code>{'<Button size="large">Connect wallet</Button>'}</code>
          </Box>
          <br />
          <Heading.h4>Full-width button</Heading.h4>
          <Button fullWidth mb={3}>
            Connect wallet
          </Button>
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
            <code>{'<Button fullWidth>Connect wallet</Button>'}</code>
          </Box>
        </Box>
        <br />
        <Box>
          <Heading.h4>Disabled button</Heading.h4>
          <Text.p>
            Use to tell the user that they need to do something before they can
            perform the action. If possible, use the button copy to explain what
            they need to do or why the button is disabled.
          </Text.p>
          <Button disabled mb={3}>
            Switch to MainNet
          </Button>
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
            <code>{'<Button disabled>disabled Button</Button>'}</code>
          </Box>
        </Box>
        <br />
        <Box>
          <Heading.h4>Icon</Heading.h4>
          <Text.p>
            Use to add visual reinforcement to an action. In most cases an icon
            should support button copy and not replace. Copy is less ambiguous
            than an icon.
          </Text.p>
          <Button icon="Send" mb="3">
            Send Ether
          </Button>
          <br />
          <Button icon="Send" iconpos="right" mb="3">
            Send Ether
          </Button>
          <br />
          <Button icon="MoreHoriz" icononly mb="3" mr={2} />
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
            <code>{'<Button icon="Send">Send Ether</Button>'}</code>
          </Box>
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
            <code>
              {'<Button icon="Check" iconpos="right">Send Ether</Button>'}
            </code>
          </Box>
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
            <code>{'<Button icon="MoreHoriz" icononly mb="3" mr={2} />'}</code>
          </Box>
        </Box>
        <br />
        <Box>
          <Heading.h4>Loading button</Heading.h4>
          <Text.p>
            Use to give users reassurance that the action they want is
            happening. If possible, include copy that further explains what's
            happening like "Loading" or "Sending"
          </Text.p>
          <Button mb={3}>
            <Loader color="white" />
          </Button>
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
            <code>{'<Button><loader color="white" /></Button>'}</code>
          </Box>
        </Box>
      </Box>
    ))
  )
  .add(
    'Guidelines',
    withDocs(Guidelines, () => (
      <div>
        <div>
          <Button>Click Me</Button>
        </div>
        <div>
          <Button>Click Me</Button>
        </div>
        <div>
          <Button size="small" mb={3}>
            Small Button
          </Button>
          <br />
          <Button size="medium" mb={3}>
            Medium Button
          </Button>
          <br />
          <Button size="large" mb={3}>
            Large Button
          </Button>
          <br />
          <Button fullWidth>Full-width Button</Button>
        </div>
        <div>
          <Button disabled>disabled Button</Button>
        </div>
        <div>
          <Button icon="Check" mb="3">
            Click me!
          </Button>
          <br />
          <Button icon="Check" iconpos="right" mb="3">
            Click me!
          </Button>
          <br />
          <Button icon="MoreHoriz" icononly mb="3" mr={2} />
          <OutlineButton icon="MoreHoriz" icononly mb="3" mr={2} />
          <TextButton icon="MoreHoriz" icononly mb="3" />
        </div>
        <div>
          <Button>
            <Loader color="white" />
          </Button>
        </div>
      </div>
    ))
  );
