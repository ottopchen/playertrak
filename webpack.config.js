var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: "./public/javascripts/index.js",
  output: {
    path: path.resolve(__dirname, 'public', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}
