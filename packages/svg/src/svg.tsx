import * as React from "react";
// Ignore because SC type pkg is broken for now
// @ts-ignore
import styled from "styled-components";
import {
  AppearanceProp,
  appearanceFillVariants,
  appearanceColorVariants,
} from "zenny-ui-variants";
import { Box, Assign, BoxOwnProps } from "zenny-ui-box";

export interface SVGProps
  extends Assign<React.ComponentPropsWithRef<"svg">, BoxOwnProps> {
  appearanceFill: AppearanceProp;
  appearanceColor: AppearanceProp;
}

export interface SVGSizeProps {
  as: React.ReactNode;
  width?: string;
  height?: string;
}

export const SVG = styled(Box).attrs(
  ({ as: Component, width, height }: SVGSizeProps) => ({
    // Define props on top of Box
    // Set underlying element as svg
    // Or custom component (like react-icons)
    as: Component ?? "svg",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: width ?? "24px",
    height: height ?? "24px",
  })
)<SVGProps>(appearanceFillVariants, appearanceColorVariants);
