import * as React from 'react';
// Ignore because SC type pkg is broken for now
// @ts-ignore
import styled from 'styled-components';
import {
  AppearanceProp,
  appearanceFillVariants,
  appearanceColorVariants,
} from '@zenny-ui/variants';
import { Box, Assign, BoxOwnProps } from '@zenny-ui/box';

export interface SVGProps
  extends Assign<React.ComponentProps<'svg'>, BoxOwnProps> {
  appearanceFill: AppearanceProp;
  appearanceColor: AppearanceProp;
}

export const SVG = styled(Box).attrs(
  ({ as: Component, width, height, viewBox }: SVGProps) => ({
    // Define props on top of Box
    // Set underlying element as svg
    // Or custom component (like react-icons)
    as: Component ?? 'svg',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: viewBox ?? '0 0 24 24',
    width: width ?? '24px',
    height: height ?? '24px',
  }),
)<SVGProps>(appearanceFillVariants, appearanceColorVariants);