import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Text, Box, Heading } from 'rimble-ui';

storiesOf('Text', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => (
    <Box mx={3} textAlign={'left'}>
      <Box>
        <Heading.h4>Default text</Heading.h4>
        <Text>
          By default, the Text component will render a <code>{'<div>'}</code>{' '}
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
  ));
