const path = require('path');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

const node_modules = path.resolve(__dirname, '..', 'node_modules');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // config.module.rules.push({
  //   test: /\.(js|ts|tsx)$/,
  //   include: /(packages|example)\/.+/,
  //   exclude: /node_modules/,
  //   use: 'babel-loader',
  // });

  // Object.assign(config.resolve.alias, {
  //   'react': path.resolve(node_modules, 'react'),
  //   'react-native': path.resolve(node_modules, 'react-native-web'),
  //   'react-native-web': path.resolve(node_modules, 'react-native-web'),
  //   '@expo/vector-icons': path.resolve(node_modules, '@expo/vector-icons'),
  // });

  return config;
};
