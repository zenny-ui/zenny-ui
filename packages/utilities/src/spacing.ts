import { getResponsiveThemeValue } from "./getThemeValue";
import CSS from 'csstype'

export type SpacingProps = {
  margin?: CSS.Properties['margin'] | Array<CSS.Properties['margin']>
  marginTop?: CSS.Properties['marginTop'] | Array<CSS.Properties['marginTop']>
  marginBottom?: CSS.Properties['marginBottom'] | Array<CSS.Properties['marginBottom']>
  marginLeft?: CSS.Properties['marginLeft'] | Array<CSS.Properties['marginLeft']>
  marginRight?: CSS.Properties['marginRight'] | Array<CSS.Properties['marginRight']>
  m?: CSS.Properties['margin'] | Array<CSS.Properties['margin']>
  mt?: CSS.Properties['marginTop'] | Array<CSS.Properties['marginTop']>
  mb?: CSS.Properties['marginBottom'] | Array<CSS.Properties['marginBottom']>
  ml?: CSS.Properties['marginLeft'] | Array<CSS.Properties['marginLeft']>
  mr?: CSS.Properties['marginRight'] | Array<CSS.Properties['marginRight']>
  mx?: CSS.Properties['margin'] | Array<CSS.Properties['margin']>
  my?: CSS.Properties['margin'] | Array<CSS.Properties['margin']>
  padding?: CSS.Properties['padding'] | Array<CSS.Properties['padding']>
  paddingTop?: CSS.Properties['paddingTop'] | Array<CSS.Properties['paddingTop']>
  paddingBottom?: CSS.Properties['paddingBottom'] | Array<CSS.Properties['paddingBottom']>
  paddingLeft?: CSS.Properties['paddingLeft'] | Array<CSS.Properties['paddingLeft']>
  paddingRight?: CSS.Properties['paddingRight'] | Array<CSS.Properties['paddingRight']>
  p?: CSS.Properties['padding'] | Array<CSS.Properties['padding']>
  pt?: CSS.Properties['paddingTop'] | Array<CSS.Properties['paddingTop']>
  pb?: CSS.Properties['paddingBottom'] | Array<CSS.Properties['paddingBottom']>
  pl?: CSS.Properties['paddingLeft'] | Array<CSS.Properties['paddingLeft']>
  pr?: CSS.Properties['paddingRight'] | Array<CSS.Properties['paddingRight']>
  px?: CSS.Properties['padding'] | Array<CSS.Properties['padding']>
  py?: CSS.Properties['padding'] | Array<CSS.Properties['padding']>
}

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

    // Grabs prop from theme and return object-style CSS
    const mapProp = (prop: string) => {
      return spacingKeyBank[prop].map((propName: string) => getResponsiveThemeValue(propName, styledProps[prop], styledProps.theme, 'scale'))
    };

    // Filter props and see if any match spacing key bank
    // Use the filtered array to grab prop values from theme
    const spacingProps = Object.keys(styledProps)
      .filter((prop) => Object.keys(spacingKeyBank).includes(prop))
      .map(mapProp);
    // Return that
    return spacingProps;
};