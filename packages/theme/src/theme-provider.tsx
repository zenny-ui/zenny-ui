import * as React from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from 'styled-components';
import { generateCSSVars } from './utils/generateCSSVars';

const CSSVars = createGlobalStyle`
  :root{
    ${({ theme }) => generateCSSVars(theme)}
  }
`;

export interface ThemeProviderProps {
  children: React.ReactNode;
  theme: any;
}

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  return (
    <StyledThemeProvider theme={theme}>
      <CSSVars />
      {children}
    </StyledThemeProvider>
  );
};
