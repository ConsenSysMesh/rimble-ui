import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { timingFunctions, ellipsis } from 'polished';

import Box from '../Box';
import Icon from '../Icon';
import Text from '../Text';
import Link from '../Link';
import Button from '../Button';

import AnimatedIconProcessing from './AnimatedIconProcessing.js';
import IconPositive from './IconPositive';
import IconNegative from './IconNegative';

const animInKeyframes = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
`;

const animOutKeyframes = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(120%);
  }
`;

const animOutKeyframesDesktop = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }

  to {
    opacity: 0;
    transform: translateX(120%);
  }
`;

const AnimationWrapper = styled.div`
  & {
    animation-name: ${props =>
      props.direction ? animOutKeyframes : animInKeyframes};
    animation-duration: ${props => (props.direction ? '500ms' : '300ms')};
    animation-timing-function: ${props =>
      props.direction ? timingFunctions('easeOutSine') : 'ease'};
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
  }
  @media screen and (min-width: 420px) {
    animation-name: ${props =>
      props.direction ? animOutKeyframesDesktop : animInKeyframes};
  }
`;

const StyledToastContainer = styled.div`
  & {
    display: block;
    position: fixed;
    z-index: 9999;
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
`;

const StyledTextCell = styled(Box)`
  & {
    ${ellipsis()}
    text-align: left;
  }
`;

const StyledToastMessage = styled(Box)`
  & {
    pointer-events: all;
    user-select: none;
    overflow: hidden;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    height: 80px;
    padding: 0 1rem;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.15s ease;
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

  > ${StyledTextCell} > div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: normal;
  }

  @media screen and (max-width: 420px) {
    border-color: transparent;
  }

  @media screen and (min-width: 420px) {
    & {
      border-radius: 4px;
      padding: ${props => (props.closeElem ? '0 0 0 1rem' : '0 1rem')};
    }

    > .iconBox {
      display: block;
    }

    > .closeBttn {
      display: flex;
      align-self: flex-start;
    }
  }
`;

const ToastMessage = React.forwardRef(({ className, ...props }, ref) => {
  const themeIsDark = props.colorTheme === 'dark' ? true : false;

  const renderVariantSvg = variant => {
    switch (variant) {
      case 'processing':
        return <AnimatedIconProcessing width={'32px'} height={'32px'} />;
        break;
      case 'success':
        return <IconPositive width={'32px'} height={'32px'} />;
        break;
      case 'failure':
        return <IconNegative width={'32px'} height={'32px'} />;
        break;
      default:
        return '';
    }
  };

  const renderFigure = ({ variant, icon }) => {
    if (variant && variant !== 'default') {
      return (
        <Box className={'iconBox'} flex={'0 0'} mr={2}>
          {renderVariantSvg(variant)}
        </Box>
      );
    } else if (icon && icon.length) {
      return (
        <Box className={'iconBox'} flex={'0 0'} mr={2}>
          <Icon
            name={icon}
            color={!themeIsDark ? 'primary' : 'white'}
            size={'32px'}
          />
        </Box>
      );
    } else {
      return null;
    }
  };

  const renderCloseBttn = ({ closeElem, closeFunction }) => {
    if (closeElem) {
      return (
        <Button.Text
          onClick={closeFunction}
          className={'closeBttn'}
          size={'small'}
          icononly
        >
          <Icon
            name={'Close'}
            size={'16px'}
            color={!themeIsDark ? '#666' : '#afafaf'}
          />
        </Button.Text>
      );
    } else {
      return null;
    }
  };

  return (
    <StyledToastMessage
      className={className}
      bg={!themeIsDark ? 'white' : 'near-black'}
      border={1}
      borderColor={!themeIsDark ? '#D6D6D6' : 'transparent'}
      ref={ref}
      {...props}
    >
      {renderFigure(props)}
      <StyledTextCell flex={'1 1 auto'} mx={2}>
        {props.message && (
          <Text
            fontSize={1}
            fontWeight={3}
            color={!themeIsDark ? 'black' : 'white'}
          >
            {props.message}
          </Text>
        )}
        {props.secondaryMessage && (
          <Text fontSize={1} color={!themeIsDark ? '#666' : '#afafaf'}>
            {props.secondaryMessage}
          </Text>
        )}
      </StyledTextCell>
      <Text flex={'0 1'} mr={2} textAlign={'right'} lineHeight={'18px'}>
        {props.actionText && props.actionHref && (
          <Link
            href={props.actionHref}
            target={'_blank'}
            color={!themeIsDark ? 'primary' : '#9387FF'}
          >
            {props.actionText}
          </Link>
        )}
      </Text>
      {renderCloseBttn(props)}
    </StyledToastMessage>
  );
});

class ProtoToastMessage extends Component {
  constructor(props) {
    super(props);
  }

  static displayName = 'Proto Toast Message';

  static defaultProps = {
    message: 'Message text… ',
    secondaryMessage: '',
    actionHref: '',
    actionText: '',
    variant: '',
    icon: '',
    colorTheme: 'dark',
    closeElem: true,
  };

  handleClose = e => {
    e.preventDefault();
  };

  render() {
    const {
      message,
      secondaryMessage,
      actionHref,
      actionText,
      variant,
      icon,
    } = this.props;
    return (
      <ToastMessage
        message={message}
        secondaryMessage={secondaryMessage}
        actionHref={actionHref}
        actionText={actionText}
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
      currentMsg: this.props.messageData,
    };
    this.timer = {};
  }

  static displayName = 'Toast Message Provider';

  static defaultProps = {
    messageData: {
      message: '[…Placeholder Message…]',
      secondaryMessage: '',
      actionHref: '',
      actionText: '',
      icon: '',
      variant: 'default',
    },
    delay: 3000,
  };

  componentDidMount() {
    this.setState((state, props) => ({
      isReady: true,
    }));

    window.onfocus = () => {
      this.startTimer();
    };
    window.onblur = () => {
      this.clearTimer();
    };
  }

  componentWillUnmount() {
    window.onfocus = null;
    window.onblur = null;
  }

  addMessage = (msg, data) => {
    if (!msg) {
      return false;
    }

    this.setState(
      () => ({
        isOpen: false,
      }),
      () => {
        setTimeout(() => {
          this.setState(
            () => ({
              isOpen: true,
              unMount: false,
              currentMsg: {
                message: msg,
                ...data,
              },
            }),
            () => {
              this.startTimer();
            }
          );
        }, 500);
      }
    );
  };

  removeMessage = () => {
    if (!this.state.isOpen) {
      return null;
    }
    this.clearTimer();
    this.setState((state, props) => ({
      isOpen: false,
    }));
  };

  startTimer = () => {
    if (!document.hasFocus()) {
      return null;
    }
    this.clearTimer();
    this.timer = setTimeout(() => {
      this.removeMessage();
    }, this.props.delay);
  };

  clearTimer = () => {
    clearTimeout(this.timer);
  };

  handleClose = e => {
    e.preventDefault();
  };

  handleEnter = e => {
    e.preventDefault();
    this.clearTimer();
  };

  handleLeave = e => {
    e.preventDefault();
    this.startTimer();
  };

  renderMessage = () => {
    return (
      <ProtoToastMessage
        {...this.state.currentMsg}
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
        closeFunction={this.removeMessage}
      />
    );
  };

  render() {
    if (!this.state.isReady) {
      return null;
    }
    return (
      <StyledToastContainer>
        {!this.state.unMount && (
          <AnimationWrapper direction={this.state.isOpen ? null : 'out'}>
            {this.renderMessage()}
          </AnimationWrapper>
        )}
      </StyledToastContainer>
    );
  }
}

ToastMessage.Success = React.forwardRef((props, ref) => (
  <ToastMessage ref={ref} {...props} variant={'success'} />
));

ToastMessage.Failure = React.forwardRef((props, ref) => (
  <ToastMessage ref={ref} {...props} variant={'failure'} />
));

ToastMessage.Processing = React.forwardRef((props, ref) => (
  <ToastMessage ref={ref} {...props} variant={'processing'} />
));

ToastMessage.Provider = ToastProvider;

ToastMessage.defaultProps = {
  message: 'Write update here [Required]',
  secondaryMessage: '',
  actionHref: '',
  actionText: '',
  variant: 'default',
  icon: '',
  colorTheme: 'light',
  closeElem: false,
};

ToastMessage.propTypes = {
  /**
   * Sets primary message text
   */
  message: PropTypes.string,
  /**
   * Sets secondary message text
   */
  secondaryMessage: PropTypes.string,
  /**
   * Sets URL for button
   */
  actionHref: PropTypes.string,
  /**
   * Sets text for button
   */
  actionText: PropTypes.string,
  /**
   * Sets type of ToastMessage to display
   */
  variant: PropTypes.oneOf(['default', 'success', 'failure', 'processing']),
  /**
   * Sets icon to display
   */
  icon: PropTypes.string,
  /**
   * Sets background and text color
   */
  colorTheme: PropTypes.oneOf(['light', 'dark']),
  /**
   * Allows ToastMessage to be closed by user
   */
  closeElem: PropTypes.bool,
};

ToastMessage.displayName = 'ToastMessage';

export default ToastMessage;
