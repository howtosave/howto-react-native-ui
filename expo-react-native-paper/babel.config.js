module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.tsx', '.ts', '.js', '.json'],
        },
      ],
      // Needed by React Native Reanimated for web
      '@babel/plugin-proposal-export-namespace-from',
      // !!! Reanimated plugin has to be listed last.
      'react-native-reanimated/plugin',
    ],
  };
};
