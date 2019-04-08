import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';
import Guidelines from './guide.md';

import {
  Flash
} from 'rimble-ui';

storiesOf('Components/Flash', module)
  .add(
    'Documentation',
    withDocs(Documentation, () => (
      <Flash>hello</Flash>
    ))
  )
