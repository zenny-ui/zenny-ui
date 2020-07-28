import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider, LightTheme } from "zenny-ui-theme";

// Wrap stories in theme provider
const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={LightTheme}>{storyFn()}</ThemeProvider>
);
addDecorator(ThemeDecorator);
