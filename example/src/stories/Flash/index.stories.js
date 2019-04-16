import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';
import ContributeBanner from '../../components/ContributeBanner';

import Documentation from './docs.md';
import Guidelines from './guide.md';

import {
  Flash,
  Link, 
  Box, 
  Heading,
  Text,
} from 'rimble-ui';

storiesOf('Components/Flash', module)
  .add(
    'Documentation',
    withDocs(Documentation, () => (
      <div>
        <Flash>
          Flash default
          This is a primary alert with an <Link>example link</Link>. Give it a click if you like.
        </Flash>

        <Flash variant={'info'} my={3}>
          Flash "info"
          This is a primary alert with an <Link>example link</Link>. Give it a click if you like.
        </Flash>

        <Flash variant={'success'} my={3}>
          Flash "success"
          This is a primary alert with an <Link>example link</Link>. Give it a click if you like.
        </Flash>

        <Flash variant={'warning'} my={3}>
          Flash "warning"
          This is a primary alert with an <Link>example link</Link>. Give it a click if you like.
        </Flash>

        <Flash variant={'danger'} my={3}>
          Flash "danger"
          This is a primary alert with an <Link>example link</Link>. Give it a click if you like.
        </Flash>
      </div>
    ))
  )
  .add(
    'Guidelines',
    withDocs(Guidelines, () => (
      <Box>
        <Box>
          <Box>
            <Heading.h3>Design</Heading.h3>
            <Text.p>
              Some best practice for using <code>{'Flash'}</code> in your
              product.
            </Text.p>
          </Box>

          <Heading.h4>Descriptive Text</Heading.h4>
          <Text>
            Use an active voice and make the message as descriptive and informative as possible
          </Text>

          <ContributeBanner />
        </Box>
      </Box>
    ))
  )
