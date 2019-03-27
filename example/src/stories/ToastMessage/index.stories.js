import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import READMEa from './README.md';
import READMEb from './README-B.md';

import {
  Flex,
  Box,
  ToastMessage,
  Button,
  Heading,
  Text
} from 'rimble-ui'

storiesOf('ToastMessage', module)
  // .addDecorator(withDocs(MyREADME))
  .add('Documentation', withDocs(READMEa, () => (
    <Box textAlign={'left'}>
    <Box>
    <Heading.h2>ToastMessage examples</Heading.h2>
    <Text>Different ways to use the ToastMessage component</Text>
    <br />
    </Box>
    <Box>
    <Heading.h4>Standard toast</Heading.h4>
    <Text>For when you want to just provide a quick process update like a confirmation</Text>
    </Box>
    <Box>
      <Flex>
        <Box width={'50%'} mr={4}>
          <ToastMessage
            message={'Transaction started'}
            my={3} />
            <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
            <code>{'<ToastMessage message={"Transaction started"} />'}</code>
            </Box>
        </Box>
        <Box width={'50%'} mr={4}>
      <ToastMessage
          message={'0xAc0...e5A connected'}
          colorTheme={'dark'} my={3}/>
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
          <code>{'<ToastMessage message={"0xAc0...e5A connected"} colorTheme={"dark"} />'}</code>
          </Box>
        </Box>
      </Flex>
      <Box>
      <Heading.h4>Standard toast with subtitle</Heading.h4>
      <Text>For when you want to provide more value through extra helpful information. Ask yourself when implementing your toast: is there anything else I could tell the user that would be useful?</Text>
      </Box>
      <Flex>
      <Box width={'50%'} mr={4}>
          <ToastMessage
            message={'Transaction complete'}
            secondaryMessage={'You have 4.20 ETH remaining'}
            my={3}
          />
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
          <code>{'<ToastMessage message={"Transaction complete"} secondaryMessage="{"You have 4.20 ETH remaining"} />'}</code>
          </Box>
      </Box>
      <Box width={'50%'} mr={4}>
          <ToastMessage
            message={'Switched network'}
            secondaryMessage={'You are now on Rinkeby'}
            colorTheme={'dark'}
            my={3}
          />
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
          <code>{'<ToastMessage message={"Transaction complete"} secondaryMessage="{"You have 4.20 ETH remaining"} colorTheme={"dark"} />'}</code>
          </Box>
      </Box>
      </Flex>

      <Box>
      <Heading.h4>Icon</Heading.h4>
      <Text>When you want to reinforce your message with a visual</Text>
      </Box>
      <Flex>
      <Box width={'50%'} mr={4}>
          <ToastMessage
            message={'Welcome to my dApp'}
            icon={'Mood'}
            my={3}
          />
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
          <code>{'<ToastMessage message={"Welcome to my dApp"} icon={"Mood"}" />'}</code>
          </Box>
      </Box>
      <Box width={'50%'} mr={4}>
          <ToastMessage
            message={'Welcome to my dApp'}
            icon={'Mood'}
            my={3}
            colorTheme={'dark'}
          />
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
          <code>{'<ToastMessage message={"Welcome to my dApp"} icon={"Mood"}" colorTheme={"dark"} />'}</code>
          </Box>
      </Box>
      </Flex>


      <br />
      <Box>
      <Heading.h4>Link</Heading.h4>
      <Text>When your Toast message has a link to support it. Note: this link should only take users to optional, supporting info.</Text>
      </Box>
<Flex>
      <Box width={'50%'} mr={4}>
          <ToastMessage

            message={'Transaction started'}
            secondaryMessage={'Check on its progress using Etherscan'}
            my={3}
            actionText={'Check'}
            actionHref={'#!'}
          />
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
          <code>{'<ToastMessage message={"Transaction started"} actionText={"Check"} actionHref={"add link here"} />'}</code>
          </Box>
      </Box>
      <Box width={'50%'} mr={4}>
          <ToastMessage
            message={'Write update here [Required]'}
            secondaryMessage={'Supporting information for update [Optional]'}
            icon={'InfoOutline'}
            my={3}
            actionText={'Link'}
            actionHref={'#!'}
            colorTheme={'dark'}
          />
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
          <code>{'<ToastMessage message={"Transaction started"} actionText={"Check"} actionHref={"add link here"} colorTheme={"dark"} />'}</code>
          </Box>
      </Box>
</Flex><br />
      <Box>
      <Heading.h4>Process toasts</Heading.h4>
      <Text>Ready-made messages to help users understand what's happening with a process they initiate, like a transaction.</Text>
      </Box>
      <Box width={'50%'} mr={4}>
      <Heading.h5>Processing</Heading.h5>
          <ToastMessage.Processing
            my={3}
            message={'Processing 0.00018 ETH payment'}
          />
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
          <code>{'<ToastMessage.Processing message={"Processing 0.00018 ETH payment"} />'}</code>
          </Box><br />
          <Heading.h5>Success</Heading.h5>
          <ToastMessage.Success
            my={3}
            message={'ETH sent'}
            secondaryMessage={'You have 1.03 Ether (ETH) remaining'}
          />
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
          <code>{'<ToastMessage.Success message={"ETH sent"} secondaryMessage={"You have 1.03 Ether (ETH) remaining"} />'}</code>
          </Box><br />
          <Heading.h5>Failure</Heading.h5>
          <ToastMessage.Failure
            my={3}
            message={'Payment failed'}
            secondaryMessage={'You don\'t have enough Ether (ETH)'}
            actionText={'Buy ETH'}
            actionHref={'#!'}
          />
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
          <code>{'<ToastMessage.Failure message={"Payment failed"} secondaryMessage={"You don\'t have enough Ether (ETH)"} actionText={"Buy ETH"} actionHref={"add link"} />'}</code>
          </Box>
        </Box>



        </Box>


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

    </Box>
  )))
  .add('Design guidelines', withDocs(READMEb, () => (
    <Box>

        <Box maxWidth={6}>
          <ToastMessage
            message={'Write update here [Required]'}
            my={3}
          />

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
          <ToastMessage
            message={'Write update here [Required]'}
            secondaryMessage={'Supporting information for update [Optional]'}
            icon={'InfoOutline'}
            colorTheme={'dark'}
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
            secondaryMessage={'You don&#39;t have enough Ether (ETH)'}
            actionText={'Buy ETH'}
            actionHref={'#!'}
          />
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
              secondaryMessage: '[You don&#39;t have enough Ether (ETH)]',
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


        </Box>





      <ToastMessage.Provider ref={(node) => (window.toastProvider = node)} />

    </Box>
  )))
