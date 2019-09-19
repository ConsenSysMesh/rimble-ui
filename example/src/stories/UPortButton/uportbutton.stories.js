import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import { UPortButton, Box, Heading, Text } from 'rimble-ui';

storiesOf('Components/UPortButton', module).add(
  'Documentation',
  withDocs(Documentation, () => (
    <Box mx={3}>
      <Box>
        <Heading.h3>UPortButton examples</Heading.h3>
        <Text>Different ways to use the <code>{'UPortButton'}</code> component</Text>
        <br />
      </Box>
      <Box>
        <Heading.h4>Default</Heading.h4>
        <CodeBlock>
          <UPortButton>Connect with uPort</UPortButton>
        </CodeBlock>
      </Box>
<br />
      <Box>
        <Heading.h4>Solid background</Heading.h4>
        <UPortButton.Solid>Connect with uPort</UPortButton.Solid>
        <CodeBlock textOnly>
          {`<UPortButton.Solid>Connect with uPort</UPortButton.Solid>`}
        </CodeBlock>
      </Box>
<br />
      <Box>
        <Heading.h4>Different sizes</Heading.h4>
        <CodeBlock>
          <UPortButton size="small">Connect with uPort</UPortButton>
        </CodeBlock>
      </Box>

      <Box>
        <CodeBlock>
          <UPortButton size="medium">Connect with uPort</UPortButton>
        </CodeBlock>
      </Box>

      <Box>
        <CodeBlock>
          <UPortButton size="large">Connect with uPort</UPortButton>
        </CodeBlock>
      </Box>
<br />
      <Box>
        <Heading.h4>Full-width button</Heading.h4>
        <CodeBlock>
          <UPortButton fullWidth>Connect with uPort</UPortButton>
        </CodeBlock>
      </Box>
<br />
      <Box>
        <Heading.h4>Disabled</Heading.h4>
        <CodeBlock>
          <UPortButton disabled>Connect with uPort</UPortButton>
        </CodeBlock>
      </Box>
      <Box>
        <Heading.h4>Link</Heading.h4>
        <UPortButton.Solid as={'a'} href={'https://www.uport.me/'} target={'_blank'} mb={3} mr={3}>
          Download uPort
        </UPortButton.Solid>

        <CodeBlock textOnly>
          {`<UPortButton.Solid
  as={'a'}
  href={'https://www.uport.me/'}
  target={'_blank'}
>
  Download uPort
</UPortButton.Solid>`}
        </CodeBlock>
        <UPortButton.Outline as={'a'} href={'https://www.uport.me/'} target={'_blank'} mb={3} mr={3}>
          Download uPort
        </UPortButton.Outline>

        <CodeBlock textOnly>
          {
            `<UPortButton.Outline
  as={"a"}
  href={"https://www.uport.me/"}
  target={"_blank"}
>
  Download uPort
</UPortButton.Outline>`
          }
        </CodeBlock>
      </Box>
    </Box>
  ))
);
