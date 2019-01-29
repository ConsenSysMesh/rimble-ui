import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import {
  Flex,
  Box,
  ToastMessage,
  Button
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
            actionText={'Action'}
            actionHref={'#!'}
          />
          <ToastMessage
            secondaryMessage={'Lorem ipsum dolor sit.'}
            icon={'InfoOutline'}
            my={3}
            actionText={'Action'}
            actionHref={'#!'}
          />

          <hr/>

          <ToastMessage.Processing
            my={3}
            message={'Processing Payment…'}
            actionText={'View Details'}
            actionHref={'#!'}
          />
          <ToastMessage.Success
            my={3}
            message={'Payment Confirmed'}
            secondaryMessage={'6efd...5909'}
            actionText={'View Details'}
            actionHref={'#!'}
          />
          <ToastMessage.Failure
            my={3}
            message={'Payment Failed'}
            secondaryMessage={'6efd...5909'}
            actionText={'View Details'}
            actionHref={'#!'}
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
            actionText={'Action'}
            actionHref={'#!'}
          />
          <ToastMessage
            secondaryMessage={'Lorem ipsum dolor sit.'}
            icon={'InfoOutline'}
            variant={'dark'}
            my={3}
            actionText={'Action'}
            actionHref={'#!'}
          />
        </Box>
      </Flex>

      <Button
        mb={3}
        onClick={(e) => window.toastProvider.addMessage('[Processing… ]', {
            secondaryMessage: (Date.now()),
            actionHref: 'https://etherscan.io/tx/0xcbc921418c360b03b96585ae16f906cbd48c8d6c2cc7b82c6db430390a9fcfed',
            actionText: 'View on Etherscan',
            variant: 'processing',
          })
        }
      >
        "addMessage.processing"
      </Button>
      <br/>
      <Button
        mb={3}
        onClick={(e) => window.toastProvider.addMessage('[Complete… ]', {
            secondaryMessage: (Date.now()),
            actionHref: 'https://etherscan.io/tx/0xcbc921418c360b03b96585ae16f906cbd48c8d6c2cc7b82c6db430390a9fcfed',
            actionText: 'View on Etherscan',
            variant: 'success',
          })
        }
      >
        "addMessage.success"
      </Button>
      <br/>
      <Button
        mb={3}
        onClick={(e) => window.toastProvider.addMessage('[Failed… ]', {
            secondaryMessage: (Date.now()),
            actionHref: 'https://etherscan.io/tx/0xcbc921418c360b03b96585ae16f906cbd48c8d6c2cc7b82c6db430390a9fcfed',
            actionText: 'View on Etherscan',
            variant: 'failure',
          })
        }
      >
        "addMessage.failure"
      </Button>
      <br/>
      <Button
        mb={3}
        onClick={(e) => window.toastProvider.addMessage('[Your message here… ]')}
      >
        "addMessage.default"
      </Button>
      <br/>
      <Button
        mb={3}
        onClick={(e) => window.toastProvider.addMessage('[Your message here… ]', {
          icon: 'Info'
        })}
      >
        "addMessage.default with Icon"
      </Button>
      <br/>
      <Button onClick={() => window.toastProvider.removeMessage()}>"removeMessage"</Button>

      <ToastMessage.Provider ref={(node) => (window.toastProvider = node)} />

    </div>
  ))
