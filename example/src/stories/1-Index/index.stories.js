import React from 'react'
import { storiesOf } from '@storybook/react'
import { doc } from 'storybook-readme';

import themingREADME from './theming-README.md';
import installREADME from './install-README.md';
import welcomeREADME from './install-README.md';

storiesOf('Getting Started', module)
  .add('Installation', doc(installREADME))
  .add('Theming', doc(themingREADME))
  .add('Welcome', doc(welcomeREADME))
