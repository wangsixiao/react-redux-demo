# react-redux-demo
react和redux的demo学习
### 1、项目配置

#### 1）首先生成package文件，使用yarn或者npm
(```)
  yarn init / npm init
(```)

#### 2）安装react和react-dom
运行命令之后会生成yarn.lock文件，去锁定版本
```
  yarn add react react-dom --dev
```

#### 3）手动创建webpack.config.js文件并配置
全局安装
yarn global add packageName
```
  yarn add webpack webpack-cli webpack-dev-server --dev
```

#### 4）安装typescript
awesome-typescript-loader或者ts-loader编译ts，ts-loader是官方推荐的
```
 yarn add typescript awesome-typescript-loader --dev
```
在webpack里设置
```
  {
    test: /\.ts(x?)$/,
    use: [
      {
        loader: 'awesome-typescript-loader',
        options: {}
      }
    ]
  }
```

#### 5）各种模块处理器 使用sass、scss
react需要babel进行转译
```
yarn add babel-loader node-sass sass-loader style-loader css-loader --dev
```

#### 6）@types/react @types/react-dom
使用typescript之后会报错，安装这两个模块
```
yarn add @types/react @types/react-dom --dev
```
