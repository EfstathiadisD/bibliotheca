const rootMain = require('../../../../.storybook/main');

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  /* IMPORTANT NOTE: This ensures, this package, can run Stories for all packages */
  stories: [
    ...rootMain.stories,
    '../../**/src/**/*.stories.mdx',
    '../../**/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],
  webpackFinal: async (config, { configType }) => {
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    return config;
  },
};
