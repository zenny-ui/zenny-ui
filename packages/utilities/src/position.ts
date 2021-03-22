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

const positionKeyBank = {
  position: [{ name: 'position', type: 'none' }],
  zIndex: [{ name: 'zIndex', type: 'none' }],
  top: [{ name: 'top', type: 'none' }],
  bottom: [{ name: 'bottom', type: 'none' }],
  left: [{ name: 'left', type: 'none' }],
  right: [{ name: 'right', type: 'none' }],
};

export const position = (styledProps: any) => {
  // Grabs prop from theme and return object-style CSS
  const mapProp = (prop: string) => {
    return positionKeyBank[
      prop
    ].map((propName: { name: string; type: 'space' | 'none' }) =>
      getResponsiveThemeValue(
        propName.name,
        styledProps[prop],
        styledProps.theme,
        propName.type,
      ),
    );
  };

  // Filter props and see if any match spacing key bank
  // Use the filtered array to grab prop values from theme
  const spacingProps = Object.keys(styledProps)
    .filter((prop) => Object.keys(positionKeyBank).includes(prop))
    .map(mapProp);
  // Return that
  return spacingProps;
};
