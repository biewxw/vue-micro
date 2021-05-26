const { merge } = require('webpack-merge');

const singleSpaDefaults = require('webpack-config-single-spa');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (webpackConfigEnv, argv) => {
  const orgName = 'vuemicro';
  const defaultConfig = singleSpaDefaults({
    argv,
    orgName,
    webpackConfigEnv,
    projectName: 'root-config',
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: 'src/index.ejs',
        templateParameters: {
          orgName,
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
        },
      }),
    ],
    externals: ['single-spa', 'vue', 'vue-router', /^@vuemicro\/.+$/],
  });
};
