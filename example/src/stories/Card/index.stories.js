import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';
import guidelines from './GUIDELINES.md';

import {
  Card,
  Flex,
  Box,
  Image,
  Heading,
  Text,
  Icon,
  Button,
  TextButton,
  OutlineButton,
  MetaMaskButton,
} from 'rimble-ui';

storiesOf('Card', module)
  .add(
    'Documentation',
    withDocs(MyREADME, () => (
      <div>
        <Card>This is a Card</Card>

        <Card color="white" bg="primary">
          This is a Card
        </Card>

        <Card size="300px" color="white" bg="black">
          This is a Card
        </Card>
      </div>
    ))
  )
  .add(
    'Design Guidelines',
    withDocs(guidelines, () => (
      <Box mx={3} textAlign={'left'}>
        <Card width={'420px'} my={5} px={4}>
          <Text
            caps
            fontSize={0}
            fontWeight={4}
            mb={3}
            display={'flex'}
            alignItems={'center'}
          >
            <Icon name={'AccountBalanceWallet'} mr={2} />
            Connect wallet:
          </Text>
          <MetaMaskButton fullWidth>
            Connect with MetaMask
          </MetaMaskButton>
        </Card>

        <Card width={'420px'} my={5} px={4}>
          <Heading>Heading</Heading>
          <Text mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
            autem ratione doloribus quidem neque provident eius error
            dignissimos delectus architecto nemo quos alias sunt voluptate
            impedit, facilis sequi tempore. Amet!
          </Text>
          <Button mr={3}>Accept</Button>
          <OutlineButton>Cancel</OutlineButton>
        </Card>

        <Card width={'420px'} my={5} p={0}>
          <Image
            width={1}
            src="https://source.unsplash.com/random/1280x720"
            alt="random image from unsplash.com"
          />
          <Box px={4} py={3}>
            <Heading.h2>Card title</Heading.h2>
            <Heading.h5 color="#666">Card sub-title</Heading.h5>
          </Box>
          <Flex px={4} height={3} borderTop={1} borderColor={'#E8E8E8'}>
            <TextButton p={'0'} mr={4} height={'auto'}>
              Text Button
            </TextButton>
            <TextButton p={'0'} height={'auto'}>
              Text Button
            </TextButton>
          </Flex>
        </Card>
      </Box>
    ))
  );
