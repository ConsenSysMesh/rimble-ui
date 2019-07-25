import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import {
  PublicAddress,
  Box,
  Heading,
} from 'rimble-ui';

storiesOf('Components/', module)
  .add(
    'PublicAddress',
    withDocs(Documentation, () => (
      <Box>
        <Box mx={3}>
          <CodeBlock>
            <PublicAddress
              address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'}
            />
          </CodeBlock>
        </Box>

        <Box mx={3}>
          <Heading.h4>Changing Label</Heading.h4>
          <CodeBlock>
            <PublicAddress
              width={1}
              address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'}
              label={'Wallet Address'}
            />
          </CodeBlock>
        </Box>
      </Box>
    ))
  )
