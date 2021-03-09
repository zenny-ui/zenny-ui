export const getThemeValue = (propName: string, props: {
    [key:string]: string | number;
}) => {
        const propValue = props.theme[`${propName}s`][props[propName]];

      // Create object from names
        return {
          [propName]: propValue
        }
}

/**
 * Get a nested theme value using dot separator (1 level deep)
 * e.g. color="primary.100" -> theme.colors.primary['100']
 * @param propName 
 * @param props 
 */
export const getNestedThemeValue = (propName: string, props: {
    [key:string]: string | number;
}) => {
  const splitProps = propName.split('')
  let propValue
  if(splitProps.length > 1) {
    propValue = props.theme[`${propName}s`][props[splitProps[0]]][splitProps[1]];
  } else {
    propValue = props.theme[`${propName}s`][props[splitProps[0]]];
  }

  // Create object from names
  return {
    [propName]: propValue
  }
}

