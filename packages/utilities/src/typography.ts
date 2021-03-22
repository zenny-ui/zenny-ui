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
  fontFamily: [{ name: 'fontFamily', type: 'none', token: 'fonts' }],
  fontSize: [{ name: 'fontSize', type: 'fontSize' }],
  fontWeight: [{ name: 'fontWeight', type: 'none' }],
  lineHeight: [{ name: 'lineHeight', type: 'none' }],
  letterSpacing: [{ name: 'letterSpacing', type: 'none' }],
  textAlign: [{ name: 'textAlign', type: 'none' }],
  fontStyle: [{ name: 'fontStyle', type: 'none' }],
};

export const typography = (styledProps: any) => {
  // Grabs prop from theme and return object-style CSS
  const mapProp = (prop: string) => {
    return spacingKeyBank[
      prop
    ].map(
      (propName: { name: string; type: 'space' | 'none'; token?: string }) =>
        getResponsiveThemeValue(
          propName.name,
          styledProps[prop],
          styledProps.theme,
          propName.type,
          propName.token ?? '',
        ),
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
