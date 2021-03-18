/**
 * Get a nested theme value using dot separator (1 level deep)
 * e.g. color="primary.100" -> theme.colors.primary['100']
 * Will always add a "s" to the propName to access the theme
 * @param propName - Prop to target (e.g. "color")
 * @param props - Component props
 * @param defaultValue - Fallback value
 */
export const getNestedThemeValue = (
  propName: string,
  props: {
    [key: string]: string | number;
  },
  defaultValue: string | number,
) => {
  // Take the user prop and split it if possible, or return array to loop over
  const splitProps =
    typeof props[propName] === 'string'
      ? // @ts-ignore
        props[propName].split('.')
      : [props[propName]];

  // Loop over array and walk through theme prop with each array item as a key
  // If we find nothing, return user's defaultValue
  let propValue = props.theme[`${propName}s`];
  splitProps.forEach(
    (prop: string) => (propValue = propValue ? propValue[prop] : undefined),
  );

  // Create object from names
  return {
    [propName]: propValue ?? defaultValue,
  };
};

export const t = getNestedThemeValue;

/**
 * Convert a value based on common transformations such as
 * converting integers into pixel values based on spacing scale
 * @param type - Type of conversion
 * @param prop - The prop value
 * @param theme - Theme object from props
 */
const parseValue = (type = 'none', prop: string | number, theme: any) => {
  switch (type) {
    case 'space':
      return Number.isInteger(prop) && theme.space[prop]
        ? `${theme.space[prop]}px`
        : prop;

    case 'none':
    default:
      return prop;
  }
};

/**
 * Generates responsive styles with CSS media queries based on array used in specifed prop.
 * Uses the breakpoints in the theme. First value in array corresponds to first breakpoint in theme.
 * @param propName The prop to get user input from (e.g. "width")
 * @param prop The prop value. Can be single value or array.
 * @param theme The theme from props
 * @param type The type of conversion for the props (e.g. number to pixels based on space scale in theme)
 */
export const getResponsiveThemeValue = (
  propName: string,
  prop: number | string | number[] | string[],
  theme: any,
  type: 'scale' | 'none' = 'none',
) => {
  let propValue;
  if (Array.isArray(prop)) {
    // @ts-ignore
    propValue = prop.reduce((styles: {}, value: string, index: number) => {
      if (value) {
        const breakpoint = `@media screen and (min-width: ${theme.breakpoints[index]})`;
        styles = {
          ...styles,
          [breakpoint]: {
            [propName]: parseValue(type, value, theme),
          },
        };
      }
      return styles;
    }, {});
  } else {
    propValue = {
      [propName]: parseValue(type, prop, theme),
    };
  }
  return propValue;
};
