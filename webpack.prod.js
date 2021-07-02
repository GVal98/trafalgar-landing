const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.[contenthash:4].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
})
