import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';
import Guidelines from './guide.md';

import {
  Flash,
  Link
} from 'rimble-ui';

storiesOf('Components/Flash', module)
  .add(
    'Documentation',
    withDocs(Documentation, () => (
      <div>
        <Flash>
          Flash default
          This is a primary alert with an <Link>example link</Link>. Give it a click if you like.
        </Flash>

        <Flash bg='blue'>
          Flash "info"
          This is a primary alert with an <Link>example link</Link>. Give it a click if you like.
        </Flash>

        <Flash bg='green'>
          Flash "success"
          This is a primary alert with an <Link>example link</Link>. Give it a click if you like.
        </Flash>

        <Flash bg='yellow'>
          Flash "warning"
          This is a primary alert with an <Link>example link</Link>. Give it a click if you like.
        </Flash>

        <Flash bg='red'>
          Flash "danger"
          This is a primary alert with an <Link>example link</Link>. Give it a click if you like.
        </Flash>
      </div>
    ))
  )
  .add(
    'Guidelines',
    withDocs(Guidelines, () => (
      <Flash>Flash default</Flash>
    ))
  )
