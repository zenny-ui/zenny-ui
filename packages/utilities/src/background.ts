import { getResponsiveThemeValue } from './getThemeValue';
import CSS from 'csstype';

export type BackgroundProps = {
  backgroundImage?:
    | CSS.Properties['backgroundImage']
    | Array<CSS.Properties['backgroundImage']>;
  backgroundSize?:
    | CSS.Properties['backgroundSize']
    | Array<CSS.Properties['backgroundSize']>;
  backgroundPosition?:
    | CSS.Properties['backgroundPosition']
    | Array<CSS.Properties['backgroundPosition']>;
  backgroundRepeat?:
    | CSS.Properties['backgroundRepeat']
    | Array<CSS.Properties['backgroundRepeat']>;
};

const backgroundKeyBank = {
  backgroundImage: ['backgroundImage'],
  backgroundSize: ['backgroundSize'],
  backgroundPosition: ['backgroundPosition'],
  backgroundRepeat: ['backgroundRepeat'],
};

export const background = (styledProps: any) => {
  // Grabs prop from theme and return object-style CSS
  const mapProp = (prop: string) => {
    return backgroundKeyBank[prop].map((propName: string) =>
      getResponsiveThemeValue(
        propName,
        styledProps[prop],
        styledProps.theme,
        'scale',
      ),
    );
  };

  // Filter props and see if any match background key bank
  // Use the filtered array to grab prop values from theme
  const backgroundProps = Object.keys(styledProps)
    .filter((prop) => Object.keys(backgroundKeyBank).includes(prop))
    .map(mapProp);
  // Return that
  return backgroundProps;
};
