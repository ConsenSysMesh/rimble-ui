# ToastMessage
Toast messages are small alerts that provide updates about a process. Use toast messages for non-critical information about what’s happening within your dApp. They shouldn't be used to notify the user that they need to do something. The `ToastMessage` component renders a responsive box-model layout component.

For the code, usage guidance and examples, keep scrolling. 

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

# `ToastMessage` content and design guidelines

## **When should they be used?**

> For non-critical messages and actions that should be helpful but ultimately ignorable without any impact on what the user wants to get done.

## General usage guidelines

- **Not for critical information or actions.** By critical, we mean information that will directly impact the success of the user in completing their task, for example a network failure. They dismiss automatically so things can be missed easily. Note: users are able to dismiss them immediately manually.
- **Stick to one action.** This action should support your update and must be optional. This might be to provide further information (like linking to Etherscan) or something that can affect the process (like cancelling while your payment is in a processing state). Action copy should ideally be verb-led like "Cancel", "View", "Buy" or "Change".
- **Think about placement.** Toasts should steer clear of navigational elements and important areas of the screen. Consider that the MetaMask browser extension opens and covers the right of your screen, potentially hiding your toast messages.

## How they work

- They dismiss automatically
- User are able to dismiss them manually
- They display one at a time, so if multiple messages are necessary, each one should appear after the previous message.

# Digging into the components:

## Title only (+ optional icon)

*For when you want to just provide a quick process update like a confirmation*

**`message`:** should clearly state the update in human terms, referencing the process if possible.

**`actionText`:** should relate to what you're communicating and is optional. If the message is a reversible action, "undo" is often a good choice. If no action is required or relevant, leave it out.

**Example scenarios:**

- A transaction was sent successfully
- A transaction has started
- You're now logged in to your wallet

---

## Title and subtext (+ optional icon)

*For when you want to provide more value through extra helpful information. Ask yourself when implementing your toast: is there anything else I could tell the user that would be useful?*

**`message`:** should clearly state the update in human terms.

**`secondaryMessage`:** should provide additional information that adds value.

**`actionText`:** should relate to what you're communicating and is optional. If your `secondarymessage` is advice or a suggestion, try and include an action that gets the user on their way. If no action is required or relevant, leave it out. 

**Example scenarios:**

- A transaction was sent successfully and you'd like to tell the user how much ETH they have left for future transactions. ACTION: *none required*
- You want to tell the user that they're on the Rinkeby network and want to remind them that to use your dApp for real they should switch to Mainnet. ACTION: Switch to Mainnet

---

## How to write `Processing`, `success` and `failure` messages

This is just some general guidance if you don't know where to start.

- `processing` messages should be in the present tense and, if possible, reference what's being processed like "Processing payment" or "Sending ETH". This will give the user confidence that what they're trying to do is happening. An ellipses (...) at the end of the message can help confirm to the user that something is actively happening behind the scenes. If possible, "Processing..." or "Sending..." should echo the language in the CTA that the user pressed to initiate the process.  
- `success` messages should describe what's happened e.g. "Payment sent" or "Payment accepted" not just a generic "SUCCESS!". Try and echo the words used in the CTA that started the process. For example, if the user was sending ETH to an address and the CTA was "Send", have the toast message echo that language: "ETH sent". If you describe what's happened you don't need words like "successfully" at the end which add to word count. 
- `failure` messages, where possible, should explain the reason for failure and offer a suggestion of what to do next. Again echo the language used in the action the user was trying to do. If the user was trying to pay for something and the CTA was "Pay 0.13 ETH", have the failure message echo that language: "Payment failed". Then use the `secondaryMessage` to explain why ("Not enough ETH") or a suggestion on how to fix the problem ("Buy more ETH"). Try not to leave the user with no understanding of why something has failed or what to do next. The `action` should be used to help the user take the next step in overcoming the failure.
