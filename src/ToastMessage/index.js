import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components'
import { timingFunctions } from 'polished'

import Box from '../Box'
import Icon from '../Icon'
import Text from '../Text'
import Link from '../Link'
import TextButton from '../TextButton'

import { ReactComponent as IconPositive } from './icon-positive.svg'
import { ReactComponent as IconNegative } from './icon-negative.svg'
import { ReactComponent as IconProcessing } from './icon-processing.svg'


const flicker = keyframes`
  0% {
    opacity: 0.1;
    transform: translateY(-1px);
  }
  20% {
    opacity: 0.6;
  }
  40% {
    opacity: 0.9;
    transform: translateY(1px);
  }
  60% {
    opacity: 0.5;
    transform: translateY(2px);
  }
  100% {
    opacity: 0;
    transform: translateY(3px);
  }
`

const IconProcessingAnim = styled(IconProcessing).attrs({
  seed: Math.floor(1000 + Math.random() * 7000),
  seeda: Math.floor((Date.now().toString().substring(2,6)) + Math.random() * 9000).toString().substring(0,4),
  seedb: Math.floor((Date.now().toString().substring(0,4)) + Math.random() * 4500).toString().substring(0,4)
})`
  > * {
    animation-name: ${flicker};
    animation-duration: ${props => props.seed + 'ms'};
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: infinite;
  }
  > *:nth-child(4n+0) {
    animation-duration: ${props => props.seeda + 'ms'};
    animation-delay: ${props => props.seeda + 'ms'};
  }
  > *:nth-child(2n+0) {
    animation-duration: ${props => props.seedb + 'ms'};
  }
  > *:nth-child(3n+0) {
    animation-duration: ${props => props.seeda + 'ms'};
    animation-delay: ${props => props.seedb + 'ms'};
  }
`

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

const animInKeyframes = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
`

const animOutKeyframes = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(120%);
  }
`

const animOutKeyframesDesktop = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }

  to {
    opacity: 0;
    transform: translateX(120%);
  }
`

const AnimationWrapper = styled.div`
  & {
    animation-name: ${ props => props.direction ? animOutKeyframes : animInKeyframes };
    animation-duration: ${ props => props.direction ? '500ms' : '300ms' };
    animation-timing-function: ${ props => props.direction ? timingFunctions('easeOutSine') : 'ease' };
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
  }
  @media screen and (min-width: 420px) {
    animation-name: ${props => props.direction ? (animOutKeyframesDesktop) : (animInKeyframes)};
  }
`

const StyledToastContainer = styled.div`
  & {
    display: block;
    position: fixed;
    top: auto;
    bottom: 0;
    left: auto;
    right: 0;
    width: 100%;
    max-width: 100%;
    pointer-events: none;
  }

  @media screen and (min-width: 420px) {
    width: 420px;
    padding: 1rem;
  }

  > div {
    width: 100%;
  }
`

const StyledToastMessage = styled(Box)`
  & {
    pointer-events: all;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    user-select: none;
    height: 80px;
    padding: 0 1rem;
    ${'' /* border-top: 1px solid #D6D6D6; */}
    ${'' /* border-radius: 4px; */}
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
    transition: all .15s ease;
  }

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
  }

  > .iconBox {
    display: none;
  }
  > .closeBttn {
    display: none;
  }

  @media screen and (min-width: 420px) {
    & {
      padding: 0 0 0 1rem;
      border: 1px solid #D6D6D6;
      border-radius: 4px;
    }
    > .iconBox {
      display: block;
    }
    > .closeBttn {
      display: flex;
    }
  }

  ${getColors}
