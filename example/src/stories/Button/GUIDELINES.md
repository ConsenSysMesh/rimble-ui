# Button design guidelines
Button components let users know they can perform an action, like connecting their Ethereum account or starting a transaction.

Want to build this component? Read [`Button` documentation](https://github.com/ConsenSys/rimble-ui/blob/rc-button-docs/example/src/stories/Button/USAGE.md)

<!-- STORY -->

### When to use which button
As well as the default `button`, you can customise the props so it displays as disabled, with an icon or as a loader icon. This means you can use `button` to communicate many things. 

- **Default** – to show users the primary action(s) they can take from the screen they're on. For secondary or tertiary actions use [`outlineButton`](https://consensys.github.io/rimble-ui/?path=/story/button--outlinebutton) and [`textButton`](https://consensys.github.io/rimble-ui/?path=/story/button--textbutton)
- **Disabled** – to tell the user that they need to do something before they can perform the action. If possible, use the button copy to explain what they need to do or why the button is disabled
- **Loader** - to give users reassurance that the action the action they want is happening. If possible, include copy that further explains what's happening like "Loading" or "Sending"
- **Icon** - to add visual reinforcement to an action. An icon should support button copy, not replace it as copy is less ambiguous

### Design guidelines  
Some best practices for using `Button` in your product.

- Don’t use buttons for navigational links, they're for action-based tasks. Use [`textButton`](https://consensys.github.io/rimble-ui/?path=/story/button--textbutton) instead

- Keep button position consistent so that users know where to look when they want to perform actions

- Don’t use too many buttons together on piece of interface: prioritise the most important action. Use [`textButton`](https://consensys.github.io/rimble-ui/?path=/story/button--textbutton) and [`outlineButton`](https://consensys.github.io/rimble-ui/?path=/story/button--outlinebutton) to give your actions visual hierarchy

- If a user needs to do something prior to performing an action, it’s better to set the Disabled prop to True than to use this component and follow it up with an error message

  
### Content guidelines  
Some best practices for writing `Button` microcopy.

Keep copy concise – don’t use articles (a, the, an) in button microcopy. This will make your button quicker to scan and shorter

**Do**: Add wallet  
**Don’t**: Add a wallet

Make sure you explain the next step and not the end goal. The user should understand exactly what will happen once they press the button  

If you have a button that launches a QR code for you to scan with your mobile...  

**Do**: Show QR code  
**Don’t**: Scan QR code  

Lead with a verb and follow with a noun. Don’t rely on the rest of the interface to inform the user about what their action relates to. Universally understood actions like "Save", "Next" and "Previous" etc may not need the noun  

**Do**: Add wallet / Send Ether  
**Don’t**: Add / Send 

### Related components 
- [`MetaMaskButton`](https://consensys.github.io/rimble-ui/?path=/story/button--metamaskbutton) – a ready-styled button to tell your users that they can connect with MetaMask 
- [`UPortButton`](https://consensys.github.io/rimble-ui/?path=/story/button--uportbutton) – a ready-styled button ready to tell your users that they can connect with uPort  
- [`TextButton`](https://consensys.github.io/rimble-ui/?path=/story/button--textbutton) – a button styled as text. Good for navigation or actions you don’t want to draw attention to, for example "Cancel"  
- [`OutlineButton`](https://consensys.github.io/rimble-ui/?path=/story/button--outlinebutton) – a button given a less-prominent feel for secondary actions
