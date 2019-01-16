import React from 'react';
import styled from 'styled-components'

import Box from '../Box'
import Icon from '../Icon'
import Text from '../Text'
import TextButton from '../TextButton'

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
    // case 'warning':
    //   return `
    //     color: #3F3D4B;
    //     background-color: #FEF2E4;
    //     // svg {fill: #FD9D28}
    //   `;
    //   break;
    // case 'danger':
    //   return`
    //     color: #3F3D4B;
    //     background-color: #FBEAE7;
    //     // svg {fill: #DC2C10}
    //   `;
    //   break;
    // case 'info':
    //   return`
    //     color: #3F3D4B;
    //     background-color: #E3F3FA;
    //     // svg {fill: #41AFDE}
    //   `;
    //   break;
    default:
      return`
        color: #000;
        background-color: #FFF;
        // svg {fill: #999999}
      `;
  }
}

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

class ToastContainer extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.closeBttn = React.createRef();
  }

  handleClose = (e) => {
    e.preventDefault();
    e.currentTarget.remove()
    console.log('close!', e.target);
  }

  handleAction = (e) => {
    e.preventDefault();
    console.log('action!');
  }

  render() {
    return (
      <StyledToastContainer p={3}>


        <ToastMessage
          onClick={this.handleClose}
          mt={2}
          message={'primary message'}
          secondaryMessage={'secondary message'}
          icon={'InfoOutline'}

         />
      </StyledToastContainer>
    )
  }
};

ToastMessage.Container = ToastContainer;

ToastMessage.defaultProps = {
  display: 'flex',
  flexDirection: 'row nowrap',
  alignItems: 'center',
  borderRadius: 1,
  py: 0,
  pl: 3,
  height: '3rem',
  maxWidth: 6,
  message:'Generic Message',
  secondaryMessage: '',
  actionText: 'Action',
  icon: false
}

ToastMessage.displayName = 'ToastMessage'

export default ToastMessage;
