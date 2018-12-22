import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

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
  ToastMessage
} from 'rimble-ui'

storiesOf('Card', module)
  .addDecorator(withDocs(MyREADME))
  .add('Default', () => (
    <div>
      <Card>
        This is a Card
      </Card>

      <Card color="white" bg="primary" >
        This is a Card
      </Card>

      <Card size="300px" color="white" bg="black" >
        This is a Card
      </Card>
    </div>
  )).add('Examples', () => (
    <div>
      <Card width={'420px'} mx={'auto'} my={5} px={4}>
        <Text caps fontSize={0} fontWeight={4} mb={3} display={'flex'} alignItems={'center'} >
          <Icon name={'AccountBalanceWallet'} mr={2}></Icon>
          Connect your Wallet:
        </Text>
        <MetaMaskButton.outline fullWidth>Install MetaMask</MetaMaskButton.outline>
      </Card>

      <Card width={'420px'} mx={'auto'} my={5} px={4} >
        <Heading>Heading</Heading>
        <Text mb={4}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam autem ratione doloribus quidem neque provident eius error dignissimos delectus architecto nemo quos alias sunt voluptate impedit, facilis sequi tempore. Amet!
        </Text>
        <Button mr={3}>Accept</Button>
        <OutlineButton>Cancel</OutlineButton>
      </Card>

      <Card width={'420px'} mx={'auto'} my={5}  p={0}>
        <Image
          width={1}
          src='https://source.unsplash.com/random/1280x720'
          alt='random image from unsplash.com'
        />
        <Box px={4} py={3}>
          <Heading.h2>Card title</Heading.h2>
          <Heading.h5 color='#666'>Card sub-title</Heading.h5>
        </Box>
        <Flex px={4} height={3} borderTop={1} borderColor={'#E8E8E8'}>
          <TextButton p={'0'} mr={4} height={'auto'}>Text Button</TextButton>
          <TextButton p={'0'} height={'auto'}>Text Button</TextButton>
        </Flex>
      </Card>

      <ToastMessage>
        Transaction confirmed
      </ToastMessage>
      <ToastMessage variant="success" my={2}>
        Transaction confirmed
      </ToastMessage>
      <ToastMessage variant="warning" my={2}>
        Transaction confirmed
      </ToastMessage>
      <ToastMessage variant="danger" my={2}>
        Transaction confirmed
      </ToastMessage>
      <ToastMessage variant="info" my={2}>
        Transaction confirmed
      </ToastMessage>


    </div>
  ))
