const custom = require('../webpack.config.js');

module.exports = {
  "stories": ['../src/components/**/*.story.(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-knobs'],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: { alias: { ...config.resolve.alias, ...custom.resolve.alias } },
      module: { ...config.module, rules: custom.module.rules },
    }
  },
};