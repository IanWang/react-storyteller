const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    'example/demo.bundle.js': './example/app'
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}
