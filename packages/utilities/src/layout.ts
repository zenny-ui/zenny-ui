import { getResponsiveThemeValue } from './getThemeValue';
import CSS from 'csstype';

export type LayoutProps = {
  margin?: CSS.Properties['margin'] | Array<CSS.Properties['margin']>;
  width?: CSS.Properties['width'] | Array<CSS.Properties['width']>;
  height?: CSS.Properties['height'] | Array<CSS.Properties['height']>;
  display?: CSS.Properties['display'] | Array<CSS.Properties['display']>;
  minWidth?: CSS.Properties['minWidth'] | Array<CSS.Properties['minWidth']>;
  minHeight?: CSS.Properties['minHeight'] | Array<CSS.Properties['minHeight']>;
  maxWidth?: CSS.Properties['maxWidth'] | Array<CSS.Properties['maxWidth']>;
  maxHeight?: CSS.Properties['maxHeight'] | Array<CSS.Properties['maxHeight']>;
  verticalAlign?:
    | CSS.Properties['verticalAlign']
    | Array<CSS.Properties['verticalAlign']>;
  overflow?: CSS.Properties['overflow'] | Array<CSS.Properties['overflow']>;
  overflowX?: CSS.Properties['overflowX'] | Array<CSS.Properties['overflowX']>;
  overflowY?: CSS.Properties['overflowY'] | Array<CSS.Properties['overflowY']>;
};

const layoutKeyBank = {
  width: ['width'],
  height: ['height'],
  display: ['display'],
  minWidth: ['minWidth'],
  minHeight: ['minHeight'],
  maxWidth: ['maxWidth'],
  maxHeight: ['maxHeight'],
  verticalAlign: ['verticalAlign'],
  overflow: ['overflow'],
  overflowX: ['overflowX'],
  overflowY: ['overflowY'],
};

export const layout = (styledProps: any) => {
  // Grabs prop from theme and return object-style CSS
  const mapProp = (prop: string) => {
    return layoutKeyBank[prop].map((propName: string) =>
      getResponsiveThemeValue(
        propName,
        styledProps[prop],
        styledProps.theme,
        'scale',
      ),
    );
  };

  // Filter props and see if any match layout key bank
  // Use the filtered array to grab prop values from theme
  const layoutProps = Object.keys(styledProps)
    .filter((prop) => Object.keys(layoutKeyBank).includes(prop))
    .map(mapProp);
  // Return that
  return layoutProps;
};
