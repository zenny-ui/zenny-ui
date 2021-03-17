import React from "react";
// Ignore because SC type pkg is broken for now
// @ts-ignore
import styled from "styled-components";
import {
  compose,
  typography,
  space,
  layout,
  SpaceProps,
  ColorProps,
} from "styled-system";
import { color, spacing, position, PositionProps } from "@zenny-ui/utilities"

export type Assign<T, U> = {
  [P in keyof (T & U)]: P extends keyof T
    ? T[P]
    : P extends keyof U
    ? U[P]
    : never;
};

export interface BoxOwnProps extends PositionProps {
  as?: React.ElementType;
  variant?: string;
}
export interface BoxProps
  extends Assign<React.ComponentProps<"div">, BoxOwnProps> {}

export const Box = styled("div").withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
      !['width', 'color'].includes(prop)
      && defaultValidatorFn(prop),
})<BoxProps>(
  {
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
  },
  compose(typography),
  color,
  spacing,
  position
);
