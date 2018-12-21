# MetaMaskButton
The `MetaMaskButton` component maps to a `<button type='button'>` element. Inherits props from `Button`.
<!-- STORY -->

### Usage
```jsx
import { MetaMaskButton } from 'rimble-ui'
```
<!-- component example here -->
```jsx

<MetaMaskButton mb={3}>Connect with MetaMask</MetaMaskButton>

<MetaMaskButton.outline mb={3}>Connect with MetaMask</MetaMaskButton.outline>

<MetaMaskButton fullWidth mb={3}>Connect with MetaMask</MetaMaskButton>

<MetaMaskButton.outline fullWidth mb={3} >Connect with MetaMask</MetaMaskButton.outline>


<MetaMaskButton size="small" mb={3} mr={3}>Connect with MetaMask</MetaMaskButton>
<MetaMaskButton.outline size="small" mb={3}>Connect with MetaMask</MetaMaskButton.outline>

<MetaMaskButton size="medium" mb={3} mr={3}>Connect with MetaMask</MetaMaskButton>
<MetaMaskButton.outline size="medium" mb={3}>Connect with MetaMask</MetaMaskButton.outline>

<MetaMaskButton size="large" mb={3} mr={3}>Connect with MetaMask</MetaMaskButton>
<MetaMaskButton.outline size="large" mb={3}>Connect with MetaMask</MetaMaskButton.outline>
```


### Props

Inherits props from `Button`.

| Name        | Type    | Default | Description                                 |
| ----------- | ------- | ------- | ------------------------------------------- |
| `size`      | string  |         | Sets button size to small, medium, or large |
| `fullWidth` | boolean |         | Sets button width to fullWidth              |
| `disabled`  | boolean |         | Sets button style to disabled               |
