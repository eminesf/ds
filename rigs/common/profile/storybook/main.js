const postcss = require("postcss");

module.exports = {
  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: {
          modules: {
            mode(resourcePath) {
              return resourcePath.endsWith(".module.css") ? "local" : "global";
            },
          },
        },
        postcssLoaderOptions: {
          implementation: postcss,
        },
      },
    },
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
  ],
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  typescript: {
    reactDocgen: "none",
  },
  core: {
    builder: "webpack5",
  },
};
