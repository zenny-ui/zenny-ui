export const TOKENS = [
  'animation',
  'breakpoints',
  'colors',
  'fonts',
  'fontSizes',
  'fontWeights',
  'lineHeights',
  'space',
];
// zenny-token-tokenValue (dash separated)
export const generateCSSVars = (theme: any) => {
  let cssVars = {};
  // Loop through all top level theme keys
  Object.keys(theme).forEach((token: string) => {
    // Is token whitelisted for generating?
    if (!TOKENS.includes(token)) return;

    // Check if array or object
    const children = Object.entries(theme[token]);

    const walkThemeToken = (
      tokenChildren: [string, any][],
      parentToken: string,
    ) => {
      tokenChildren.forEach(
        (
          tokenValue: string | string[] | { [key: string]: any },
          index: number,
        ) => {
          // Check if is object or array
          // Object entries returns an array of key and value
          const childKey = tokenValue.length ? tokenValue[0] : index;
          const childValue = tokenValue.length ? tokenValue[1] : tokenValue;
          if (typeof childValue === 'object') {
            return walkThemeToken(
              Object.entries(childValue),
              `${parentToken}-${childKey}`,
            );
          }
          const cssVarName = `--zenny-${parentToken}-${childKey}`;
          cssVars = {
            ...cssVars,
            [cssVarName]: childValue,
          };
        },
      );
    };

    walkThemeToken(children, token);
  });
  return cssVars;
};
