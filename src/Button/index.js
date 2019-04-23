import React from 'react';
import styled from 'styled-components';
import {
  color,
  space,
  minWidth,
  fontSize,
  fontFamily,
  fontWeight,
  buttonStyle,
  variant,
  themeGet,
} from 'styled-system';

import defaultTheme from '../theme';
import Box from '../Box';
import Icon from '../Icon';

const buttonSize = variant({
  prop: 'size',
  key: 'buttonSizes',
});

// const fullWidth = props => (props.fullWidth ? { width: '100%' } : null);

const StyledButton = styled(Box)`
  & {
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-decoration: none;
    text-align: center;
    line-height: 1;
    position: relative;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: ${props => (props.icononly ? '0' : props.p)};
  }
  &&:hover {
    text-decoration: inherit;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
  &:active {
    box-shadow: none;
  }
  &:disabled {
    opacity: ${props => themeGet('opacity.disabled', '0.5')};
    cursor: not-allowed;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    height: 100%;
    width: 100%;
    background: none;
    transition: background .15s ease;
  }

  &&:hover::before {
    background: RGBA(255,255,255, 0.1);
  }

  &&:active::before {
    background: RGBA(0,0,0, 0.1);
  }

  > svg,
  > span.button-text {
    position: relative;
    z-index: 1;
  }

  > svg {
    display: block;
  }
  > svg:first-child {
    margin-left: -0.5rem;
    margin-right: .5rem;
  }
  > svg:last-child {
    margin-left: .5rem;
    margin-right: -0.5rem;
  }
  > svg:first-child:last-child {
    margin: 0;
  }

  ${color}
  ${space}
  ${minWidth}

  ${fontSize}
  ${fontFamily}
  ${fontWeight}

  ${buttonStyle}
  ${buttonSize}

  ${'' /* ${boxShadow} */}
  ${'' /* ${opacity} */}

  ${'' /* ${fullWidth} */}
`;

const Button = ({ className, children, ...props }) => {
  if (props.icon) {
    return (
      <StyledButton as="button" type="button" className={className} {...props}>
        {props.icon && !props.iconpos && <Icon name={props.icon} />}
        {props.icon && props.iconpos === 'left' && <Icon name={props.icon} />}
        {children && <span className="button-text">{children}</span>}
        {props.icon && props.iconpos === 'right' && <Icon name={props.icon} />}
      </StyledButton>
    );
  }
  return (
    <StyledButton as="button" type="button" className={className} {...props}>
      <span className="button-text">{children}</span>
    </StyledButton>
  );
};

Button.defaultProps = {
  theme: defaultTheme,
  variant: 'primary',
  size: 'medium',
  m: 0,
  px: 4,
  py: 0,
  fontSize: 'inherit',
  fontFamily: 'sansSerif',
  fontWeight: 3,

  position: 'relative',
  // color: 'white',
  // bg: 'primary',
  // height: '48px',
  border: 0,
  borderColor: 'none',
  borderRadius: 1,
  boxShadow: 1,
};

Button.displayName = 'Button';

export default Button;
