import React from 'react';
import { storiesOf } from '@storybook/react';

import { Input } from 'rimble-ui'


storiesOf('Components/Input/', module)
  .add('<input type="file">', () => (
    <Input type="file" id="file_upload"></Input>
  ))
