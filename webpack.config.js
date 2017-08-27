const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    demo: './example/app',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'example')
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
