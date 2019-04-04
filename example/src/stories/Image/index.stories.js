import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import { Image, Box, Text } from 'rimble-ui';

storiesOf('Components/Image', module)
  .addDecorator(withDocs(Documentation))
  .add('Documentation', () => (
    <Box mx={3} textAlign={'left'}>
      <CodeBlock>
        <Image
          width={[1, 1, 1 / 2]}
          src="https://source.unsplash.com/random/1280x720"
          borderRadius={8}
          alt="random unsplash image"
        />
      </CodeBlock>
    </Box>
  ));
