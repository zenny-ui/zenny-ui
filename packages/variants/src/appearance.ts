import { variant } from "styled-system";

export type BrandProp = "primary" | "secondary";
export type StateProp = "success" | "message" | "warning" | "danger";
export type AppearanceProp = BrandProp | StateProp;

export const appearanceVariants = variant({
  prop: "appearance",
  variants: {
    primary: {
      color: "white",
      bg: "green",
      fill: "green",
    },
    secondary: {
      color: "white",
      fill: "green",
      bg: "orange",
    },
  },
});

// Similar to the variants above, but we target
// the stroke instead of fill to support stroked SVG
export const appearanceStrokeVariants = variant({
  prop: "strokeColor",
  variants: {
    primary: {
      fill: "none",
      stroke: "green",
    },
    secondary: {
      fill: "none",
      stroke: "orange",
    },
  },
});
