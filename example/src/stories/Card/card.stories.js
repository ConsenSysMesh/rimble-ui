import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import {
  Card,
  Flex,
  Box,
  Image,
  Heading,
  Text,
  Icon,
  Button,
  MetaMaskButton,
} from 'rimble-ui';

storiesOf('Components/', module).add(
  'Card',
  withDocs(Documentation, () => (
    <Box mx={3}>
      <CodeBlock>
        <Card>This is a Card</Card>
      </CodeBlock>

      <CodeBlock>
        <Card color="white" bg="primary">
          This is a Card
        </Card>
      </CodeBlock>

      <CodeBlock>
        <Card size="300px" color="white" bg="black">
          This is a Card
        </Card>
      </CodeBlock>



      <CodeBlock>
        <Card width={'420px'} mx={'auto'} px={4}>
          <Text
            caps
            fontSize={0}
            fontWeight={4}
            mb={3}
            display={'flex'}
            alignItems={'center'}
          >
            <Icon name={'AccountBalanceWallet'} mr={2} />
            Connect your Wallet:
          </Text>
          <MetaMaskButton.Outline width={1}>
            Install MetaMask
          </MetaMaskButton.Outline>
        </Card>
      </CodeBlock>

      <CodeBlock>
        <Card width={'420px'} mx={'auto'} px={4}>
          <Heading>Heading</Heading>
          <Text mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam autem
            ratione doloribus quidem neque provident eius error dignissimos
            delectus architecto nemo quos alias sunt voluptate impedit, facilis
            sequi tempore. Amet!
          </Text>
          <Button mr={3}>Accept</Button>
          <Button.Outline>Cancel</Button.Outline>
        </Card>
      </CodeBlock>

      <CodeBlock>

        <Card width={'420px'} mx={'auto'} my={5} p={0}>
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
            <Button.Text p={'0'} mr={4} height={'auto'}>
              Text Button
            </Button.Text>
            <Button.Text p={'0'} height={'auto'}>
              Text Button
            </Button.Text>
          </Flex>
        </Card>

      </CodeBlock>
    </Box>
  ))
);
