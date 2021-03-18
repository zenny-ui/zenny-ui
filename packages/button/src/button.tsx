import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@zenny-ui/box';
import {
  SizeProp,
  sizeVariants,
  AppearanceProp,
  appearanceVariants,
} from '@zenny-ui/variants';

export type ButtonProps = React.ComponentPropsWithRef<'button'> &
  BoxProps & {
    size?: SizeProp;
    appearance?: AppearanceProp;
  };

export const Button = styled(Box).attrs(() => ({
  // Define props on top of Box
  // Set underlying element as button
  as: 'button',
}))<ButtonProps>(
  {
    appearance: 'none',
    fontFamily: 'inherit',
    backgroundColor: 'teal',
  },
  sizeVariants,
  appearanceVariants,
);
