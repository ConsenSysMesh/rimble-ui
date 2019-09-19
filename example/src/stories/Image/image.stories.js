import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import { Image, Box } from 'rimble-ui';

storiesOf('Components/', module).add(
  'Image',
  withDocs(Documentation, () => (
    <Box mx={3}>
      <CodeBlock>
        <Image
          src="https://source.unsplash.com/random/1024x768?q=20"
          alt="random unsplash image"
          borderRadius={8}
        />
      </CodeBlock>
    </Box>
  ))
);
