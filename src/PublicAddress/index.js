import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components'

import {
  space,
  width
} from 'styled-system'

import Button from '../Button'
import Input from '../Input'
import Field from '../Field'

import theme from '../theme'

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const fadeOut = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const StyledPublicAddress = styled(Input)`
  text-overflow: ellipsis;
  white-space: nowrap;
`

const StyledButton = styled(Button)`
  & {
    position: relative;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.-is-copied::before {
    content: '';
    position: absolute;

    width: 100%;
    height: 100%;
    background: inherit;
    opacity: 1;

    animation-name: ${fadeOut};
    animation-duration: 100ms;
    animation-timing-function: linear;
  }

  &::after {
    opacity: 0;
    content: 'Copied!';
    position: absolute;
    width: 100%;
    background: inherit;
  }

  &.-is-copied::after {
    opacity: 1;
    animation-name: ${slideIn};
    animation-duration: 1000ms;
    animation-timing-function: ease;
  }
`


const StyledWrapper = styled.div`
  ${space}
  ${width}

  & {
    position: relative;
  }

  > input {
    width: 100%;
    padding-right: 5rem;
  }

  > button {
    position: absolute;
    margin: auto;
    right: .75rem;
    top: 0;
    bottom: 0;
  }
`

class PublicAddress extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef()
    this.buttonRef = React.createRef()
  }
  handleClick = (e) => {
    e.preventDefault()
    this.inputRef.current.select()
    document.execCommand('copy')
    this.buttonRef.current.classList.add('-is-copied')
  }

  render() {
    return (
      <Field label="Public Address" width={'100%'}>
        <StyledWrapper mt={2} w={'100%'}>
          <StyledPublicAddress readOnly value={this.props.address} ref={this.inputRef} />
          <StyledButton size='small' px={3} onClick={this.handleClick} ref={this.buttonRef} >
            Copy
          </StyledButton>
        </StyledWrapper>
      </Field>
    );
  }

}

export default PublicAddress;
