import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { UPortButton, Flex, Box, Heading, Text, Button } from 'rimble-ui';

storiesOf('UPortButton', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => (
    <Box mx={3} textAlign={'left'}>
      <Box>
        <Heading.h2>UPortButton examples</Heading.h2>
        <Text>Different ways to use the UPortButton component</Text>
        <br />
      </Box>
      <Box>
        <Heading.h4>Default</Heading.h4>
        <UPortButton mb={3} mr={3}>
          Connect with uPort
        </UPortButton>
        <br />
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<UPortButton>Connect with uPort</UPortButton>'}</code>
      </Box>
      <br />
      <Box>
        <Heading.h4>Solid background</Heading.h4>
        <UPortButton.Solid mb={3} mr={3}>
          Connect with uPort
        </UPortButton.Solid>
        <br />
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>
          {'<UPortButton.Solid>Connect with uPort</UPortButton.Solid>'}
        </code>
      </Box>
      <br />
      <Box>
        <Heading.h4>Different sizes</Heading.h4>
        <UPortButton size="small" mb={3} mr={3}>
          Connect with uPort
        </UPortButton>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>
          {'<UPortButton size="small">Connect with uPort</UPortButton>'}
        </code>
        <br />
      </Box>
      <br />
      <Box>
        <UPortButton size="medium" mb={3} mr={3}>
          Connect with uPort
        </UPortButton>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>
          {'<UPortButton size="medium">Connect with uPort</UPortButton>'}
        </code>
        <br />
      </Box>
      <br />
      <Box>
        <UPortButton size="large" mb={3} mr={3}>
          Connect with uPort
        </UPortButton>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>
          {'<UPortButton size="large">Connect with uPort</UPortButton>'}
        </code>
        <br />
      </Box>
      <br />
      <Box>
        <Heading.h4>Full-width button</Heading.h4>
        <UPortButton fullWidth mb={3}>
          Connect with uPort
        </UPortButton>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<UPortButton fullWidth>Connect with uPort</UPortButton>'}</code>
        <br />
      </Box>

      <br />
      <Box>
        <Heading.h4>Disabled</Heading.h4>
        <UPortButton disabled mb={3} mr={3}>
          Connect with uPort
        </UPortButton>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<UPortButton disabled>Connect with uPort</UPortButton>'}</code>
        <br />
      </Box>
    </Box>
  ));
