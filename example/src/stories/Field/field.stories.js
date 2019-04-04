import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import { Input, Field, Box, Heading, Text } from 'rimble-ui';

storiesOf('Components/Form/Field', module).add(
  'Documentation',
  withDocs(Documentation, () => (
    <Box>
      <Box>
        <Field label="Public address">
          <Input type="text" required="true" />
        </Field>
      </Box>

      <CodeBlock textOnly>
        {`<Field label="Public address">
  <Input type="text" required="true" />
</Field>`}
      </CodeBlock>
    </Box>
  ))
);
