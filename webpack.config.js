const path = require("path")
const webpack = require("webpack")
// 导入在内存中自动生成index页面插件
const  HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // 入口文件
  // entry: './src/redux/index.js',
  entry: './src/components/index.tsx',
  // 打包生成文件
  output: {
    path: __dirname,
    filename: 'reactbundle.js',
    publicPath: '/' // 热更新
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        use:{
             loader:"babel-loader",
             options:{
                presets:["@babel/env","@babel/react"],
                plugins: ['@babel/plugin-proposal-class-properties']
              }
            }
      },
      {
        test: /\.s(a|c)ss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }, 
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {}
          }
        ]
      }
    ]
  },
  resolve: {
    // 文件引用不需要后缀名
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    // @代表src路径
    alias: {
      '@': path.join(__dirname, './src')
    }
  },
  devServer: {
    publicPath: '/', 
    // hot: true,
    // inline: true,
    host: '0.0.0.0',
    port: 8000,
    compress: true,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({ //打包输出HTML
      // 生成文件
      filename: 'index.html',
      // 源文件
      template: path.join(__dirname, './index.html')
    }),
    // new webpack.HotModuleReplacementPlugin() //引用这个插件配合hots实现热更新
  ],
  mode: "development"
}