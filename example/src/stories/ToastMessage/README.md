# ToastMessage
The `ToastMessage` renders a responsive box-model layout component.

<!-- STORY -->

### Usage
```jsx
import { ToastMessage } from 'rimble-ui'
```

<!-- component example here -->
```jsx
<ToastMessage>
  This is a ToastMessage
</ToastMessage>

<ToastMessage secondaryMessage={'Lorem ipsum dolor sit.'} />

<ToastMessage
  icon={'InfoOutline'}
  actionText={'Action'}
  actionHref={'#!'}
/>

<ToastMessage
  secondaryMessage={'Lorem ipsum dolor sit.'}
  icon={'InfoOutline'}
  actionText={'Action'}
  actionHref={'#!'}
/>

<ToastMessage.Processing message={'Processing {0.00018} ETH payment' />

<ToastMessage.Success
  message={'ETH sent'}
  secondaryMessage={'You have {1.03} ETH remaining'}
  actionText={'View on Etherscan'}
  actionHref={'#!'}
/>

<ToastMessage.Failure
  message={'Payment failed'}
  secondaryMessage={'Make sure you have enough ETH and try again'}
/>

<ToastMessage colorTheme={'dark'} />

<ToastMessage
  secondaryMessage={'Lorem ipsum dolor sit.'}
  colorTheme={'dark'}
/>

<ToastMessage
  icon={'InfoOutline'}
  colorTheme={'dark'}
  actionText={'Action'}
  actionHref={'#!'}
/>

<ToastMessage
  secondaryMessage={'Lorem ipsum dolor sit.'}
  icon={'InfoOutline'}
  colorTheme={'dark'}
  actionText={'Action'}
  actionHref={'#!'}
/>

<Button onClick={(e) => window.toastProvider.addMessage('[Processing… ]', {
    secondaryMessage: (Date.now()),
    actionHref: 'https://etherscan.io/tx/0xcbc921418c360b03b96585ae16f906cbd48c8d6c2cc7b82c6db430390a9fcfed',
    actionText: 'View on Etherscan',
    variant: 'processing',
  })}
>
  "addMessage.processing"
</Button>

<Button onClick={(e) => window.toastProvider.addMessage('[Your message here… ]', {
    icon: 'VpnKey',
    colorTheme: 'dark'
  })}
>
  "addMessage.default dark colors with Icon"
</Button>


<ToastMessage.Provider ref={(node) => (window.toastProvider = node)} />
```

# Generic toast component documentation

- Documentation acceptance criteria

- What should a user know after reading this documentation?
    - When to use a toast component
        - And have a good idea when to use the different variations
    - The way the component works
    - The code to implement the component
    - What kind of content is best suited to this component

---

[https://www.figma.com/file/n6FLTlQudooEbEXxVLp5V0/Rimble-Components-Working-File?node-id=701%3A0](https://www.figma.com/file/n6FLTlQudooEbEXxVLp5V0/Rimble-Components-Working-File?node-id=701%3A0)

---

# **When should toasts be used?**

> For non-critical messages and actions that should be helpful but ultimately ignorable without any impact on what the user wants to get done.

Toast messages are small alerts that provide updates about a process. Use toast messages for non-critical information about what’s happening within your dApp. They shouldn't be used to notify the user that they ***need*** to do something. For that [see Modals](#).

## General usage guidelines

- **Not for critical information or actions.** By critical, we mean information that will directly impact the success of the user in completing their task, for example a network failure. They dismiss automatically so things can be missed easily. Note: users are able to dismiss them immediately manually.
- **Stick to one action.** This action should support your update and must be optional. This might be to provide further information (like linking to Etherscan) or something that can affect the process (like cancelling while your payment is in a processing state). Action copy should ideally be verb-led like "Cancel", "View", "Buy" or "Change".
- **Think about placement.** Toasts should steer clear of navigational elements and important areas of the screen. Consider that the MetaMask browser extension opens and covers the right of your screen, potentially hiding your toast messages.

## How they work

- They dismiss automatically
- User are able to dismiss them manually
- They display one at a time, so if multiple messages are necessary, each one should appear after the previous message.

# Rimble's generic toast components:

## Title only (+ optional icon)

*For when you want to just provide a quick process update like a confirmation*

Example of a toast telling the user something that's happening

Example of a toast telling the user something that's happened
**

**Generic message:** should clearly state the update in human terms, referencing the process if possible. NOTE: you very rarely need to use words like "Successfully", the state should speak for itself.

**Action:** should relate to what you're communicating and is optional. If the message is a reversible action, "undo" is often a good choice. If no action is required or relevant, leave it out.

**Example scenarios:**

- A transaction was sent successfully
- A transaction has started
- You're now logged in to your wallet

---

## Title and subtext (+ optional icon)

*For when you want to provide more value through extra helpful information. Ask yourself when implementing your toast: is there anything else I could tell the user that would be useful?*

Example of a toast telling the user something is happening with extra helpful information

Example of a toast telling the user something that's happened with extra helpful information
**