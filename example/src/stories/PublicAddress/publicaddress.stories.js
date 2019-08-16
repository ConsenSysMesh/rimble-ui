import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import {
  PublicAddress,
  Box,
  Heading,
} from 'rimble-ui';

storiesOf('Components/', module)
  .add(
    'PublicAddress',
    withDocs(Documentation, () => (
      <PublicAddress address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'} />
    ))
  )
  .add(
    'PublicAddress with text',
    () => (<PublicAddress address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'} buttonText />)
  )
