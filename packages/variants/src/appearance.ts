import { variant } from './variant';

export type BrandProp = 'primary' | 'secondary';
export type StateProp = 'success' | 'message' | 'warning' | 'danger';
export type AppearanceProp = BrandProp | StateProp;

export const appearanceVariants = variant({
  prop: 'appearance',
  variants: {
    // Brand Variants
    primary: {
      color: 'white',
      backgroundColor: 'teal',
    },
    secondary: {
      color: 'white',
      backgroundColor: 'purple',
    },

    // State Variants
    success: {
      color: 'white',
      backgroundColor: 'red',
    },
    message: {
      color: 'white',
      backgroundColor: 'blue',
    },
    warning: {
      color: 'white',
      backgroundColor: 'yellow',
    },
    danger: {
      color: 'white',
      backgroundColor: 'red',
    },
  },
});

// We create a separate variant prop for SVGs
// to set the fill attribute alone - since BG stacks
export const appearanceFillVariants = variant({
  prop: 'appearanceFill',
  variants: {
    // Brand Variants
    primary: {
      fill: 'teal',
    },
    secondary: {
      fill: 'purple',
    },

    // State Variants
    success: {
      fill: 'green',
    },
    message: {
      fill: 'blue',
    },
    warning: {
      fill: 'yellow',
    },
    danger: {
      fill: 'red',
    },
  },
});

// Similar to the variants above, but we target
// the color instead of fill to support stroked SVG
// As well as things like colored text
export const appearanceColorVariants = variant({
  prop: 'appearanceColor',
  variants: {
    // Brand Variants
    primary: {
      color: 'teal',
    },
    secondary: {
      color: 'purple',
    },

    // State Variants
    success: {
      color: 'green',
    },
    message: {
      color: 'blue',
    },
    warning: {
      color: 'yellow',
    },
    danger: {
      color: 'red',
    },
  },
});
