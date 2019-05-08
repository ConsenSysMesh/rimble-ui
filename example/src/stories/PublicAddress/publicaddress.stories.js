import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';
import ContributeBanner from '../../components/ContributeBanner';

import Documentation from './docs.md';
import Guidelines from './guide.md';

import {
  PublicAddress,
  Box,
  Text,
  Heading,
  Flex,
  Card,
  Pill,
  
  QR,
  Link,
} from 'rimble-ui';

storiesOf('Components/PublicAddress', module)
  .add(
    'Documentation',
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
              address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'}
              label={'Wallet Address'}
              required
            />
          </CodeBlock>
        </Box>
      </Box>
    ))
  )
  .add(
    'Design guidelines',
    withDocs(Guidelines, () => (
      <Box mx={3}>
        <Box>
          <Heading.h3>Design</Heading.h3>
          <Text.p>
            Some best practice for using <code>{'PublicAddress'}</code>
          </Text.p>
        </Box>
        <Box>
          <Heading.h4>Consider showing a QR code too</Heading.h4>
          <Text>
            Although the copy-to-clipboard functionality makes it relatively
            easy to do stuff with a public address, you may want to consider
            showing a QR code of the address so that users can scan to send
            things to that address using a mobile wallet.
          </Text>
        </Box>
        <br />

        <Card mx={'auto'} my={3} px={4}>
          <Heading.h5>Your connected account:</Heading.h5>
          <QR value="0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A" />
          <br />
          <br />
          <PublicAddress
            required="false"
            address="0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A"
          />
        </Card>
        <ContributeBanner />
      </Box>
    ))
  );
