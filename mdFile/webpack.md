# devServer
使用webpack-dev-server启动webpack时，配置文件里的devServer才会生效

### 1、hot命令
是否启用模块的热替换功能，默认是代码改变时，自动刷新整个页面，设置hot为true后，将不刷新页面，通过新模板替换老模板
#### 1）配置文件配置
  ```
  devServer: {
     hot:true
  }
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //热加载插件
  ],
  ```
#### 2) 命令行使用（推荐使用）
在package中script命令里添加
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "NODE_ENV=development  webpack-dev-server --config  webpack.develop.config.js --hot",
  },
```