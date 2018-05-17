const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader', 'sass-loader', 'postcss-loader']
      })
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.(png|jpe?g)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: '10000',
          name: '[name].[ext]',
          outputPath: 'img/',
          publicPath: 'img/'
        }
      }]
    }, {
      test: /\.html$/,
      use: 'html-loader'
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
    new HtmlPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new cleanWebpackPlugin(['dist'])
  ]
}