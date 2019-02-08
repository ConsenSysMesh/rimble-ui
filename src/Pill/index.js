import React, { Component } from "react";
import styled from "styled-components";
import { themeGet } from "styled-system";
import { tint } from "polished";

import Box from "../Box";

const Pill = styled(Box).attrs({
  tintLevel: props => (props.selected ? "0.75" : "0.88")
})`
  & {
    cursor: pointer;
    border: ${props => (props.selected ? "1px solid" : "none")};
    border-color: ${props => (props.selected ? props.color : "none")};
    background-color: ${props =>
      tint(
        props.tintLevel,
        themeGet("colors." + props.color, props.color)(props)
      )};
  }
  &:hover {
    border-color: transparent;
    background-color: ${props =>
      tint(0.8, themeGet("colors." + props.color, props.color)(props))};
  }
`;

Pill.defaultProps = {
  color: "dark-gray",
  px: 3,
  py: 1,
  fontSize: 1,
  height: 2,
  lineHeight: "solid",
  borderRadius: 3,
  display: "inline-flex",
  alignItems: "center",
  selected: false
};

Pill.displayName = "Pill";

export default Pill;
