import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { buttonStyle, variant, style } from 'styled-system';
import { COMMON, LAYOUT, POSITION, BORDERS, TYPOGRAPHY } from '../constants';
import theme from '../theme';
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

const StyledButton = styled('button')`
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

  ${COMMON}
  ${LAYOUT}
  ${POSITION}
  ${BORDERS}
  ${TYPOGRAPHY}

  ${mainColor}
  ${contrastColor}
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

const Button = React.forwardRef((props, ref) => (
  <StyledButton {...props} ref={ref} />
));

Button.defaultProps = {
  // base props
  theme,
  // variant: 'primary',
  // size: 'medium',
  height: '3rem',
  minWidth: '3rem',
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
};

Button.propTypes = {
  ...COMMON.propTypes,
  ...LAYOUT.propTypes,
  ...POSITION.propTypes,
  ...BORDERS.propTypes,
  ...TYPOGRAPHY.propTypes,
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
   * Sets icon of button
   */
  icon: PropTypes.string,
};

Button.displayName = 'Button';

export { StyledButton, ButtonBody };

export default Button;
