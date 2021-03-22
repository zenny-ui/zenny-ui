import { getResponsiveThemeValue, getResponsiveValue } from './getThemeValue';
import CSS from 'csstype';

export type BorderProps = {
  border?: CSS.Properties['border'] | Array<CSS.Properties['border']>;
  borderWidth?:
    | CSS.Properties['borderWidth']
    | Array<CSS.Properties['borderWidth']>;
  borderStyle?:
    | CSS.Properties['borderStyle']
    | Array<CSS.Properties['borderStyle']>;
  borderColor?:
    | CSS.Properties['borderColor']
    | Array<CSS.Properties['borderColor']>;
  borderRadius?:
    | CSS.Properties['borderRadius']
    | Array<CSS.Properties['borderRadius']>;
  borderTop?: CSS.Properties['borderTop'] | Array<CSS.Properties['borderTop']>;
  borderTopWidth?:
    | CSS.Properties['borderTopWidth']
    | Array<CSS.Properties['borderTopWidth']>;
  borderTopStyle?:
    | CSS.Properties['borderTopStyle']
    | Array<CSS.Properties['borderTopStyle']>;
  borderTopColor?:
    | CSS.Properties['borderTopColor']
    | Array<CSS.Properties['borderTopColor']>;
  borderTopLeftRadius?:
    | CSS.Properties['borderTopLeftRadius']
    | Array<CSS.Properties['borderTopLeftRadius']>;
  borderTopRightRadius?:
    | CSS.Properties['borderTopRightRadius']
    | Array<CSS.Properties['borderTopRightRadius']>;
  borderRight?:
    | CSS.Properties['borderRight']
    | Array<CSS.Properties['borderRight']>;
  borderRightWidth?:
    | CSS.Properties['borderRightWidth']
    | Array<CSS.Properties['borderRightWidth']>;
  borderRightStyle?:
    | CSS.Properties['borderRightStyle']
    | Array<CSS.Properties['borderRightStyle']>;
  borderRightColor?:
    | CSS.Properties['borderRightColor']
    | Array<CSS.Properties['borderRightColor']>;
  borderBottom?:
    | CSS.Properties['borderBottom']
    | Array<CSS.Properties['borderBottom']>;
  borderBottomWidth?:
    | CSS.Properties['borderBottomWidth']
    | Array<CSS.Properties['borderBottomWidth']>;
  borderBottomStyle?:
    | CSS.Properties['borderBottomStyle']
    | Array<CSS.Properties['borderBottomStyle']>;
  borderBottomColor?:
    | CSS.Properties['borderBottomColor']
    | Array<CSS.Properties['borderBottomColor']>;
  borderBottomLeftRadius?:
    | CSS.Properties['borderBottomLeftRadius']
    | Array<CSS.Properties['borderBottomLeftRadius']>;
  borderBottomRightRadius?:
    | CSS.Properties['borderBottomRightRadius']
    | Array<CSS.Properties['borderBottomRightRadius']>;
  borderLeft?:
    | CSS.Properties['borderLeft']
    | Array<CSS.Properties['borderLeft']>;
  borderLeftWidth?:
    | CSS.Properties['borderLeftWidth']
    | Array<CSS.Properties['borderLeftWidth']>;
  borderLeftStyle?:
    | CSS.Properties['borderLeftStyle']
    | Array<CSS.Properties['borderLeftStyle']>;
  borderLeftColor?:
    | CSS.Properties['borderLeftColor']
    | Array<CSS.Properties['borderLeftColor']>;
  borderX?: CSS.Properties['borderLeft'] | Array<CSS.Properties['borderLeft']>;
  borderY?: CSS.Properties['borderTop'] | Array<CSS.Properties['borderTop']>;
};

const borderKeyBank = {
  position: [{ name: 'position', type: 'none' }],
  border: [{ name: 'border', type: 'none' }],
  borderWidth: [{ name: 'borderWidth', type: 'space' }],
  borderStyle: [{ name: 'borderStyle', type: 'none' }],
  borderColor: [{ name: 'borderColor', type: 'none' }],
  borderRadius: [{ name: 'borderRadius', type: 'none' }],
  borderTop: [{ name: 'borderTop', type: 'none' }],
  borderTopWidth: [{ name: 'borderTopWidth', type: 'space' }],
  borderTopStyle: [{ name: 'borderTopStyle', type: 'none' }],
  borderTopColor: [{ name: 'borderTopColor', type: 'none' }],
  borderTopLeftRadius: [{ name: 'borderTopLeftRadius', type: 'none' }],
  borderTopRightRadius: [{ name: 'borderTopRightRadius', type: 'none' }],
  borderRight: [{ name: 'borderRight', type: 'none' }],
  borderRightWidth: [{ name: 'borderRightWidth', type: 'space' }],
  borderRightStyle: [{ name: 'borderRightStyle', type: 'none' }],
  borderRightColor: [{ name: 'borderRightColor', type: 'none' }],
  borderBottom: [{ name: 'borderBottom', type: 'none' }],
  borderBottomWidth: [{ name: 'borderBottomWidth', type: 'space' }],
  borderBottomStyle: [{ name: 'borderBottomStyle', type: 'none' }],
  borderBottomColor: [{ name: 'borderBottomColor', type: 'none' }],
  borderBottomLeftRadius: [{ name: 'borderBottomLeftRadius', type: 'none' }],
  borderBottomRightRadius: [{ name: 'borderBottomRightRadius', type: 'none' }],
  borderLeft: [{ name: 'borderLeft', type: 'none' }],
  borderLeftWidth: [{ name: 'borderLeftWidth', type: 'space' }],
  borderLeftStyle: [{ name: 'borderLeftStyle', type: 'none' }],
  borderLeftColor: [{ name: 'borderLeftColor', type: 'none' }],
  borderX: [
    { name: 'borderLeft', type: 'space' },
    { name: 'borderRight', type: 'space' },
  ],
  borderY: [
    { name: 'borderTop', type: 'space' },
    { name: 'borderBottom', type: 'space' },
  ],
};

export const border = (styledProps: any) => {
  // Grabs prop from theme and return object-style CSS
  const mapProp = (prop: string) => {
    return borderKeyBank[prop].map(
      (propName: { name: string; type: 'space' | 'none' }) => {
        if (propName.type === 'none')
          return getResponsiveValue(
            propName.name,
            styledProps[prop],
            styledProps.theme,
          );
        getResponsiveThemeValue(
          propName.name,
          styledProps[prop],
          styledProps.theme,
          propName.type,
        );
      },
    );
  };

  // Filter props and see if any match border key bank
  // Use the filtered array to grab prop values from theme
  const borderProps = Object.keys(styledProps)
    .filter((prop) => Object.keys(borderKeyBank).includes(prop))
    .map(mapProp);
  // Return that
  return borderProps;
};