`

const ToastMessage = ({className, ...props}) => {
  const renderFigure = ({figureNode, icon}) => {
    if (figureNode) {
      return (
        <Box className={'iconBox'} flex={'0 0'} mr={2}>
          { figureNode }
        </Box>
      )
    } else if (icon) {
      return (
        <Box className={'iconBox'} flex={'0 0'} mr={2}>
          <Icon name={icon} color={'primary'} size={'32px'} />
        </Box>
      )
    } else {
      return null;
    }
  }

  return (
    <StyledToastMessage className={className} {...props}>
      { renderFigure(props) }
      <Box flex={'1 0'} mx={2}>
        { props.message && <Text fontSize={1} fontWeight={3} color={'inherit'}>{props.message}</Text> }
        { props.secondaryMessage && <Text fontSize={1} color={'#666'}>{props.secondaryMessage}</Text> }
      </Box>
      <Box flex={'0 1 auto'} mr={2}>
        { props.actionText && props.actionHref && <Link href={props.actionHref} target={'_blank'}>{props.actionText}</Link>}
      </Box>
      <TextButton className={'closeBttn'} icononly size={'small'} alignSelf={'flex-start'} >
        <Icon name={'Close'} size={'16px'} color={'grey'} flex={'0 0'} />
      </TextButton>
    </StyledToastMessage>
  );
}

class ProtoToastMessage extends Component {
  constructor(props) {
    super(props);
  }

  static displayName = 'Proto Toast Message'

  static defaultProps = {
    message: 'Message text… ',
    secondaryMessage: '',
    actionHref: '',
    actionText: '',
    variant: 'default',
    icon: ''
  }

  handleClose = (e) => {
    e.preventDefault();
    console.log('…handling close!');
  }

  renderFigureNode = (variant) => {
    switch (variant) {
      case 'processing':
        // return <IconProcessing width={'32px'} height={'32px'} />
        return <IconProcessingAnim width={'32px'} height={'32px'} />
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

  render() {
    const {
      message,
      secondaryMessage,
      actionHref,
      actionText,
      variant,
      icon
    } = this.props;
    return (
      <ToastMessage
        message={message}
        secondaryMessage={secondaryMessage}
        actionHref={actionHref}
        actionText={actionText}
        figureNode={this.renderFigureNode(variant)}
        {...this.props}
      />
    );
  }

}

class ToastProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      isOpen: false,
      unMount: true,
      currentMsg: {}
    }
    this.timer = {}
  }

  static displayName = 'Toast Message Provider'

  static defaultProps = {
    delay: 3000
  }

  componentDidMount() {
    this.setState((state, props) => ({
      isReady: true
    }))

    window.onfocus = () => {
      this.startTimer()
    }
    window.onblur = () => {
      this.clearTimer()
    }
  }

  componentWillUnmount() {
    window.onfocus = null
    window.onblur = null
  }

  addMessage = (data) => {
    this.setState(() => ({
      isOpen: false,
    }), () => {
      setTimeout(() => {
        this.setState(() => ({
          isOpen: true,
          unMount: false,
          currentMsg: data,
        }), () => {
          this.startTimer()
        });
      }, 500);
    });
    console.log('added toast message');
    console.log(data);
  }


  removeMessage = () => {
    if (!this.state.isOpen) { return null }
    this.setState((state, props) => ({
      isOpen: false
    }));
    console.log('removed toast message');
  }

  startTimer = () => {
    if (!document.hasFocus()) { return null }
    this.clearTimer()
    this.timer = setTimeout(() => {
      this.removeMessage()
    }, this.props.delay)
  }

  clearTimer = () => {
    clearTimeout(this.timer)
  }

  handleClose = (e) => {
    e.preventDefault()
    console.log('close!', this.closeBttn)
  }

  handleEnter = (e) => {
    e.preventDefault()
    this.clearTimer()
  }

  handleLeave = (e) => {
    e.preventDefault()
    this.startTimer()
  }

  renderMessage = () => {
    return (
      <ProtoToastMessage
        {...this.state.currentMsg}
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
      />
    );
  }

  render() {
    if (!this.state.isReady) {
      return null
    }
    return (
      <StyledToastContainer>
        {!this.state.unMount &&
          <AnimationWrapper direction={this.state.isOpen ? null : 'out' }>
            { this.renderMessage() }
          </AnimationWrapper>
        }
      </StyledToastContainer>
    )
  }
};

ToastMessage.Success = (props) => (
  <ProtoToastMessage {...props} variant={'success'} />
)

ToastMessage.Failure = (props) => (
  <ProtoToastMessage {...props} variant={'failure'} />
)

ToastMessage.Processing = (props) => (
  <ProtoToastMessage {...props} variant={'processing'} />
)

ToastMessage.Provider = ToastProvider;

StyledToastMessage.defaultProps = {
  display: 'flex',
  flexDirection: 'row nowrap',
  alignItems: 'center',
  py: 0,
}

ToastMessage.defaultProps = {
  message:'Generic Message',
  secondaryMessage: '',
  actionText: 'Action',
  icon: false
}

ToastMessage.displayName = 'ToastMessage'

export default ToastMessage;
