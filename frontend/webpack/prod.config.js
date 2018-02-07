const { join } = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const common = require('./common')

module.exports = {

  entry: join(common.PATH.SRC, 'index.js'),

  output: {
    filename: '[name].[hash].js',
    path: common.PATH.PUBLIC
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
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
