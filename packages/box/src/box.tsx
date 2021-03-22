import React from 'react';
// Ignore because SC type pkg is broken for now
// @ts-ignore
import styled from 'styled-components';
import {
  layout,
  background,
  color,
  spacing,
  position,
  LayoutProps,
  BackgroundProps,
  ColorProps,
  SpacingProps,
  PositionProps,
} from '@zenny-ui/utilities';

export type BoxProps = React.ComponentProps<'div'> &
  LayoutProps &
  BackgroundProps &
  ColorProps &
  SpacingProps &
  PositionProps & {
    as?: React.ElementType | any;
    variant?: string;
  };

export const Box = styled('div').withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['width', 'color'].includes(prop) && defaultValidatorFn(prop),
})<BoxProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  layout,
  background,
  color,
  spacing,
  position,
);
