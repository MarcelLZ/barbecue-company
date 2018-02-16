const { join } = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const common = require('./common')

module.exports = {

  entry: join(common.PATH.SRC, 'index.js'),

  output: {
    filename: '[name].[hash].js',
    path: common.PATH.PUBLIC
  },

  plugins: [
    new CleanPlugin([common.PATH.PUBLIC], { root: common.PATH.ROOT }),
    new HtmlPlugin(common.html),
    new ExtractTextPlugin({ filename: '[name]-[hash].css' }),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
  ],

  module: {
    rules: [
      common.loaders.jsLoader,
      common.loaders.cssLoaderVendors,
      common.loaders.stylusLoader,
      common.loaders.fileLoader,
      common.loaders.urlLoader
    ]
  },

  resolve: { alias: common.alias }
}
