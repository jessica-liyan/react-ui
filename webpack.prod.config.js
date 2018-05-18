const {smart} = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const base = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = smart(base, {
  module: {
    rules: [{
      test: /.*\.(gif|png|jpe?g|svg|webp)$/i,
      use: [{
        loader: 'file-loader'
      }, {
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }, {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: { // 压缩 jpeg 的配置
            progressive: true,
            quality: 65
          },
          optipng: { // 使用 imagemin-optipng 压缩 png，enable: false 为关闭
            enabled: false,
          },
          pngquant: { // 使用 imagemin-pngquant 压缩 png
            quality: '65-90',
            speed: 4
          },
          gifsicle: { // 压缩 gif 的配置
            interlaced: false,
          },
          webp: { // 开启 webp，会把 jpg 和 png 图片压缩为 webp 格式
            quality: 75
          }
        }
      }]
    }]
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: true,
      parallel: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: true,
      minify: {
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
})
