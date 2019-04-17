import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import CodeBlock from '../../components/CodeBlock';
import ContributeBanner from '../../components/ContributeBanner';
import ExampleCard from '../../components/ExampleCard';

import Documentation from './docs.md';
import Guidelines from './guide.md';

import {
  Flash,
  Link,
  Box,
  Heading,
  Text,
  Icon,
  Flex,
  Pill,
  Card
} from 'rimble-ui';

storiesOf('Components/Flash', module)
  .add(
    'Documentation',
    withDocs(Documentation, () => (
      <Box mx={3}>
      <Box><Heading.h3>Flash examples</Heading.h3>
      <Text>
        Different ways to use the <code>{'Flash'}</code> component
      </Text></Box><br />
      <Box>
      <Heading.h4>Default flash banner</Heading.h4>
        <CodeBlock>
          <Flash>
            Flash default
            This is a primary alert with an <Link>example link</Link>. Give it a click if you like.
          </Flash>
        </CodeBlock>
<Heading.h4><code>{'info'}</code> flash banner</Heading.h4>
        <CodeBlock><Flash variant={'info'} my={3}>
          Flash "info"
          This is a primary alert with an <Link>example link</Link>. Give it a click if you like.
        </Flash></CodeBlock>
<Heading.h4><code>{'success'}</code> flash banner</Heading.h4>
        <CodeBlock><Flash variant={'success'} my={3}>
          Flash "success"
          This is a primary alert with an <Link>example link</Link>. Give it a click if you like.
        </Flash></CodeBlock>
<Heading.h4><code>{'warning'}</code> flash banner</Heading.h4>
        <CodeBlock><Flash variant={'warning'} my={3}>
          Flash "warning"
          This is a primary alert with an <Link>example link</Link>. Give it a click if you like.
        </Flash></CodeBlock>
<Heading.h4><code>{'danger'}</code> flash banner</Heading.h4>
        <CodeBlock><Flash variant={'danger'} my={3}>
          Flash "danger"
          This is a primary alert with an <Link>example link</Link>. Give it a click if you like.
        </Flash></CodeBlock>
        </Box>
      </Box>
    ))
  )
  .add(
    'Guidelines',
    withDocs(Guidelines, () => (
      <div>
        <Box p={1}>
          <Heading>
            Design
          </Heading>
          <Text.p>
            Some best practice for using <code>{'Flash'}</code> in your
            product.
          </Text.p>

          <Box pb={3}>
            <Heading.h4>
              Use for persistent information
            </Heading.h4>
            <Text>
              Flash banners persist so should contain important information that stays relevant for a while or indicates user action is required.
            </Text>
          </Box>

          <Flex>
            <Box width={'50%'} my={3} mr={3}>
              <ExampleCard variant={'positive'}>

                <Flash variant={'danger'} display={'flex'}>
                  <Box mr={3}>
                    <Icon name="Warning" />
                  </Box>
                  <Box mr={3}>
                    <Heading color={'inherit'} fontSize={2} my={0}>
                      <strong>Switch to the Main Ethereum network</strong>
                    </Heading>
                    <Text color={'inherit'}>
                      Change your network in your browser settings. You’re currently on Rinkeby.
                    </Text>
                  </Box>
                </Flash>

              </ExampleCard>
            </Box>
            <Box width={'50%'} my={3}>
              <ExampleCard variant={'negative'}>

                <Flash variant={'success'} display={'flex'}>
                  <Box mr={3}><Icon name="Mood"  /></Box>
                  <Box mr={3}>
                    <Heading color={'inherit'} fontSize={2} my={0}><strong>Connected!</strong></Heading>
                    <Text color={'inherit'}>Your Ethereum account is now connected to my dApp.</Text>
                    </Box>
                </Flash>

              </ExampleCard>
            </Box>
          </Flex>

          <Box>
            <Heading.h4>
Stick to one call to action            </Heading.h4>
            <Text>
              Flash banners should have a single purpose or message so should only contain a maximum of one call to action. Multiple messages in a banner will both cause confusion and add unnecessary word count. It's better to separate them into two banners if you need to say two things and let the user address them separately.
            </Text>
            <br />
          </Box>

          <Flex>
            <Box width={'50%'} my={3} mr={3}>
              <Card px={4}>
                <Pill mb={3} color={'green'}>
                  {'Do'}
                </Pill>

                <Flash variant={'danger'} display={'flex'}>
                  <Box mr={3}>
                    <Icon name="Warning" />
                  </Box>
                  <Box mr={3}>
                    <Heading color={'inherit'} fontSize={2} my={0}>
                      <strong>No funds for transactions fees</strong>
                    </Heading>
                    <Text color={'inherit'}>
                      You won't be able to use our blockchain features without some Ether in your account. <Link>Learn how to add funds</Link>
                    </Text>
                  </Box>
                </Flash>

              </Card>
            </Box>

              <Box width={'50%'} my={3} mr={3}>
                <Card px={4}>
                  <Pill mb={3} color={'red'}>
                    {'Don\'t'}
                  </Pill>

                  <Flash variant={'danger'} display={'flex'}>
                    <Box mr={3}>
                      <Icon name="Warning" />
                    </Box>
                    <Box mr={3}>
                      <Heading color={'inherit'} fontSize={2} my={0}>
                        <strong>Wrong network and insufficient funds!</strong>
                      </Heading>
                      <Text color={'inherit'}>
                        You need to be on the Main Ethereum network to use this dApp. <Link>Learn how to switch networks</Link></Text><br /><Text color={'inherit'}>You also won't be able to use our blockchain features without some Ether in your account. <Link>Learn how to add funds</Link>
                      </Text>
                    </Box>
                  </Flash>

                </Card>
              </Box>
</Flex>




        </Box>
        <ContributeBanner />
      </div>
    ))
  )
