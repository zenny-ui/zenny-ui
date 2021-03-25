---
title: Variants
---

Variants are "groups" of styles, similar to CSS classes, that can be applied to components using certain props.

For example, the `appearance` prop is used to convey common status conditions, such as a green color for success - or a red color for error.

```jsx
<Button appearance="success">File ready, download now</Button>
```

Variants will often be shared across components, so you'll see the same prop name (like `appearance`) used in multiple components. Always check each components prop table to verify what you can use.

## How to Use

### Extending or Overriding Variants

Variants can be extended or overriden using a theme provider and a theme with your new variant configuration inside.

```jsx
// Turns the `success` appearance variant from the default green to red
const newVariantTheme = {
  variants: {
    appearance: {
      success: {
        color: 'white',
        backgroundColor: 'red',
      },
    }
  }
}

<ThemeProvider theme={newVariantTheme}>
  <Button appearance="success">
```

## Available Variants

### Appearance

### Size
