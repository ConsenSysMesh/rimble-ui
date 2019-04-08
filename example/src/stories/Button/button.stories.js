import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { linkTo } from '@storybook/addon-links';
import CodeBlock from '../../components/CodeBlock';
import ContributeBanner from '../../components/ContributeBanner';

import Documentation from './docs.md';
import Guidelines from './guide.md';

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
  Pill,
  Link,
} from 'rimble-ui';

storiesOf('Components/Buttons/Button', module).add(
  'Documentation',
  withDocs(Documentation, () => (
    <Box mx={3}>
      <Box>
        <Heading.h3>Button examples</Heading.h3>
        <Text>
          Different ways to use the <code>{'Button'}</code> component
        </Text>
        <br />
      </Box>
      <Box>
        <Heading.h4>Default button</Heading.h4>
        <Text.p>
          Use to show users the primary action(s) they can take from the screen
          they're on.
        </Text.p>
        <CodeBlock>
          <Button>Connect wallet</Button>
        </CodeBlock>
      </Box>
      <br />
      <Box>
        <Heading.h4>Different sizes</Heading.h4>
        <CodeBlock>
          <Button size="small">Connect wallet</Button>
        </CodeBlock>

        <CodeBlock>
          <Button size="medium">Connect wallet</Button>
        </CodeBlock>

        <CodeBlock>
          <Button size="large">Connect wallet</Button>
        </CodeBlock>

        <br />
        <Heading.h4>Full-width button</Heading.h4>
        <CodeBlock>
          <Button fullWidth>Connect wallet</Button>
        </CodeBlock>
      </Box>
      <br />
      <Box>
        <Heading.h4>Disabled button</Heading.h4>
        <Text.p>
          Use to indicate to the user that they need to do something before they
          can perform the action.
        </Text.p>
        <CodeBlock>
          <Button disabled>Connect wallet</Button>
        </CodeBlock>
      </Box>
      <br />
      <Box>
        <Heading.h4>Icon</Heading.h4>
        <Text.p>
          Use to add visual reinforcement to an action. In most cases an icon
          should support button copy and not replace. Copy is less ambiguous
          than an icon.
        </Text.p>
        <CodeBlock>
          <Button icon="Send">Send Ether</Button>
        </CodeBlock>
        <CodeBlock>
          <Button icon="Send" iconpos="right">
            Send Ether
          </Button>
        </CodeBlock>
        <CodeBlock>
          <Button icon="MoreHoriz" icononly />
        </CodeBlock>
      </Box>
      <br />
      <Box>
        <Heading.h4>Loading button</Heading.h4>
        <Text.p>
          Use to give users reassurance that the action they want is happening.
          If possible, include copy that further explains what's happening like
          "Loading" or "Sending"
        </Text.p>
        <CodeBlock>
          <Button>
            <Loader color="white" />
          </Button>
        </CodeBlock>
      </Box>
      <br />
      <Box>
        <Heading.h4>Link button</Heading.h4>
        <Text>
          Use when you want a primary action to navigate the user to a new page
          or area. Use action words as the button label.
        </Text>
        <Text.p italic>
          This also requires you to import the Link component from the rimble-ui
          library.
        </Text.p>
        <Button as={Link} href="#!" title="Learn more" target="_blank">
          Learn More
        </Button>
        <CodeBlock textOnly>
          {`
<Button
  as={Link}
  href="#!"
  title="Learn more"
  target="_blank"
>
  Learn More
</Button>
`}
        </CodeBlock>
      </Box>
    </Box>
  ))
);
storiesOf('Components/Buttons', module).add(
  'Design guidelines',
  withDocs(Guidelines, () => (
    <Box mx={3}>
      <Box>
        <Heading.h3>Design</Heading.h3>
        <Text>
          Some best practices for using <code>{'Button'}</code> in your product.
        </Text>
      </Box>
      <Box>
        <Heading.h4>Don't just use icons</Heading.h4>
        <Flex>
          <Card mx={'auto'} my={3} px={4} width="400px">
            <Pill mb={3} color={'green'}>
              {'Do'}
            </Pill>
            <br />
            <br />
            <Button icon="Send" mb="3">
              Send Ether
            </Button>
          </Card>
          <Card mx={'auto'} my={3} px={4} width="400px">
            <Pill mb={3} color={'red'}>
              {"Don't"}
            </Pill>
            <br />
            <br />
            <Button icon="Send" mb="3" />
          </Card>
        </Flex>
        <br />
        <Heading.h4>Don’t use buttons for navigational links</Heading.h4>
        <Text>
          Buttons are for action-based tasks. Use{' '}
          <Link
            onClick={linkTo('components-buttons-textbutton', 'documentation')}
            title="Rimble UI Text Button component"
            href="javascript:;"
          >
            TextButton
          </Link>{' '}
          instead.
        </Text>
      </Box>
      <Flex>
        <Card mx={'auto'} my={3} px={4} width="400px">
          <Pill mb={3} color={'green'}>
            {'Do'}
          </Pill>
          <br />
          <br />
          <TextButton mb="3">Transaction history</TextButton>
        </Card>
        <Card mx={'auto'} my={3} px={4} width="400px">
          <Pill mb={3} color={'red'}>
            {"Don't"}
          </Pill>
          <br />
          <br />
          <Button mb="3">Transaction history</Button>
        </Card>
      </Flex>
      <br />
      <Box>
        <Heading.h4>Keep button position consistent</Heading.h4>
        <Text>
          This will let users know where to look when they want to perform
          actions
        </Text>
      </Box>
      <br />
      <Box>
        <Heading.h4>Consider visual hierarchy of buttons</Heading.h4>
        <Text>
          Don’t use too many buttons together on one piece of interface:
          prioritise the most important action. Use{' '}
          <Link
            onClick={linkTo('components-buttons-textbutton', 'documentation')}
            title="Rimble UI Text Button component"
            href="javascript:;"
          >
            TextButton
          </Link>{' '}
          and{' '}
          <Link
            onClick={linkTo(
              'components-buttons-outlinebutton',
              'documentation'
            )}
            title="Rimble UI Outline Button component"
            href="javascript:;"
          >
            OutlineButton
          </Link>{' '}
          to give your actions visual hierarchy
        </Text>
      </Box>
      <br />
      <Card width={'600px'} mx={'auto'} px={4}>
        <Heading>What's a transaction fee?</Heading>
        <Text mb={4}>
          Every blockchain action requires a fee. This pays for someone in the
          network to update the blockchain. It doesn’t go to us. Be sure to save
          some ETH aside for fees.
        </Text>
        <Flex>
          <Box width={1 / 2}>
            <TextButton>Cancel</TextButton>
          </Box>
          <Box width={1 / 2}>
            <OutlineButton mr={3} disabled>
              Previous
            </OutlineButton>
            <Button mr={3}>Next</Button>
          </Box>
        </Flex>
      </Card>
      <br />
      <br />
      <Box>
        <Heading.h3>Content</Heading.h3>
        <Text>
          Some best practices for writing <code>{'Button'}</code> microcopy.
        </Text>
      </Box>
      <Box>
        <Heading.h4>Keep copy concise</Heading.h4>
        <Text>
          Don’t use articles (a, the, an) in button microcopy. This will make
          your button quicker to scan and shorter.
        </Text>
      </Box>
      <br />
      <Flex>
        <Card mx={'auto'} my={3} px={4} width="400px">
          <Pill mb={3} color={'green'}>
            {'Do'}
          </Pill>
          <br />
          <br />
          <Button my={3} size="medium">
            Add wallet
          </Button>
        </Card>
        <Card mx={'auto'} my={3} px={4} width="400px">
          <Pill mb={3} color={'red'}>
            {"Don't"}
          </Pill>
          <br />
          <br />
          <Button my={3} size="medium">
            Add a wallet
          </Button>
        </Card>
      </Flex>
      <br />
      <Box>
        <Heading.h4>Explain the next step, not the end goal</Heading.h4>
        <Text>
          The user should understand exactly what will happen once they press
          the button.
        </Text>
        <br />
        <Text>
          For example, if you have a button that launches a QR code for you to
          scan with your mobile...
        </Text>
      </Box>
      <br />
      <Flex>
        <Card mx={'auto'} my={3} px={4} width="400px">
          <Pill mb={3} color={'green'}>
            {'Do'}
          </Pill>
          <br />
          <br />
          <Button my={3} size="medium">
            Show QR code
          </Button>
        </Card>
        <Card mx={'auto'} my={3} px={4} width="400px">
          <Pill mb={3} color={'red'}>
            {"Don't"}
          </Pill>
          <br />
          <br />
          <Button my={3} size="medium">
            Scan QR code
          </Button>
        </Card>
        <br />
      </Flex>
      <br />
      <Box>
        <Heading.h4>Lead with a verb and follow with a noun</Heading.h4>
        <Text>
          Don’t rely on the rest of the interface to inform the user about what
          their action relates to.
        </Text>
      </Box>
      <br />
      <Flex>
        <Card mx={'auto'} my={3} px={4} width="400px">
          <Pill mb={3} color={'green'}>
            {'Do'}
          </Pill>
          <br />
          <br />
          <Button size="medium">Add wallet</Button>
          <br />
          <br />
          <Button size="medium">Send Ether</Button>
        </Card>
        <Card mx={'auto'} my={3} px={4} width="400px">
          <Pill mb={3} color={'red'}>
            {"Don't"}
          </Pill>
          <br />
          <br />
          <Button icon="AddCircle">Add</Button>
          <br />
          <br />
          <Button icon="Send" mb="3">
            Send
          </Button>
        </Card>
      </Flex>
      <br />
      <Box>
        <Text>
          Universally understood actions like "Save", "Next" and "Previous" etc
          may not need the noun.
        </Text>
      </Box>
      <ContributeBanner />
    </Box>
  ))
);
