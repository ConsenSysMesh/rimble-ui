import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';
import ContributeBanner from '../../components/ContributeBanner';

import Documentation from './docs.md';
import Guidelines from './guide.md';

import {
  QR,
  Box,
  Text,
  
  Flex,
  Card,
  Pill,
  Heading,
  PublicAddress,
  Link,
} from 'rimble-ui';

storiesOf('Components/QR Code', module)
  .add(
    'Documentation',
    withDocs(Documentation, () => (
      <Box mx={3}>
        <CodeBlock>
          <QR value="0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A" />
        </CodeBlock>
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
            Some best practice for using <code>{'QR'}</code> in your product.
          </Text.p>
        </Box>

        <Heading.h4>Explain what it is</Heading.h4>
        <Text>
          Let your user know what the QR code represents and what will happen
          once they scan the QR code. Don't just assume your user is famliar
          with the pattern of QR codes being used for public addresses.
        </Text>
        <br />

        <Flex>
          <Card mx={'auto'} my={3} px={4} width="400px">
            <Pill mb={3} color={'green'}>
              {'Do'}
            </Pill>
            <br />
            <Heading.h5>Scan to send funds to your wallet</Heading.h5>

            <QR value="0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A" />
          </Card>

          <Card mx={'auto'} my={3} px={4} width="400px">
            <Pill mb={3} color={'red'}>
              {"Don't"}
            </Pill>
            <br />
            <br />
            <br />
            <Box textAlign={'center'}>
              <QR value="0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A" />
            </Box>
          </Card>
        </Flex>

        <Heading.h4>Provide an alternative</Heading.h4>
        <Text>
          If you're using a QR code to represent a public address, always give
          the user the ability to copy/paste the address manually too. They may
          not want to grant your dApp access to their camera or they may be at
          desktop set-up where scanning QR codes is inconvenient.
        </Text>
        <br />

        <Flex>
          <Card mx={'auto'} my={3} px={4} width="400px">
            <Pill mb={3} color={'green'}>
              {'Do'}
            </Pill>
            <br />
            <Heading.h5>Your connected account:</Heading.h5>
            <QR value="0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A" />
            <br />
            <br />
            <PublicAddress
              required="false"
              address="0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A"
            />
          </Card>

          <Card mx={'auto'} my={3} px={4} width="400px">
            <Pill mb={3} color={'red'}>
              {"Don't"}
            </Pill>
            <br />
            <br />
            <Heading.h5>Your connected account</Heading.h5>

            <QR value="0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A" />
          </Card>
        </Flex>
        <ContributeBanner />
      </Box>
    ))
  );
