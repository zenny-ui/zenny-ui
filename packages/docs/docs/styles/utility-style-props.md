---
title: Utility Style Props
---

Utility style props are React props that you can pass **theme tokens** or **CSS properties** to. They provide a flexible, fast, and extendable interface for styling components. There are utility style props for most major CSS properties, from `width` to `flex` to `backgroundImage`, and even include shorthand properties (such as `pt` for `paddingTop`).

```jsx
<Box width="50%" height="200px" p={2} mb={4}>
```

## How it works

### Theme Tokens

### CSS Properties

### Responsive Styles

### Creating your own custom component

If extending one of our base components (like `<Box>` or `<Text>`) isn't sufficient, you can compose your own component with utility style props. The props are created using an internal library called `@zenny-ui/utilities`.

```jsx
import React from 'react';
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

// Typescript types
export type BoxProps = React.ComponentProps<'div'> &
  LayoutProps &
  BackgroundProps &
  ColorProps &
  SpacingProps &
  PositionProps & {
    as?: React.ElementType | any;
    // Any additional props you may want here
    // like a `isDisabled` prop
  };

export const Box = styled('div').withConfig({
  // This removes any utility props that "leak" to DOM
  // because they may match a real HTML element's attribute
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['width', 'color'].includes(prop) && defaultValidatorFn(prop),
})<BoxProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  // Include the utility style props
  layout,
  background,
  color,
  spacing,
  position,
);

```

## Available Props

### layout

### background

### color

### spacing

### position
