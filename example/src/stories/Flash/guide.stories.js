import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import ContributeBanner from '../../components/ContributeBanner';
import ExampleCard from '../../components/ExampleCard';

import Guidelines from './guide.md';

import {
  Flash,
  Link,
  Box,
  Heading,
  Text,
  Icon,
  Flex
} from 'rimble-ui';

storiesOf('Components/Flash', module)
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

          <Box>
            <Heading.h3>When to use which variation</Heading.h3>
            <Heading.h4>Success</Heading.h4>
            <Text>
              When you want to let the user know that something has been successful. You may want to use a <code>{'ToastMessage'}</code>, but <code>{'Flash'}</code> is a good option if you want your user to follow up the success with an action.
            </Text>

            <Heading.h5>
              Example scenarios
            </Heading.h5>

            <Flash variant={'success'} display={'flex'}>
              <Box mr={3}>
                <Icon name="Success" />
              </Box>
              <Box mr={3}>
                <Heading color={'inherit'} fontsize={2} my={0}>
                  <strong>Cryptokitty received</strong>
                </Heading>
                <Text color={'inherit'}>
                  Kitty #12345 is now yours! Want to take a look?
                </Text>
                <Link>
                  View Cryptokitty
                </Link>
              </Box>
            </Flash>

            <Heading.h4>
              Info
            </Heading.h4>
            <Text>
              When there's some important info in relation to the section (whole dApp, page, card etc.) in which you put the Flash banner. Or if you want to provide advice.
            </Text>

            <Heading.h5>Example scenarios</Heading.h5>

            <Flash variant={'info'} display={'flex'}>
              <Box mr={3}>
                <Icon name="Info" />
              </Box>
              <Box mr={3}>
                <Heading color={'inherit'} fontsize={2} my={0}>
                  <strong>Now accepting DAI</strong>
                </Heading>
                <Text color={'inherit'}>
                  You can now use DAI in our online store
                </Text>
              </Box>
            </Flash>

            <Flash variant={'info'} display={'flex'} mt={3}>
              <Box mr={3}>
                <Icon name="Info" />
              </Box>
              <Box mr={3}>
                <Heading color={'inherit'} fontsize={2} my={0}>
                  <strong>Ether is booming!</strong>
                </Heading>
                <Text color={'inherit'}>
                  ETH price surges show no sign of letting up.
                </Text>
                <Link>
                  See rates
                </Link>
              </Box>
            </Flash>

            <Heading.h4>Warning</Heading.h4>
            <Text>
              If there's something that might prevent a user from acheiving their tasks.
            </Text>

            <Heading.h5>Example scenarios</Heading.h5>

            <Flash variant={'warning'} display={'flex'}>
              <Box mr={3}>
                <Icon name="Warning" />
              </Box>
              <Box mr={3}>
                <Heading color={'inherit'} fontsize={2} my={0}>
                  <strong>Slow transactions expected</strong>
                </Heading>
                <Text color={'inherit'}>
                  The network is slower than usual today, so some transactions might take longer to process
                </Text>
              </Box>
            </Flash>

            <Heading.h4>Danger</Heading.h4>
            <Text>
              If there's something preventing a user from achieving key tasks, like a service outage or an incorrect network. If you want to prevent them from doing anything in these situations, used a <code>{'Modal'}</code>.
            </Text>

            <Heading.h5>Example scenarios</Heading.h5>

            <Flash variant={'danger'} display={'flex'} mb={3}>
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

            <Flash variant={'danger'} display={'flex'} mb={4}>
              <Box mr={3}>
                <Icon name="Warning" />
              </Box>
              <Box mr={3}>
                <Heading color={'inherit'} fontSize={2} my={0}>
                  <strong>Complete all required fields</strong>
                </Heading>
                <Text color={'inherit'}>
                  Please fill in all fields marked with an asterisk below
                </Text>
              </Box>
            </Flash>

            <Heading>
              Best practices
            </Heading>
            <Box pb={3}>
              <Heading.h4>
                Use for persistent information
              </Heading.h4>
              <Text>
                Use the <code>{'Flash'}</code> banner if the infomation you want to get across remains relevant until a certain action has taken place, like errors in a form. Or if it is relecant for a certain time period like planned maintenance. Users will still be able to interact with the surrrounding page, so if it's critical information that needs to be addressed, use a <code>{'Modal'}</code>.
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
                Stick to one call to action
              </Heading.h4>
              <Text>
                Flash banners should have a single purpose or message so should only contain a maximum of one call to action. Multiple messages in a banner will both cause confusion and add unnecessary word count. It's better to separate them into two banners if you need to say two things and let the user address them separately.
              </Text>
              <br />
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
                        <strong>No funds for transactions fees</strong>
                      </Heading>
                      <Text color={'inherit'}>
                        You won't be able to use our blockchain features without some Ether in your account. <Link>Learn how to add funds</Link>
                      </Text>
                    </Box>
                  </Flash>
                </ExampleCard>
              </Box>
              <Box width={'50%'} my={3} mr={3}>
                <ExampleCard variant={'negative'}>
                  <Flash variant={'danger'} display={'flex'}>
                    <Box mr={3}>
                      <Icon name="Warning" />
                    </Box>
                    <Box mr={3}>
                      <Heading color={'inherit'} fontSize={2} my={0}>
                        <strong>Wrong network and insufficient funds!</strong>
                      </Heading>
                      <Text color={'inherit'}>
                        You need to be on the Main Ethereum network to use this dApp. <Link>Learn how to switch networks</  Link></Text><br /><Text color={'inherit'}>You also won't be able to use our blockchain features without some Ether in your account. <Link>Learn how to add funds</Link>
                      </Text>
                    </Box>
                  </Flash>
                </ExampleCard>
              </Box>
            </Flex>
          </Box>
        </Box>
        <ContributeBanner />
      </div>
    ))
  )
