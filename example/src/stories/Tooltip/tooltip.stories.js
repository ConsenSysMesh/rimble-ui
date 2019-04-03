import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Documentation from './docs.md';
import Guidelines from './guide.md';

import {
  Tooltip,
  Icon,
  Flex,
  Text,
  Button,
  OutlineButton,
  TextButton,
  Box,
  Heading,
  Input,
  Field,
  Link,
  Card,
  Pill,
} from 'rimble-ui';

storiesOf('Components/Tooltip', module)
  .addDecorator(withDocs(Documentation))
  .add('Documentation', () => (
    <Box mx={3} textAlign={'left'}>
      <Box>
        <Heading.h2>Tooltip examples</Heading.h2>
        <Text>Different ways to use the tooltip component</Text>
        <br />
      </Box>
      <Box>
        <Heading.h4>Placement</Heading.h4>
        <Text.p>Adjust where your tooltip appears on hover</Text.p>
        <br />
        <Flex>
          <Box width={1 / 4}>
            <Tooltip message="Top tooltip" placement="top">
              <OutlineButton mb={3}>Show top</OutlineButton>
            </Tooltip>
          </Box>
          <br />
          <Box width={1 / 4}>
            <Tooltip message="Left tooltip" placement="left">
              <OutlineButton mb={3}>Show left</OutlineButton>
            </Tooltip>
          </Box>
          <br />
          <Box width={1 / 4}>
            <Tooltip message="Bottom tooltip" placement="bottom">
              <OutlineButton mb={3}>Show bottom</OutlineButton>
            </Tooltip>
          </Box>
          <br />
          <Box width={1 / 4}>
            <Tooltip message="Right tooltip" placement="right">
              <OutlineButton mb={3}>Show right</OutlineButton>
            </Tooltip>
          </Box>
        </Flex>
        <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
          <code>
            {
              '<Tooltip message="Top tooltip" placement="top"><OutlineButton>Show top</OutlineButton></Tooltip>'
            }
          </code>
        </Box>
        <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
          <code>
            {
              '<Tooltip message="Left tooltip" placement="left"><OutlineButton>Show left</OutlineButton></Tooltip>'
            }
          </code>
        </Box>
        <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
          <code>
            {
              '<Tooltip message="Bottom tooltip" placement="bottom"><OutlineButton>Show bottom</OutlineButton></Tooltip>'
            }
          </code>
        </Box>
        <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
          <code>
            {
              '<Tooltip message="Right tooltip" placement="right"><OutlineButton>Show right</OutlineButton></Tooltip>'
            }
          </code>
        </Box>
      </Box>
      <br />
      <Box>
        <Heading.h4>Colour</Heading.h4>
        <Text.p>Choose the colour of your tooltip</Text.p>
        <Tooltip variant="dark" message="Dark tooltip" placement="right">
          <Button mb={3}>Show dark</Button>
        </Tooltip>
        <br />
        <Tooltip variant="light" message="Light tooltip" placement="right">
          <OutlineButton>Show light</OutlineButton>
        </Tooltip>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>
          {
            '<Tooltip variant="dark" message="Dark tooltip" placement="right"><Button>Show dark</Button></Tooltip>'
          }
        </code>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>
          {
            '<Tooltip variant="light" message="Light tooltip" placement="right"><OutlineButton>Show light</OutlineButton></Tooltip>'
          }
        </code>
      </Box>
      <br />
      <Flex
        size="80px"
        borderRadius="100%"
        mx="auto"
        my="5"
        bg="#ccc"
        alignItems="center"
        justifyContent="center"
      >
        <Tooltip message="Wrap me around your tooltip trigger">
          <Icon name="Info" />
        </Tooltip>
      </Flex>
    </Box>
  ))
  .add(
    'Design guidelines',
    withDocs(Guidelines, () => (
      <Box mx={3} textAlign={'left'}>
        <Box>
          <Heading.h2>Design and content</Heading.h2>
          <Text>
            Some best practices for using <code>{'Tooltip'}</code> in your
            product.
          </Text>
        </Box>
        <Box>
          <Heading.h4>Tooltips are for supporting information</Heading.h4>
          <Text>
            They're for extra information that some might find useful but don't
            necessarily need to be on the interface for everyone. The content
            should never provide critical information that will impact a user's
            ability to use your product. For example, if you hover over a piece
            of UI that indicates your network status...
          </Text>
          <br />

          <Flex>
            <Card mx={'auto'} my={3} px={4} width="400px">
              <Pill mb={3} color={'green'}>
                {'Do'}
              </Pill>
              <br />
              <Tooltip
                placement="right"
                variant="dark"
                message="You're on the Rinkeby network"
              >
                <TextButton icon="Check">Right network</TextButton>
              </Tooltip>
            </Card>
            <Card mx={'auto'} my={3} px={4} width="400px">
              <Pill mb={3} color={'red'}>
                {"Don't"}
              </Pill>
              <br />
              <Tooltip
                placement="right"
                variant="dark"
                message="To use this dApp you must be on the Rinkeby network"
              >
                <TextButton icon="Warning">Wrong network</TextButton>
              </Tooltip>
            </Card>
          </Flex>
        </Box>
        <br />
        <Box>
          <Heading.h4>Tooltips aren't labels</Heading.h4>
          <Text>
            Tooltips are for elaboration. Labels next to UI elements are always
            better than tooltips as it is not always clear that tooltips are
            there. And it's not always possible to hover.
          </Text>
          <br />

          <Flex>
            <Card mx={'auto'} my={3} px={4} width="400px">
              <Pill mb={3} color={'green'}>
                {'Do'}
              </Pill>
              <br />
              <br />
              <Tooltip
                placement="bottom"
                variant="light"
                message="This will start the transaction"
              >
                <OutlineButton icon="Send">Send Ether</OutlineButton>
              </Tooltip>
            </Card>
            <Card mx={'auto'} my={3} px={4} width="400px">
              <Pill mb={3} color={'red'}>
                {"Don't"}
              </Pill>
              <br />
              <br />
              <Tooltip placement="bottom" variant="light" message="Send Ether">
                <OutlineButton icon="Send" />
              </Tooltip>
            </Card>
          </Flex>
          <br />
          <Box>
            <Heading.h4>Keep tooltips short</Heading.h4>
            <Text>
              Don't include too much text in a tooltip. They're for short
              clarification or elaboration. If you need more than a couple of
              sentences, consider using a{' '}
              <Link href="./story/Modal--documentation">
                <code>{'modal'}</code>
              </Link>
              .
            </Text>
            <br />
          </Box>

          <Box>
            <Heading.h4>Some suggested uses</Heading.h4>
            <br />
            <Tooltip
              placement="bottom"
              variant="light"
              message="0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2"
            >
              <Pill>{'0x99...7d2'}</Pill>
            </Tooltip>
            <br />
            <br />

            <Text>
              This will include a small{' '}
              <Tooltip message="This pays for your transaction to be added to the blockchain">
                <strong>transaction fee</strong>
              </Tooltip>{' '}
              which we'll include in your transaction summary
            </Text>
          </Box>
        </Box>
        <br />
        <br />
        <Text textAlign={'center'}>(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧</Text>
        <br />
        <Card color="white" bg="primary">
          <Heading.h2 color="white">Are we missing anything?</Heading.h2>
          <Text color="white">
            If you have any extra insight you'd like to add, please raise an
            issue in Github.
          </Text>
          <br />
          <Link
            href="https://github.com/ConsenSys/rimble-ui/issues"
            title="GitHub Issues for Rimble UI"
            target="_blank"
          >
            <OutlineButton Large>Raise issue</OutlineButton>
          </Link>
          <br />
          <br />
        </Card>
        <br />
      </Box>
    ))
  );
