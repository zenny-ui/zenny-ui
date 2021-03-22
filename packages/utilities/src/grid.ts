import { getResponsiveThemeValue, getResponsiveValue } from './getThemeValue';
import CSS from 'csstype';

export type GridProps = {
  //   gridGap?: CSS.Properties['gridGap'] | Array<CSS.Properties['gridGap']>;
  //   gridColumnGap?: CSS.Properties['gridColumnGap'] | Array<CSS.Properties['gridColumnGap']>;
  //   gridRowGap?: CSS.Properties['gridRowGap'] | Array<CSS.Properties['gridRowGap']>;
  gridColumn?:
    | CSS.Properties['gridColumn']
    | Array<CSS.Properties['gridColumn']>;
  gridRow?: CSS.Properties['gridRow'] | Array<CSS.Properties['gridRow']>;
  gridAutoFlow?:
    | CSS.Properties['gridAutoFlow']
    | Array<CSS.Properties['gridAutoFlow']>;
  gridAutoColumns?:
    | CSS.Properties['gridAutoColumns']
    | Array<CSS.Properties['gridAutoColumns']>;
  gridAutoRows?:
    | CSS.Properties['gridAutoRows']
    | Array<CSS.Properties['gridAutoRows']>;
  gridTemplateColumns?:
    | CSS.Properties['gridTemplateColumns']
    | Array<CSS.Properties['gridTemplateColumns']>;
  gridTemplateRows?:
    | CSS.Properties['gridTemplateRows']
    | Array<CSS.Properties['gridTemplateRows']>;
  gridTemplateAreas?:
    | CSS.Properties['gridTemplateAreas']
    | Array<CSS.Properties['gridTemplateAreas']>;
  gridArea?: CSS.Properties['gridArea'] | Array<CSS.Properties['gridArea']>;
};

const gridKeyBank = {
  // Deprecated?
  //   gridGap: ['gridGap'],
  //   gridColumnGap: ['gridColumnGap'],
  //   gridRowGap: ['gridRowGap'],
  gridColumn: ['gridColumn'],
  gridRow: ['gridRow'],
  gridAutoFlow: ['gridAutoFlow'],
  gridAutoColumns: ['gridAutoColumns'],
  gridAutoRows: ['gridAutoRows'],
  gridTemplateColumns: ['gridTemplateColumns'],
  gridTemplateRows: ['gridTemplateRows'],
  gridTemplateAreas: ['gridTemplateAreas'],
  gridArea: ['gridArea'],
};

export const grid = (styledProps: any) => {
  // Grabs prop from theme and return object-style CSS
  const mapProp = (prop: string) => {
    return gridKeyBank[prop].map((propName: string) =>
      getResponsiveValue(propName, styledProps[prop], styledProps.theme),
    );
  };

  // Filter props and see if any match grid key bank
  // Use the filtered array to grab prop values from theme
  const gridProps = Object.keys(styledProps)
    .filter((prop) => Object.keys(gridKeyBank).includes(prop))
    .map(mapProp);
  // Return that
  return gridProps;
};
