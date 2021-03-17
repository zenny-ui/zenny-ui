import { getResponsiveThemeValue } from './getThemeValue';
import CSS from 'csstype';

export type ColorProps = {
  color?: CSS.Properties['color'] | Array<CSS.Properties['color']>;
  bg?: CSS.Properties['backgroundColor'] | Array<CSS.Properties['zIndex']>;
  backgroundColor?:
  | CSS.Properties['backgroundColor']
  | Array<CSS.Properties['top']>;
};

const spacingKeyBank = {
  color: ['color'],
  bg: ['backgroundColor'],
  backgroundColor: ['backgroundColor'],
};

export const color = (styledProps: any) => {
  // We need to check if user passes any props that match
  // margin, marginTop, mt, etc
  // padding, paddingTop, pt, etc
  // Figure out what the key is for (margin/padding)
  // Return appropriate value from theme

  // Grabs prop from theme and return object-style CSS
  const mapProp = (prop: string) => {
    return spacingKeyBank[prop].map((propName: string) =>
      getResponsiveThemeValue(propName, styledProps[prop], styledProps.theme),
    );
  };

  // Filter props and see if any match spacing key bank
  // Use the filtered array to grab prop values from theme
  const spacingProps = Object.keys(styledProps)
    .filter((prop) => Object.keys(spacingKeyBank).includes(prop))
    .map(mapProp);
  // Return that
  return spacingProps;
};