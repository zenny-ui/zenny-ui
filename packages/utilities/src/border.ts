import { getResponsiveThemeValue } from './getThemeValue';
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
  border: ['border'],
  borderWidth: ['borderWidth'],
  borderStyle: ['borderStyle'],
  borderColor: ['borderColor'],
  borderRadius: ['borderRadius'],
  borderTop: ['borderTop'],
  borderTopWidth: ['borderTopWidth'],
  borderTopStyle: ['borderTopStyle'],
  borderTopColor: ['borderTopColor'],
  borderTopLeftRadius: ['borderTopLeftRadius'],
  borderTopRightRadius: ['borderTopRightRadius'],
  borderRight: ['borderRight'],
  borderRightWidth: ['borderRightWidth'],
  borderRightStyle: ['borderRightStyle'],
  borderRightColor: ['borderRightColor'],
  borderBottom: ['borderBottom'],
  borderBottomWidth: ['borderBottomWidth'],
  borderBottomStyle: ['borderBottomStyle'],
  borderBottomColor: ['borderBottomColor'],
  borderBottomLeftRadius: ['borderBottomLeftRadius'],
  borderBottomRightRadius: ['borderBottomRightRadius'],
  borderLeft: ['borderLeft'],
  borderLeftWidth: ['borderLeftWidth'],
  borderLeftStyle: ['borderLeftStyle'],
  borderLeftColor: ['borderLeftColor'],
  borderX: ['borderLeft', 'borderRight'],
  borderY: ['borderTop', 'borderBottom'],
};

export const border = (styledProps: any) => {
  // Grabs prop from theme and return object-style CSS
  const mapProp = (prop: string) => {
    return borderKeyBank[prop].map((propName: string) =>
      getResponsiveThemeValue(
        propName,
        styledProps[prop],
        styledProps.theme,
        'scale',
      ),
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
