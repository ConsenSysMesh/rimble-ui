import React from "react";
import styled from "styled-components";
import { tint, shade } from "polished";
import { themeGet } from "styled-system";

import Text from "../Text";

import defaultTheme from '../theme'

const Link = styled(Text).attrs({
  primarycolor: props => themeGet("colors.primary", "black")(props)
})`
  & {
    text-decoration: none;
  }
  &:hover {
    color: ${props => tint(0.2, props.primarycolor)};
    text-decoration: underline;
  }
  &:active {
    color: ${props => shade(0.2, props.primarycolor)};
    text-decoration: none;
  }
`;

Link.defaultProps = {
  as: "a",
  theme: defaultTheme,
  color: "primary",
  fontSize: 1,
  fontWeight: 3
};

Link.displayName = "Link";

export default Link;
