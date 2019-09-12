import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import {
  Flash,
  Box,
  Heading,
  Text,
} from 'rimble-ui';

storiesOf('Components/Flash', module)
  .add(
    'Documentation',
    withDocs(Documentation, () => (
    <Box mx={3}>
      <Box>
        <Heading.h3>
          Flash examples
        </Heading.h3>
        <Text>
          Different ways to use the <code>{'Flash'}</code> component
        </Text>
      </Box>
      <Box>
        <Heading.h4>
          Default flash banner
        </Heading.h4>
        <CodeBlock>
          <Flash>
            Flash default
            This is a primary alert with an <Flash.Link>example link</Flash.Link>. Give it a click if you like.
          </Flash>
        </CodeBlock>
        <Heading.h4>
          <code>{'info'}</code> flash banner
        </Heading.h4>
        <CodeBlock>
          <Flash variant={'info'}>
            Flash "info"
            This is a primary alert with an <Flash.Link>example link</Flash.Link>. Give it a click if you like.
          </Flash>
        </CodeBlock>
        <Heading.h4>
          <code>{'success'}</code> flash banner
        </Heading.h4>
        <CodeBlock>
          <Flash variant={'success'}>
            Flash "success"
            This is a primary alert with an <Flash.Link>example link</Flash.Link>. Give it a click if you like.
          </Flash>
        </CodeBlock>
        <Heading.h4>
          <code>{'warning'}</code> flash banner
        </Heading.h4>
        <CodeBlock>
          <Flash variant={'warning'}>
            Flash "warning"
            This is a primary alert with an <Flash.Link>example link</Flash.Link>. Give it a click if you like.
          </Flash>
        </CodeBlock>
        <Heading.h4>
          <code>{'danger'}</code> flash banner
        </Heading.h4>
        <CodeBlock>
          <Flash variant={'danger'}>
            Flash "danger"
            This is a primary alert with an <Flash.Link>example link</Flash.Link>. Give it a click if you like.
          </Flash>
        </CodeBlock>
      </Box>
    </Box>
    ))
  )
