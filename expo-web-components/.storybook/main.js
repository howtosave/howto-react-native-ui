const path = require('path');

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
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: ['dripsy', '@dripsy/core', 'react-native-reanimated'],
        babelPlugins: [
          '@babel/plugin-proposal-export-namespace-from',
          'react-native-reanimated/plugin'
        ],
      }
    }
  ],
  // babel: async (options) => ({
  //   ...options,
  //   // any extra options you want to set
  // }),
  framework: "@storybook/react",
  webpackFinal: async (config, { configType }) => {
    // resolve victory-native as victory for the Web app
    config.resolve.alias['victory-native'] = 'victory';
    return config;
  },
};
