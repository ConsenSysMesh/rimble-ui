import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import { Input, Field, Box, Heading } from 'rimble-ui';

storiesOf('Components/Form/Field', module).add(
  'Documentation',
  withDocs(Documentation, () => (
    <Box mx={3}>
      <Box>
        <Heading fontSize={3} mb={2}>
          Required:
        </Heading>
        <CodeBlock>
          <Field label="Public address">
            <Input required={true}/>
          </Field>
        </CodeBlock>
      </Box>
      <Box>
        <Heading fontSize={3} mb={2}>
          Optional:
        </Heading>
        <CodeBlock>
          <Field label="Public address">
            <Input required={false} />
          </Field>
        </CodeBlock>
      </Box>
    </Box>
  ))
);
