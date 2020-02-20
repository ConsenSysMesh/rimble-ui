import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { buttonStyle, variant, style } from 'styled-system';
import { StyledBox } from '../Box';
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

const StyledButton = styled(StyledBox)`
  & {
    -webkit-font-smoothing: antialiased;
    appearance: none;
    user-select: none;
    white-space: nowrap;
    text-decoration: none;
    text-align: center;
    overflow: hidden;
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

  > span.button-text {
    display: inline-flex;
  }

  ${'' /* with icon styles */}
  > div > svg,
  > span.button-text {
    position: relative;
    z-index: 1;
    user-select: none;
    pointer-events: none;
  }

  > div > svg {
    display: block;
  }
  > div:first-child > svg {
    margin-left: -0.5rem;
    margin-right: .5rem;
  }
  > div:last-child > svg {
    margin-left: .5rem;
    margin-right: -0.5rem;
  }
  > div:first-child:last-child > svg {
    margin: 0;
  }

  ${mainColor}
  ${contrastColor}
  ${buttonStyle}
  ${buttonSize}
`;

StyledButton.defaultProps = {
  as: 'button',
};

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

const Button = React.forwardRef((props, ref) => {
  return <StyledButton {...props} ref={ref} />;
});

Button.defaultProps = {
  // base props
  position: 'relative',
  height: '3rem',
  minWidth: '3rem',
  px: 4,
  py: 0,
  fontSize: 'inherit',
  fontFamily: 'sansSerif',
  fontWeight: 3,
  lineHeight: 1,
  // color props
  color: 'white',
  bg: 'silver',
  mainColor: 'primary',
  contrastColor: 'white',
  border: 'none',
};

Button.propTypes = {
  /**
   * Sets theme
   */
  theme: PropTypes.object,
  /**
   * Sets background color of button
   */
  mainColor: PropTypes.string,
  /**
   * Sets text color of button
   */
  contrastColor: PropTypes.string,
  /**
   * Sets font and spacing size of button
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Sets icon of button
   */
  icon: PropTypes.string,
  /**
   * Sets icon position on button
   */
  iconpos: PropTypes.oneOf(['left', 'right']),
  /**
   * Sets padding on button with icon and no text
   */
  icononly: PropTypes.bool,
};

Button.displayName = 'Button';

export { StyledButton, ButtonBody };

export default Button;
