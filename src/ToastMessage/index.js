import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components'

import Box from '../Box'
import Icon from '../Icon'
import Text from '../Text'
import Link from '../Link'
import TextButton from '../TextButton'

import { ReactComponent as IconPositive } from './icon-positive.svg'
import { ReactComponent as IconNegative } from './icon-negative.svg'
import { ReactComponent as IconProcessing } from './icon-processing.svg'


const getColors = (props) => {
  switch (props.variant) {
    case 'dark':
      return `
        color: #FFF;
        background-color: #000;
        button {color: #9387FF}
        svg:first-child {fill: #FFF}
      `;
      break;
    default:
      return`
        color: #000;
        background-color: #FFF;
        // svg {fill: #999999}
      `;
  }
}

const slideIn = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
`;

const animOutKeyFrames = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }

  to {
    opacity: 0;
    transform: translateX(120%);
  }
`

const ToastSlideIn = styled.div`
  animation-name: ${props => props.direction ? (animOutKeyFrames) : (slideIn)};
  animation-duration: 300ms;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  ${'' /* animation-play-state: running; */}
`

const StyledToastContainer = styled('div')`
  & {
    display: block;
    position: fixed;
    top: auto;
    bottom: 0;
    left: auto;
    right: 0;
    width: 480px;
    pointer-events: none;
    padding: 1rem;
  }
`

const StyledToastMessage = styled(Box)`
  & {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    user-select: none;
    height: 80px;

    ${'' /* background: #FFFFFF; */}
    border: 1px solid #D6D6D6;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    pointer-events: all;

  }
  &:hover {

  }

  ${getColors}
`



const ToastMessage = ({className, ...props}) => (
  <StyledToastMessage className={className} {...props}>
    { props.icon && <Icon name={props.icon} color={'primary'} size={'32px'} mr={2} flex={'0 0'} /> }
    <Box flex={'1 0'} mx={2}>
      { props.message && <Text fontSize={1} fontWeight={3} color={'inherit'}>{props.message}</Text> }
      { props.secondaryMessage && <Text fontSize={1} color={'#666'}>{props.secondaryMessage}</Text> }
    </Box>
    <TextButton flex={'0 0 auto'} p={'0'} color={'primary'}>
      { props.actionText }
    </TextButton>
    <TextButton icononly size={'small'} alignSelf={'flex-start'} >
      <Icon name={'Close'} size={'16px'} color={'grey'} flex={'0 0'} />
    </TextButton>
  </StyledToastMessage>
);

const SuccessToastMessage = ({className, ...props}) => (
  <StyledToastMessage className={className} {...props}>
    <Box size={'32px'} mr={2} flex={'0 0'} >
      <IconPositive width={'32px'} height={'32px'} />
    </Box>
    <Box flex={'1 0'} mx={2}>
      { props.message && <Text fontSize={1} fontWeight={3} color={'inherit'}>{props.message}</Text> }
      { props.secondaryMessage && <Text fontSize={1} color={'#666'}>{props.secondaryMessage}</Text> }
    </Box>
    <TextButton flex={'0 0 auto'} p={'0'} color={'primary'}>
      { props.actionText }
    </TextButton>
    <TextButton icononly size={'small'} alignSelf={'flex-start'} >
      <Icon name={'Close'} size={'16px'} color={'grey'} flex={'0 0'} />
    </TextButton>
  </StyledToastMessage>
)

const FailureToastMessage = ({className, ...props}) => (
  <StyledToastMessage className={className} {...props}>
    <Box size={'32px'} mr={2} flex={'0 0'} >
      <IconNegative width={'32px'} height={'32px'} />
    </Box>
    <Box flex={'1 0'} mx={2}>
      { props.message && <Text fontSize={1} fontWeight={3} color={'inherit'}>{props.message}</Text> }
      { props.secondaryMessage && <Text fontSize={1} color={'#666'}>{props.secondaryMessage}</Text> }
    </Box>
    <TextButton flex={'0 0 auto'} p={'0'} color={'primary'}>
      { props.actionText }
    </TextButton>
    <TextButton icononly size={'small'} alignSelf={'flex-start'} >
      <Icon name={'Close'} size={'16px'} color={'grey'} flex={'0 0'} />
    </TextButton>
  </StyledToastMessage>
)

