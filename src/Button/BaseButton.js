import React from 'react';
import styled from 'styled-components';
import {
  color,
  space,
  minWidth,
  borders,
  boxShadow,
  fontSize,
  fontFamily,
  fontWeight,
  buttonStyle,
  variant,
  style,
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

const StyledButton = styled(Box)`
  ${mainColor}
  ${contrastColor}

  & {
    -webkit-font-smoothing: antialiased;
    appearance: none;
    user-select: none;
    white-space: nowrap;
    text-decoration: none;
    text-align: center;
    overflow: hidden;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: ${props => (props.icononly ? '0' : props.p)};
  }

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  ${'' /* with icon styles */}
  > svg,
  > span.button-text {
    position: relative;
    z-index: 1;
    user-select: none;
    pointer-events: none;
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
  ${borders}
  ${boxShadow}

  ${fontSize}
  ${fontFamily}
  ${fontWeight}

  ${buttonStyle}
  ${buttonSize}
`;

const ButtonBody = ({ children, icon, iconpos }) => {
  if (icon) {
    return (
      <React.Fragment>
        {icon && !iconpos && <Icon name={icon} />}
        {icon && iconpos == 'left' && <Icon name={icon} />}
        {children && <span className="button-text" children={children} />}
        {icon && iconpos == 'right' && <Icon name={icon} />}
      </React.Fragment>
    );
  } else {
    return <span className="button-text" children={children} />;
  }
};

const Button = React.forwardRef(({ children, icon, ...props }, ref) => {
  return (
    <StyledButton {...props} ref={ref}>
      {children}
    </StyledButton>
  );
});

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
  border: 'none',
  // borderColor: 'none',
  // borderRadius: 1,
};

Button.displayName = 'Button';

export { StyledButton, ButtonBody };

export default Button;
