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
            message={'Write update here [Required]'}
            secondaryMessage={'Supporting information for update [Optional]'}
            my={3}
          />
          <ToastMessage
            icon={'InfoOutline'}
            my={3}
            actionText={'Action'}
            actionHref={'#!'}
          />
          <ToastMessage
            message={'Write update here [Required]'}
            secondaryMessage={'Supporting information for update [Optional]'}
            icon={'InfoOutline'}
            my={3}
            actionText={'Action'}
            actionHref={'#!'}
          />
          <ToastMessage.Processing
            my={3}
            message={'Processing 0.00018 ETH payment'}
          />
          <ToastMessage.Success
            my={3}
            message={'ETH sent'}
            secondaryMessage={'You have 1.03 Ether (ETH) remaining'}
          />
          <ToastMessage.Failure
            my={3}
            message={'Payment failed'}
            secondaryMessage={'You don\'t have enough Ether (ETH)'}
            actionText={'Buy ETH'}
            actionHref={'#!'}
          />

        </Box>
        <Box width={'50%'}>
          <ToastMessage colorTheme={'dark'} my={3}/>
          <ToastMessage
            message={'Write update here [Required]'}
            secondaryMessage={'Supporting information for update [Optional]'}
            colorTheme={'dark'}
            my={3}
          />
          <ToastMessage
            icon={'InfoOutline'}
            colorTheme={'dark'}
            my={3}
            actionText={'Action'}
            actionHref={'#!'}
          />
          <ToastMessage
            message={'Write update here [Required]'}
            secondaryMessage={'Supporting information for update [Optional]'}
            icon={'InfoOutline'}
            colorTheme={'dark'}
            my={3}
            actionText={'Action'}
            actionHref={'#!'}
          />
        </Box>
      </Flex>

      <Button
        mb={3}
        onClick={(e) => window.toastProvider.addMessage('[Processing payment...]', {
            secondaryMessage: '',
            actionHref: 'https://etherscan.io/tx/0xcbc921418c360b03b96585ae16f906cbd48c8d6c2cc7b82c6db430390a9fcfed',
            actionText: 'View on Etherscan',
            variant: 'processing',
          })
        }
      >
        Preview "addMessage.processing"
      </Button>
      <br/>
      <Button
        mb={3}
        onClick={(e) => window.toastProvider.addMessage('[ETH sent]', {
            secondaryMessage: '[You have 1.03 Ether remaining]',
            variant: 'success',
          })
        }
      >
        Preview "addMessage.success"
      </Button>
      <br/>
      <Button
        mb={3}
        onClick={(e) => window.toastProvider.addMessage('[Payment failed]', {
            secondaryMessage: '[You don\'t have enough Ether (ETH)]',
            actionHref: 'https://www.coinbase.com/',
            actionText: 'Buy ETH',     
            variant: 'failure',
          })
        }
      >
        Preview "addMessage.failure"
      </Button>
      <br/>
      <Button
        mb={3}
        onClick={(e) => window.toastProvider.addMessage('Write update here [Required]')}
      >
        Preview "addMessage.default"
      </Button>
      <br/>
      <Button
        mb={3}
        onClick={(e) => window.toastProvider.addMessage('Write update here [Required]', {
          icon: 'Info'
        })}
      >
        Preview "addMessage.default with Icon"
      </Button>
      <br/>
      <Button
        mb={3}
        onClick={(e) => window.toastProvider.addMessage('Write update here [Required]', {
          icon: 'VpnKey',
          colorTheme: 'dark'
        })}
      >
        Preview "addMessage.default dark colors with Icon"
      </Button>
      <br/>
      <Button onClick={() => window.toastProvider.removeMessage()}>Preview "RemoveMessage"</Button>

      <ToastMessage.Provider ref={(node) => (window.toastProvider = node)} />

    </div>
  ))
