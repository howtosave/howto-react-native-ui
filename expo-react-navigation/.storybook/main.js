const path = require('path');

module.exports = {
  stories: [
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: [
          'dripsy', '@dripsy/core', 'react-native-reanimated',
          'react-native-vector-icons',
        ],
        babelPlugins: [
          '@babel/plugin-proposal-export-namespace-from',
          'react-native-reanimated/plugin'
        ],
      }
    }
  ],
  framework: "@storybook/react",
  webpackFinal: async (config, { configType }) => {
    return config;
  },
};
