import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';
import Guidelines from './GUIDELINES.md';

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

storiesOf('Text', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => (
    <Box mx={3} textAlign={'left'}>
    <Box>
      <Heading.h2>Text examples</Heading.h2>
      <Text>Different ways to use the Text component</Text>
      <br />
    </Box>
      <Box>
        <Heading.h4>Default text</Heading.h4>
        <Text>
          By default, the Text component will render a <code>{'<div>'}</code>
          element.
        </Text>
        <br />
        <Text>The intent of Ethereum is to...</Text>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Text>The intent of Ethereum is to...</Text>'}</code>
      </Box>
      <br />
      <Box>
        <Heading.h4>Text with span</Heading.h4>
        <Text>
          Renders a <code>{'span'}</code> element.
        </Text>
        <br />
        <Text.span>The intent of Ethereum is to...</Text.span>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Text.span>The intent of Ethereum is to...</Text.span>'}</code>
      </Box>
      <br />
      <Box>
        <Heading.h4>Paragraph text</Heading.h4>
        <Text>
          Renders a <code>{'p'}</code> element.
        </Text>
        <Text.p>The intent of Ethereum is to ... </Text.p>
      </Box><br />
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Text.p>The intent of Ethereum is to...</Text.p>'}</code>
      </Box>
      <br />
      <Box>
        <Heading.h4>Text with strikethrough</Heading.h4>
        <Text.s>The intent of Ethereum is to... </Text.s>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Text.s>The intent of Ethereum is to...</Text.s>'}</code>
      </Box><br />

      <Box>
        <Heading.h4>Bold Text</Heading.h4>
        <Text bold>The intent of Ethereum is to...</Text>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Text bold>The intent of Ethereum is to...</Text>'}</code>
      </Box><br />

      <Box>
        <Heading.h4>Italic Text</Heading.h4>
        <Text italic>The intent of Ethereum is to...</Text>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Text italic>The intent of Ethereum is to...</Text>'}</code>
      </Box><br />

      <Box>
        <Heading.h4>Caps Text</Heading.h4>
        <Text caps>The intent of Ethereum is to...</Text>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Text caps>The intent of Ethereum is to...</Text>'}</code>
      </Box>
    </Box>
  ))
    .add('Design guidelines', withDocs(Guidelines, () => (
      <Box mx={3} textAlign={'left'}>
      <Box>
        <Heading.h2>Design</Heading.h2>
        <Text>Some best practices for using <code>{'Text'}</code>.</Text>
      </Box>
      <Box>
      <Heading.h4>Don't center-align your text if it's over 3 lines</Heading.h4>
      <Text.p>Centre-aligned text can make it more difficult to read</Text.p>
      </Box>

          <Flex>
          <Card mx={'auto'} my={3} px={4} width="400px">
            <Pill mb={3} color={"green"}>{"Do"}</Pill><br /><br />
              <Text>The intent of Ethereum is to create an alternative protocol for building decentralized applications, providing a different set of tradeoffs that we believe will be very useful for a large class of decentralized applications, with particular emphasis on situations where rapid development time, security for small and rarely used applications, and the ability of different applications to very efficiently interact, are important.</Text>
            </Card>
            <Card mx={'auto'} my={3} px={4} width="400px">
              <Pill mb={3} color={"red"}>{"Don't"}</Pill><br /><br />
              <Text textAlign={'center'}>The intent of Ethereum is to create an alternative protocol for building decentralized applications, providing a different set of tradeoffs that we believe will be very useful for a large class of decentralized applications, with particular emphasis on situations where rapid development time, security for small and rarely used applications, and the ability of different applications to very efficiently interact, are important.</Text>
            </Card>
          </Flex><br />
          <Box>
          <Heading.h4>Use <code>{'Heading'}</code> to break up long copy</Heading.h4>
          <Text.p>Use the <code>{'Heading'}</code> component to break up text and make it easier for users to find what they're looking for.</Text.p>
          </Box>

              <Flex>
              <Card mx={'auto'} my={3} px={4} width="400px">
                <Pill mb={3} color={"green"}>{"Do"}</Pill><br /><br />
                  <Heading.h5>The intent of Ethereum</Heading.h5>
                  <Text>To create an alternative protocol for building decentralized applications, providing a different set of tradeoffs that we believe will be very useful for a large class of decentralized applications.</Text>
                  <Heading.h5>Where is this most important</Heading.h5>
                 <Text>This is particularly important for rapid development time, security for small and rarely used applications, and the ability of different applications to very efficiently interact</Text>
                </Card>
                <Card mx={'auto'} my={3} px={4} width="400px">
                  <Pill mb={3} color={"red"}>{"Don't"}</Pill><br /><br />
                  <Text>The intent of Ethereum is to create an alternative protocol for building decentralized applications, providing a different set of tradeoffs that we believe will be very useful for a large class of decentralized applications, with particular emphasis on situations where rapid development time, security for small and rarely used applications, and the ability of different applications to very efficiently interact, are important.</Text>
                </Card>
              </Flex><br />
              <Box>
              <Heading.h4>Aim for a low reading age</Heading.h4>
              <Text.p>Make it easier for your users to read your copy. The lower the reading age, the simpler it will be for them to consume your information. <Link href="http://www.hemingwayapp.com">Hemingway app</Link> makes it easier to simplify your writing.</Text.p>
              </Box>

                  <Flex>
                  <Card mx={'auto'} my={3} px={4} width="400px">
                    <Pill mb={3} color={"green"}>{"Do"}</Pill><br /><br />
                      <Text>Write in short sentences and avoid complex terms when there are simpler alternatives.</Text>

                    </Card>
                    <Card mx={'auto'} my={3} px={4} width="400px">
                      <Pill mb={3} color={"red"}>{"Don't"}</Pill><br /><br />
                      <Text>Use jargon, deliberately technical language or complex sentence structures.</Text>
                    </Card>
                  </Flex><br /><br />



          <Text textAlign={'center'}>(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧</Text>
          <br />
          <Card color="white" bg="primary">
            <Heading.h2 color="white">Are we missing anything?</Heading.h2>
            <Text color="white">
              If you have any extra insight you'd like to add, please raise an
              issue in Github.
            </Text>
            <br />
            <OutlineButton Large>Raise issue</OutlineButton>
            <br />
            <br />
          </Card>
      </Box>
    ))
  );
