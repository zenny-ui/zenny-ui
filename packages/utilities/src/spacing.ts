const spacingKeyBank = {
  margin: ["margin"],
  marginTop: ["marginTop"],
  marginBottom: ["marginBottom"],
  marginLeft: ["marginLeft"],
  marginRight: ["marginRight"],
  m: ["margin"],
  mt: ["marginTop"],
  mb: ["marginBottom"],
  ml: ["marginLeft"],
  mr: ["marginRight"],
  mx: ["marginLeft", 'marginRight'],
  my: ["marginTop", "marginBottom"],
  'padding': ['padding'],
  'paddingTop': ['paddingTop'],
  'paddingBottom': ['paddingBottom'],
  'paddingLeft': ['paddingLeft'],
  'paddingRight': ['paddingRight'],
  'p': ['padding'],
  'pt': ['paddingTop'],
  'pb': ['paddingBottom'],
  'pl': ['paddingLeft'],
  'pr': ['paddingRight'],
  'px': ['paddingLeft', 'paddingRight'],
  'py': ['paddingTop', 'paddingBottom'],
};

export const spacing = (styledProps: any) => {
  // We need to check if user passes any props that match
  // margin, marginTop, mt, etc
  // padding, paddingTop, pt, etc
  // Figure out what the key is for (margin/padding)
  // Return appropriate value from theme

    const { theme } = styledProps;

    // Grabs prop from theme and return object-style CSS
    const mapProp = (prop: string) => {
      const propNames = spacingKeyBank[prop];
      let propValue = theme.space[styledProps[prop]];
      if (Number.isInteger(propValue)) propValue = `${propValue}px`;

      // Create object from names
      return propNames.reduce((css: {}, propName:string) => {
        return {
          ...css,
          [propName]: propValue
        }
      }, {})
    };

    // Filter props and see if any match spacing key bank
    // Use the filtered array to grab prop values from theme
    const spacingProps = Object.keys(styledProps)
      .filter((prop) => Object.keys(spacingKeyBank).includes(prop))
      .map(mapProp);
    // Return that
    return spacingProps;
};