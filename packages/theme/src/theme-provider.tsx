import * as React from "react";
// Ignore because SC type pkg is broken for now
// @ts-ignore
import { ThemeProvider as StyledThemeProvider } from "styled-components";

export interface ThemeProviderProps {
  children: React.ReactNode;
  theme: any;
}

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};
