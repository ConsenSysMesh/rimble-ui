import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { linkTo } from '@storybook/addon-links';
import CodeBlock from '../../components/CodeBlock';
import ContributeBanner from '../../components/ContributeBanner';

import Documentation from './docs.md';
import Guidelines from './guide.md';
import ProviderDocumentation from './providerdocs.md';

import {
  Flex,
  Box,
  ToastMessage,
  Button,
  Heading,
  Text,
  Link,
  Card,
  Pill,
  Tooltip
} from 'rimble-ui';

storiesOf('Components/ToastMessage', module)
  .add(
    'Documentation',
    withDocs(Documentation, () => (
      <Box mx={3}>
        <Box>
          <Heading.h3>ToastMessage examples</Heading.h3>
          <Text>
            Different ways to use the <code>{'ToastMessage'}</code> component
          </Text>
          <br />
        </Box>
        <Box>
          <Heading.h4>Standard toast</Heading.h4>
          <Text>
            For when you want to just provide a quick process update like a
            confirmation
          </Text>
        </Box>
        <Box>
          <Flex>
            <Box width={'50%'} mr={4}>
              <CodeBlock>
                <ToastMessage message={"Transaction started"} />
              </CodeBlock>
            </Box>
            <Box width={'50%'} mr={4}>
              <CodeBlock>
                <ToastMessage
                    message={'0xAc0...e5A connected'}
                    colorTheme={'dark'}
                  />
              </CodeBlock>
            </Box>
          </Flex>
          <Box>
            <Heading.h4>Standard toast with subtitle</Heading.h4>
            <Text>
              For when you want to provide more value through extra helpful
              information. Ask yourself when implementing your toast: is there
              anything else I could tell the user that would be useful?
            </Text>
          </Box>
          <Flex>
            <Box width={'50%'} mr={4}>
              <ToastMessage
                message={'Transaction complete'}
                secondaryMessage={'You have 4.20 ETH remaining'}
                my={3}
              />
              <CodeBlock textOnly syntax={"language-html"}>
                {`<ToastMessage
  message={'Transaction complete'}
  secondaryMessage={'You have 4.20 ETH remaining'}
  my={3}
/>`}
              </CodeBlock>
            </Box>
            <Box width={'50%'} mr={4}>
              <ToastMessage
                message={'Switched network'}
                secondaryMessage={'You are now on Rinkeby'}
                colorTheme={'dark'}
                my={3}
              />
              <CodeBlock textOnly>
                {`<ToastMessage
  message={'Switched network'}
  secondaryMessage={'You are now on Rinkeby'}
  colorTheme={'dark'}
  my={3}
/>`}
              </CodeBlock>
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
              <CodeBlock textOnly>
                {`<ToastMessage
  message={'Welcome to my dApp'}
  icon={'Mood'}
  my={3}
/>`}
              </CodeBlock>
            </Box>
            <Box width={'50%'} mr={4}>
              <ToastMessage
                message={'Welcome to my dApp'}
                icon={'Mood'}
                my={3}
                colorTheme={'dark'}
              />
              <CodeBlock textOnly>
                {`<ToastMessage
  message={'Welcome to my dApp'}
  icon={'Mood'}
  my={3}
  colorTheme={'dark'}
/>`}
              </CodeBlock>
            </Box>
          </Flex>

          <br />
          <Box>
            <Heading.h4>Link</Heading.h4>
            <Text>
              When your Toast message has a link to support it. Note: this link
              should only take users to optional, supporting info.
            </Text>
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
              <CodeBlock textOnly>
                {`<ToastMessage
  message={'Transaction started'}
  secondaryMessage={'Check on its progress using Etherscan'}
  my={3}
  actionText={'Check'}
  actionHref={'#!'}
/>`}
              </CodeBlock>
            </Box>
            <Box width={'50%'} mr={4}>
              <ToastMessage
                message={'Write update here [Required]'}
                secondaryMessage={
                  'Supporting information for update [Optional]'
                }
                icon={'InfoOutline'}
                my={3}
                actionText={'Link'}
                actionHref={'#!'}
                colorTheme={'dark'}
              />
              <CodeBlock textOnly>
                {`<ToastMessage
  message={'Write update here [Required]'}
  secondaryMessage={
    'Supporting information for update [Optional]'
  }
  icon={'InfoOutline'}
  my={3}
  actionText={'Link'}
  actionHref={'#!'}
  colorTheme={'dark'}
/>`}
              </CodeBlock>
            </Box>
          </Flex>
          <br />
          <Box>
            <Heading.h4>Process toasts</Heading.h4>
            <Text>
              Ready-made messages to help users understand what's happening with
              a process they initiate, like a transaction.
            </Text>
          </Box>
          <Box width={'50%'} mr={4}>
            <Heading.h5>Processing</Heading.h5>
            <CodeBlock>
              <ToastMessage.Processing
                my={3}
                message={'Processing 0.00018 ETH payment'}
              />
            </CodeBlock>

            <Heading.h5>Success</Heading.h5>
            <CodeBlock>
              <ToastMessage.Success
                my={3}
                message={'ETH sent'}
                secondaryMessage={'You have 1.03 Ether (ETH) remaining'}
              />
            </CodeBlock>

            <Heading.h5>Failure</Heading.h5>
            <CodeBlock>
              <ToastMessage.Failure
                my={3}
                message={'Payment failed'}
                secondaryMessage={"You don't have enough Ether (ETH)"}
                actionText={'Buy ETH'}
                actionHref={'#!'}
              />
            </CodeBlock>
          </Box>
        </Box>
      </Box>
    ))
  )
  .add(
    'Design guidelines',
    withDocs(Guidelines, () => (
      <Box mx={3}>
        <Box>
          <Heading.h3>Design</Heading.h3>
          <Text>
            Some best practices for using <code>{'ToastMessage'}</code>.
          </Text>
        </Box>
        <br />
        <Box>
          <Heading.h3>When to use which variation</Heading.h3>
          <Heading.h4>Toast with a title</Heading.h4>
          <Text>
            For when you want to just provide a quick process update like a
            confirmation
          </Text>
        </Box>
        <Box width={1 / 2}>
          <Heading.h5>Example scenarios</Heading.h5>
          <ToastMessage message={'Transaction started'} my={3} mr={3} />
        </Box>
        <Box width={1 / 2}>
          <ToastMessage
            message={'Connected to dApp'}
            colorTheme={'dark'}
            icon={'Mood'}
            my={3}
            mr={3}
          />
        </Box>
        <br />
        <Box>
          <Heading.h4>Toast with a subtitle</Heading.h4>
          <Text>
            For when you want to provide more value through extra helpful
            information. Ask yourself when implementing your toast: is there
            anything else I could tell the user that would be useful?
          </Text>
        </Box>
        <Box width={1 / 2}>
          <Heading.h5>Example scenarios</Heading.h5>
          <ToastMessage
            message={'Payment sent'}
            secondaryMessage={'You have 4.20 ETH remaining'}
            variant={'success'}
            my={3}
            mr={3}
          />
        </Box>
        <Box width={1 / 2}>
          <ToastMessage
            message={'Transaction pending...'}
            secondaryMessage={'This might take a few minutes'}
            colorTheme={'dark'}
            my={3}
            mr={3}
          />
        </Box>
        <Box width={1 / 2}>
          <ToastMessage
            message={'Transaction failed'}
            secondaryMessage={"You didn't have enough Ether"}
            variant={'failure'}
            my={3}
            mr={3}
          />
        </Box>
        <br />

        <Box>
          <Heading.h3>How it works</Heading.h3>
          <ul>
            <li>
              <Text>They dismiss automatically</Text>
            </li>
            <li>
              <Text>User can dismiss them manually</Text>
            </li>
            <li>
              <Text>
                They display one at a time, so if multiple messages are
                necessary, each one should appear after the previous message.
              </Text>
            </li>
          </ul>
        </Box>
        <br />
        <Box>
          <Heading.h3>Best practices</Heading.h3>
        </Box>
        <Box>
          <Heading.h4>Use for non-critical information</Heading.h4>
          <Text.p>
            Don't use toast messages for information that will directly impact
            the success of completing a task, for example a network failure.
            They dismiss automatically so things can be missed easily. Note:
            users are able to dismiss them immediately manually. For critical
            information, use{' '}
            <Link
              onClick={linkTo('components-modal', 'documentation')}
              title="Rimble UI Modal component"
              href="javascript:;"
            >
              Modal
            </Link>{' '}
            to bring that info to the user's attention.
          </Text.p>
        </Box>
        <br />
        <Flex>
          <Card mx={'auto'} my={3} px={4} width="420px">
            <Pill mb={3} color={'green'}>
              {'Do'}
            </Pill>
            <ToastMessage message={'Transaction started'} my={3} mr={3} />
          </Card>
          <Card mx={'auto'} my={3} px={4} width="420px">
            <Pill mb={3} color={'red'}>
              {"Don't"}
            </Pill>
            <ToastMessage
              message={'Switch to the Main Network to start the transaction'}
              my={3}
              mr={3}
            />
          </Card>
        </Flex>
        <br />
        <Box>
          <Heading.h4>Think about placement</Heading.h4>
          <Text.p>
            Toasts should steer clear of navigational elements and important
            areas of the screen. Consider that the MetaMask browser extension
            could potentially hide your toast messages.
          </Text.p>
        </Box>
        <br />
        <Box>
          <Heading.h4>Stick to one optional action</Heading.h4>
          <Text.p>
            This action should support your update and must be optional. This
            might be to provide further information (like linking to Etherscan)
            or something that can affect the process (like cancelling while your
            payment is in a processing state). Action copy should ideally be
            verb-led like "Check", "View", "Buy" or "Change".
          </Text.p>
        </Box>
        <br />
        <Flex>
          <Card mx={'auto'} my={3} px={4} width="420px">
            <Pill mb={3} color={'green'}>
              {'Do'}
            </Pill>
            <ToastMessage
              message={'Transaction started'}
              secondaryMessage={'Check on its progress at Etherscan'}
              actionText={'Check'}
              actionHref={'#'}
              my={3}
              mr={3}
            />
          </Card>
          <Card mx={'auto'} my={3} px={4} width="420px">
            <Pill mb={3} color={'red'}>
              {"Don't"}
            </Pill>
            <ToastMessage
              message={'Connect to start this transaction'}
              actionText={'Connect'}
              actionHref={'#'}
              my={3}
              mr={3}
            />
          </Card>
        </Flex>
        <br />
        <Box>
          <Heading.h2>Content</Heading.h2>
          <Text>
            Some best practices for writing <code>{'ToastMessage'}</code>s.
          </Text>
        </Box>
        <Box>
          <Heading.h3>General guidelines</Heading.h3>
        </Box>
        <Box>
          <Heading.h4>Keep things short</Heading.h4>
          <Text>
            Toast messages are only around a short while so keep the copy short
            to make them readable in the time they're on screen.
          </Text>
          <br />
          <Flex>
            <Card mx={'auto'} my={3} px={4} width="420px">
              <Pill mb={3} color={'green'}>
                {'Do'}
              </Pill>
              <ToastMessage message={'Transaction started'} my={3} mr={3} />
            </Card>
            <Card mx={'auto'} my={3} px={4} width="420px">
              <Pill mb={3} color={'red'}>
                {"Don't"}
              </Pill>
              <ToastMessage
                message={"We've started your transaction"}
                my={3}
                mr={3}
              />
            </Card>
          </Flex>
          <br />
        </Box>
        <Box>
          <Heading.h3>
            Transaction messages (processing, success and failure)
          </Heading.h3>
        </Box>
        <Box>
          <Heading.h4>Processing messages</Heading.h4>
          <Text>
            Keep them in the present tense and reference what's being processed
            to give the user reassurance that what they've initiated is
            happening. An ellipsis can help indicate that something's happening
          </Text>
        </Box>
        <br />
        <Flex>
          <Card mx={'auto'} my={3} px={4} width="420px">
            <Pill mb={3} color={'green'}>
              {'Do'}
            </Pill>
            <ToastMessage
              message={'Processing payment...'}
              my={3}
              mr={3}
              variant={'processing'}
            />
          </Card>
          <Card mx={'auto'} my={3} px={4} width="420px">
            <Pill mb={3} color={'red'}>
              {"Don't"}
            </Pill>
            <ToastMessage
              message={'Processing started'}
              my={3}
              mr={3}
              variant={'processing'}
            />
          </Card>
        </Flex>
        <br />
        <Box>
          <Heading.h4>Success messages</Heading.h4>
          <Text>
            Describe what's happened and avoid generic "Success!"
            messages.Ethereum actions can take a while to it makes sense to
            remind the user of the action that has succeeded.
          </Text>
        </Box>

        <br />
        <Flex>
          <Card mx={'auto'} my={3} px={4} width="420px">
            <Pill mb={3} color={'green'}>
              {'Do'}
            </Pill>
            <ToastMessage
              message={'0.4 Ether sent!'}
              my={3}
              mr={3}
              variant={'success'}
            />
          </Card>
          <Card mx={'auto'} my={3} px={4} width="420px">
            <Pill mb={3} color={'red'}>
              {"Don't"}
            </Pill>
            <ToastMessage
              message={'Success!'}
              my={3}
              mr={3}
              variant={'success'}
            />
          </Card>
        </Flex>
        <br />

        <Box>
          <Text>
            Echo the language the user interacted with to initiate the action in
            the success message. So if the button copy was "Send Ether":
          </Text>
        </Box>

        <br />
        <Flex>
          <Card mx={'auto'} my={3} px={4} width="420px">
            <Pill mb={3} color={'green'}>
              {'Do'}
            </Pill>
            <ToastMessage
              message={'Ether sent'}
              my={3}
              mr={3}
              variant={'success'}
            />
          </Card>
          <Card mx={'auto'} my={3} px={4} width="420px">
            <Pill mb={3} color={'red'}>
              {"Don't"}
            </Pill>
            <ToastMessage
              message={'Ether transferred'}
              my={3}
              mr={3}
              variant={'success'}
            />
          </Card>
        </Flex>
        <br />

        <Box>
          <Text>
            If you explain what's happened you don't need to use terms like
            "successfully" which will help keep your content shorter
          </Text>
        </Box>
        <br />
        <Flex>
          <Card mx={'auto'} my={3} px={4} width="420px">
            <Pill mb={3} color={'green'}>
              {'Do'}
            </Pill>
            <ToastMessage
              message={'Transaction confirmed'}
              my={3}
              mr={3}
              variant={'success'}
            />
          </Card>
          <Card mx={'auto'} my={3} px={4} width="420px">
            <Pill mb={3} color={'red'}>
              {"Don't"}
            </Pill>
            <ToastMessage
              message={'Transaction confirmed successfully'}
              my={3}
              mr={3}
              variant={'success'}
            />
          </Card>
        </Flex>
        <br />

        <Box>
          <Heading.h4>Failure messages</Heading.h4>
          <Text>
            <em>
              Note: it may be preferable to use alternative components like{' '}
              <Link
                onClick={linkTo('components-modal', 'documentation')}
                title="Rimble UI Modal component"
                href="javascript:;"
              >
                Modal
              </Link>{' '}
              to bring a transaction failure to a user's attention, as they
              can't be missed and provide more space for explanation.
            </em>
          </Text>
          <br />
          <Text>
            Where possible, explain the reason for failure and offer a
            suggestion of what to do next. And use the action to help the user
            remedy the situation.{' '}
          </Text>
        </Box>
        <br />
        <Flex>
          <Card mx={'auto'} my={3} px={4} width="420px">
            <Pill mb={3} color={'green'}>
              {'Do'}
            </Pill>
            <ToastMessage
              message={'Transaction failed'}
              secondaryMessage={"You didn't have enough Ether"}
              actionText={'Buy ETH'}
              actionHref={'#'}
              my={3}
              mr={3}
              variant={'failure'}
            />
          </Card>
          <Card mx={'auto'} my={3} px={4} width="420px">
            <Pill mb={3} color={'red'}>
              {"Don't"}
            </Pill>
            <ToastMessage
              message={'Transaction failed'}
              my={3}
              mr={3}
              variant={'failure'}
            />
          </Card>
        </Flex>

        <br />
        <Box>
          <Text>
            Echo the language the user interacted with to initiate the action in
            the failure message. So if the button copy was "Pay 0.13 Ether":
          </Text>
        </Box>
        <br />
        <br />
        <Flex>
          <Card mx={'auto'} my={3} px={4} width="420px">
            <Pill mb={3} color={'green'}>
              {'Do'}
            </Pill>
            <ToastMessage
              message={'Payment failed'}
              my={3}
              mr={3}
              variant={'failure'}
            />
          </Card>
          <Card mx={'auto'} my={3} px={4} width="420px">
            <Pill mb={3} color={'red'}>
              {"Don't"}
            </Pill>
            <ToastMessage
              message={'Transaction failed'}
              my={3}
              mr={3}
              variant={'failure'}
            />
          </Card>
        </Flex>
        <ContributeBanner />
      </Box>
    ))
  )

  .add(
    'Provider documentation',
    withDocs(ProviderDocumentation, () => (
      <Box mx={3}>
        <Box>
          <Heading.h3>ToastMessage.provider previews</Heading.h3>
          <Text.p>
            Preview each <code>{'ToastMessage'}</code> and see how to call it
          </Text.p>
        </Box>
        <br />
        <Box>
          <Heading.h4>addMessage.processing</Heading.h4>
          <Text.p>Calls a processing ToastMessage</Text.p>
          <Button
            mb={3}
            onClick={e =>
              window.toastProvider.addMessage('Processing payment...', {
                secondaryMessage: 'Check progress on Etherscan',
                actionHref:
                  'https://etherscan.io/tx/0xcbc921418c360b03b96585ae16f906cbd48c8d6c2cc7b82c6db430390a9fcfed',
                actionText: 'Check',
                variant: 'processing',
              })
            }
          >
            Preview
          </Button>
        </Box>

        <CodeBlock textOnly>
          {`<Button
  mb={3}
  onClick={e =>
    window.toastProvider.addMessage('Processing payment...', {
      secondaryMessage: 'Check progress on Etherscan',
      actionHref:
        'https://etherscan.io/tx/0xcbc921418c360b03b96585ae16f906cbd48c8d6c2cc7b82c6db430390a9fcfed',
      actionText: 'Check',
      variant: 'processing',
    })
  }
>
  Preview
</Button>`}
        </CodeBlock>
        <br />
        <Box>
          <Heading.h4>addMessage.success</Heading.h4>
          <Text.p>Calls a success ToastMessage</Text.p>
          <Button
            mb={3}
            onClick={e =>
              window.toastProvider.addMessage('ETH sent', {
                secondaryMessage: 'You have 1.03 Ether remaining',
                variant: 'success',
              })
            }
          >
            Preview
          </Button>
        </Box>
        <CodeBlock textOnly>
          {`<Button
  mb={3}
  onClick={e =>
    window.toastProvider.addMessage('ETH sent', {
      secondaryMessage: 'You have 1.03 Ether remaining',
      variant: 'success',
    })
  }
>
  Preview
</Button>`}
        </CodeBlock>
        <br />
        <Box>
          <Heading.h4>addMessage.failure</Heading.h4>
          <Text.p>Calls a failure ToastMessage</Text.p>
          <Button
            mb={3}
            onClick={e =>
              window.toastProvider.addMessage('Payment failed', {
                secondaryMessage: "You don't have enough Ether (ETH)",
                actionHref: 'https://www.coinbase.com/',
                actionText: 'Buy',
                variant: 'failure',
              })
            }
          >
            Preview
          </Button>
        </Box>
        <CodeBlock textOnly>
          {`<Button
  mb={3}
  onClick={e =>
    window.toastProvider.addMessage('Payment failed', {
      secondaryMessage: "You don't have enough Ether (ETH)",
      actionHref: 'https://www.coinbase.com/',
      actionText: 'Buy',
      variant: 'failure',
    })
  }
>
  Preview
</Button>`}
        </CodeBlock>
        <br />
        <Box>
          <Heading.h4>addMessage.default</Heading.h4>
          <Text.p>Calls a default ToastMessage</Text.p>
          <Button
            mb={3}
            onClick={e =>
              window.toastProvider.addMessage('Transaction started')
            }
          >
            Preview
          </Button>
        </Box>
        <CodeBlock textOnly>
          {`<Button
  mb={3}
  onClick={e =>
    window.toastProvider.addMessage('Transaction started')
  }
>
  Preview
</Button>`}
        </CodeBlock>

        <br />
        <Box>
          <Heading.h4>addMessage.default with icon</Heading.h4>
          <Text.p>Calls a default ToastMessage with an icon</Text.p>
          <Button
            mb={3}
            onClick={e =>
              window.toastProvider.addMessage('Welcome to my dApp', {
                icon: 'Mood',
              })
            }
          >
            Preview
          </Button>
        </Box>
        <CodeBlock textOnly>
          {`<Button
  mb={3}
  onClick={e =>
    window.toastProvider.addMessage('Welcome to my dApp', {
      icon: 'Mood',
    })
  }
>
  Preview
</Button>`}
        </CodeBlock>

        <br />
        <Box>
          <Heading.h4>addMessage.default dark colors with Icon</Heading.h4>
          <Text.p>Calls a default dark ToastMessage with an icon</Text.p>
          <Button
            mb={3}
            onClick={e =>
              window.toastProvider.addMessage('Welcome to my dApp', {
                icon: 'Mood',
                colorTheme: 'dark',
              })
            }
          >
            Preview
          </Button>
        </Box>
        <CodeBlock textOnly>
          {`<Button
  mb={3}
  onClick={e =>
    window.toastProvider.addMessage('Welcome to my dApp', {
      icon: 'Mood',
      colorTheme: 'dark',
    })
  }
>
  Preview
</Button>`}
        </CodeBlock>

        <br />
        <Box>
          <Heading.h4>removeMessage</Heading.h4>
          <Text.p>Removes a ToastMessage</Text.p>
          <Button.Outline
            mb={3}
            mr={3}
            onClick={e =>
              window.toastProvider.addMessage('Welcome to my dApp', {
                icon: 'Mood',
                colorTheme: 'dark',
              })
            }
          >
            Call toast
          </Button.Outline>
          <Button onClick={() => window.toastProvider.removeMessage()}>
            Remove it
          </Button>

          <ToastMessage.Provider ref={node => (window.toastProvider = node)} />
        </Box>
        <Box>
          <CodeBlock textOnly>
            {`<Button onClick={() => window.toastProvider.removeMessage()}>`}
          </CodeBlock>
        </Box>
      </Box>
    ))
  );
