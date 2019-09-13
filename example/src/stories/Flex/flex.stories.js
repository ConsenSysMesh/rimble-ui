import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import { Flex, Box } from 'rimble-ui';

storiesOf('Components/Layout/', module).add(
  'Flex',
  withDocs(Documentation, () => (
    <Box mx={3}>
      <Box>
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
  ))
);
