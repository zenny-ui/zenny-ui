const path = require("path");
module.exports = {
  stories: ["../packages/**/*.stories.[tj]sx"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-a11y",
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
