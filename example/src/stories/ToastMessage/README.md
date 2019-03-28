# ToastMessage documentation
Use toast messages to provide updates about a process. The `ToastMessage` component extends `Box`.

- _Want to understand best practices for using a ToastMessage component?_ Read [`ToastMessage` design guidelines](https://consensys.github.io/rimble-ui/?path=/story/ToastMessage--design--guidelines)
- _Want to find out about the provider?_ Read [`ToastMessage.provider` documentation](https://consensys.github.io/rimble-ui/?path=/story/Provider--documentation)

**Import component**
```jsx
import { ToastMessage } from 'rimble-ui'
```

<!-- STORY -->

### Component props

Prop | Type | Values | Default | Description
-----|--------|---------|------------|--------
messages | | | | |
secondaryMessage | | | | |
actionHref | | | | |
actionText | | | | |
colorTheme | | | | |


### Styled-system props

```jsx
<ToastMessage.Processing message={'Processing 0.00018 ETH payment'} />

<ToastMessage.Success
  message={'ETH sent'}
  secondaryMessage={'You have 1.03 Ether (ETH) remaining'}
/>

<ToastMessage.Failure
  message={'Payment failed'}
  secondaryMessage={'You don&#39;t have enough Ether (ETH)'}
  actionText={'Buy ETH'}
  actionHref={'#!'}
/>
```
