import { variant } from "./variant";

export type SizeProp = "xs" | "small" | "medium" | "large" | "xl";

export const sizeVariants = variant({
  prop: "size",
  variants: {
    xs: {
      fontSize: "0.75em",
    },
    small: {
      fontSize: "0.9em",
    },
    medium: {
      fontSize: "1em",
    },
    large: {
      fontSize: "1.2em",
    },
    xl: {
      fontSize: "1.5em",
    },
  },
});
