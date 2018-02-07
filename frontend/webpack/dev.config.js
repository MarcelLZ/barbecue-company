const { join } = require('path')
const webpack = require('webpack')
const WebpackDashboard = require('webpack-dashboard/plugin')
const HtmlPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const common = require('./common')

module.exports = {
  devtool: 'inline-source-map',

  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${common.server.defaultPort}`,
    'webpack/hot/only-dev-server',
    join(common.PATH.SRC, 'index.js')
  ],

  output: {
    filename: '[name].[hash].js',
    publicPath: '/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new WebpackDashboard(),
    new CleanWebpackPlugin([common.PATH.PUBLIC]),
    new HtmlPlugin(common.html)
  ],

  module: {
    rules: [
      common.loaders.jsLoader,
      common.loaders.stylusLoader,
      common.loaders.fileLoader,
      common.loaders.urlLoader
    ]
  },

  resolve: { alias: common.alias }
}
