### babel 转译
将JSX转换成js函数，ES代码转换为向后兼容的js语法使其能在浏览器上工作
新语法转换、缺失特性修补

### 1、babel-preset-latest
js代码转换规则
在.babelrc中配置， 默认转码所有年份的js
```
{
  'presets': ['latest']
}
```
传参数，es2015不转换
```
{
  "presets": [
    ["latest",{
      "es2015":false
    }]
  ]
}
```

### 2、babel-preset-react

#### 5）babel
@babel/core：核心模块
@babel/preset-react：转换JSX，preset 只对我们所使用的并且目标浏览器中缺失的功能进行代码转换和加载 polyfill
@babel/polyfill：这是一个需要在你的源码之前运行的 polyfill，所以不是--dev，模拟新的js功能
preset：插件和预设
```
  yarn add @babel/core @babel/cli @babel/preset-env --dev
  yarn add @babel/polyfill
```