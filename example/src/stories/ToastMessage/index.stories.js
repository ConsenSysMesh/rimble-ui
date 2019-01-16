import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import {
  Flex,
  Box,
  ToastMessage
} from 'rimble-ui'

storiesOf('ToastMessage', module)
  .addDecorator(withDocs(MyREADME))
  .add('ToastMessage', () => (
    <div>
      <Flex>
        <Box width={'50%'} mr={4}>
          <ToastMessage my={3} />

          <ToastMessage
            secondaryMessage={'Lorem ipsum dolor sit.'}
            my={3}
          />
          <ToastMessage
            icon={'InfoOutline'}
            my={3}
          />
          <ToastMessage
            secondaryMessage={'Lorem ipsum dolor sit.'}
            icon={'InfoOutline'}
            my={3}
          />

          <hr/>

          <ToastMessage
            my={3}
            icon={'Sync'}
            message={'Processing Payment'}
            actionText={'View Details'}
          />
          <ToastMessage
            my={3}
            icon={'Check'}
            message={'Payment Confirmed'}
            secondaryMessage={'6efd...5909'}
            actionText={'View Details'}
          />
          <ToastMessage
            my={3}
            icon={'Warning'}
            message={'Payment Failed'}
            secondaryMessage={'6efd...5909'}
            actionText={'View Details'}
          />

        </Box>
        <Box width={'50%'}>
          <ToastMessage variant={'dark'} my={3}/>
          <ToastMessage
            secondaryMessage={'Lorem ipsum dolor sit.'}
            variant={'dark'}
            my={3}
          />
          <ToastMessage
            icon={'InfoOutline'}
            variant={'dark'}
            my={3}
          />
          <ToastMessage
            secondaryMessage={'Lorem ipsum dolor sit.'}
            icon={'InfoOutline'}
            variant={'dark'}
            my={3}
          />
        </Box>
      </Flex>

      <ToastMessage.Container>

      </ToastMessage.Container>

    </div>
  ))
