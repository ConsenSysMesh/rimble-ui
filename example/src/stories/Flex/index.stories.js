import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import { Flex, Box } from 'rimble-ui';

storiesOf('Components/Layout/Flex', module)
  .addDecorator(withDocs(Documentation))
  .add('Documentation', () => (
    <Box>
      <Box mx={3} textAlign={'left'}>
        <Flex>
          <Box p={3} width={1 / 2} color="salmon" bg="black">
            Flex
          </Box>
          <Box p={3} width={1 / 2} color="white" bg="salmon">
            Box
          </Box>
        </Flex>
      </Box>
      <br />

      <CodeBlock textOnly>
        {`<Flex>
  <Box p={3} width={1 / 2} color="salmon" bg="black">
    Flex
  </Box>
  <Box p={3} width={1 / 2} color="white" bg="salmon">
    Box
  </Box>
</Flex>`}
      </CodeBlock>
    </Box>
  ));
