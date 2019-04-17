import React from 'react';
import { storiesOf } from '@storybook/react';

import { Input } from 'rimble-ui'

storiesOf('Components/Input/', module)
  .add('<input type="file">', () => (
    <Input type="file" id="file_upload" />
  ))
  .add('<input type="file"> multiple', () => (
    <Input type="file" id="file_upload" multiple />
  ))
  .add('<input type="file" variant="unstyled" >', () => (
    <Input type="file" id="file_upload" variant={'unstyled'} />
  ))
