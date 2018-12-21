# Card
The `Card` renders a responsive box-model layout component.

<!-- STORY -->

### Usage
```jsx
import { Card } from 'rimble-ui'
```

<!-- component example here -->
```jsx
<Card />
<Card color="white" bg="primary" />

<Card size="40px" />
<Card size="80px" color="red" />
<Card size="80px" color="white" bg="primary" />

<Card color="black" />
<Card color="white" bg="grey" />
```

```jsx
import {
  Card,
  Text,
  Icon,
  MetaMaskButton
} from 'rimble-ui'

<Card width={'420px'} mx={'auto'} px={4} display="flex" flexDirection="column">
  <Text fontSize={0} fontWeight={4} caps mb={3} display={'flex'} alignItems={'center'} >
    <Icon name={'AccountBalanceWallet'} mr={2}></Icon>
    Connect your Wallet:
  </Text>
  <MetaMaskButton.outline>Install MetaMask</MetaMaskButton.outline>
</Card>
```
