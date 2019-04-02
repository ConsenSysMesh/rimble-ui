import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';
import Guidelines from './GUIDELINES.md';

import { QR, Box, Text, OutlineButton, Flex, Card, Pill, Heading, PublicAddress } from 'rimble-ui';

storiesOf('Rimble-UI/QR Code', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => (
    <Box mx={3} textAlign={'left'}>
      <Box>
        <QR value="0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A" />
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>
          {'<QRCode value="0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A" />'}
        </code>
      </Box>
    </Box>
  ))
  .add(
    'Design guidelines',
    withDocs(Guidelines, () => (
      <Box>
        <Box mx={3} textAlign={'left'}>
          <Box>
            <Heading.h2>Design</Heading.h2>
            <Text.p>Some best practice for using a QR code</Text.p>
          </Box>

          <Heading.h4>Explain what it is</Heading.h4>
          <Text>
            Let your user know what the QR code represents and what will happen once they scan the QR code. Don't just assume your user is famliar with the pattern of QR codes being used for public addresses.
          </Text>
          <br />

          <Flex>
            <Card mx={'auto'} my={3} px={4} width="400px">
              <Pill mb={3} color={'green'}>
                {'Do'}
              </Pill><br />
            <Heading.h5>Scan to send funds to your wallet</Heading.h5>

            <QR value="0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A" />
            </Card>

            <Card mx={'auto'} my={3} px={4} width="400px">
              <Pill mb={3} color={'red'}>
                {"Don't"}
              </Pill><br /><br /><br />
              <Box textAlign={'center'}>
              <QR value="0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A" /></Box>
            </Card>
          </Flex>

          <Heading.h4>Provide an alternative</Heading.h4>
          <Text>
            If you're using a QR code to represent a public address, always give the user the ability to copy/paste the address manually too. They may not want to grant your dApp access to their camera or they may be at desktop set-up where scanning QR codes is inconvenient.
          </Text>
          <br />

          <Flex>
            <Card mx={'auto'} my={3} px={4} width="400px">
              <Pill mb={3} color={'green'}>
                {'Do'}
              </Pill><br />
            <Heading.h5>Your connected account:</Heading.h5>
            <QR value="0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A" /><br /><br />
            <PublicAddress required="false" address="0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A" />
            </Card>

            <Card mx={'auto'} my={3} px={4} width="400px">
              <Pill mb={3} color={'red'}>
                {"Don't"}
              </Pill><br /><br />
              <Heading.h5>Your connected account</Heading.h5>

              <QR value="0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A" />
            </Card>
          </Flex>
          <br />
          <br />

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
          <br />
        </Box>
      </Box>
    ))
  );
