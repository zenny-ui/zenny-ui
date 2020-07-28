const path = require("path");
module.exports = {
  stories: ["../packages/**/*.stories.[tj]sx"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    {
      name: "@storybook/addon-a11y",
      options: {
        checks: { "color-contrast": { options: { noScroll: true } } },
        restoreScroll: true,
      },
    },
    "@storybook/addon-backgrounds",
    "@storybook/addon-storysource",
    "@storybook/addon-viewport",
    {
      name: "@storybook/preset-typescript",
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, "../tsconfig.json"),
        },
        include: [path.resolve(__dirname, "../packages/")],
      },
    },
  ],
};
