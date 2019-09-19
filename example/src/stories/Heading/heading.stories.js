import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import {
  Heading,
  Box,
  Text,
} from 'rimble-ui';

storiesOf('Components/', module)
  .add('Heading',
    withDocs(Documentation, () => (
      <Box mx={3}>
        <Box>
          <Heading.h3>Heading examples</Heading.h3>
          <Text>
            Different ways to use the <code>{'Heading'}</code> component
          </Text>
          <br />
        </Box>
        <Box>
          <Heading.h4>H1</Heading.h4>
          <Text.p>Use for page or screen titles</Text.p>
        </Box>

        <CodeBlock>
          <Heading.h1>Transactions</Heading.h1>
        </CodeBlock>

        <br />
        <Box>
          <Heading.h4>H2</Heading.h4>
          <Text.p>
            Use for headings that are sub-sections of the <code>{'h1'}</code>{' '}
            heading
          </Text.p>
          <Heading.h2>Latest transactions</Heading.h2>
        </Box>
        <CodeBlock textOnly>
          {'<Heading.h2>Latest transaction</Heading.h2>'}
        </CodeBlock>

        <br />
        <Box>
          <Heading.h4>H3</Heading.h4>
          <Text.p>
            Use for headings that are sub-sections of an <code>{'h2'}</code>{' '}
            heading
          </Text.p>
          <Heading.h3>Successful transactions</Heading.h3>
        </Box>
        <CodeBlock textOnly>
          {'<Heading.h3>Successful transactions</Heading.h3>'}
        </CodeBlock>
        <br />
        <Box>
          <Heading.h4>H4</Heading.h4>
          <Text.p>
            Use for headings that are sub-sections of any <code>{'h3'}</code>{' '}
            headings
          </Text.p>
          <Heading.h4>Transaction fees</Heading.h4>
        </Box>

        <CodeBlock textOnly>
          {'<Heading.h4>Transaction fees</Heading.h4>'}
        </CodeBlock>

        <br />
        <Box>
          <Heading.h4>H5</Heading.h4>
          <Text.p>
            Use for headings that are sub-sections of any <code>{'h4'}</code>{' '}
            headings
          </Text.p>
          <Heading.h5>Transaction fees explained</Heading.h5>
        </Box>

        <CodeBlock textOnly>
          {'<Heading.h5>Transaction fees explained</Heading.h5>'}
        </CodeBlock>

        <br />
        <Box>
          <Heading.h4>H6</Heading.h4>
          <Text.p>
            Use for headings that are sub-sections of any <code>{'h5'}</code>{' '}
            headings
          </Text.p>
          <Heading.h6>How are transaction fees calculated?</Heading.h6>
        </Box>

        <CodeBlock textOnly>
          {'<Heading.h6>How are transaction fees calculated?</Heading.h6>'}
        </CodeBlock>
      </Box>
    ))
  )
