import { variant } from "styled-system";

export enum AppearanceProp {
  // Brand styles
  PRIMARY = "primary",
  SECONDARY = "secondary",
  // State / Status styles
  SUCCESS = "success",
  MESSAGE = "message",
  WARNING = "warning",
  DANGER = "danger",
}

export const appearanceVariants = variant({
  prop: "appearance",
  variants: {
    [AppearanceProp.PRIMARY]: {
      color: "white",
      bg: "green",
      fill: "green",
    },
    [AppearanceProp.SECONDARY]: {
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
    [AppearanceProp.PRIMARY]: {
      fill: "none",
      stroke: "green",
    },
    [AppearanceProp.SECONDARY]: {
      fill: "none",
      stroke: "orange",
    },
  },
});
