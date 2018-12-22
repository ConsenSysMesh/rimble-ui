import React from 'react';
import styled from 'styled-components'

import Box from '../Box'
import Icon from '../Icon'
import Text from '../Text'
import TextButton from '../TextButton'

const getColors = (props) => {
  switch (props.variant) {
    case 'success':
      return `
        color: #3F3D4B;
        background-color: #DFF6EC;
        svg {fill: #28C081}
      `;
      break;
    case 'warning':
      return `
        color: #3F3D4B;
        background-color: #FEF2E4;
        svg {fill: #FD9D28}
      `;
      break;
    case 'danger':
      return`
        color: #3F3D4B;
        background-color: #FBEAE7;
        svg {fill: #DC2C10}
      `;
      break;
    case 'info':
      return`
        color: #3F3D4B;
        background-color: #E3F3FA;
        svg {fill: #41AFDE}
      `;
      break;
    default:
      return`
        color: #3F3D4B;
        background-color: #F0F0F0;
        svg {fill: #999999}
      `;
  }
}

const StyledToastMessage = styled(Box)`
  & {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

  }
  &:hover {

  }

  ${getColors}
`

const ToastMessage = ({className, ...props}) => (
  <StyledToastMessage className={className} {...props}>
    <Icon name={'CheckCircle'} ml={3} flex={'0 0'}/>
    <Text fontSize={2} flex={'1 0'} mx={3}>
      {props.children}
    </Text>
    <TextButton flex={'0 0'} color={'#3F3D4B'}>
      Action
    </TextButton>
    <TextButton icononly>
      <Icon name={'Close'} size={'16px'} color={'black'} flex={'0 0'} />
    </TextButton>
  </StyledToastMessage>
);

ToastMessage.defaultProps = {
  display: 'flex',
  flexDirection: 'row nowrap',
  alignItems: 'center',
  borderRadius: 1,
  py: 3,
  height: '3rem',
  maxWidth: 6,

}

ToastMessage.displayName = 'ToastMessage'

export default ToastMessage;
