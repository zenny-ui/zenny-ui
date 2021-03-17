import { getResponsiveThemeValue } from './getThemeValue';
import CSS from 'csstype';

export type TypographyProps = {
  fontFamily?:
  | CSS.Properties['fontFamily']
  | Array<CSS.Properties['fontFamily']>;
  fontSize?: CSS.Properties['fontSize'] | Array<CSS.Properties['fontSize']>;
  fontWeight?:
  | CSS.Properties['fontWeight']
  | Array<CSS.Properties['fontWeight']>;
  lineHeight?:
  | CSS.Properties['lineHeight']
  | Array<CSS.Properties['lineHeight']>;
  letterSpacing?:
  | CSS.Properties['letterSpacing']
  | Array<CSS.Properties['letterSpacing']>;
  textAlign?: CSS.Properties['textAlign'] | Array<CSS.Properties['textAlign']>;
  fontStyle?: CSS.Properties['fontStyle'] | Array<CSS.Properties['fontStyle']>;
};

const spacingKeyBank = {
  fontFamily: ['fontFamily'],
  fontSize: ['fontSize'],
  fontWeight: ['fontWeight'],
  lineHeight: ['lineHeight'],
  letterSpacing: ['letterSpacing'],
  textAlign: ['textAlign'],
  fontStyle: ['fontStyle'],
};

export const typography = (styledProps: any) => {
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
