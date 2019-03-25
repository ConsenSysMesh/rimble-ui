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
  Modal,
  Card,
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
            Use to indicate to the user that they need to do something before they can
            perform the action.
          </Text.p>
          <Button disabled mb={3}>
            Connect wallet
          </Button>
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
            <code>{'<Button disabled>Connect wallet</Button>'}</code>
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
    'Design guidelines',
    withDocs(Guidelines, () => (
    <Box textAlign={'left'}>
    <Box>
      <Heading.h2>Design</Heading.h2>
      <Text>Some best practices for using <code>{'Button'}</code> in your product.</Text>
    </Box>
    <Box>
    <ul>
    <li>
    <Text>Don’t use buttons for navigational links, they're for action-based tasks. Use <a href="https://consensys.github.io/rimble-ui/?path=/story/button--textbutton"><code>{'textButton'}</code></a> instead</Text></li></ul>
    </Box>
    <Box>
    <ul>
    <li>
    <Text>Keep button position consistent so that users know where to look when they want to perform actions</Text></li>
    </ul>
    </Box>
    <Box>
    <ul>
    <li>
    <Text>Don’t use too many buttons together on one piece of interface: prioritise the most important action. Use <a href="https://consensys.github.io/rimble-ui/?path=/story/button--textbutton"><code>{'textButton'}</code></a> and <a href="https://consensys.github.io/rimble-ui/?path=/story/button--outlinebutton"><code>{'outlineButton'}</code></a> to give your actions visual hierarchy</Text></li></ul>
    </Box>
    <Box>
    <ul>
    <li><Text>If a user needs to do something prior to performing an action, it’s better to set the Disabled prop to True than to use this component and follow it up with an error message</Text></li></ul>
    </Box>
    <br /><br />
      <Box>
        <Heading.h2>Content</Heading.h2>
        <Text>Some best practices for writing <code>{'Button'}</code> microcopy.</Text>
      </Box>
      <Box>
        <Heading.h4>Keep copy concise</Heading.h4>
        <Text>Don’t use articles (a, the, an) in button microcopy. This will make your button quicker to scan and shorter.</Text>
      </Box>
      <br />
      <Flex>
        <Box width={1/2}>
          <Heading.h6>Do</Heading.h6>
          <Button size="medium">Add wallet</Button>
        </Box>
        <Box width={1/2}>
          <Heading.h6>Don't</Heading.h6>
          <Button size="medium">Add a wallet</Button>
        </Box>
      </Flex>
      <br />
      <Box>
        <Heading.h4>Explain the next step, not the end goal</Heading.h4>
        <Text>The user should understand exactly what will happen once they press the button.</Text><br />
        <Text>For example, if you have a button that launches a QR code for you to scan with your mobile...</Text>
      </Box>
      <br />
      <Flex>
        <Box width={1/2}>
          <Heading.h6>Do</Heading.h6>
          <Button size="medium">Show QR code</Button>
        </Box>
        <Box width={1/2}>
          <Heading.h6>Don't</Heading.h6>
          <Button size="medium">Scan QR code</Button>
        </Box>
        <br />
      </Flex>
      <br />
      <Box>
        <Heading.h4>Lead with a verb</Heading.h4>
        <Text>And follow with a noun. Don’t rely on the rest of the interface to inform the user about what their action relates to.</Text>
      </Box>
      <br />
      <Flex>
        <Box width={1/2}>
          <Heading.h6>Do</Heading.h6>
          <Button size="medium">Add wallet</Button><br /><br  />
          <Button size="medium">Send Ether</Button>
        </Box>
        <Box width={1/2}>
          <Heading.h6>Don't</Heading.h6>
          <Button icon="AddCircle">Add</Button><br /><br />
          <Button icon="Send" mb="3">Send</Button>
        </Box>
      </Flex>
      <Box>
      <Text>Universally understood actions like "Save", "Next" and "Previous" etc may not need the noun.</Text>
      </Box>
      </Box>
    ))
  );
