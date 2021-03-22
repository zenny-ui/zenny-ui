const parseNestedProp = (
  propName: string,
  prop: any,
  theme: any,
  token?: string,
) => {
  // Take the user prop and split it if possible, or return array to loop over
  const splitProps =
    typeof prop === 'string'
      ? // @ts-ignore
        prop.split('.')
      : [prop];

  // Loop over array and walk through theme prop with each array item as a key
  // If we find nothing, return user's defaultValue
  let propValue = token ? theme[token] : theme[propName];
  splitProps.forEach(
    (prop: string) => (propValue = propValue ? propValue[prop] : undefined),
  );
  return propValue ?? prop;
};

/**
 * Get a nested theme value using dot separator (1 level deep)
 * e.g. color="primary.100" -> theme.colors.primary['100']
 * Will always add a "s" to the propName to access the theme unless token is provided
 * @param propName - Prop to target (e.g. "color")
 * @param props - Component props
 * @param defaultValue - Fallback value
 * @param token - Top level theme token to target (such as `colors` for `theme.colors`)
 */
export const getNestedThemeValue = (
  propName: string,
  props: {
    [key: string]: string | number;
  },
  token?: string,
) => {
  const parsedProp = parseNestedProp(
    propName,
    props[propName],
    props.theme,
    token,
  );

  // Create object from names
  return {
    [propName]: parsedProp,
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
const parseValue = (
  type = 'none',
  prop: string | number,
  theme: any,
  propName: string,
  token?: string,
) => {
  switch (type) {
    case 'space':
      return Number.isInteger(prop) && theme?.space?.[prop]
        ? `${theme.space[prop]}px`
        : prop;

    case 'fontSize':
      return Number.isInteger(prop) && theme?.fontSizes?.[prop]
        ? `${theme.fontSizes[prop]}px`
        : prop;

    case 'none':
    default:
      return parseNestedProp(propName, prop, theme, token);
  }
};

/**
 * Generates responsive themed styles with CSS media queries based on array used in specifed prop.
 * Uses the breakpoints in the theme. First value in array corresponds to first breakpoint in theme.
 * Returns token from theme or original prop if not found
 * @param propName The prop to get user input from (e.g. "width")
 * @param prop The prop value. Can be single value or array.
 * @param theme The theme from props
 * @param type The type of conversion for the props (e.g. number to pixels based on space scale in theme)
 * @param token The token to target in the theme. Defaults to propName.
 */
export const getResponsiveThemeValue = (
  propName: string,
  prop: number | string | number[] | string[],
  theme: any,
  type: 'space' | 'none' = 'none',
  token?: string,
) => {
  let propValue;
  // Check if it's an array
  if (Array.isArray(prop)) {
    // Check if theme has breakpoints, if not, just return first array item
    if (!('breakpoints' in theme))
      propValue = {
        [propName]: prop[0],
      };

    console.log('parsing breakpints');
    // @ts-ignore
    propValue = prop.reduce((styles: {}, value: string, index: number) => {
      if (value) {
        const breakpoint = `@media screen and (min-width: ${theme.breakpoints[index]})`;
        styles = {
          ...styles,
          [breakpoint]: {
            [propName]: parseValue(type, value, theme, propName, token),
          },
        };
      }
      return styles;
    }, {});
    console.log('parsed respsonsive props', propValue);
  } else {
    propValue = {
      [propName]: parseValue(type, prop, theme, propName, token),
    };
  }
  return propValue;
};

/**
 * Generates responsive styles with CSS media queries based on array used in specifed prop.
 * Uses the breakpoints in the theme. First value in array corresponds to first breakpoint in theme.
 * @param propName The prop to get user input from (e.g. "width")
 * @param prop The prop value. Can be single value or array.
 * @param theme The theme from props
 */
export const getResponsiveValue = (
  propName: string,
  prop: number | string | number[] | string[],
  theme: any,
) => {
  let propValue;
  // Check if it's an array
  if (Array.isArray(prop)) {
    // Check if theme has breakpoints, if not, just return first array item
    if (!('breakpoints' in theme))
      propValue = {
        [propName]: prop[0],
      };
    // @ts-ignore you tell me man
    propValue = prop.reduce((styles: {}, value: string, index: number) => {
      if (value) {
        const breakpoint = `@media screen and (min-width: ${theme.breakpoints[index]})`;
        styles = {
          ...styles,
          [breakpoint]: {
            [propName]: value,
          },
        };
      }
      return styles;
    }, {});
  } else {
    propValue = {
      [propName]: prop,
    };
  }
  return propValue;
};
