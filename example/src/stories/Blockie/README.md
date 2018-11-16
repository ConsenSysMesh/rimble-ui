# Blockie

The `Blockie` component allows for use of [Ethereum blockies](https://github.com/ethereum/blockies) in your app.
Blockies are identicons for Ethereum addresses. These are not meant to replace user profiles, but as security icons, to allow the user to more easily check if an address he wants to interact with is the correct one.
> _**Research note**: We have some anecdotal evidence that blockies are not effectively helping users of Ethereum wallets or dApps as they are being implemented in many cases. We have chosen to include the pattern in Rimble because of its broad adoption and lack of alternatives. However, we believe further research, better usage guidelines, and potentially alternative patterns are needed._  

<!-- STORY -->

### Usage
```jsx
import { Blockie } from 'rimble-ui'
```
<!-- Blockie example here -->
```jsx
<Blockie opts={{seed: "foo", color: "#dfe", bgcolor: "#a71", size: 15, scale: 3, spotcolor: "#000"}} />
```
