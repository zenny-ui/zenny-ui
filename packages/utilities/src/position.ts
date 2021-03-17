import { getResponsiveThemeValue } from './getThemeValue';
import CSS from 'csstype';

export type PositionProps = {
  position?: CSS.Properties['position'] | Array<CSS.Properties['position']>;
  zIndex?: CSS.Properties['zIndex'] | Array<CSS.Properties['zIndex']>;
  top?: CSS.Properties['top'] | Array<CSS.Properties['top']>;
  bottom?: CSS.Properties['bottom'] | Array<CSS.Properties['bottom']>;
  left?: CSS.Properties['left'] | Array<CSS.Properties['left']>;
  right?: CSS.Properties['right'] | Array<CSS.Properties['right']>;
};

const spacingKeyBank = {
  position: ['position'],
  zIndex: ['zIndex'],
  top: ['top'],
  bottom: ['bottom'],
  left: ['left'],
  right: ['right'],
};

export const position = (styledProps: any) => {
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
