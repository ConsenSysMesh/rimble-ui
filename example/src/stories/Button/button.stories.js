import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import UsageDoc from './USAGE.md';
import GuidelinesDoc from './GUIDELINES.md';

import {
  Button,
  OutlineButton,
  TextButton,
  MetaMaskButton,
  Icon,
  Loader,
  Text,
  Box,
  Flex,
} from 'rimble-ui';

storiesOf('Button', module)
  // .addDecorator(withDocs(UsageDoc))
  .add(
    'Documentation',
    withDocs(UsageDoc, () => (
      <Box textAlign={'left'}>
        <Box>
          <Text>Default button:</Text>
          <Button>Click Me</Button>
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
            <code>{'<Button>Click Me</Button>'}</code>
          </Box>
        </Box>
        <div>
          <Text>Small button</Text>
          <Button size="small" mb={3}>
            Small Button
          </Button>
          <br />
          <Text>Medium button</Text>
          <Button size="medium" mb={3}>
            Medium Button
          </Button>
          <br />
          <Text>Large button</Text>
          <Button size="large" mb={3}>
            Large Button
          </Button>
          <br />
          <Button fullWidth>Full-width Button</Button>
        </div>
        <div>
          <Button disabled>disabled Button</Button>
        </div>
        <div>
          <Button icon="Check" mb="3">
            Click me!
          </Button>
          <br />
          <Button icon="Check" iconpos="right" mb="3">
            Click me!
          </Button>
          <br />
          <Button icon="MoreHoriz" icononly mb="3" mr={2} />
          <OutlineButton icon="MoreHoriz" icononly mb="3" mr={2} />
          <TextButton icon="MoreHoriz" icononly mb="3" />
        </div>
        <div>
          <Button>
            <Loader color="white" />
          </Button>
        </div>
      </Box>
    ))
  )
  // .addDecorator(withDocs(GuidelinesDoc))
  .add(
    'Guidelines',
    withDocs(GuidelinesDoc, () => (
      <div>
        <div>
          <Button>Click Me</Button>
        </div>
        <div>
          <Button>Click Me</Button>
        </div>
        <div>
          <Button size="small" mb={3}>
            Small Button
          </Button>
          <br />
          <Button size="medium" mb={3}>
            Medium Button
          </Button>
          <br />
          <Button size="large" mb={3}>
            Large Button
          </Button>
          <br />
          <Button fullWidth>Full-width Button</Button>
        </div>
        <div>
          <Button disabled>disabled Button</Button>
        </div>
        <div>
          <Button icon="Check" mb="3">
            Click me!
          </Button>
          <br />
          <Button icon="Check" iconpos="right" mb="3">
            Click me!
          </Button>
          <br />
          <Button icon="MoreHoriz" icononly mb="3" mr={2} />
          <OutlineButton icon="MoreHoriz" icononly mb="3" mr={2} />
          <TextButton icon="MoreHoriz" icononly mb="3" />
        </div>
        <div>
          <Button>
            <Loader color="white" />
          </Button>
        </div>
      </div>
    ))
  );
