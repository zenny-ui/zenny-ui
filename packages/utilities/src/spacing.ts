import { getResponsiveThemeValue } from './getThemeValue';
import CSS from 'csstype';

export type SpacingProps = {
  margin?:
    | CSS.Properties['margin']
    | Array<CSS.Properties['margin']>
    | number
    | number[];
  marginTop?:
    | CSS.Properties['marginTop']
    | Array<CSS.Properties['marginTop']>
    | number
    | number[];
  marginBottom?:
    | CSS.Properties['marginBottom']
    | Array<CSS.Properties['marginBottom']>
    | number
    | number[];
  marginLeft?:
    | CSS.Properties['marginLeft']
    | Array<CSS.Properties['marginLeft']>
    | number
    | number[];
  marginRight?:
    | CSS.Properties['marginRight']
    | Array<CSS.Properties['marginRight']>
    | number
    | number[];
  m?:
    | CSS.Properties['margin']
    | Array<CSS.Properties['margin']>
    | number
    | number[];
  mt?:
    | CSS.Properties['marginTop']
    | Array<CSS.Properties['marginTop']>
    | number
    | number[];
  mb?:
    | CSS.Properties['marginBottom']
    | Array<CSS.Properties['marginBottom']>
    | number
    | number[];
  ml?:
    | CSS.Properties['marginLeft']
    | Array<CSS.Properties['marginLeft']>
    | number
    | number[];
  mr?:
    | CSS.Properties['marginRight']
    | Array<CSS.Properties['marginRight']>
    | number
    | number[];
  mx?:
    | CSS.Properties['margin']
    | Array<CSS.Properties['margin']>
    | number
    | number[];
  my?:
    | CSS.Properties['margin']
    | Array<CSS.Properties['margin']>
    | number
    | number[];
  padding?:
    | CSS.Properties['padding']
    | Array<CSS.Properties['padding']>
    | number
    | number[];
  paddingTop?:
    | CSS.Properties['paddingTop']
    | Array<CSS.Properties['paddingTop']>
    | number
    | number[];
  paddingBottom?:
    | CSS.Properties['paddingBottom']
    | Array<CSS.Properties['paddingBottom']>
    | number
    | number[];
  paddingLeft?:
    | CSS.Properties['paddingLeft']
    | Array<CSS.Properties['paddingLeft']>
    | number
    | number[];
  paddingRight?:
    | CSS.Properties['paddingRight']
    | Array<CSS.Properties['paddingRight']>
    | number
    | number[];
  p?:
    | CSS.Properties['padding']
    | Array<CSS.Properties['padding']>
    | number
    | number[];
  pt?:
    | CSS.Properties['paddingTop']
    | Array<CSS.Properties['paddingTop']>
    | number
    | number[];
  pb?:
    | CSS.Properties['paddingBottom']
    | Array<CSS.Properties['paddingBottom']>
    | number
    | number[];
  pl?:
    | CSS.Properties['paddingLeft']
    | Array<CSS.Properties['paddingLeft']>
    | number
    | number[];
  pr?:
    | CSS.Properties['paddingRight']
    | Array<CSS.Properties['paddingRight']>
    | number
    | number[];
  px?:
    | CSS.Properties['padding']
    | Array<CSS.Properties['padding']>
    | number
    | number[];
  py?:
    | CSS.Properties['padding']
    | Array<CSS.Properties['padding']>
    | number
    | number[];
};

const spacingKeyBank = {
  margin: ['margin'],
  marginTop: ['marginTop'],
  marginBottom: ['marginBottom'],
  marginLeft: ['marginLeft'],
  marginRight: ['marginRight'],
  m: ['margin'],
  mt: ['marginTop'],
  mb: ['marginBottom'],
  ml: ['marginLeft'],
  mr: ['marginRight'],
  mx: ['marginLeft', 'marginRight'],
  my: ['marginTop', 'marginBottom'],
  padding: ['padding'],
  paddingTop: ['paddingTop'],
  paddingBottom: ['paddingBottom'],
  paddingLeft: ['paddingLeft'],
  paddingRight: ['paddingRight'],
  p: ['padding'],
  pt: ['paddingTop'],
  pb: ['paddingBottom'],
  pl: ['paddingLeft'],
  pr: ['paddingRight'],
  px: ['paddingLeft', 'paddingRight'],
  py: ['paddingTop', 'paddingBottom'],
};

export const spacing = (styledProps: any) => {
  // We need to check if user passes any props that match
  // margin, marginTop, mt, etc
  // padding, paddingTop, pt, etc
  // Figure out what the key is for (margin/padding)
  // Return appropriate value from theme

  // Grabs prop from theme and return object-style CSS
  const mapProp = (prop: string) => {
    return spacingKeyBank[prop].map((propName: string) =>
      getResponsiveThemeValue(
        propName,
        styledProps[prop],
        styledProps.theme,
        'space',
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
