import React, { Component } from 'react';
import styled from 'styled-components'
import { tint } from 'polished'

import Icon from 'rmdi/lib/Icon'

import theme from '../theme'
import Button from '../Button'

const StyledButton = styled(Button)`
  & {
    padding: 0;
    ${'' /* position: relative; */}
    ${'' /* padding: 0 8px; */}
    ${'' /* min-width: 48px; */}
    min-width: 3rem;

    display: inline-flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }

  svg {
    margin: 0 1rem;
  }
  svg:first-child:last-child {
    margin: 0;
  }

  ${'' /* svg:not(:only-child) {
    margin: 0 8px;
  }

  span {
    margin: 0 8px;
  }
  span + svg {
    // background: red;
    // margin-right: 48px;
  }
  svg + span {
    // background: green;
    // margin-left: 48px;
  } */}
`

class IconButton extends Component {


  render() {
    return (
      <div>

        <StyledButton>
          { this.props.icon && <Icon name={this.props.icon} /> }
          { this.props.children }
        </StyledButton>

      </div>
    );
  }

}

export default IconButton;
