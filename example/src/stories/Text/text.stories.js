import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import {
  Text,
  Box,
  Heading,
} from 'rimble-ui';

storiesOf('Components/', module)
  .add(
    'Text',
    withDocs(Documentation, () => (
      <Box mx={3}>
        <Box>
          <Heading.h3>Text examples</Heading.h3>
          <Text>
            Different ways to use the <code>{'Text'}</code> component
          </Text>
          <br />
        </Box>
        <Box>
          <Heading.h4>Default text</Heading.h4>

          <Text>
            By default, the Text component will render text inside a{' '}
            <code>{'<div>'}</code> element.
          </Text>
          <br />
          <CodeBlock>
            <Text>The intent of Ethereum is to...</Text>
          </CodeBlock>
        </Box>

        <br />
        <Box>
          <Heading.h4>Text with span</Heading.h4>
          <Text>
            Renders text inside a <code>{'<span>'}</code> element.
          </Text>
          <br />
          <Text.span>The intent of Ethereum is to...</Text.span>
          <CodeBlock textOnly>
            {`<Text.span>The intent of Ethereum is to...</Text.span>`}
          </CodeBlock>
        </Box>

        <br />
        <Box>
          <Heading.h4>Paragraph text</Heading.h4>
          <Text>
            Renders text inside a <code>{'<p>'}</code> element.
          </Text>
          <Text.p>The intent of Ethereum is to ... </Text.p>
          <CodeBlock textOnly>
            {`<Text.p>The intent of Ethereum is to ... </Text.p>`}
          </CodeBlock>
        </Box>

        <br />
        <Box>
          <Heading.h4>Text with strikethrough</Heading.h4>
          <Text.s>The intent of Ethereum is to... </Text.s>
          <CodeBlock textOnly>
            {`<Text.s>The intent of Ethereum is to... </Text.s>`}
          </CodeBlock>
        </Box>

        <Box>
          <Heading.h4>Bold Text</Heading.h4>
          <Text bold>The intent of Ethereum is to...</Text>
          <CodeBlock textOnly>
            {`<Text bold>The intent of Ethereum is to...</Text>`}
          </CodeBlock>
        </Box>

        <Box>
          <Heading.h4>Italic Text</Heading.h4>
          <Text italic>The intent of Ethereum is to...</Text>
          <CodeBlock textOnly>
            {`<Text italic>The intent of Ethereum is to...</Text>`}
          </CodeBlock>
        </Box>

        <Box>
          <Heading.h4>Caps Text</Heading.h4>
          <Text caps>The intent of Ethereum is to...</Text>
          <CodeBlock textOnly>
            {`<Text caps>The intent of Ethereum is to...</Text>`}
          </CodeBlock>
        </Box>
      </Box>
    ))
  )
