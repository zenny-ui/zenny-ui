import { getResponsiveThemeValue } from './getThemeValue';
import CSS from 'csstype';

export type FlexProps = {
  alignItems?:
    | CSS.Properties['alignItems']
    | Array<CSS.Properties['alignItems']>;
  alignContent?:
    | CSS.Properties['alignContent']
    | Array<CSS.Properties['alignContent']>;
  justifyItems?:
    | CSS.Properties['justifyItems']
    | Array<CSS.Properties['justifyItems']>;
  justifyContent?:
    | CSS.Properties['justifyContent']
    | Array<CSS.Properties['justifyContent']>;
  flexWrap?: CSS.Properties['flexWrap'] | Array<CSS.Properties['flexWrap']>;
  flexDirection?:
    | CSS.Properties['flexDirection']
    | Array<CSS.Properties['flexDirection']>;
  flex?: CSS.Properties['flex'] | Array<CSS.Properties['flex']>;
  flexGrow?: CSS.Properties['flexGrow'] | Array<CSS.Properties['flexGrow']>;
  flexShrink?:
    | CSS.Properties['flexShrink']
    | Array<CSS.Properties['flexShrink']>;
  flexBasis?: CSS.Properties['flexBasis'] | Array<CSS.Properties['flexBasis']>;
  justifySelf?:
    | CSS.Properties['justifySelf']
    | Array<CSS.Properties['justifySelf']>;
  alignSelf?: CSS.Properties['alignSelf'] | Array<CSS.Properties['alignSelf']>;
  order?: CSS.Properties['order'] | Array<CSS.Properties['order']>;
};

const flexKeyBank = {
  alignItems: ['alignItems'],
  alignContent: ['alignContent'],
  justifyItems: ['justifyItems'],
  justifyContent: ['justifyContent'],
  flexWrap: ['flexWrap'],
  flexDirection: ['flexDirection'],
  flex: ['flex'],
  flexGrow: ['flexGrow'],
  flexShrink: ['flexShrink'],
  flexBasis: ['flexBasis'],
  justifySelf: ['justifySelf'],
  alignSelf: ['alignSelf'],
  order: ['order'],
};

export const flex = (styledProps: any) => {
  // Grabs prop from theme and return object-style CSS
  const mapProp = (prop: string) => {
    return flexKeyBank[prop].map((propName: string) =>
      getResponsiveThemeValue(
        propName,
        styledProps[prop],
        styledProps.theme,
        'scale',
      ),
    );
  };

  // Filter props and see if any match flex key bank
  // Use the filtered array to grab prop values from theme
  const flexProps = Object.keys(styledProps)
    .filter((prop) => Object.keys(flexKeyBank).includes(prop))
    .map(mapProp);
  // Return that
  return flexProps;
};