const ProcessingToastMessage = React.forwardRef((props, ref) => (
  <StyledToastMessage ref={ref} {...props}>
    <Box size={'32px'} mr={2} flex={'0 0'} >
      <IconProcessing width={'32px'} height={'32px'} />
    </Box>
    <Box flex={'1 0'} mx={2}>
      { props.message && <Text fontSize={1} fontWeight={3} color={'inherit'}>{props.message}</Text> }
      { props.secondaryMessage && <Text fontSize={1} color={'#666'}>{props.secondaryMessage}</Text> }
    </Box>
    <TextButton onClick={() => (console.log('Action link!'))} color={'primary'} p={'0'} flex={'0 0 auto'}>
      { props.actionText }
    </TextButton>
    <TextButton onClick={() => (console.log('Close me!'))} icononly size={'small'} alignSelf={'flex-start'} >
      <Icon name={'Close'} size={'16px'} color={'grey'} flex={'0 0'} />
    </TextButton>
  </StyledToastMessage>
));

// wip
class ProtoToastMessage extends Component {
  constructor(props) {
    super(props);
    this.toastNode = React.createRef();
  }

  // Set default props
  static defaultProps = {
    message: 'Message text… ',
    secondaryMessage: '',
    actionHref: '',
    actionText: '',
    variant: 'default'
  }

  handleClose = (e) => {
    e.preventDefault();
    console.log('close!');
    console.log(this.toastNode.current);
  }

  handleAction = (e) => {
    e.preventDefault();
    console.log('action!');
  }

  renderIcon = (variant) => {

    const getIcon = (variant) => {
      switch (variant) {
        case 'processing':
          return <IconProcessing width={'32px'} height={'32px'} />
          break;
        case 'success':
          return <IconPositive width={'32px'} height={'32px'} />
          break;
        case 'failure':
          return <IconNegative width={'32px'} height={'32px'} />
          break;
        default:
          return ''
      }
    }

    return (
      <Box flex={'0 0'} mr={2}>
        {getIcon(variant)}
      </Box>
    )
  }

  render() {
    const props = this.props;
    return (
      <StyledToastMessage ref={this.toastNode}>
        { props.variant && this.renderIcon(props.variant) }
        <Box flex={'1 1'} mx={2}>
          { props.message && <Text fontSize={1} fontWeight={3} color={'inherit'}>{props.message}</Text> }
          { props.secondaryMessage && <Text fontSize={1} color={'#666'}>{props.secondaryMessage}</Text> }
        </Box>
        <Box flex={'0 0 auto'} mr={2}>
          { props.actionText && props.actionHref && <Link href={props.actionHref} target={'_blank'}>{props.actionText}</Link>}
        </Box>
        <TextButton onClick={this.handleClose} icononly size={'small'} alignSelf={'flex-start'} >
          <Icon name={'Close'} size={'16px'} color={'grey'} flex={'0 0'} />
        </TextButton>
      </StyledToastMessage>
    );
  }

}

class ToastContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      datetime: new Date(),
      currentMsg: {}
    }
  }

  addMessage = (msg, data) => {
    event.stopPropagation();

    this.setState((state, props) => ({
      isOpen: false,
    }), () => {
      setTimeout(() => {
        this.setState((state, props) => ({
          isOpen: true,
          datetime: Date.now(),
          currentMsg: data
        }));
      }, 900);
    });

    console.log('added message');
    console.log(msg, data);
    console.log(this.state.datetime);
  }


  removeMessage = (e) => {
    e && e.stopPropagation();

    this.setState((state, props) => ({
      isOpen: false
    }));

    console.log('removed message');
  }

  handleClose = (e) => {
    e.preventDefault();
    console.log('close!', this.closeBttn);
  }

  handleAction = (e) => {
    e.preventDefault();
    console.log('action!');
  }

  renderMessage = () => {
    return (
      <ProtoToastMessage {...this.state.currentMsg}/>
    );
  }

  render() {
    return (
      <StyledToastContainer p={3}>

        {this.state.isOpen ? (
          <ToastSlideIn>
            {this.renderMessage()}
          </ToastSlideIn>
        ) : (
          <ToastSlideIn direction={'out'}>
            {this.renderMessage()}
          </ToastSlideIn>
        )}

      </StyledToastContainer>
    )
  }
};

ToastMessage.Container = ToastContainer;

ToastMessage.Success = SuccessToastMessage;
ToastMessage.Failure = FailureToastMessage;
ToastMessage.Processing = ProcessingToastMessage;

StyledToastMessage.defaultProps = {
  display: 'flex',
  flexDirection: 'row nowrap',
  alignItems: 'center',
  borderRadius: 1,
  py: 0,
  pl: 3,
  maxWidth: 6,
}

ToastMessage.defaultProps = {
  message:'Generic Message',
  secondaryMessage: '',
  actionText: 'Action',
  icon: false
}

ToastMessage.displayName = 'ToastMessage'

export default ToastMessage;
