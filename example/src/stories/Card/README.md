# Card
The `Card` renders a responsive box-model layout component. Inherits props from `Box` component.

<!-- STORY -->

### Usage
```jsx
import { Card } from 'rimble-ui'
```

<!-- component example here -->
```jsx
<Card>
  This is a Card
</Card>

<Card color="white" bg="primary">
  This is a Card
</Card>

<Card size="80px" color="red">
  This is a Card
</Card>

<Card size="80px" color="white" bg="primary">
  This is a Card
</Card>
```

```jsx
import {
  Card,
  Text,
  Icon,
  MetaMaskButton
} from 'rimble-ui'

<Card width={'420px'} mx={'auto'} px={4}>
  <Text caps fontSize={0} fontWeight={4} mb={3} display={'flex'} alignItems={'center'} >
    <Icon name={'AccountBalanceWallet'} mr={2}></Icon>
    Connect your Wallet:
  </Text>
  <MetaMaskButton.outline fullWidth>Install MetaMask</MetaMaskButton.outline>
</Card>
```

```jsx
import {
  Card,
  Heading,
  Text,
  Button,
  OutlineButton
} from 'rimble-ui'

<Card width={'420px'} mx={'auto'} px={4}>
  <Heading>Heading</Heading>
  <Text mb={4}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam autem ratione doloribus quidem neque provident eius error dignissimos delectus architecto nemo quos alias sunt voluptate impedit, facilis sequi tempore. Amet!
  </Text>
  <Button mr={3}>Accept</Button>
  <OutlineButton>Cancel</OutlineButton>
</Card>
```
