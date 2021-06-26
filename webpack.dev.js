const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(baseConfig, {
  mode: 'development',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.[contenthash:4].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    open: true,
  },
  target: 'web',
})
