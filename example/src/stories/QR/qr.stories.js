import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';
import ContributeBanner from '../../components/ContributeBanner';

import Documentation from './docs.md';

import {
  QR,
  Box,
  Text,
  Flex,
  Card,
  Pill,
  Heading,
  PublicAddress
} from 'rimble-ui';

storiesOf('Components/', module)
  .add(
    'QR Code',
    withDocs(Documentation, () => (
      <Box mx={3}>
        <CodeBlock>
          <QR value="0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A" />
        </CodeBlock>
      </Box>
    ))
  )
