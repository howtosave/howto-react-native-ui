module.exports = {
  stories: [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/containers/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/screens/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-react-native-web",
  ],
  framework: "@storybook/react",
  webpackFinal: async (config, { configType }) => {
    // resolve victory-native as victory for the Web app
    config.resolve.alias['victory-native'] = 'victory';
    return config;
  },
};
