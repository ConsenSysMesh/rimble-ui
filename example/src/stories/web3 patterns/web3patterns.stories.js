import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import {
  Tooltip,
  Icon,
  Flex,
  Text,
  Button,
  OutlineButton,
  TextButton,
  Box,
  Heading,
  Input,
  Field,
  Link,
  Card,
  Pill,
  Image,
  ToastMessage,
  Table,

} from 'rimble-ui'


storiesOf('Web 3 patterns', module)
  .add('Transaction states', () => (
    <Box mx={3} textAlign={'left'}>
    <Box>
    <Heading.h1>Transaction states</Heading.h1>

    <Heading.h2>Well-designed transaction states will build trust and confidence in your dApp by helping users understand what's going on and setting their expectations.</Heading.h2>
    <Text.p>Transactions are such a crucial part of dApp UX because they're so different to what we're used to in Web 2. While ridding the process of a "middleperson" might have given us more personal autonomy, it has left us with less immediacy and more complexity to design for.</Text.p>

    <Text.p>We built a demo to show rather than tell. Check it out, then read our guidelines below for some advice on giving your users the most helpful transaction experience.</Text.p><br />
    <Button>Try the demo</Button></Box><br /><br />

<Box>
<Heading.h2>Demo walk-through</Heading.h2>
<Text.p>
• User initiates transaction<br />
• Transaction started<br />
• Transaction is pending<br />
• Transaction is confirmed<br />
• Transaction succeeds<br />
• Transaction fails
</Text.p>
    </Box><br />

<Heading.h2>Guidance</Heading.h2>
<Text.p>Our demo doesn't cover everything, so here's some extra advice for you to work into your product.</Text.p><br />

<Card>
<Heading.h3>Set user expectations</Heading.h3>
<Heading.h4>Time</Heading.h4>
<Text.p>Ethereum transactions aren't quick by Web2 standards. So for inexperienced dApp users, transaction speeds may produce anxiety around whether something has worked or not. Use messaging in your states to explain that parts of the process may take a while. </Text.p>
<Button mb={3} onClick={(e) => window.toastProvider.addMessage('Processing transaction...', {
      secondaryMessage: 'This might take a few minutes',
      variant: 'processing',})}>Show example</Button>
  <ToastMessage.Provider ref={(node) => (window.toastProvider = node)} />

<Heading.h4>Gas</Heading.h4>
<Text.p>All blockchain actions require "Gas" or a "transaction fee". Users are not used to paying for actions in digital products. Make sure you introduce this concept in a timely manner. If you leave it until the user is in the process of confirming the transaction in their Ethereum account, this makes it feel like a hidden fee and is likely to cause uneasiness.</Text.p>
<Pill mb={3} color={"green"}><Icon name="Check" /> {"Do"}</Pill><br />
<Text.p><b>Explain Gas:</b></Text.p>
<Text>• In product onboarding</Text>
<Text>• In a transaction summary (before submission)</Text>
<Text>• If the user's wallet/account balance is empty. For example, "your account doesn't have enough funds to use any of our blockchain features"</Text><br /><br />
<Pill mb={3} color={"red"}><Icon name="Close" /> {"Don't"}</Pill><br />
<Text>• Rely on your wallet provider (for example, MetaMask) to explain transaction fees</Text>
<Text>• Hope the user understands Gas</Text>

    </Card>

    <Card>
    <Heading.h3>Keep the user in the loop</Heading.h3>
<Text.p>
    Ethereum transactions are complicated. Explaining everything under the hood isn't necessary, but you should stll make sure your user is aware of big changes in the transaction life cycle.</Text.p>
    <Text><b>1.</b> Confirm that the button they pressed to initiate the transaction worked. Be sure to point them to their wallet if they need to confirm the transaction there.</Text><br />
<Text.p><em>Example</em></Text.p>
<ToastMessage width={[ 1, 1, 1/2 ]} message={"Change submitted"} secondaryMessage={'Confirm in MetaMask'} /><br /><br />
    <Text><b>2.</b> Indicate that the transaction process is happening. </Text><br />
    <Text.p><em>Example</em></Text.p>
<ToastMessage.Processing width={[ 1, 1, 1/2 ]} message={"Processing change..."} secondaryMessage={'This might take a few minutes'} /><br /><br />
    <Text><b>3.</b> If your users are more experienced in blockchain, you may want to signal when you can confirm the transaction has been taken on by a miner. Note: this could cause confusion for new and inexperienced users, so consider skipping until the transaction has been a success or failure. </Text><br />
<Text.p><em>Example</em></Text.p>
<ToastMessage.Processing width={[ 1, 1, 1/2 ]} message={'First block confirmed'} secondaryMessage={'Your change is in progress'} /><br /><br />
    <Text><b>4.</b> Let users know once the thing they set out to do by pressing the button has happened. In the case of our demo, it was that the value of the smart contract had changed.</Text><br />
<Text.p><em>Example</em></Text.p>
<ToastMessage.Success width={[ 1, 1, 1/2 ]} message={'Smart contract value changed'} /><br /><br />
    <Text><b>5.</b> Let the user know if something has gone wrong and the transaction can't be completed. Include why the transaction failed and how to remedy the situation (if possible). Consider other UI for this state as it may require action from the user.</Text><br />
<Text.p><em>Example</em></Text.p>
<ToastMessage.Failure width={[ 1, 1, 1/2 ]} message={'Value change failed'} secondaryMessage={'Insert reason why or how to fix'} />
    </Card>


    <Card>
    <Heading.h3>Show states persistently too</Heading.h3>
    <Text.p>Our demo uses toast messages as the transaction speed is pretty quick, but they disappear automatically. So use other parts of the interface to provide updates on the process. Your users may not just watch their screen after submitting a transation.</Text.p>

    <Text.p>Our pills can be a handy way of giving users this info at a glance.</Text.p>
    <Table>
<thead>
<tr>
<th>Transaction hash</th>
<th>Time</th>
<th>Status</th>
</tr>
</thead>
<tbody>
<tr>
<td>0xeb2317a1ae818be05c1bfdc818d5e2a5aa7ec61b389a7df6268bfd0d5d8e8cc0</td>
<td></td>
<td><Pill mx={3} color={"blue"}>{"Started"}</Pill><br /></td>

</tr>
<tr>
<td>0xeb2317a1ae818be05c1bfdc818d5e2a5aa7ec61b389a7df6268bfd0d5d8e8cc0</td>
<td></td>
<td><Pill mx={3} color={"orange"}> {"Processing"}</Pill><br /></td>

</tr>
<tr>
<td>0xeb2317a1ae818be05c1bfdc818d5e2a5aa7ec61b389a7df6268bfd0d5d8e8cc0</td>
<td></td>
<td><Pill mx={3} color={"green"}>{"Confirmed"}</Pill><br /></td>

</tr>
<tr>
<td>0xeb2317a1ae818be05c1bfdc818d5e2a5aa7ec61b389a7df6268bfd0d5d8e8cc0</td>
<td></td>
<td><Pill mx={3} color={"red"}>{"Failed"}</Pill><br /></td>

</tr>
</tbody>
</Table>

    </Card>

    <Card>
    <Heading.h3>Reference the action, not transaction</Heading.h3>

    <Text.p>Use specific language throughout the transaction lifecycle. If the transaction is actually transfering a crypto asset, refer to that. Or if your users are casting a vote on the blockchain, reference the vote. This will spare users having to make connections in their head. Echo the language you'd use in the button to initiate the transaction e.g. Send Cryptokitty or Cast vote.</Text.p><br />

    <Pill mb={3} color={"green"}><Icon name="Check" /> {"Do"}</Pill><br />
    <Text>• Sending Ether...</Text>
    <Text>• Vote cast</Text>
    <Text>• Cryptokitty failed to send</Text><br /><br />
    <Pill mb={3} color={"red"}><Icon name="Close" /> {"Don't"}</Pill><br />
    <Text>• Processing transaction...</Text>
    <Text>• Transaction confirmed</Text>
    <Text>• Transaction failed</Text>

    </Card>

    <Card>
    <Heading.h3>Ensure the conditions are right pre-transaction</Heading.h3>

<Text.p>Your dApp can detect a network as long as there's a web 3 provider. And once the user has connected their Ethereum address with your dApp you can read the account balance. Don't wait until a transaction to tell your user about an incorrect network or a 0 ETH balance. This is not what the failed state is for. </Text.p>

<Pill mb={3} color={"green"}><Icon name="Check" /> {"Do"}</Pill><br />
<ToastMessage.Failure width={[ 1, 1, 1/2 ]} message={'Payment failed'} secondaryMessage={'You didn\'t sign the contract in MetaMask'} /><br /><br />
<Pill mb={3} color={"red"}><Icon name="Close" /> {"Don't"}</Pill><br />
<ToastMessage.Failure width={[ 1, 1, 1/2 ]} message={'Payment failed'} secondaryMessage={'You were on the wrong network'} /><br />
<ToastMessage.Failure width={[ 1, 1, 1/2 ]} message={'Payment failed'} secondaryMessage={'Your balance is 0 Ether'} />


</Card>

<Card>
<Heading.h3>Handle errors with care</Heading.h3>

    <Text.p>- If there's an error explain how to resolve it</Text.p></Card>

    <Card>
    <Heading.h3>MetaMask signatures</Heading.h3>

<Text.p>[https://medium.com/metamask/eip712-is-coming-what-to-expect-and-how-to-use-it-bb92fd1a7a26](https://medium.com/metamask/eip712-is-coming-what-to-expect-and-how-to-use-it-bb92fd1a7a26)</Text.p></Card>

    </Box>
  ));
