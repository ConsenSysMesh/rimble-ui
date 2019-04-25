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
  style,
  themeGet,
} from 'styled-system';

import defaultTheme from '../theme';
import Box from '../Box';
import Icon from '../Icon';

const buttonSize = variant({
  prop: 'size',
  key: 'buttonSizes',
});

const mainColor = style({
  prop: 'mainColor',
  cssProperty: '--main-color',
  key: 'colors',
});

const contrastColor = style({
  prop: 'contrastColor',
  cssProperty: '--contrast-color',
  key: 'colors',
});

// const fullWidth = props => (props.fullWidth ? { width: '100%' } : null);

const StyledButton = styled(Box)`
  ${mainColor}
  ${contrastColor}

  & {
    -webkit-font-smoothing: antialiased;
    appearance: none;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-decoration: none;
    text-align: center;

    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: ${props => (props.icononly ? '0' : props.p)};
  }

  ${'' /* with icon styles */}
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

  ${'' /* styled system props */}
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
      <StyledButton type="button" className={className} {...props}>
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
  // base props
  theme: defaultTheme,
  as: 'button',
  // variant: 'primary',
  size: 'medium',
  m: 0,
  px: 4,
  py: 0,
  fontSize: 'inherit',
  fontFamily: 'sansSerif',
  fontWeight: 3,
  // color props

  color: 'white',
  bg: 'silver',

  mainColor: 'primary',
  contrastColor: 'white',

  // height: '48px',

  border: 'none',
  // borderColor: 'none',
  // borderRadius: 1,
};

Button.displayName = 'Button';

export default Button;
